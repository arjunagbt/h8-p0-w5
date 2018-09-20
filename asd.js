// input: 'dimitri'
// output: {d: 1, i: 3, m: 1, t: 1, r: 1}

// input: 'yosephine mellyana'
// output: {y: 2, o: 1, s: 1, e: 3, p: 1, h:1, i: 1, n: 2, m: 1, l:2, a:2}


// ===============



function wordCount(str) {

    var output ={}
    var strArr = str.split('')
    
    for (let i = 0; i < strArr.length; i++) {
        
        if(strArr[i] !== ' '){
        if(!output[strArr[i]]){
            output[strArr[i]] = 1

        } else {
            output[strArr[i]] ++
        }
    }

        
    }
    
    return output
}

console.log(wordCount('yosephine mellyana'))
console.log(wordCount('dimitri'));
