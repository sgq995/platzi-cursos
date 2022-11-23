use std::fs;

use csv::{ReaderBuilder, StringRecord};

const FILENAME: &str = "history.csv";

fn main() {
    let content = fs::read_to_string(FILENAME).unwrap();

    let mut rdr = ReaderBuilder::new()
        .delimiter(b';')
        .from_reader(content.as_bytes());

    for result in rdr.records() {
        println!("{:?}", result.unwrap().get(2).unwrap().trim());
    }
}
