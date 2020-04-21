// Convert HTML Entities

// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {

    let regex = / [&<>"'] /gi
    let match = str.match(regex)
    let newArr = str.split('')

    console.log(`Matching char is ${str.match(regex)}`)
    console.log(`Index of matching char is ${str.indexOf(match)}`)


    // string.replace(/#|_/g,function(match) {return (match=="#")?"":" ";})

    for (let i = 0; i<newArr.length; i++){

      switch(newArr[i]){

        case "&": newArr.replace(newArr[i], '&amp;'); 
        break

        case '<': newArr.replace(newArr[i],'&lt;'); 
        break 

        case '>': newArr.replace(newArr[i],'&gt;'); 
        break

        case '"': newArr.replace(newArr[i],'&quot;'); 
        break

        case "'":  newArr.replace(newArr[i],"&apos;"); 
        break
      }

    return newArr
    }
  
      
  }


console.log(convertHTML("Dolce & Gabbana"))//should return Dolce &amp; Gabbana.
// convertHTML("Hamburgers < Pizza < Tacos") //should return Hamburgers &lt; Pizza &lt; Tacos.
// convertHTML("Sixty > twelve") // should return Sixty &gt; twelve.
// convertHTML('Stuff in "quotation marks"') //should return Stuff in &quot;quotation marks&quot;.
// convertHTML("Schindler's List") //should return Schindler&apos;s List.
// convertHTML("<>") //should return &lt;&gt;.
// convertHTML("abc") //hould return abc.