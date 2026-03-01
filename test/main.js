//2025-12-09 lesson
//writing the function in this file ('main.js') and we are going to call the function from external files 'external.js' and  'external2.js'

//page object framework - 

import { add, multi } from "./external.js";
import { devide } from "./external2.js";

console.log("Add 4,5 = ", add(4,5));
console.log("Multiply 3 * 4 = ", multi(3,4));

console.log("Devide 2/3 = ", devide(2,3));