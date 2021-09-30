function Node(data) {
  this.data = data;
  this.next = null;
}

function append(listA, listB) {
  let current = listA
  if (listA == null) return listB
  while (current.next !== null) {
    current = current.next
  }
  current.next = listB
  return listA
}

// https://www.codewars.com/kata/55d17ddd6d7868493e000074
