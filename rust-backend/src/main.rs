use std::env;

use actix_web::{get, App, HttpResponse, HttpServer, Responder};
use diesel::{
    r2d2::{ConnectionManager, Pool},
    SqliteConnection,
};
use dotenvy::dotenv;

fn establish_connection() -> ConnectionManager<SqliteConnection> {
    dotenv().ok();

    let database_url = env::var("DATABASE_URL").expect("DATABASE_URL was not found");
    ConnectionManager::<SqliteConnection>::new(database_url)
}

#[get("/hello")]
async fn hello_world() -> impl Responder {
    HttpResponse::Ok().body("Hello world")
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let connection_manager = establish_connection();
    let pool = Pool::builder()
        .build(connection_manager)
        .expect("Failed when creating the pool");

    HttpServer::new(move || App::new().app_data(pool.clone()).service(hello_world))
        .bind(("0.0.0.0", 9900))
        .unwrap()
        .run()
        .await
}
