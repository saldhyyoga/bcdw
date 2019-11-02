function hitungBarang(kualitas, kuantitas) {
    let harga , total, potongan, totalHarga
    if(kualitas === 'A'){
        harga = 3000
        totalHarga = harga * kuantitas
        if(kuantitas > 10){
            potongan = kuantitas * 500
        }
        total = totalHarga - potongan
    }
    if(kualitas === 'B'){
        harga = 3500
        totalHarga = harga * kuantitas
        if(kuantitas > 5){
            potongan = 0.5 * totalHarga
        }
        total = totalHarga - potongan
    }
    if(kualitas === 'C'){
        harga = 5000
        potongan=0
        totalHarga = harga * kuantitas
        total = totalHarga
    }
    console.log("Total Harga barang : "+totalHarga);
    console.log("Potongan : "+potongan);
    console.log("Total yang harus dibayar : "+total) 
    console.log('\n')
}

hitungBarang('A', 11)
hitungBarang('B',6)
hitungBarang('C',7)