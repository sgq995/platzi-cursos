fn main() {
    println!("Introduce yourself: ");
    let mut name: String = String::new();
    std::io::stdin().read_line(&mut name).unwrap();
    name = name.trim().to_string();

    println!("How old are you? ");
    let mut age_str: String = String::new();
    std::io::stdin().read_line(&mut age_str).unwrap();
    let age: i8 = age_str.trim().parse().unwrap();

    println!("Where are you from? ");
    let mut country: String = String::new();
    std::io::stdin().read_line(&mut country).unwrap();
    country = country.trim().to_string();

    println!("Welcome {} from {}, your age is {}", name, country, age);
}
