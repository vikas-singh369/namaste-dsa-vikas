# Problem statement
Write a function secondLargest(arr) that returns the second largest distinct number in an array.

Example:
- Input: arr = [1, 2, 3, 4, 5]
- Output: 4
- Input: arr = [1, 1, 2, 3, 4, 5]
- Output: 4

## Requirements
at least 2 distinct numbers
if all elements equal return "No second largest number"


## Approach
1. check array length if < 2 then return with message
2. inilize two variable with -Infinity `firstLargest` and `secondLargest` 
3. ignoring the duplicate just check its not equal to the firstlargest.

``` 
firstLarget = -Infinity
secondLargest = -Infinity

for(i =0; i< arr.length; i++){
  if(arr[i] > firstLargest){
    <!-- first i change the secondLargest value and change the firstLargest -->

    secondLargest = firstLargest
    
    firstLargest = arr[i]
  }else if( arr[i] > secondLargets && arr[i] !=firstLargest){
    secondLargest = arr[i]
  }

4. checke the if all the value of array then i return the message, 

if all values same then secondLargest value still the same when i initilize before returning i check it

retrun secondLargest === -Infinity ? " No second largest found " : secondLargest;

}
```

[Code](./solution.js)

**Different scenario** :- [Code second Largest](./second-largest-lenght.js)

### if Second Largest Digit in a String
**Approach** : 
check the string contain digit if yes then push them to the array and follow the second largest

[Code](./second-largest-in-str.js)

## Complexity Analysis
- **Time Complexity:** O(n) 
- **Space Complexity:** O(1) 

**By vikas singh**