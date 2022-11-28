pub mod models;
pub mod schema;

use std::env;

use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};
use diesel::{
    r2d2::{self, ConnectionManager, Pool},
    RunQueryDsl, SqliteConnection,
};
use dotenvy::dotenv;

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
async fn index(pool: web::Data<DbPool>) -> impl Responder {
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
            HttpResponse::Ok().body(format!("{:?}", list))
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

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let connection_manager = establish_connection();
    let pool = Pool::builder()
        .build(connection_manager)
        .expect("Failed when creating the pool");

    HttpServer::new(move || {
        App::new()
            .app_data(web::Data::new(pool.clone()))
            .service(index)
            .service(create)
    })
    .bind(("0.0.0.0", 9900))
    .unwrap()
    .run()
    .await
}
