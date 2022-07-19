function falardepoisde(frase,segundos){
return  new Promise((resolve,reject)=>{
setTimeout(()=>{
},resolve(frase)
),segundos*500
})}
falardepoisde(3,"que legal")

.then(outrafrase=>console.log(outrafrase))