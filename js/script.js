// Copyright (c) 2023 Jaden Plugowsky All rights reserved
//
// Created by: Jaden Plugowsky
// Created on: April 2023
// This file contains the JS functions for index.html

"use strict"

function calculatePressed() {
  //This function calculates the area of a trapezoid
  //Input through Text Fields
  const baseOne = parseFloat(document.getElementById("base-one").value)
  const baseTwo = parseFloat(document.getElementById("base-two").value)
  const height = parseFloat(document.getElementById("height").value)

  //Process
  const area = ((baseOne + baseTwo) / 2) * height

  //Output
  document.getElementById("answer").innerHTML =
    "The area of your Trapezoid is: " + area + "cm²"
}
