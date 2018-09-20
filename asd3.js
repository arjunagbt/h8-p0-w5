function hapusSimbol(str) {
    // you can only write your code here!
    var sym = '! @#$%^&*()_+=-`~'
    

    while(str){

        var isSymbol = false

        for (let i = 0; i < sym.length; i++) {
           if (sym[i] == str[0]) {
               isSymbol = true
                break
           }
            
        }

        if (isSymbol) {
            return hapusSimbol(str.slice(1))
        }else{
            return str[0] + hapusSimbol(str.slice(1))
        }
    }
    return ''
  }
  
  // TEST CASES
  console.log(hapusSimbol('test%$4aa')); // test4aa
  console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
  console.log(hapusSimbol('ma@#k!an~')); // makan
  console.log(hapusSimbol('coding')); // coding
  console.log(hapusSimbol('1+3-5*2=100')); // 1352100
  