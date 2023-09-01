const array = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 15]
const target = 12

for (i = 0; i <= array.lenght - 2; i++) 
    console.log(array[i])
    for (var j = i + 1; j < array.length; j++) 
        if (array[i] + array[j] == target) {
            console.log(array[i], array[j])
        }
        for (var k = j + 1; k < array.length; k++) 
            if (array[i] + array[j] + array[k] == target) {
                console.log(array[i], array[j], array[k])
            }


function addition() {
        var a = 34;
        var b = 98;
        // console.log(a + b)
        return a + b;
    }

    console.log(addition())


function subtraction() {
    var a = 100;
    var b = 98;
    return a - b;
}

console.log(subtraction())
