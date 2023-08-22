if (5 < 3) {
    console.log("condition True")
} else {
    console.log("condition False")
}
const a = 10
const b = 5
if ( a > b){
    console.log (a)
} else if (a < b) {
console.log (b)
} else {
    console.log (a)
}

function max (a, b){
    if (a > b){
         return a
    } else if ( a < b) {
        return b   
    } else {
        return a
    }
 }     
 const point = max (6, 6) 
 console.log ( point )  
 function min (a, b){
    if ( a < b ){
        return a
    } else if (a > b ){
        return b
    } else {
        return a
    }
 }
const number = min (2, 5)
console.log ( number )
function animalSays (animal){
    if (animal === "cat") {
     console.log ("meow")
    } else if ( animal === "dog"){
        console.log ("gav")
    }else{
        console.log  ("rrr")
    }
}
animalSays ("cat")
animalSays ("dog")
animalSays ("tiger")
function carSound (car){
    if (car === "Mercedes"){
        console.log ("rrrr")
    } else if (car === "BMW") {
        console.log ("rar")
    }else{
        console.log ("phph")
    }
}
carSound ("Mercedes")
carSound ("BMW")
carSound ("VW")





