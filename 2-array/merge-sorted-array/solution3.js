/**
 * *Approach 3: Space Optimized filled the array in reverse order so no extra space used
 */

var merge = function (nums1, m, nums2, n) {
  // pointers
  let p1 = m - 1;
  let p2 = n - 1;

  for (let i = nums1.length - 1; i >= 0; i--) {
    if (p2 < 0) {
      break;
    }

    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }
};
