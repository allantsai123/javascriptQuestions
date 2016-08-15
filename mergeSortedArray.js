/**
 * Created by Allan on 8/15/2016.
 */
//how would you merge two sorted array

function mergeSortedAray(a,b) {
    var merge =[];
    var eleA=a[0],eleB=b[0];
    var i = 1, j=1;

    if(a.length==0){
        return b;
    }
    if(b.length==0){
        return a;
    }

    while(eleA || eleB){
        if((eleA && !eleB) || eleA < eleB){
            merge.push(eleA);
            eleA = a[i++];
        }else{
            merge.push(eleB);
            eleB = b[j++];
        }
    }
    return merge;
}

console.log(mergeSortedAray([1,2,5,6,9,13,14],[1,2,3,29]));