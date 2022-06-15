const caesar = function(str,num) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        arr[i]=String.fromCharCode((str[i].charCodeAt() + num))
        
    }
    let res = arr.join("");
    return res;
};

// Do not edit below this line
module.exports = caesar;
