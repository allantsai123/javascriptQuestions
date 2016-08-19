/**
 * Created by Allan on 2016/8/14.
 */
//how would you remove duplicate members from an array

function removeDuplicate(arr){

    var exist = [];
    var outArr = [];
    var elem;

    for(var i =0;i < arr.length;i++){
        elem = arr[i];
        if(!exist[elem]){
            outArr.push(elem);
            exist[elem] = true;
        }
    }
    return outArr;
}

console.log(removeDuplicate([1,3,3,3,1,5,6,7,8,1]));