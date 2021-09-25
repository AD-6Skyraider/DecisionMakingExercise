// 1a
let randomNum = Math.floor(Math.random() * 6 + 1);
console.log(randomNum);

// 1b.
if (randomNum >= 4) {
    console.log("Greater than or equal to 4");
} else if (randomNum === 2 || randomNum === 3) {
    console.log("Equal to 2 or 3");
} else {
    console.log("Equal to 1");
}

// 1c.
if (randomNum != 3)
console.log("Not Equal to three");

// 1d.
if (Math.random() >= 1 || <=4 {
console.log(random = != 3 && != 5);
}

// 1e
if (randomNum === 2 || randomNum === 4) {
    console.log("Equal to 2 OR equal to 4");
}

//Bonus 1
console.log(randomNum >= 4 ? "Greater than or equal to 4" : "Less than 4");

//Bonus 2
switch (randomNum) {
    case 1: console.log("One");
    break;
    case 2: console.log("Two");
    break;
    case 3: console.log("Three");
    break;
    case 4: console.log("Four");
    break;
    case 5: console.log("Five");
    break;
  }