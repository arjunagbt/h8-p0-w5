function printAsterisk(j){
            
    if(!j){
        return ''
    } else {
        return '*' + printAsterisk(j-1)
    }

}

function revAsterisk (num){
    
    

    if(!num){  
        return ''
    } else {
        
        return printAsterisk(num) + '\n' + revAsterisk(num-1)
    }
    

}

console.log(revAsterisk(7))