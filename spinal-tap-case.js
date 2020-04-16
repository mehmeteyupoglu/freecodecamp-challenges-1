// Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.


var spinalCase = function(str) {

    var converted = str
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      .map(x => x.toLowerCase())
      .join('-');
    console.log(converted)
    return converted;
  };
  
  
  
  spinalCase('This Is Spinal Tap');
  spinalCase("Teletubbies say Eh-oh");
  spinalCase("The_Andy_Griffith_Show");
  spinalCase("thisIsSpinalTap")
  spinalCase("AllThe-small Things")