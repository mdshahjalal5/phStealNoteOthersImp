// ** sync and async


console.log('first')
console.log('second')
console.log('third')
const fourthAsync = ()=>{
    setTimeout(()=>{
    console.log('fourth')
    })
}
fourthAsync()
console.log('fifth')