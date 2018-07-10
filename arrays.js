function addElementToBeginningOfArray(a, b) {
  var c = [a]
  return c.unshift(b)
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
  a.slice(0)
  return a
}

function removeElementFromEndOfArray(a) {
  return a.slice(0, a.length - 1)
}