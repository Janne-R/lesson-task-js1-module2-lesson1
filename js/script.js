// question 1
function receivingFunction(someFunction) {

  if (typeof someFunction === "function") {
    someFunction();
  }
  else {
    console.log("The argument is not a function");
  }
}

const callbackFunction = function () {
  console.log("I am a callback function.");
}

receivingFunction(callbackFunction);
receivingFunction(12);

// question 2
const prizes = ["Bag of bananas", "Box of frogs", "Car of clowns"];

//for loop
const prizes = ["Bag of bananas", "Box of frogs", "Car of clowns"];

for (let i = 0; i < prizes.length; i++) {
  console.log(`Prize ${i + 1}: ${prizes[i]}`);
}

//converted to forEach
prizes.forEach(function (prize, index) {
  console.log(`Prize ${index + 1}: ${prize}`);
});
