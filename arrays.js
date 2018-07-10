function addElementToBeginningOfArray(a, b) {
  var c = [a]
  return c.unshift(b)
}

function destructivelyAddElementToBeginningOfArray(a, b) {
  return a.unshift(b)
}