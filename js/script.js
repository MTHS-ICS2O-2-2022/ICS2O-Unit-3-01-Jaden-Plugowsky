// Copyright (c) 2023 Jaden Plugowsky All rights reserved
//
// Created by: Jaden Plugowsky
// Created on: March 2023
// This file contains the JS functions for index.html

"use strict"

function calculateClicked() {
  //Input through Textfields
  const baseA = parseInt(document.getElementById("base-a").value)
  const baseB = parseInt(document.getElementById("base-b").value)
  const height = parseInt(document.getElementById("height").value)

  //Process
  const areaTrapezoid = ((baseA + baseB) / 2) * height

  // Output
  document.getElementById("answer").innerHTML = "Area of the Trapezoid is: " + areaTrapezoid
}
