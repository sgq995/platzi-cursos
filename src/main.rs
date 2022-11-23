fn main() {
    println!("Arrays");

    let mut names = Vec::new();

    for _i in 0..3 {
        println!("Type a name:");
        let mut name = String::new();
        std::io::stdin().read_line(&mut name).unwrap();
        names.push(name.trim().to_string());
    }

    println!("{:?}", names);
}
