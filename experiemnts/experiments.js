let character = "b";
let timesToRepeat = 50;

let forAnswer = "";
for (let i = 0; i < timesToRepeat; i++ ) {
  forAnswer += character
}

console.log(forAnswer)

let whileAnswer = "";
let j = 0;
while (j < timesToRepeat) {
	whileAnswer+=character;
	j+=1;
}

console.log(whileAnswer);