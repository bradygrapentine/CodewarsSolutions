function Node(data) {
  this.data = data;
  this.next = null;
}

function insertNth(head, index, data) {
  const newNode = new Node(data)
  let count = 1
  if (head) {
    if (index == 0) {
      newNode.next = head
      return newNode
    } else {
      let lastNode = head
      let currentNode = head.next
      while (lastNode) {
        if (index === count) {
          if (currentNode) {
            newNode.next = currentNode
          }
          lastNode.next = newNode
          return head
        }
        count++
        lastNode = currentNode
        currentNode = currentNode.next 
      }
      throw 'Invalid index'
    }
  } else {
    return newNode
  }
}

// https://www.codewars.com/kata/55cacc3039607536c6000081
