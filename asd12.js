function isPrima(num){
   
    for (let i = 2; i < num; i++) {
        
        if (num % i == 0) {
            return false
        } else if(num === i * i){
            return false
        }
        
    }
    return num !== 1
}


function ularTanggaPrime (num){

    var output = []
    var counter = num*num
    var limit = num*num-num
    for (let i = 0; i < num; i++) {
        
        output.push([])
        while (counter>limit) {
            
            if (i % 2 == 0) {
                if(isPrima(counter)){
                    output[i].unshift(`${counter}#`)
                }else if(counter % 2 !== 0 && !isPrima(counter)){
                    output[i].unshift(`${counter}*`)
                }else if(counter % 2 == 0 && !isPrima(counter)){
                    output[i].unshift(counter)
                }
                
            }else{
                if(isPrima(counter)){
                    output[i].push(`${counter}#`)
                }else if(counter % 2 !== 0 && !isPrima(counter)){
                    output[i].push(`${counter}*`)
                }else if(counter % 2 == 0 && !isPrima(counter)){
                    output[i].push(counter)
                }
                
            }
            counter --
        }
        limit -= num

    }


    return output

}


console.log(ularTanggaPrime(8))