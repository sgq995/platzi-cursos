pub mod models;
pub mod schema;

use std::env;

use diesel::{Connection, RunQueryDsl, SqliteConnection};
use dotenvy::dotenv;

use crate::{models::Post, schema::posts};

fn main() {
    dotenv().ok();
    let database_url = env::var("DATABASE_URL").expect("DATABASE_URL was not found");

    let mut conn = SqliteConnection::establish(&database_url).expect("Couldn't connect to sqlite");

    let posts_result = posts::dsl::posts
        .load::<Post>(&mut conn)
        .expect("Something goes wrong");

    for post in posts_result {
        println!("{}", post.title);
    }
}
