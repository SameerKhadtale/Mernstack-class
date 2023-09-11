// Pop function

const trees = ["Mango","Apple","Banana","Guava"];
console.log(trees)
console.log(trees.pop())
// console.log(trees)

// Push function

const currency = ["Dollars","Euros","Peso","Dihram"];
console.log(currency)
const count= currency.push("Pounds");
console.log(currency)

// Map function

const array=[2,4,6,8];
console.log(array)
const map=array.map((x)=>(x*2));
console.log(map)

// For each function

const alphabets =["a","b","c","d"]
console.log(alphabets)
alphabets.forEach((elements) =>console.log(elements))

// Reduce function

const numbers=[2,4,6,8,10]
console.log(numbers)
const initialValue=0;
const total=numbers.reduce((accumulator,currentValue) => accumulator+currentValue, initialValue);
console.log(total);


// Shift function

const arr=[1,2,3,4,5];
console.log(arr)
constElement=arr.shift();
console.log(arr)
console.log(constElement)

// Filter function

const list =["Iphone","Oneplus","Xiaomi","Blackberry","Poco"];
console.log(list)
const result= list.filter((word)=>  word.length >7 );
console.log(result);






