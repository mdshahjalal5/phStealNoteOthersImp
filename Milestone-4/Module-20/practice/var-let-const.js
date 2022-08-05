// ** var - let - const 

var age; // * Declare kora jai 

var age = 32; //* Declare + Assign kora jai eksathe (Joto bar khushi declare kora jabe)

age = 55; //** Sudhu assign kora jai declare er por alada vabe */

// ** Global scope code er jekono jaigai ei ta change hole shob change hoye jabe

console.log(age);

let money; // * Declare kora jai only ek bar e

let Mymoney = 32; //* Declare + Assign kora jai eksathe but only ek bar declare kora possible

money = 55; //** Sudhu assign kora jai declare er por alada vabe */

// ** block scope -> jodi global block e use kora hoi tahole sob jaigai pawa jabe take
// ? Abar jodi only kono block e ex-> function block or loop or condition block e use kora hoi tahole sudhu oi block ei access kora jabe

console.log(money);

// ** const and let er moddhe only difference holo const k re-assign kora jai na and alada vabe declare kora jai na-> declare and assign ek sathe korte hoi.

const myCountry = 'Bangladesh'