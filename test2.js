/**
 * Created by Allan on 8/15/2016.
 */


function solution(K ,A) {

    A.sort(function (a,b) {
        return a-b;
    });

    var i =0,j = A.length-1,count=0;

    while(i <= j){
        if(A[i] + A[j] == K) {
            var A1 = A[i];
            var A2 = A[j];
        }
        else if(A[i] + A[j] < K)
            i += 1;
        else if(A[i] + A[j] > K)
            j -= 1;
    }
    return null;

}
var A = [1,8,-3,0,1,3,-2,4,5];

console.log(solution(6,A));