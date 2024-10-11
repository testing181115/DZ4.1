
var testArray = ["Wonderful", "Joyful", "Happiness", "Time", "Task", "Apple"];

const pattern = /[^a][b-zB-Z]{6,}/;
var s1 = "Wonderful";

for(var word of testArray) {
    console.log(word + ": " + pattern.test(word));
}
