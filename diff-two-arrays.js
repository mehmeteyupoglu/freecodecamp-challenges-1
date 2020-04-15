// Compare two arrays and return a new array with any items only found in one of the two given arrays, 
// but not both. 
// In other words, return the symmetric difference of the two arrays.

// Note
// You can return the array with its elements in any order.

function diffArray(arr1, arr2) {

    var newArr = arr1.concat(arr2) 
    console.log(`This is newArr ${newArr}`); 
    var result = newArr.filter(num => arr1.indexOf(num) < 0 || arr2.indexOf(num) < 0 );
    return result
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))//4
  console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))
//    should return ["pink wool"].


