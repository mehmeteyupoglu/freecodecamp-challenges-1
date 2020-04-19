// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. 
// Every additional number in the sequence is the sum of the two previous numbers. 
// The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.



function sumFibs(num) {
    let a = 0, b = 1, fib = 0; 
    let i = 0; 
    let fibArr = []
    let result = 0; 

    while(fib <= num){
        fibArr.push(fib)
        a = b; 
        b = fib; 
        fib = a+b; 
    }
    
    for(let i = 0; i<fibArr.length; i++) {
        if(fibArr[i] % 2 !== 0) {
            result += fibArr[i]
        }
    }
    console.log(result)
    return result; 
  }
  
//   console.log(sumFibs(4));

  
//   sumFibs(1) //should return a number.
  sumFibs(1000) //should return 1785.
//   sumFibs(4000000) //should return 4613732.
//   sumFibs(4) //should return 5.