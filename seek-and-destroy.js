// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
// Remove all elements from the initial array that are of the same value as these arguments.

// Note
// You have to use the arguments object.

function destroyer(arr, ...args) {
    
    let result = arr.filter(num => {

        for (let i = 0; i<=args.length; i++ ){
             num !== args[i]
        }

    }); 
return result; 
    
}

  
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));