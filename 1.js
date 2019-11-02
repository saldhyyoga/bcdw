const findMaxMin = arr => {
    let min = arr[0], max=arr[0], sum = arr[0], temp;

    for(let i=1; i<arr.length; i++){
        temp = arr[i]
        sum += temp
        if(temp > max ) max = temp;
        if(temp < min ) min = temp;
    }
    console.log(sum-min, sum-max);
}

console.log(findMaxMin([1,2,3,4,5]))