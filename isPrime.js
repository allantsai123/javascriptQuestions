/**
 * Created by Allan on 2016/8/13.
 */
//How would you verify a prime number?

function isPrime(n) {
    var divisor = 2;

    while(n > divisor) {
        if (n % divisor == 0) {
            return console.log(false);
        } else {
            divisor++;
        }
    }
    return console.log(true);
}

for(var i =2;i<1001;i++){
    console.log(i);
    isPrime(i);
}
