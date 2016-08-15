/**
 * Created by Allan on 2016/8/14.
 */
//How do get nth Fibonacci number?

//method 1, time complexity O(n)
function fibonacci(n){
    var fib=[0,1];

    if(n<=2){
        return 1;
    }
    for(var i = 2; i<=n;i++){
        fib[i] = fib[i-1]+fib[i-2];
    }
    return console.log(fib[n]);
}

//method 2, recursive, time complexity O(2^n)
function fibonRe(n){

    if(n<=1){
        return n;
    }else{
        return fibonRe(n-1)+fibonRe(n-2);
    }
}

fibonacci(12);
console.log(fibonRe(13));