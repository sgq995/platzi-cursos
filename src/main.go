package main

import "fmt"

func main() {
	// For
	for i := 0; i <= 10; i++ {
		fmt.Println(i)
	}

	fmt.Println()

	// For while
	counter := 0
	for counter < 10 {
		fmt.Println(counter)
		counter++
	}

	fmt.Println()

	// For forever
	counterForever := 0
	for {
		fmt.Println(counterForever)
		counterForever++
	}
}
