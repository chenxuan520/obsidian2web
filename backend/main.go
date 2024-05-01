package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.Use(gin.Recovery())
	r.Static("/", "./book")
	r.Run(":5203")
}
