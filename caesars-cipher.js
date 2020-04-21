// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
// In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
// Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.


function rot13(str) {
    
    
    let alphabet = 'abcdefghijklmnopqrstuvwxyz', newStr = str.toLowerCase(), i = 0; 
    let result = ''

    for (i = 0; i < str.length; ++i){
        let index  = alphabet.indexOf(newStr[i]) - 13
        let minusIndex = 26 + index
        if(index === -14){
            result += newStr[i]
        }
        else if (index <= -1) {
            result += alphabet[minusIndex]
        }
        else {
            result += alphabet[index]
        }

    }
    return result.toUpperCase() 
  }

console.log(rot13("SERR PBQR PNZC"))//should decode to FREE CODE CAMP
console.log(rot13("SERR CVMMN!")) //should decode to FREE PIZZA!
rot13("SERR YBIR?") //should decode to FREE LOVE?
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") //should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.