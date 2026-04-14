# Rotten Oranges

Leetcode problem 994

You are given a grid where:

- 0 means empty cell
- 1 means fresh orange
- 2 means rotten orange

Every minute, fresh oranges that are 4 directionally adjacent to rotten ones become rotten.

Return the minimum time required so that no fresh orange remains.  
If it is not possible, return -1.

---

## Problem

Simulate how rot spreads in the grid and find how many minutes it takes until all oranges become rotten.

---

## Approach

This is a multi source BFS problem.

- First loop through the grid:
  - Add all rotten oranges (2) into a queue with time 0
  - Count total fresh oranges

- Start BFS:
  - Take each rotten orange from queue
  - Spread rot in 4 directions:
    - up (i-1, j)
    - down (i+1, j)
    - left (i, j-1)
    - right (i, j+1)

- For each direction:
  - If neighbor is fresh (1):
    - Make it rotten (2)
    - Push into queue with time + 1
    - Reduce fresh count

- Keep track of maximum time

- After BFS ends:
  - If fresh oranges are still left, return -1
  - Otherwise return maxMinutes

---

Video Explanation : [Link](https://youtu.be/z7GZ6sBEyP4?si=UE_0dVe_N8Hmv5DA)

---

## Why This Works

BFS works level by level, which matches minute by minute spreading.

All rotten oranges start spreading at the same time, so we get the minimum time required.

---

## What I Learned

- Multi source BFS is useful when there are multiple starting points
- Grid problems can be solved using graph traversal
- Keeping time inside queue helps simulate real scenarios
- Always track fresh oranges to detect impossible cases

---

## Complexity

- Time Complexity: O(m x n)
- Space Complexity: O(m x n)

---

## Code Link

[Code-Link](./solution.js)

---

By vikas singh
