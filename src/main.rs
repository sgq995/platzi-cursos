use regex::Regex;

fn main() {
    println!("Calculator");

    // Regex
    let re_add = Regex::new(r"(\d+)\s?\+\s?(\d+)").unwrap();
    let re_mult= Regex::new(r"(\d+)\s?\*\s?(\d+)").unwrap();

    // User
    println!("Introduce your expression: ");
    let mut expression = String::new();
    std::io::stdin().read_line(&mut expression).unwrap();

    // Mult
    loop {
        let caps = re_mult.captures(expression.as_str()); if caps.is_none() {
            break;
        }
        let caps = caps.unwrap();

        let caps_expression = caps.get(0).unwrap().as_str();

        let left_value: i32 = caps.get(1).unwrap().as_str().parse().unwrap();
        let right_value: i32 = caps.get(2).unwrap().as_str().parse().unwrap();

        println!("{:?}, left: {}, right: {}", caps, left_value, right_value);

        let result = left_value * right_value;

        expression = expression.replace(caps_expression, &result.to_string());
    }

    // Sum
    loop {
        let caps = re_add.captures(expression.as_str());
        if caps.is_none() {
            break;
        }
        let caps = caps.unwrap();

        let caps_expression = caps.get(0).unwrap().as_str();

        let left_value: i32 = caps.get(1).unwrap().as_str().parse().unwrap();
        let right_value: i32 = caps.get(2).unwrap().as_str().parse().unwrap();

        println!("{:?}, left: {}, right: {}", caps, left_value, right_value);

        let result = left_value + right_value;

        expression = expression.replace(caps_expression, &result.to_string());
    }

    // Result
    println!("Result: {}", expression);
}
