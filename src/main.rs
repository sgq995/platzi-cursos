fn main() {
    println!("How old are you? ");
    let mut age_str: String = String::new();
    std::io::stdin().read_line(&mut age_str).unwrap();
    let age: i8 = age_str.trim().parse().unwrap();

    if age < 18 {
        println!("You should wait at least {} years", 18 - age);
    } else {
        println!("You can enter");
    }
}
