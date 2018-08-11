function takeANumber(line, name) {
  
  var welcomeMessage
  
  line.push(name)
  
  welcomeMessage = `Welcome, ${name}. You are number ${line.length} in line.`
  
  return welcomeMessage
}

function nowServing (line) {
  
  if (line.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    
    return `Currently serving ${line.shift()}.`
  }
}

// takes the array and returns it as a string list "The line is currently: 1. Ada, 2. Grace"
function currentLine (line) {
  if (line.length === 0) {
    return "The line is currently empty."
  }
  
  var lineList = []
  
  for (var i = 0, l = line.length; i < l; i++) {
    lineList.push(`${i + 1}. ${line[i]}`)
  }
  
  return `The line is currently: ${lineList.join(', ')}`
}