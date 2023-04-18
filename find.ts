function find(data: number[]){
    let i: number = 1;
    let arr: number[] = [];
    while (i <= 10) {
        if (data.indexOf(i) == -1) {
            arr.push(i);
        }
        i++;
    }
    return arr;
}

console.log(find([1,3,5,7,9]));