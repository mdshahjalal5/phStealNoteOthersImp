function sum  (a,b,c) {
    // console.dir(arguments)
    const args = [...arguments] // convert arguments to an array
    console.log(args)
    return a + b + c
};

console.log(sum(3,4,5,2,1,3,3))


