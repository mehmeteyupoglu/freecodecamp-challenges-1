// Chunky Monkey
// Write a function that splits an array (first argument) into groups 
// the length of size (second argument) and returns them as a two-dimensional array.    

function chunkArrayInGroups(arr, size) {
    let output = []; 
    let len = arr.length; 
    
    console.log(`Len is ${len}`)
    for (let i=0; i < len; i += size){
        console.log(`Output is ${output}`)
        let newArr = arr.slice(i, size+i)
        output.push(newArr); 
  }return output;
}

let a = chunkArrayInGroups(["a", "b", "c", "d"], 2); 
console.log(a)

// let array = [1,2,3,4,5,6]
