

function segitigaKosong(num){

    var mid = num - 1

    for (let i = 0; i < num; i++) {
        
        var outStr = ''
        if (i == 0) {
            for (let j = 0; j <= (num-1)*2; j++) {
                if (j == mid) {
                    outStr += '*'
                } else{
                    outStr += ' '
                }
                
            }
        } else if (i == (num-1)){
            for (let j = 0; j<=(num-1)*2; j++) {
               
                outStr += '*'
                
            }
        } else{

            for (let j = 0; j <= (num-1)*2; j++) {
                
                if (j==mid) {
                    outStr += ' '
                }else if(j == mid + i ){
                    outStr += '*'
                }else if(j == mid - i){
                    outStr += '*'
                } else{
                    outStr += ' '
                }
                
                
            }

        }


        console.log(outStr)
    }
    
    
}



segitigaKosong(10)
 /*

    *
   * *
  *   *
 *     *
*********



*/

