package main

import "fmt"

func constants() {
	// Constant
	const PI float64 = 3.1415

	fmt.Println("Hello world!")
}

func declarations() {
	// Declaration
	base := 12
	var height int = 14
	var area int

	fmt.Println(base, height, area)
}

func zerovalues() {
	// Zero values
	var a int
	var b float64
	var c string
	var d bool

	fmt.Println(a, b, c, d)
}

func areaSqr(base int) {
	// Area
	area := base * base

	fmt.Println("Area:", area)
}

func sum(x int, y int) {
	// Sum
	result := x + y
	fmt.Println("Sum:", result)
}

func doubleReturn(a int) (int, int) {
	return a, 2 * a
}

func main() {
	fmt.Println("Hello world!")

	constants()

	declarations()

	zerovalues()

	const baseSquare = 10
	areaSqr(baseSquare)

	sum(10, 50)

	val1, val2 := doubleReturn(2)
	fmt.Println("val1:", val1, ",", "val2:", val2)
}
