/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
  let flag = 0
  let tmp,
    res = []
  let a = l1,
    b = l2

  while (a && b) {
    tmp = a.val + b.val + flag
    if (tmp >= 10) {
      tmp -= 10
      flag = 1
    } else {
      flag = 0
    }
    res.push(tmp)

    a = a.next
    b = b.next
  }

  let l = a ? a : b

  while (l) {
    tmp = l.val + flag
    if (tmp >= 10) {
      tmp -= 10
      flag = 1
    } else {
      flag = 0
    }
    res.push(tmp)

    l = l.next
  }

  if (flag) {
    res.push(flag)
  }
  return res
}
