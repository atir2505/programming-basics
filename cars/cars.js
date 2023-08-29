const carMercedes = "mercedes"
const priceMercedes = 2500
const carBmw = "bmw"
const priceBmw = 2000
function carSale (carName, carPrice,){
    if (carName === carMercedes && carPrice < priceMercedes){ 
        console.log (" not buy Mercedes")
    } else if (carName === carMercedes && carPrice > priceMercedes){
        console.log ("buy Bmw")
    } else {
        console.log ("")
    }
}
carSale ( "mercedes", 200)
