/*
Take 5
Given a array of integers nums, subtract 5 from every number in the array and return the array.

For example, given the array [8, 3, 10, 15, 9], return [3, -2, 5, 10, 4].

Example 1
Input

nums = [8, 3, 10, 15, 9]
Output

[3, -2, 5, 10, 4]
*/

function take5(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
      newArr.push(arr[i] - 5);
    }
    return newArr;
  }