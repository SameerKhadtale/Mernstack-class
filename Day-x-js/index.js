//Question 1

var strings = ["Mumbai","Pune","Kolkatta","Vizag"]
function findStringLenght (array) {
  var result= []
// console.log(array, "strings of array")
for (var i=0;i < array.length; i++){

    // console.log(array[i].length)
result.push(array[i].length)
}
return result
}
console.log(findStringLenght(strings))


var strings = ["Eatables","Vegetables","Fruits","Mushroom"]
function findStringLenght (array) {
  var result= []
// console.log(array, "strings of array")
for (var i=0;i < array.length; i++){

    // console.log(array[i].length)
result.push(array[i].length)

}
return result

}

console.log(findStringLenght(strings))


var strings= ["Toyota","Hyundai","BMW","Ferrari"]
function findStringLengh(array) {
    var result =[]
// console.log(array,"strings of array")

for (var i=0; i< array.length; i++){
    // console.log(array[i].length)

    result.push(array[i].length)
}
return result

}
console.log(findStringLengh(strings))


var strings =["KFC","MCD","Naturals","Wow Chinese"]
function findStringLength(array){
    var result=[]
    for (var i =0;i<array.length;i++){
result.push(array[i].length)
    }
return result
}
console.log(findStringLengh(strings))



//Question 2 

var numbers = [1,2,3,4,5,6,7,8,10,12]

function findEvenNumbers(array){
    var result=[];
    for (var i = 0; i < array.length; i++){
     if(array[i]%2 ==0){
        result.push(array[i])
     }
    }
return result
}

console.log(findEvenNumbers(numbers))



var numbers = [10,12,14,15,16,17,19,20]

function findEvenNumbers(array){
    var result=[];
    for (var i = 0; i < array.length; i++){
     if(array[i]%2 ==0){
        result.push(array[i])
     }
    }
return result
}

console.log(findEvenNumbers(numbers))



var numbers = [22,23,24,28,29,30,32]

function findEvenNumbers(array){
    var result=[];
    for (var i = 0; i < array.length; i++){
     if(array[i]%2 ==0){
        result.push(array[i])
     }
    }
return result
}

console.log(findEvenNumbers(numbers))


var numbers = [19,20,21,22,23,24,25,26]

function findEvenNumbers(array){
    var result=[];
    for (var i = 0; i < array.length; i++){
     if(array[i]%2 ==0){
        result.push(array[i])
     }
    }
return result
}

console.log(findEvenNumbers(numbers))


// Question 3


var numbers=[25,30,33,52,69,88,15,1];
function findSmallNumber(array) {
    var minimum=array[0];
    for (var i= 1;i < array.length;i++) {
        // console.log(minimum, array[i], minimum < array[i])
        if (minimum>array[i]){
            minimum=array[i];
        }
}
return minimum
}
    console.log(findSmallNumber(numbers))

         

var numbers=[25,30,33,52,69,88,15,1];
function findSmallNumber(array) {
    var minimum=array[0];
    for (var i= 1;i < array.length;i++) {
        // console.log(minimum, array[i], minimum < array[i])
        if (minimum>array[i]){
            minimum=array[i];
        }
}
return minimum
}
    console.log(findSmallNumber(numbers))


var numbers=[25,30,33,52,69,88,15,1];
function findSmallNumber(array) {
    var minimum=array[0];
    for (var i= 1;i < array.length;i++) {
        // console.log(minimum, array[i], minimum < array[i])
        if (minimum>array[i]){
            minimum=array[i];
        }
}
return minimum
}
    console.log(findSmallNumber(numbers))


var numbers=[25,30,33,52,69,88,15,1];
function findSmallNumber(array) {
    var minimum=array[0];
    for (var i= 1;i < array.length;i++) {
        // console.log(minimum, array[i], minimum < array[i])
        if (minimum>array[i]){
            minimum=array[i];
        }
}
return minimum
}
    console.log(findSmallNumber(numbers))




// Question 4



var array1 = [22,66,69,52,12,20]
var array2 = [69,52,44,60,70,20]

function findSameNumber(array1,array2) {
var newArray = []
for (var i= 0;i < array1.length; i++){
    for (j=0;j<array2.length;j++) {
        if (array1[i]== array2[j]) {
            newArray.push(array1[i])
        }
    }
}
return newArray;
}

console.log(findSameNumber(array1,array2))

var array1 = [6,5,4,3,24,01,24,2]
var array2 = [3,6,12,15,21,24,30]

function findSameNumber(array1,array2) {
var newArray = []
for (var i= 0;i < array1.length; i++){
    for (j=0;j<array2.length;j++) {
        if (array1[i]== array2[j]) {
            newArray.push(array1[i])
        }
    }
}
return newArray;
}

console.log(findSameNumber(array1,array2))


var array1 = [4,6,2,3,10,13,2]
var array2 = [1,4,6,8,10,12,15]

function findSameNumber(array1,array2) {
var newArray = []
for (var i= 0;i < array1.length; i++){
    for (j=0;j<array2.length;j++) {
        if (array1[i]== array2[j]) {
            newArray.push(array1[i])
        }
    }
}
return newArray;
}

console.log(findSameNumber(array1,array2))


var array1 = [2,5,7,8,10,15]
var array2 = [15,7,6,8,20,12]

function findSameNumber(array1,array2) {
var newArray = []
for (var i= 0;i < array1.length; i++){
    for (j=0;j<array2.length;j++) {
        if (array1[i]== array2[j]) {
            newArray.push(array1[i])
        }
    }
}
return newArray;
}

console.log(findSameNumber(array1,array2))


// Question 5


