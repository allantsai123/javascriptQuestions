/**
 * Created by Allan on 2016/8/14.
 */
//how would you find the greatest common divisor of two numbers?

function greatestCD(a , b){
    var divisor =2;
    var gcd = 1;

    //smallest gcd is 1
    if ( a < 2 || b < 2){
        return 1;
    }
    while(a >= divisor && b >= divisor){
        if(a % divisor == 0 && b % divisor == 0){
            gcd = divisor;
        }
        divisor++;
    }
    return gcd;
}

console.log(greatestCD(14,21));
console.log(greatestCD(693,1629));
