export const numberToStringWithDivider = (num) => {
    const str = num.toString();

    if (str.length <= 3) return str;
    
    let div = 0;
    let result = '';

    for (let i = str.length - 1; i >= 0; i--) {
        if (div === 3) {
            result = "'" + result;
            div = 0;
        }
        result = str[i] + result;
        div++;
    }

    return result;
}