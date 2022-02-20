var input = process.argv.slice(2);

//change string array to number array
var numArray = input.map(Number);

// exclude non-number and negative number
numArray = numArray.filter(val => val > 0);

//sort number array
var sortedArray = new Float64Array(numArray);
sortedArray = sortedArray.sort();

//set start time
let time = sortedArray[0] * 1000;

for (let i = 1; i <= sortedArray.length; i++){
  setTimeout(() => {
    process.stdout.write('\x07');
  }, time);
  time += (sortedArray[i] - sortedArray[i-1]) * 1000;
}


