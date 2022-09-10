// ** getCookies access

const getCookie = ()=>{
    const splitedStringCokie = document.cookie.split('; ');
    const valueCokie = splitedStringCokie.map(cookie => {
        const myCokie = cookie.split('=')[1];
        return myCokie;
    });

    return valueCokie;
};


// const getSpecifucCookie = ()=>{
//     const splitedStringCokie = document.cookie.split('; ');
//     const valueCokie = splitedStringCokie.find(cookie => {
//        cookie.split('=')[0] === 'country' ? console.log(cookie.split('=')[1]) : "no")
    

//     return valueCokie;
// };
