function vendingMachine (totalShopping, totalMoney) {
    let kembalian = [500,1000,2000,5000,10000,20000,50000]
    let temp = totalMoney - totalShopping
    if(temp > kembalian[6]){
        console.log("1 x 50.000")
        temp -= kembalian[6]
    }
    if(temp > kembalian[5]){
        console.log("1 x 20.000")
        temp -= kembalian[5]
    }
    if(temp > kembalian[4]){
        console.log("1 x 10.000")
        temp -= kembalian[4]
    }
    if(temp > kembalian[3]){
        console.log("1 x 5000")
        temp -= kembalian[3]
    }
    if(temp > kembalian[2]){
        console.log(parseInt(temp/kembalian[2]), " lembar 2000")
        sisa = parseInt(temp/kembalian[2]) * kembalian[2]
        temp -= sisa
    }
    if(temp > kembalian[1]){
        console.log("1 x 1000")
    }
    if(temp >= kembalian[0]){
        console.log("1 x 500")
        temp -= kembalian[0]
    }
}

vendingMachine(110500, 150000)