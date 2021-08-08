function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  if (head) {
    var count = 1
    let currentNode = head
    while(currentNode.next) {
      count++
      currentNode = currentNode.next
    }
    return count
  }
  return 0
}

function count(head, data) {
  if (head) {
    var numCount = 0
    let currentNode = head
    while(currentNode.next) {
      if (currentNode.data === data) {
        numCount++
      }
      currentNode = currentNode.next
    }
    if (currentNode.data === data) {
      numCount++
    }
    return numCount
  }
  return 0
}

// https://www.codewars.com/kata/55beec7dd347078289000021
