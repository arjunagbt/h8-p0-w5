function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    
    var hasil = [] //array penampung hasil

    const printPenumpang = (penumpang, naikDari, tujuan, bayar) => {   //factory function hasil
       return { 
        penumpang,
        naikDari,
        tujuan,
        bayar
    }
    }
        
    for (let i = 0; i < arrPenumpang.length; i++) {
        
        arrPenumpang[i].push((rute.indexOf(arrPenumpang[i][2])-rute.indexOf(arrPenumpang[i][1]))*2000)  //push jumlah pembayaran ke input
        hasil.push(printPenumpang(...arrPenumpang[i]))  //panggil factory function untuk push ke hasil
    }
        
    
    return hasil

  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]

  //Arjuna Sarumpaet