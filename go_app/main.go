// Created by: Jaden Plugowsky
// Created on: April 2023
//
// This program finds the area of a trapezoid

package main

import "fmt"

func main() {
	// This function finds the area of a trapezoid
	var baseOne float64
	var baseTwo float64
	var height float64
	var area float64

	// Input
	fmt.Println("\nThis program finds the area of a trapezoid using given values.")
	fmt.Println()
	fmt.Print("Enter Base 1's value (cm): ")
	fmt.Scanln(&baseOne)
	fmt.Print("Enter Base 2's value (cm): ")
	fmt.Scanln(&baseTwo)
	fmt.Print("Enter the Height's value (cm): ")
	fmt.Scanln(&height)

	// Process
	area = ((baseOne + baseTwo) / 2) * height

	// Output
	fmt.Println()
	fmt.Println("The area of the trapezoid is:", area, "cm².")

	fmt.Println("\nDone.")
}