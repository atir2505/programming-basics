const myNum = 15
function guessNum (num){
    if (num > myNum ) {
        console.log ("num > myNum")
    }else if (num < myNum){
        console.log ("num < myNum")
    }else{
        console.log ("correct")
    }
} 
guessNum (3)
guessNum (19)
guessNum (15)
function guessNumRange (num1, num2){
     if ( num1 > num2) {
        console.log ("incorrect selected range")
        return
     }
    if (myNum > num1 && myNum < num2){
        console.log ("in range")
    } else {
        console.log (" out of range")
    }
}
guessNumRange (18, 2)
function calculate (a, b){
    if (a + b || a - b ){
        console.log (7)
    } else { 
        console.log (-1)
 }
  }
calculate (3, 4)