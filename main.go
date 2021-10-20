package main

import "fmt"

type Shape2D interface {
	Area() float64
}

type Square struct {
	base float64
}

type Rect struct {
	width  float64
	height float64
}

func (sqr Square) Area() float64 {
	return sqr.base * sqr.base
}

func (rect Rect) Area() float64 {
	return rect.width * rect.height
}

func Calc(shape Shape2D) {
	fmt.Println("Area:", shape.Area())
}

func main() {
	mySqr := Square{base: 2}
	myRect := Rect{width: 2, height: 4}

	Calc(mySqr)
	Calc(myRect)

	// Interface List
	myInterfaceList := []interface{}{"Hola", 12, 3.14}
	fmt.Println(myInterfaceList...)
}
