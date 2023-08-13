let algorithm = "";

// Stair Print ("") let algorithm = "";

// Steps 1: Initlialze as empty string called 'result'

// Steps 2: Enter a for loop with the variable row, range from 0 to n // Steps 3: Insider the outer loop, initaliz an empty string called 'stair

// steps 4: Enter a nested for loop with variable column, range from to n

// steps 5: Check the value of column is less than or equal to the value of row 
// If it is true, add stair '#' other '-'...
 // steps 6: Append teh stair string to the result string. Additionally add "<br/>"

// steps 7: Return 'result' string

// Console.log() function staircase(n) {
function staircase(n)
{
    let result = "";

for (let row = 0; row < n; row++)
 {

let stairs ="";

for (let col = 0; col < n; col++)
{if(col <= row) 
    {

    stairs += "#"; 
   } else {
     stairs += "-";
   }
    
    
   }
    result += stairs + "<br>"; }

  }
return result;

algorithm ="Staircase";
 
document.getElencotById("algorithm"). innerHTML = algorithm;

document.getElementById("result").innerHTML=staircase(4);


// Print (#) as Pyramid

// Steps 1: Initlialze as empty string called 'result'

// Steps 2: Find the midpoint of input and assign a variable

// Steps 3: Iteratoe through row 8 to n Steps 4: Insider the outer loop, initaliz an empty string called 'level'

// Steps 5: Iterate thorugh column @ to 2-1

// Steps 6: Check the column should have a If does, add a to "level"

// If doesn't, add a '-'

// Steps 7: Append teh 'level' steing to the result string. Additionally add "<br/>" 
// steps 8: Return 'result' string

function pyramid(n){
    debugger;
    let result='';
    
    const midPoint = Math.floor((2*n-1) / 2);
    
    for (let row = 0; row < n; row++) {
         let level = "";
         for (let col=0; col < 2*n-1; col++) {
          if(midpoint-row <= col && midpoint+row > col){ 
            level +="#";
            } else { 
                level +="-";
            }
        }
    } result += stairs + "<br>";
}    
       return result;


       document.getElencotById("algorithm"). innertHTML = algorithm;

       document.getElementById("result").innerHTML=pyramid(4);

       function pyramidRecursive(n, row = 0, level = "") {

        if (row == n) {
        
        return;
        
        }
        
        if (level.length == 2 * n -1) {
        
        console.log(level); return pyramidRecursive(n, row + 1); }
        
        const midPoint  = Math.floor((2 * n - 1) / 2);
        
        let add;
        
        if (midPoint - row <= level.length && midPoint + row >= level.length) 
        {
        
        add ="#";
        
        } 
        else {
        
        add = "-";
        
        } pyramidRecursive(n, row, level + add);
        
        }
        
        pyramidRecursive(4);
        
        algorithm = "Pyramid";

        function findVowels (str){
          let count = 0;
         const vowels = "aeiou";
          for(let char of str.toLowerCase()) 
          { if(vowels.includes (char)) count++;
           return count;
        }
    }
      function createSpiralMatrix(n) {

        let result = [];
        
         for (let i = 0; i < n; i++) 
         { result.push([]);
        
          }
        
          let counter = 1;
        
          let startCoulmn =0;
        
        let endColumn = n -1;
        
        let startRow =0;
        
        let endRow = n -1;
        
        while(startCoulmn <= endColumn && startRow <= endRow) {
        
        //Top Row
        
        for (let i = startColumn; i <= endColumn; i++) {
        
        result[startRow][i] =counter;
        
        counter++;
        }
        startRow++;
        
        // Right Column 
        for (let i= startRow; i <= endRow; i++){ 
            result[i][endColumn] = counter;
        
         counter++;
        
        }
        
        endColumn--;
        
        // Bottom Row
        
        for (let i = endColumn; i >= startCoulmn; i--){
             result[endRow][i] = counter;
        
        counter++;
        
        }
        
        endRow--;
        
        // start column 
        for (let i = endRow; i >= startRow; i--) {
        
        result[i][startCoulmn] = counter;
        
        counter++;
        }
        startCoulmn++;
        
     }
        
          let maxString = result.map(x => x.join(' ')).join('<br>');
          return maxString;
        }


        document.getElementById("algorithm").innerHTML = algorithm;

        document.getElementById("result").innerHTML = createSpiralMatrix (5);