function printSquare(num){

    for (let i = 0; i < num; i++) {
       var strOut = ''
        if (i == 0 || i == num - 1) {
            for (let j = 0; j < num; j++) {
                
                strOut += '-'
                


                
            }
        } else {

            for (let j = 0; j < num; j++) {
                
                if (j == 0 || j == num - 1) {
                    strOut += '|'
                } else {
                    strOut += ' '
                }
                
            }
        }
        console.log(strOut)
    }

    
}

printSquare(10)