package main

import (
	"fmt"
	"strings"
)

func definitions() {
	// Array
	var array [4]int
	array[0] = 1
	array[1] = 2

	fmt.Println(array, len(array), cap(array))

	// Slice
	slice := []int{0, 1, 2, 3, 4, 5, 6}

	fmt.Println(slice, len(slice), cap(slice))

	// Slicing
	fmt.Println(slice[0])
	fmt.Println(slice[:3])
	fmt.Println(slice[2:4])
	fmt.Println(slice[4:])

	// Append
	slice = append(slice, 7)
	fmt.Println(slice)

	// Append List
	newSlice := []int{8, 9, 10}
	slice = append(slice, newSlice...)
}

func isPalindromo(text string) bool {
	lowerText := strings.ToLower(text)
	var textReverse string

	for i := len(text) - 1; i >= 0; i-- {
		textReverse += string(lowerText[i])
	}

	if text == textReverse {
		return true
	} else {
		return false
	}
}

func main() {
	definitions()

	slice := []string{"hola", "que", "hace"}
	for i, str := range slice {
		fmt.Println(i, str)
	}
}
