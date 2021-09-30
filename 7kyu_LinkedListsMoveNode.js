function Node(data) {
  this.data = data;
  this.next = null;
}

function Context(source, dest) {
  this.source = source;
  this.dest = dest;
}

function moveNode(source, dest) {
  if (source == null) throw new Error()
  let newSource = source.next
  source.next = dest
  return new Context(newSource, source);
}

// https://www.codewars.com/kata/55da347204760ba494000038
