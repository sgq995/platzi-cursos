package main

import (
	"net/http"

	"github.com/labstack/echo"
)

func main() {
	// Instancing
	echo_server := echo.New()

	echo_server.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello World!")
	})
	echo_server.Logger.Fatal(echo_server.Start(":1323"))
}
