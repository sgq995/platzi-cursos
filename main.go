package main

import "fmt"

func private() {
	fmt.Println("This function is private to this package")
}

func Public() {
	fmt.Println("This function is public and exports to another package")
}

func printHelloWorld() {
	defer fmt.Println(" world!")
	fmt.Print("Hello")
}

func main() {
	var message string = "Hello world"
	walrusOp := "Hello walrus"

	fmt.Println(message)
	fmt.Println(walrusOp)

	// Single comment line

	a := 10.
	var b float64 = 3
	fmt.Println(a / b)

	var c int = 10
	d := 3
	fmt.Println(c / d)

	x := true
	y := false
	fmt.Println(x || y, x && y, !x)

	private()
	Public()

	printHelloWorld()
}
