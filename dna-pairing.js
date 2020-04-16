// DNA Pairing

// The DNA strand is missing the pairing element. 
// Take each character, get its pair, and return the results as a 2d array.
// Base pairs are a pair of AT and CG. Match the missing element to the provided character.
// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {

    let newArr = []
    for (let i = 0; i<str.length; i++){
        if(str[i] === 'A'){
            newArr.push(str[i])
            newArr.push('T')
        } else if (str[i] === 'T') {
            newArr.push(str[i])
            newArr.push('A')
        } else if (str[i] === 'G') {
            newArr.push(str[i])
            newArr.push('C')
        } else newArr.push(str[i])
        newArr.push('G')

    }
    return newArr;
  }
  
  console.log(pairElement("GCG"));