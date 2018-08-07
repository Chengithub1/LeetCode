/*
 * 最长字串
 * @Author: 56 
 * @Date: 2018-08-07 22:31:32 
 * @Last Modified by: 56
 * @Last Modified time: 2018-08-08 00:04:51
 */

/**
 * 最开始的想法
 * 暴力
 * e.g: 通过计算从字符串的每个位置的最长子串. 得到结果
 * @param {string} string
 */
const fun1 = string => {
  if (string.length === 1) {
    return 1
  }

  // 计算每个字串从开始到第一个出现重复的长度
  const calcSubstring = list => {
    const map = {}
    let i = 0
    let len = list.length
    for (; i < len; i++) {
      if (map[list[i]]) {
        return i
      } else {
        map[list[i]] = true
      }
    }
    return i
  }

  let max = 0
  for (let i = 0, len = string.length; i < len; i++) {
    const now = calcSubstring(string.slice(i))
    if (max < now) {
      max = now
    }
  }
  return max
}

/**
 * 滑动窗口
 * e.g:
 *  窗口内将为非重复字符串
 *  出现重复值, 将此时窗口值进行比较, 然后左窗口右移至重复值位置后一位
 *  未出现重复值, 右窗口右移一位
 * @param {string} string
 */
const fun2 = string => {
  if (string.length === 1) {
    return 1
  }

  let max, len, i, j, c
  const map = {}
  max = i = j = 0
  len = string.length

  while (i < len && j < len) {
    c = string[j]
    if (map[c] !== undefined) {
      max = Math.max(max, j - i)
      i = Math.max(map[c] + 1, i)
    }
    map[c] = j++
  }
  return Math.max(max, len - i)
}

const lengthOfLongestSubstring = function(string) {
  // return fun1(string)
  return fun2(string)
}

const { expect } = require('chai')

expect(lengthOfLongestSubstring('abcde')).to.be.equal(5)
expect(lengthOfLongestSubstring('abcabcbb')).to.be.equal(3)
expect(lengthOfLongestSubstring('dvdf')).to.be.equal(3)
expect(lengthOfLongestSubstring('abba')).to.be.equal(2)
expect(lengthOfLongestSubstring('bbbbb')).to.be.equal(1)
expect(lengthOfLongestSubstring('pwwkew')).to.be.equal(3)
