var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(a, b) {
  c = [a]
  return c.push(b)
}

function destructivelyAddElementToBeginningOfArray(a, b) {
  return a.unshift(b)
}

function addElementToEndOfArray(a, b) {
  var c = [a]
  return c.push(b)
}

function destructivelyAddElementToEndOfArray(a,b) {
  return a.push(b)
}

function accessElementInArray(a,b) {
  return a[b]
}

function destructivelyRemoveElementFromBeginningOfArray(a) {
  return a.shift()
}

function removeElementFromBeginningOfArray(a) {
  return a.slice(1)
}

function removeElementFromEndOfArray(a) {
  return a.slice(0, a.length - 1)
}

function destructivelyRemoveElementFromEndOfArray(a) {
  return a.pop()
}