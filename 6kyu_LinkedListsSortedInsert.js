function Node(data) {
  this.data = data;
  this.next = null;
}

function sortedInsert(head, data) {
  let currentNode = head
  let newNode = new Node(data)
  if (head == null) {
    return newNode
  } else if (data < currentNode.data) {
    newNode.next = head
    return newNode
  }
  while (currentNode.next != null) {
    let nextNode =  currentNode.next
    if (currentNode.data < data && nextNode.data > data) {
      currentNode.next = newNode
      newNode.next = nextNode
      break;
    } else {
      currentNode = nextNode
    }
  }
  if (currentNode.data < data) {
    currentNode.next = newNode
  }
  return head
}

// https://www.codewars.com/kata/55cc33e97259667a08000044
