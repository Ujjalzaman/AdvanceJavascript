/**
 map return a rray by for looping
 in map used loop
 filter return array
 find return specific element and return first matched element 
 */


list = [1,2,4,5,7,9,2];
for (let i = 0; i < list.length; i++) {
    const element = list[i];
    console.log(element, i);   
}

list = [1,2,4,5,7,9,2];
list.map(function (element, index, list) {
    console.log(list);
    console.log(element, index, list);
})

function dubleIt(nums) {
   const mul = nums* nums;
    console.log(mul);
}
dubleIt(5);
const mybame = (name1, name2)=>name1 + name2;
const dubleIt = nums => nums*nums;
const dubleIt = x => x*x;
console.log(dubleIt(5));
element = 5
const square = element=> element*element;
console.log(square);

const numbers = [1,2,3,4,5,6];
const doubleNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    doubleNumbers.push(result);
    // console.log(result);
    
}
//doing map method in numbers array - map can use in array
const duble = numbers.map(function(element, index) {           //we can access index and whole array also
    // return element * element;
    const doubleNums = element * element;
    console.log(doubleNums, index);

    // console.log(element);
})
console.log(duble);


//array in using map,filter, find
array = [4,5,6,7,8];                 
array.map(function(element, index, array){
    console.log(element, index, array);
})

/**
 * we can access element , index and whole array by using map
 */

array = [7,8,9,5,2];
const square = array.filter


//smart way multiple map
arrayNums = [4,5,6,7,2];
const multi = arrayNums.map( x => x*x );
console.log(multi);

//filter            filter return a array
const bigNums = arrayNums.filter(x => x>5);
const bigNum2 = arrayNums.filter(x => x%2 == 0);
console.log(bigNums, "this is big");
console.log(bigNum2, "jug numbers here");

//find   this is return a specifi elemen
const fingNums = arrayNums.find( x => x > 5);
console.log(fingNums, "get one elemenet");