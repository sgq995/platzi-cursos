package main

import "fmt"

func main() {
	fmt.Println("Hello world!")

	// Constant
	const PI float64 = 3.1415

	fmt.Println("Hello world!")

	// Declaration
	base := 12
	var height int = 14
	var area int

	fmt.Println(base, height, area)

	// Zero values
	var a int
	var b float64
	var c string
	var d bool

	fmt.Println(a, b, c, d)

	// Area
	const baseSquare = 10
	const areaSquare = baseSquare * baseSquare

	fmt.Println("Area:", areaSquare)
}
