pub mod models;
pub mod schema;

extern crate tera;

use std::env;

use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};
use diesel::{
    r2d2::{self, ConnectionManager, Pool},
    ExpressionMethods, QueryDsl, RunQueryDsl, SqliteConnection,
};
use dotenvy::dotenv;
use tera::{Context, Tera};

pub type DbPool = r2d2::Pool<ConnectionManager<SqliteConnection>>;

fn establish_connection() -> ConnectionManager<SqliteConnection> {
    dotenv().ok();

    let database_url = env::var("DATABASE_URL").expect("DATABASE_URL was not found");
    ConnectionManager::<SqliteConnection>::new(database_url)
}

fn slugify(text: &String) -> String {
    text.replace(" ", "-").to_lowercase()
}

#[get("/")]
async fn index(pool: web::Data<DbPool>, template_engine: web::Data<Tera>) -> impl Responder {
    use crate::models::Post;
    use crate::schema::posts::dsl::posts;

    let posts_result = web::block(move || {
        let conn = &mut pool
            .get()
            .expect("Connection was not found. Did you provide the pool to Actix");
        return posts.load::<Post>(conn);
    })
    .await;

    match posts_result {
        Ok(data) => {
            let list = data.map_err(|e| {
                eprintln!("{}", e);
                HttpResponse::InternalServerError().finish()
            });
            // HttpResponse::Ok().body(format!("{:?}", list))

            let posts_result = list.unwrap();

            let mut context = Context::new();
            context.insert("test", "This is a test");
            context.insert("posts", &posts_result);

            HttpResponse::Ok()
                .content_type("text/html")
                .body(template_engine.render("index.html", &context).unwrap())
        }
        Err(err) => {
            eprintln!("{}", err);
            HttpResponse::InternalServerError().finish()
        }
    }
}

#[post("/")]
async fn create(
    pool: web::Data<DbPool>,
    item: web::Json<models::ClientCreatePost>,
) -> impl Responder {
    use crate::models::NewPost;
    use crate::schema::posts;

    println!("{:?}", item);

    let slug = slugify(&item.title.clone());

    let posts_result = web::block(move || {
        let new_post = NewPost {
            title: &item.title,
            slug: &slug,
            body: &item.body,
        };

        let conn = &mut pool
            .get()
            .expect("Connection was not found. Did you provide the pool to Actix");
        return diesel::insert_into(posts::table)
            .values(&new_post)
            .execute(conn);
    })
    .await;

    match posts_result {
        Ok(data) => {
            let id = data.map_err(|e| {
                eprintln!("{}", e);
                HttpResponse::InternalServerError().finish()
            });
            HttpResponse::Ok().body(format!("{:?}", id))
        }
        Err(err) => {
            eprintln!("{}", err);
            HttpResponse::InternalServerError().finish()
        }
    }
}

#[get("/blog/{slug}")]
async fn blog(
    pool: web::Data<DbPool>,
    template_engine: web::Data<Tera>,
    slug: web::Path<String>,
) -> impl Responder {
    use crate::models::Post;
    use crate::schema::posts::dsl::{self, posts};

    let posts_result = web::block(move || {
        let conn = &mut pool
            .get()
            .expect("Connection was not found. Did you provide the pool to Actix");
        let slug = slug.into_inner();
        return posts.filter(dsl::slug.eq(&slug)).load::<Post>(conn);
    })
    .await;

    match posts_result {
        Ok(data) => {
            let list = data.map_err(|e| {
                eprintln!("{}", e);
                HttpResponse::InternalServerError().finish()
            });
            // HttpResponse::Ok().body(format!("{:?}", list))

            let posts_result = list.unwrap();
            if posts_result.len() == 0 {
                return HttpResponse::NotFound().finish();
            }

            let mut context = Context::new();
            context.insert("post", &posts_result[0]);

            HttpResponse::Ok()
                .content_type("text/html")
                .body(template_engine.render("post.html", &context).unwrap())
        }
        Err(err) => {
            eprintln!("{}", err);
            HttpResponse::InternalServerError().finish()
        }
    }
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let connection_manager = establish_connection();
    let pool = Pool::builder()
        .build(connection_manager)
        .expect("Failed when creating the pool");

    HttpServer::new(move || {
        let tera = Tera::new(concat!(env!("CARGO_MANIFEST_DIR"), "/templates/**/*")).unwrap();

        App::new()
            .app_data(web::Data::new(pool.clone()))
            .app_data(web::Data::new(tera))
            .service(index)
            .service(create)
            .service(blog)
    })
    .bind(("0.0.0.0", 9900))
    .unwrap()
    .run()
    .await
}
