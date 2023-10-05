function hasTargetSum(array, target) {
  // A set to store numbers as we iterate through them
  const numSet= new Set();
  for(const num of array){
    //Calculate the compliment for the current number
    const compliment= target-num;
    //If the complement is in the set,we found a pair that adds up to the target
    if(numSet.has(compliment)){
      return true;
    }
    numSet.add(num);
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  1)The function takes each number in an array and adds them to each other in a pair
  2) if result is equal to target it returns true else it returns false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
