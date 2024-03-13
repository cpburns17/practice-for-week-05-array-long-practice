const findMinimum = arr => {

if(arr.length === 0) return undefined;

return Math.min(...arr)

};

const runningSum = arr => {
  let runSum = []
  let sum = 0

  for(let i=0; i<arr.length; i++) {
    sum += arr[i]
    runSum.push(sum)

  } return runSum
  
};

const evenNumOfChars = arr => {
  let count = 0;
  for(let i=0; i<arr.length; i++) {
    if(arr[i].length % 2 === 0) {
      count++
    }
  } return count
};

const smallerThanCurr = arr => {
  let count = [];
  let smallerThanCurrCount;
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    smallerThanCurrCount = 0;
    for (let j = 0; j < arr.length; j++) {
      if (curr > arr[j]) {
        smallerThanCurrCount++;
      }
    }
    count.push(smallerThanCurrCount);
  }
  return count;

};

const twoSum = (arr, target) => {

  for(let i=0; i<arr.length; i++) {

    for(let j=i+1; j<arr.length; j++){

      if(arr[i] + arr[j] === target) {
        return true
      }
    }
  } return false

};

const secondLargest = arr => {

  let sortedArr = arr.sort()
  let second = sortedArr.length -2
  return sortedArr[second]
  
};

const shuffle = (arr) => {

  return 
  
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];