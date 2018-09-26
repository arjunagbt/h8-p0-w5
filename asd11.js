/**
  **************
  FAKTOR PRIMA
  **************

  Diberikan sebuah function faktorPrima dimana menerima sebuah parameter berupa number.
  Output dari function ini adalah faktor prima dari inputan angka parameter.

  Faktor Prima adalah angka yang habis dibagi oleh angka-angka dasar bilangan prima yaitu
  2, 3, 5 dan 7 (OIYA DAN TENTU SAJA DIRINYA SENDIRI!!)

  contoh 1:
  -----------
  input: 90
  output: [2, 3, 3, 5]
  penjelasan:
    90
    /\
  2   45
      /\
    3   15
        /\
      3   5


  contoh 2:
  ----------
  input: 168
  output: [2, 2, 2, 3, 7]
  penjelasan:
    168
    /\
  2  84
     /\
    2  42
       /\
      2  21
         /\
        3  7

  contoh 3:
  ----------
  input: 44
  output: [ 2, 2, 11 ]
  penjelasan:
     44
     /\
    2  22
       /\
      2  11


**/

function faktorPrima(num) {
    //your code here

    var output = []
    var faktor = 2
    while (num > 1) {
        if (num % faktor == 0) {
            
            output.push(faktor)
            num /= faktor

        } else {
            faktor ++
        }
    }

    return output
  }
  
  console.log(faktorPrima(90)); // [ 2, 3, 3, 5 ]
  console.log(faktorPrima(168)); // [ 2, 2, 2, 3, 7 ]
  console.log(faktorPrima(44)); // [ 2, 2, 11 ]
  console.log(faktorPrima(55)); // [ 5, 11 ]
  console.log(faktorPrima(26)); // [ 2, 13 ]
  
  
  
  