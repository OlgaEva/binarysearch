/* Instructions

Merging K Sorted Lists
Given lists of sorted list of integers, merge them into one large sorted list.

Can you do it better than O(kn log kn) where n is the length of the longest list, and k is the number of lists?

Example 1
Input

lists = [[],
[],
[10, 12],
[],
[3, 3, 13],
[3],
[10],
[0, 7]]
Output

[0, 3, 3, 3, 7, 10, 10, 12, 13]

*/ 


function myFunc(arr) {

    var empty = [];

    function mergeLists(arr) {
      for(let list of lists){
        if(list.length > 0){
          empty.push(...list)
        }
      }
    
    const array = empty;
    return array;
    }

    mergeLists(lists)

    function mergeSort(array,half = array.length/2){

      if(array.length < 2){
        return array
      }

      const left = array.splice(0,half); //left part of array

      return merger(mergeSort(left),mergeSort(array))
    }

    function merger(left,right){

    const arr = [];

      while(left.length && right.length){
        if(left[0] < right [0]){
          arr.push(left.shift())
        }else{
          arr.push(right.shift())
        }
      }

    return [...arr,...left,...right];
    }
return mergeSort(empty);
}