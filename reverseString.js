/**
 * Created by Allan on 8/15/2016.
 */
//how would you reverse a string in JavaScript

function reverseStr(str) {
    var revStr = "";

    for(var i = str.length-1; i >=0 ; i--){
        revStr += str[i];
    }
    return revStr;
}

console.log(reverseStr("hi does this thing work???"));


function reverseRecursive(str) {
    if(str ===""){
        return "";
    }else{
        return reverseRecursive(str.substr(1)) + str.charAt(0);
    }
}
console.log(reverseRecursive("bite that tattoo on your shoulder"));