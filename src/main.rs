fn main() {
    println!("Let's play 21");

    let mut sum: i8 = 0;

    loop {
        println!("Which card do you have? ");
        let mut card: String = String::new();
        std::io::stdin().read_line(&mut card).unwrap();

        let number: i8 = card.trim().parse().unwrap();
        sum += number;

        if sum >= 21 {
            break;
        }
    }

    println!("Your result: {}", sum);
}
