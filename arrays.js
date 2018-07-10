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