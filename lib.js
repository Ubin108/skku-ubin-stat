function sum(numbers){
    let s = 0;
    /*
    for(let i=0; i<numbers.length;i++){
        s += numbers[i];
    }
    */
    // numbers.forEash((n) => {s += n;});

    return numbers.reduce((prev, curr) => prev + curr, 0);

}


exports.sum = sum;