/*
 * This is Age and day
 *
 * @author  Abdul Basit Butt
 * @version 1.0
 * @since   2022-02-19
 */

import promptSync from "prompt-sync"
const prompt = promptSync()

var ageString = prompt("Enter your age: ")
var age = parseInt(ageString)

var dayInt = prompt("Enter the Day: ")
var day = prompt(dayInt)

if ((age > 5 && age < 80) || ((day == 'Tuesday') || day == 'Thursday')) {
console.log("You are eligble")
} else {
  console.log("-_- Bruh! ")
}
