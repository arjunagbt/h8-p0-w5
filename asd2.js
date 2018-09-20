
// input: 'katak dalam tempurung sedang berada di makam'
// output:
// {
//   palindrome: ['katak', 'makam'],
//   nonPalindrome: ['dalam', 'tempurung', 'sedang', 'berada', 'di']
// }

// input: 'Wow honda civic ada di hacktiv8'
// output:
// {
//   palindrome: ['Wow', 'civic', 'ada'],
//   nonPalindrome: ['honda', 'di', 'hacktiv8']
// }


function splitPalindrome(str){

    var strArr = str.split(' ')
    var output ={
        palindrome: [],
        nonPalindrome: []
    }

    for (let i = 0; i < strArr.length; i++) {
        
        if (strArr[i].toLowerCase() == strArr[i].toLowerCase().split('').reverse().join('')) {

            output.palindrome.push(strArr[i])
            
        } else{
            output.nonPalindrome.push(strArr[i])
        }
        
    }
    return output

}

console.log(splitPalindrome('katak dalam tempurung sedang berada di makam'));
console.log(splitPalindrome('Wow honda civic ada di hacktiv8'));
