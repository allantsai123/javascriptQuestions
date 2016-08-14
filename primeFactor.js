/**
 * Created by Allan on 2016/8/13.
 */
//How could you find all prime factors of a number?

function primeFactor(n){
    var divisor=2;
    var factor=[];

    while(n>2){
        if(n%divisor==0){
            factor.push(divisor);
            n = n / divisor;
        }else{
            divisor++;
        }
    }
    return console.log(factor);
}

primeFactor(36);
//O(n)