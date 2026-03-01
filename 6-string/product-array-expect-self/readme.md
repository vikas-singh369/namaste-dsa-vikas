# Product of Array Except Self

{ Leetcode - 238.}

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

## Approach 1 — Brute Force

In the first approach, I used a brute force method.

I ran a nested loop.
For each index, I skipped the current element and multiplied all other elements.
Then I stored the result at the same position.

However, this approach has O(n²) time complexity.

Since the problem explicitly requires an O(n) solution, this approach does not meet the requirement.

**[Code](./first.js)**

## Approach 2 — Using Left and Right Arrays

In this approach, I created two arrays:

leftArray

rightArray

Both have the same length as the original array and are initialized with 1.

In the first loop, I calculated the left-side product for each index and stored it in leftArray.

In the second loop, I calculated the right-side product for each index and stored it in rightArray.

In the third loop, I multiplied values from leftArray and rightArray and stored the result in a result array.

Complexity

### Time and space complexity

Time Complexity: O(n)
Space Complexity: O(n)

**[Code](./second.js)**

## Approach 3 — Optimized (No Extra Arrays)

In this approach, I used a single result array and optimized the space usage.

First, I created a result array with the same length as the input and initialized it with 1.

Step 1: Store Left Products

```
result[i] = temp;
temp = temp * nums[i]
```

Step 2: Multiply Right Products Directly

Starting from the end of the array:

then in the second that stat at the end of array , i caluculate right side value and also calculate the final result value in the same time and store in the result.

```
result[i] = result[i] * temp;
temp = temp * nums[i];
```

In this loop, I calculated the right-side product and multiplied it directly with the stored left-side product.

This eliminates the need for an extra array.

### Time and space complexity

**Time Complexity: ** O(n)
**Space Complexity:** O(1) extra space.

**[Code](./third.js)**

**by vikas singh**
