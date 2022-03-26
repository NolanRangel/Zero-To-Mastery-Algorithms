



function reverse(str) {
    let newStr = '';
    if (typeof str === 'string' && str.length > 0) {
        for (let i = str.length - 1; i >= 0; i--) {
            newStr += str[i];
        }
    } else {
        return 'must be string data type and greater then 0 characters'
    }
    return newStr;

}


console.log(reverse('Hi my name is Nolan'));
console.log(reverse(''));
console.log(reverse(1));

