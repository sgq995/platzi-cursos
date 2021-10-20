package main

import "fmt"

type pc struct {
	ram   int
	disk  int
	brand string
}

func (myPc pc) ping() {
	println(myPc.brand, "Pong")
}

func (myPc *pc) duplicateRAM() {
	myPc.ram = 2 * myPc.ram
}

func (myPc pc) String() string {
	return fmt.Sprintf("%d GB RAM, %d GB Disk (%s)", myPc.ram, myPc.disk, myPc.brand)
}

func main() {
	a := 50
	b := &a

	fmt.Println(a, b)

	myPc := pc{ram: 16, disk: 200, brand: "msi"}
	fmt.Println(myPc)

	myPc.ping()
	fmt.Println(myPc)

	myPc.duplicateRAM()
	fmt.Println(myPc)
}
