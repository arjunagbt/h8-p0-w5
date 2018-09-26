function ularTangga (num){

    var output = []
    var counter = num*num
    var limit = num*num-num
    for (let i = 0; i < num; i++) {
        
        output.push([])
        while (counter>limit) {
            
            if (i % 2 == 0) {
                output[i].unshift(counter)
            }else{
                output[i].push(counter)
            }
            counter --
        }
        limit -= num

    }


    return output

}


console.log(ularTangga(8))