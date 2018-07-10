function addElementToBeginningOfArray(a, b) {
  var c = [a]
  return c.unshift(b)
}

function destructivelyAddElementToBeginningOfArray(a, b) {
  return a.unshift(b)
}

function addElementToEndofArray(a, b) {
  var c = [a]
  return c.push(b)
}

function destructivelyAddElementToEndofArray(a,b) {
  return a.push(b)
}