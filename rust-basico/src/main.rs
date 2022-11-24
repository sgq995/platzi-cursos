use std::{collections::HashMap, fs};

use csv::{ReaderBuilder, StringRecord};

const FILENAME: &str = "history.csv";
const FIRST_TAG: &str = " INICIO";

#[derive(Debug)]
struct HistoryLine {
    data_type: String,
    tag: String,
    text: String,
    life: i32,
    options: Vec<HistoryLine>,
}

impl HistoryLine {
    fn new(row: &StringRecord) -> HistoryLine {
        return HistoryLine {
            data_type: row.get(0).unwrap().to_string(),
            tag: row.get(1).unwrap().to_string(),
            text: row.get(2).unwrap().to_string(),
            life: row.get(3).unwrap().trim().parse().unwrap_or(0),
            options: vec![],
        };
    }
}

fn main() {
    let mut history: HashMap<String, HistoryLine> = HashMap::new();

    let content = fs::read_to_string(FILENAME).unwrap();
    let mut rdr = ReaderBuilder::new()
        .delimiter(b';')
        .from_reader(content.as_bytes());

    let mut last_record: String = String::from("");
    for result in rdr.records() {
        let line = result.unwrap();
        let history_line = HistoryLine::new(&line);

        if history_line.data_type == "SITUACION" {
            let record_tag = history_line.tag.clone();
            history.insert(record_tag.clone(), history_line);
            last_record = record_tag;
        } else if history_line.data_type == "OPCION" {
            if let Some(last_history_line) = history.get_mut(&last_record) {
                (*last_history_line).options.push(history_line);
            }
        }

        // println!("{:?}", line);
    }
    // println!("{:?}", history);

    let mut life = 100;
    let mut current_tag = FIRST_TAG;
    loop {
        if let Some(history_line) = history.get(current_tag) {
            life += history_line.life;
            life = life.clamp(0, std::i32::MAX);

            println!("HP: {}", life);
            println!("{}", history_line.text);

            if history_line.options.len() == 0 {
                println!();
                break;
            }

            for (index, option) in history_line.options.iter().enumerate() {
                println!("[{}] {}", index, option.text);
            }

            let mut selection = String::new();
            std::io::stdin().read_line(&mut selection).unwrap();
            let selection = selection.trim().parse().unwrap_or(99);

            if let Some(selected) = &history_line.options.get(selection) {
                current_tag = &selected.tag;
            } else if life > 0 {
                println!("Invalid input!!!");
            }
            
            println!();
        } else {
            break;
        }

        if life <= 0 {
            break;
        }
    }
    println!("HP: {}", life);
    println!("Game Over");
}
