function Node(data) {
  this.data = data;
  this.next = null;
}

function getNth(node, index) {
  let count = 0
  while (node) {
    if (index === count) {
      return node
    }
    count++
    node = node.next
  }
  throw 'Invalid index'
}

// https://www.codewars.com/kata/55befc42bfe4d13ab1000007
