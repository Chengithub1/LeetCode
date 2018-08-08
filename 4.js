/*
 * 两个排序数组的中位数
 * 可以假设 nums1 和 nums2 均不为空。
 * @Author: 56 
 * @Date: 2018-08-08 21:34:14 
 * @Last Modified by: 56
 * @Last Modified time: 2018-08-08 21:54:25
 */

/**
 * 将两有序数组合并为一个有序数组, 取中位数计算
 * 优化: 先计算中位数位置,当排序到中位数时, 即可直接得到结果
 * e.g: 若某队列先结束,但未到中位数, 则循环另一队列得到结果
 * @param {Array} nums1
 * @param {Array} nums2
 */
const fun1 = (nums1, nums2) => {
  // TODO: 若为空考虑直接取 num1 或 num2 取中位得值

  const middle = (nums1.length + nums2.length) / 2
  const mid = Math.ceil(middle)
  const isTwo = mid === middle
  const arr = []

  let num1, num2
  let len1 = nums1.length
  let len2 = nums2.length
  let i = 0
  let j = 0
  while (i + j <= mid && i < len1 && j < len2) {
    num1 = nums1[i]
    num2 = nums2[j]
    if (num1 > num2) {
      arr.push(num2)
      j++
    } else {
      arr.push(num1)
      i++
    }
  }

  if (i === len1) {
    while (i + j <= mid) {
      arr.push(nums2[j++])
    }
  } else if (j === len2) {
    while (i + j <= mid) {
      arr.push(nums1[i++])
    }
  }

  return isTwo ? (arr[mid] + arr[mid - 1]) / 2 : arr[mid - 1]
}

const findMedianSortedArrays = function(nums1, nums2) {
  return fun1(nums1, nums2)
}

const { expect } = require('chai')

expect(findMedianSortedArrays([1], [1])).to.be.equal(1)
expect(findMedianSortedArrays([1], [1, 2])).to.be.equal(1)
expect(findMedianSortedArrays([1, 3], [2])).to.be.equal(2.0)
expect(findMedianSortedArrays([1, 3, 5, 6, 7], [2])).to.be.equal(4)
expect(findMedianSortedArrays([2], [1, 3, 5, 6, 7])).to.be.equal(4)
expect(findMedianSortedArrays([1, 2], [3, 4])).to.be.equal(2.5)
