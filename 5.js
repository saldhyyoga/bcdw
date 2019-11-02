function generateSerialNumber(param) {
    let chars = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    randomSerial1 = '',randomSerial2 = '', randomSerial3 = '', randomSerial4 = '',
    randomNumber;

    for(let i=0; i<param; i++){
        randomNumber= Math.floor(Math.random() * chars.length);
        randomSerial1 += chars.substring(randomNumber, randomNumber+1);
    }

    for(let j=0; j<param; j++){
        randomNumber= Math.floor(Math.random() * chars.length);
        randomSerial2 += chars.substring(randomNumber, randomNumber+1);
    }

    for(let k=0; k<param; k++){
        randomNumber= Math.floor(Math.random() * chars.length);
        randomSerial3 += chars.substring(randomNumber, randomNumber+1);
    }

    for(let l=0; l<param; l++){
        randomNumber= Math.floor(Math.random() * chars.length);
        randomSerial4 += chars.substring(randomNumber, randomNumber+1);
    }

    console.log(randomSerial1+"-"+randomSerial2+"-"+randomSerial3+"-"+randomSerial4)
}

generateSerialNumber(4)