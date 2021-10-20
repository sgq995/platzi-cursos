package main

import "fmt"

func main() {
	valor1 := 1

	if valor1 == 1 {
		fmt.Println("Es 1")
	} else {
		fmt.Println("No es 1")
	}

	switch valor1 {
	case 1:
		fmt.Println("1")
		break

	case 2:
		fmt.Println("2")
		break

	default:
		fmt.Println("No es 1 ni 2")
		break
	}

	val2 := 200
	switch {
	case val2 > 100:
		fmt.Println("Es mayor a 100")
	case val2 < 0:
		fmt.Println("Es menor a 0")
	default:
		fmt.Println("No coincide")
	}
}
