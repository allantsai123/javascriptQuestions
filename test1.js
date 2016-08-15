/**
 * Created by Allan on 8/15/2016.
 */

// For each index i, know one index that maximize the sum A[i] + A[index] + (i - index) = A[i] + i + (A[index] - index). 
// which A[index] - index is maximum.
function solution(A) {
    var index=1,result=0;

    for(var i = 0 ; i < A.length;i++){
        var total = A[i]+ i + A[index] - index;
        result = Math.max(result,total);
        if(A[i]-i > A[index]-index){
            index = i;
        }
    }
    return result;
}

console.log(solution([1,3,-3]));
console.log(solution([8,2,4,9,5,8,0,3,8,2]));
