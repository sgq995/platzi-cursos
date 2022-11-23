fn main() {
    println!("Functions");

    println!("10 + 1 = {}", add_one(10));
}

fn add_one(num: i32) -> i32 {
    let result = num + 1;
    return result;
}
