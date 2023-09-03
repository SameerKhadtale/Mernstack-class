// // Question 1
// // Sum of elements in an array

// var array = [1,2,4,6,8,10];
// newArray= []
// function SumOfElements(array){
// for (var i= 1;i < array.length;i++ );
// // for(array[i]=0; array[0]+array[1];i++)

// array.push(newArray)
// }
// return newArray=[]
// console.log(SumOfElements(array))



// // Question 2 Max from the array
// var array = [1,2,4,6,8,10]
// function MaxNumber(array)
// for (var i = 1;i < array.length;i++){
//   for(var i<)
// }
// console.log(MaxNumber)


//Question 3    even numbers

// var array =[1,2,3,4,5,6,7,8]
// function CountEven(array){
//     for (var i = 0; i%2 ==0, i++);


// }
// console.log(CountEven)


// function factorial(n)
//     let answer = 1;
//     if (n == 0 || n == 1){
//     return answer;
//     }
//     else if(n > 1)
//     for(var i = n; i >= 1; i--){
//     answer = answer * i;
    
//     }

// // function that check str is palindrome or not
// function check_palindrome(str) {
// 	let j = str.length - 1;
// 	for (let i = 0; i < j / 2; i++) {
// 		let x = str[i];//forward character
// 		let y = str[j - i];//backward character
// 		if (x != y) {
// 			// return false if string not match
// 			return false;
// 		}
// 	}
// 	/// return true if string is palindrome
// 	return true;

// }

// //function that print output if string is palindrome
// function is_palindrome(str) {
// 	// variable that is true if string is palindrome
// 	let ans = check_palindrome(str);
// 	//condition checking ans is true or not
// 	if (ans == true) {
// 		console.log("passed string is palindrome ");
// 	}
// 	else {
// 		console.log("passed string not a palindrome");
// 	}
// }
// // test variable
// let test = "racecar";
// is_palindrome(test);









// var number = 3;
// var result = 1;

// for (var i = 2; i <= number; i++) {
//     result = result * i;
// }
// console.log(result)

// FACTOIAL OF A NUMBER
var number = 3;
var result = 1 ;

for (var i = 1; i <= number; i++) {
    if (result <= 0) {
        result = i;
    } 
    else {
        result = result * i;
    }
}
console.log(result)
