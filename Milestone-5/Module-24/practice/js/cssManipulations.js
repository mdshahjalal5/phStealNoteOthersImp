const fruits = document.querySelectorAll(".fruits-list li");

// console.log(fruits);

// fruits.classList.add("center");

fruits.forEach((fruit) => {

    fruit.style.color = "green";
    fruit.style.padding = "20px";
    fruit.style.backgroundColor = "aqua";
    fruit.style.border = "1px solid gray";

    fruit.classList.add("center");
    
});

const fruitsList = document.querySelector(".fruits-list");

fruitsList.style.border = "2px solid gray";
fruitsList.style.borderRadius = "15px";
fruitsList.style.padding = "35px";
fruitsList.style.backgroundColor = "beige";

const sportsItems = document.querySelectorAll(".sports-container li");

sportsItems.forEach((sport)=> {
    sport.classList.add("center");
    sport.classList.remove("text-color");
})

const allHeaderTitle = document.querySelectorAll("h2");

allHeaderTitle.forEach((header)=> header.classList.add("big-font"));

// ** create and add 

const li = document.createElement("li");
const li2 = document.createElement("li");

li2.innerText = "modhupur"
const para = document.createElement("p");

para.innerText = "Hello Im JavaScript"

li.innerText = "SondarBan";

const places = document.querySelector("#places-container");

// childNodes
console.log(places.childNodes)

console.log(places.firstChild)

console.log(places.childNodes[5])

const myPlacesListUL = document.querySelector(".places-list");

myPlacesListUL.appendChild(li)
console.log(myPlacesListUL.appendChild(li2).previousSibling)
console.log(myPlacesListUL.appendChild(li2).previousSibling.nextSibling.previousSibling)
myPlacesListUL.appendChild(para)
myPlacesListUL.removeChild(para)

const sportsListUL = document.querySelector(".sports-list");

console.log(sportsListUL.childNodes)
console.log(sportsListUL.parentNode.parentNode.parentNode.parentNode.parentNode);

console.log(document.childNodes)
console.log(document.body)

console.log(sportsListUL.previousSibling)



