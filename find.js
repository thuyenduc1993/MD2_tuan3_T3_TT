function find(data) {
    var i = 1;
    var arr = [];
    while (i <= 10) {
        if (data.indexOf(i) == -1) {
            arr.push(i);
        }
        i++;
    }
    return arr;
}
console.log(find([1, 3, 5, 7, 9]));
