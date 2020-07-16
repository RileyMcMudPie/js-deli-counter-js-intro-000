function takeANumber (line, name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
if(line.length > 0){
  return `Currently serving ${line.shift()}.`
} else {
  return 'There is nobody waiting to be served!'
   }
}

function currentLine(line){
  var i;
  var NumbersAndNames = [];

  for (i = 0; i < line.length; i++){
    if (line.length === 0){
      return 'The line is currently empty.'
    } else if (line.length > 0){
      numbersAndNames.push(${i + 1}. ${line})
      return `The line is currently ${numbersAndNames}`,
    }
  }
}
