function Node(data) {
  this.data = data;
  this.next = null;
}

function push(head, data) {
  let newNode = new Node(data)
  newNode.next = head
  return newNode
}

function buildOneTwoThree() {
  let newNode = new Node(3)
  newNode = push(newNode, 2)
  newNode = push(newNode, 1)
  return newNode
}

// https://www.codewars.com/kata/55be95786abade3c71000079
