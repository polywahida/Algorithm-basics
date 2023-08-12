let algorithm = "Algorithm";
//constant time - O(1)

//function printFirstElement(array){
    //console.log(array[0]);

 //}

 //printFirstElement([4,5,6,68,9,6])

 //2 Logerithmic Time - O(log(n))

 //3 Linear Time - O(n)
 function printFirstElement(array){
    for (let index = 0;index<array.length;index++)
    {
        console.log(array[i]);
    }
 }

 //4 Quadratic Time - O(n* log(n))

 //5 Quadratic time - O(n^2)
 function printFirstElement(array){
    for (let i = 0;i<array.length;i++)
    {
        for(let j =0;j<array.length;index++)
        {
             console.log(array[i],array[j]); 
        }
        
    }
 }

 //6 exponential time - O(2^n)

 //printEirstElement([4,5,6,68,9,6])
 //[0,1,1,2,3,5,8...]

//fibonacci series
//steps
//1.initializa an array with two element [0,1]
//2.Iterate given number(n) from 2 to n
//3.Retrive last two elements from array and assign two new v
//4.calculate the sum of (a+b)
//5.Add/push the sum into result array
//6.return result array

function normalFib(n){

    let result = [0,1];
    for (let i = 2;i<=n;i++)
    {
        const a = result[i-1];
        const b = result[i-2];
        result.push(a+b);
    } 
    return result[n];
}

const fibRecursive = (n) => n <1 ? 0: n<=2 ? 1 : fibRecursive(n-1) + fibRecursive(n-2);

function fibRecursiveMemo(n, memo = {})
{
    if(n in memo) return memo[n];

else if(n<= 0) return [];
else if(n===1) return [0];
else if(n ===2) return [1];
return(memo[n]= [...fibRecursiveMemo(n-1,memo),fibRecursiveMemo(n-1,memo).slice(-1)[0]+fibRecursiveMemo(n-2,memo).slice(-1)[0]]);



 }

 //convert to object

 //Steps

// 1. Inuitalize an empty object, to store frequently count of each charachter in string 
// 2. Initalize two variable one will hold the max count of character and other will hold the Rax charchater

// 3- Iterate through intput string

//4- Increase each string charachter value and assign empty charachter objects

//5- Second Iteration, Iterate through charachter objects

// 6-Check Charchater value greater than max variable value 
// If yes then max will be the charachter value and maxCharchater will be the charachter

1//8- Return maxcharcter

function maxCharchater (str)
let charMap = {};
let max = 0;
let maxCharacter = "";
for(let char of str)
{
charMap[char] = charMap[char] + 1 || 1;

}
for(let char in charMap){

if(charMap[char] > max) 
{ max = charMap[char];
 maxCharacter =char;
}
} return MaxCharacter;




algorithm = "Max-Character" ;
document.getElementById("algorithm").innerHTML = algorithm;

document.getElementById("result").innerHTML = maxCharacter("students are getting bored");
