// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

// - If a word begins with a vowel, just add "way" at the end.

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.


function translatePigLatin(str) {
  
    let result = ''; 
    let regex = /^[bcdfghjklmnpqrstvwxys]+/gi
    let match = str.match(regex)
  
  
    if(match !== null){
      let num = match[0].length; 
      result = str.slice(num) + match + 'ay'  
      return result
    } else {
        result = str + 'way'
        return result; 
    }

  }
  console.log(translatePigLatin("consonant")); //onsonantcay
  console.log(translatePigLatin("paragraphs")); //aragraphspay
  console.log(translatePigLatin("schwartz")); //artzschway
  console.log(translatePigLatin("glove")); //oveglay
  console.log(translatePigLatin("eight")); //eightway
  console.log(translatePigLatin("algorithm"))//algorithmway
