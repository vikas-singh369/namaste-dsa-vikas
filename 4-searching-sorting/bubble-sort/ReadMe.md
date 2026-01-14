# Bubble Sort

## Approach ( sorting technique ) : 
iterate the array multiple times
1. in every pass, compare each pair of adjacent elements in the array.

2. If the current element is greater than the next one, swap them.

3. after each pass the largest unsorted element moves to its correct position at the end of array.

Repeat this process n -1 passes until no swapes are needed.

```
for( i = 0; i< n-1; i++){
  for( j =0 ; j< n-1-i; j++){
    if( arr[j] > arr[j+1]){
      swap( arr[j], arr[j+1]);
    }
  }
}
```

### optimized the solution
 
using `isSwapped` flag initial value is false if swap happed then make it `true`. 
in every pass this process happened if swpped not happened its means array value is sorted then break the loop.

**[Code](./solution.js)**



### Time and Space complexity 
**Time-complexity:** O(n^2)
**space-complexity:** O(1);

**By vikas singh**
