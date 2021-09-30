// Predefined object for list nodes

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}



function getKthLastElement(head, k) {
  if (head === null || k < 0 ) return null
  let result = []
  let current = head
  while (current.next != null) {
    result.unshift(current)
    current = current.next
  }
  result.unshift(current)
  return result[k]
}

// https://www.codewars.com/kata/5810d8ce2956d78698000032
