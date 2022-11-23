use std::fs;

use csv::{ReaderBuilder, StringRecord};

const FILENAME: &str = "history.csv";

#[derive(Debug)]
struct HistoryLine {
    data_type: String,
    tag: String,
    text: String,
    life: i32,
}

impl HistoryLine {
    fn new(row: &StringRecord) -> HistoryLine {
        return HistoryLine {
            data_type: row.get(0).unwrap().to_string(),
            tag: row.get(1).unwrap().to_string(),
            text: row.get(2).unwrap().to_string(),
            life: row.get(3).unwrap().trim().parse().unwrap_or(0),
        };
    }
}

fn main() {
    let mut history: Vec<HistoryLine> = vec![];
    let content = fs::read_to_string(FILENAME).unwrap();

    let mut rdr = ReaderBuilder::new()
        .delimiter(b';')
        .from_reader(content.as_bytes());

    for result in rdr.records() {
        let line = result.unwrap();
        let history_line = HistoryLine::new(&line);

        history.push(history_line);

        println!("{:?}", line);
    }
}
