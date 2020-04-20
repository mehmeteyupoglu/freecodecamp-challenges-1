// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {
    if (isNaN(num))
        return NaN;
    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
        console.log(`Digits array is [${digits}]`)
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
        console.log(`roman is ${roman}`)
    return Array(+digits.join("") + 1).join("M") + roman;
}
//   console.log(convertToRoman(2)) //should return "II".
//   convertToRoman(3) //should return "III".
//   convertToRoman(4) //should return "IV".
//   convertToRoman(5) //should return "V".
//   convertToRoman(9) //should return "IX".
//   convertToRoman(12) //should return "XII".
//   convertToRoman(16) //should return "XVI".
//   convertToRoman(29) //should return "XXIX".
//   convertToRoman(44) //should return "XLIV".
//   convertToRoman(45) //should return "XLV"
//   convertToRoman(68) //should return "LXVIII"
  convertToRoman(83) //should return "LXXXIII"
  convertToRoman(97) //should return "XCVII"
  convertToRoman(99) //should return "XCIX"
  convertToRoman(400) //should return "CD"
  convertToRoman(500) //should return "D"
//   convertToRoman(501) //should return "DI"
//   convertToRoman(649) //should return "DCXLIX"
//   convertToRoman(798) //should return "DCCXCVIII"
//   convertToRoman(891) //should return "DCCCXCI"
//   convertToRoman(1000) //should return "M"
//   convertToRoman(1004) //should return "MIV"
//   convertToRoman(1006) //should return "MVI"
//   convertToRoman(1023) //should return "MXXIII"
//   convertToRoman(2014) //should return "MMXIV"
  console.log(convertToRoman(3999)) //should return "MMMCMXCIX"

let separator = num => Array.from(num.toString()).reverse().map((d, i) => d * 10 ** i).reverse()