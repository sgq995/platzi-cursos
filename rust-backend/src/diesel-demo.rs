pub mod models;
pub mod schema;

use std::env;

use diesel::{Connection, ExpressionMethods, QueryDsl, RunQueryDsl, SqliteConnection};
use dotenvy::dotenv;

use crate::{models::NewPost, models::Post, schema::posts};

fn establish_connection() -> SqliteConnection {
    dotenv().ok();

    let database_url = env::var("DATABASE_URL").expect("DATABASE_URL was not found");
    SqliteConnection::establish(&database_url)
        .unwrap_or_else(|_| panic!("Error connecting to {}", database_url))
}

fn create_post(conn: &mut SqliteConnection, title: &str, body: &str, slug: &str) -> usize {
    let new_post = NewPost { title, body, slug };

    diesel::insert_into(posts::table)
        .values(&new_post)
        .execute(conn)
        .expect("Failed to insert")
}

fn update_post(conn: &mut SqliteConnection, id: i32) -> usize {
    diesel::update(posts::dsl::posts.filter(posts::dsl::id.eq(id)))
        .set(posts::dsl::slug.eq("second-post"))
        .execute(conn)
        .expect("Couldn't update post")
}

fn delete_post(conn: &mut SqliteConnection, slug: &str) -> usize {
    diesel::delete(posts::dsl::posts.filter(posts::dsl::slug.eq(slug)))
        .execute(conn)
        .expect("Couldn't delete post")
}

fn main() {
    let conn = &mut establish_connection();

    // create_post(conn, "My second post", "Lorem ipsum", "first-post");

    // update_post(conn, 2);

    let posts_result = posts::dsl::posts
        .order(posts::dsl::id.desc())
        .load::<Post>(conn)
        .expect("Something goes wrong");

    for post in posts_result {
        println!("{:?}", post);
    }
}
