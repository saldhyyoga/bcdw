function sortArray(arr){
    for(let i=0; i<arr.length; i++){
        arr[i].sort()
    }
    return arr.sort((x,y) => x.length - y.length)
}

console.log(sortArray([['a','c','b','e','d'],
    ['g','e','f']
    ]))