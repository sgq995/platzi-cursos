package main

import (
	"fmt"
	"sync"
)

func say(text string, wg *sync.WaitGroup) {
	defer wg.Done()
	fmt.Println(text)
}

func main() {
	var wg sync.WaitGroup

	wg.Add(1)
	go say("Hello", &wg)

	wg.Add(1)
	go say("World", &wg)

	wg.Wait()

	wg.Add(1)
	go func(wg *sync.WaitGroup) {
		defer wg.Done()
		fmt.Println("Bye~~")
	}(&wg)
	wg.Wait()

	// time.Sleep(1 * time.Second)
}
