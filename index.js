function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log (string.toUpperCase())
}

function logWhisper(string) {
  console.log (string.toLowerCase())
}

function sayHiToGrandma(string) {
  if (string.toUpperCase() === string) 
    return "I can't hear you!"
  
  else if (string.toLowerCase() === string)
    return "YES INDEED!"
    
  else (string === "I love you, Grandma.")
    return "I love you, too."
}

