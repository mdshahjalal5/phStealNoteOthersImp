
// const headerOne = document.querySelector("#header-1");

// headerOne.innerHTML = "Hello";


// console.dir(document)

// document.body.style.backgroundColor = "pink";

// ** getElementsByTagName()-> will provude us the HTML collection of the tags we're looking for + innerHTML


const myListItemsCollection = document.getElementsByTagName("li");

console.log(myListItemsCollection);

let myStr = "";

for (const listItem of myListItemsCollection) {
    
    let list = listItem.innerHTML;

    myStr += " "+ list;

}

console.log(myStr);

const myHeadingsCollection = document.getElementsByTagName("h1");

// ** myHeadingsCollection will return us HTML collection which is not an array but an array like object

for (const heading of myHeadingsCollection) {

    console.log(heading.innerHTML);
}

// ** getElementById() -> if no id / or no element exists return null

const fruitTitle = document.getElementById("fruits-title");
const fruitTitle2 = document.getElementById("fruit-title"); //not exist

console.log(fruitTitle2) // return null

console.log(fruitTitle);

fruitTitle.style.color = "red";

// ** getElementsByClassName() --> return html collections of an array like object -> if no class exists return an empty collection

const favoritePlaces = document.getElementsByClassName("favorite-places");
const favoritePlaces2 = document.getElementsByClassName("favorit-places"); // no such class exist

console.log(favoritePlaces2) // empty html collection HTMLCollection [] returns

console.log(favoritePlaces);

for (const place of favoritePlaces) {
    console.log(place.innerText)

    place.style.color = "black"
}


// ** querySelectorAll() + querySelector()

const myFavPlaces = document.querySelectorAll(".favorite-places");

console.log(myFavPlaces)

const travel = document.querySelectorAll(".section-travel li");

travel.forEach(destination => {
    console.log(destination.innerText);
});

const myOnlyFavPlace = document.querySelector(".favorite-places");
console.log(myOnlyFavPlace);

console.log(myFavPlaces.item(2).innerHTML);


// ** Innertext vs innerHTML

const myContainer = document.getElementsByClassName("text-head");

console.log(myContainer.innerHTML);