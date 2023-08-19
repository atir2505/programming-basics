
function gradusFarenheit (a,){
    return a * 1.8 + 32
}
const a = "temperature Farenheit " + gradusFarenheit(30)
const aOne =  "temperature Gradus " + 30
printSingle (aOne)
printSingle (a)
function printSingle (a){
    console.log (a)
}
function nameSurname (a, b){
    return a + " " + b  
}
const a1 = nameSurname("leonid", "Sivnitskyi")
console.log (a1)
console.log(5>8)
function compare (a, b){
    return a > b
}
const b = compare (5, 10)
console.log (b)
function operation2 (x, y, z){
    return 100 - ((x + y) / (y + z) * (x + z) / ( x +y )) 
}
const x = operation2 (5, 9, 6)
console.log (x)
function operation3 (x, y){
return  x**y
}
const y = operation3 (3, 2)
console.log (y)
function myName (a, b, c){
   return a + " " + b + " " + c
}
const birthYear = 2004
const age = 2023
const diefference = age - birthYear
const c = myName ("Leonid", "Sivnitskyi", diefference)
console.log (c)










