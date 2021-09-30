function Node(data) {
  this.data = data;
  this.next = null;
}

function removeDuplicates(head) {
  if (head && head.next) {
    let nextNode = head.next
    let current = head
    while (nextNode !== null) {
      if (nextNode.data === current.data) {
        current.next = nextNode.next
        nextNode = nextNode.next
      } else {
        current = current.next
        nextNode = nextNode.next
      }
    }
  } else if (!head) {
    return null
  }
  return head
}

// https://www.codewars.com/kata/55d9f257d60c5fd98d00001b
