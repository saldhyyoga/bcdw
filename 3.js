function printImage(param){
var s = ''
for(let i=0; i<param; i++){
	for(let j=0; j<param; j++){
        if(i%2==0 && j==2){
            s+= '= '
        }
        s+='* ';
    }
	s += '\n'
}
console.log(s)
}
printImage(5)