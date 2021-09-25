// let no = prompt("Enter a Number");

// document.querySelector(".display").innerHTML=no

//Given an array of Numbers, write a function classifyNumbers 
//that returns a category for each numbers in an object
//your function should be able to categorize each number
//even: number divisible by two
//odd: numbers not divisible by two;
//unit: number between 1 and 9 inclusive
//tens:numbers between 10 and 99 inclusive
//hundreds: numbers between 100 and 999 inclusive
//other: 0 0r numbers greater than or equal to 1000

let numbers = [1,0, 10258, 2, 3, 4, 5, 6, 7, 8, 9, 10, 50, 70, 100, 548, 1102, 70, 1569, 248];

function classifyNumbers(no){
    let even = [];
    let odd = [];
    let unit = [];
    let tens = [];
    let hundres = [];
    let other = [];

    obj = {
        even : even,
        odd : odd,
        unit : unit,
        tens : tens,
        hundres : hundres,
        other : other
    }

for(let i = 0; i<no.length; i++){
    //console.log(nos[i])
    if(no[i]%2 === 0){
        obj.even.push(no[i])
    }else if(no[i] % 2 === 1){
        obj.odd.push(no[i])
    }if(no[i] >= 1 && no[i] < 9){
        obj.unit.push(no[i])
    }else if(no[i] >= 10 && no[i] < 99){
        obj.tens.push(no[i])
    }else if(no[i] >= 100 && no[i] < 999){
        obj.hundres.push(no[i])
    }else if(no[i] === 0 || no[i] >= 1000){
        obj.other.push(no[i])
    }
}
return obj;
}

console.log(classifyNumbers(numbers))




