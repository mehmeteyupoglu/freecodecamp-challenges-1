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
        
        switch(str[i]){
            case 'A': 
            newArr.push([str[i], 'T']);
            break 

            case 'T': 
            newArr.push([str[i], 'A']); 
            break

            case 'G': 
            newArr.push([str[i], 'C']); 
            break

            case 'C': 
            newArr.push([str[i], 'G']); 
            break
        }
  }
  return newArr;
}
  
console.log(pairElement("GCG"))

console.log(pairElement("ATCGA")) //should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
console.log(pairElement("TTGAG")) //should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
console.log(pairElement("CTCTA")) //should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].