package main

import (
	"fmt"
	mypkg "mypackage/mypackage"
)

func main() {
	var myCar mypkg.CarPublic
	myCar.Brand = "Ferrari"
	myCar.Year = 2017

	fmt.Println(myCar)
}
