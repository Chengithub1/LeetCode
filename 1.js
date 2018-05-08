/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  if (!nums || nums.length <= 1) return null

  const hash = {}
  let num
  for (let i = 0, len = nums.length; i < len; i++) {
    num = nums[i]
    if (hash[target - num]) return [hash[target - num] - 1, i]
    hash[num] = i + 1
  }

  return null
}

console.log(twoSum([2, 7], 9))
