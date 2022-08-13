// ** Kothay add korbo

const mainContainer = document.getElementById("main-container");

// ** ki add korbo

// ** ekta section add korbo

// ** so section banai

const section = document.createElement("section");

// ** section er vitor ki ki add korbo 

const h1 = document.createElement("h1");
h1.innerText = "My favorite place to visit"

section.appendChild(h1);

// ** er por ki add korbo

const unorderedList = document.createElement("ul");
const li1 = document.createElement("li");
li1.innerText = "Bandarban";
const li2 = document.createElement("li");
li2.innerText = "Sundarban";
const li3 = document.createElement("li");
li3.innerText = "Jamtola";


unorderedList.appendChild(li1);
unorderedList.appendChild(li2);
unorderedList.appendChild(li3);

section.appendChild(unorderedList);

mainContainer.appendChild(section);

const listItems = unorderedList.childNodes;

listItems.forEach((item)=>{
    item.style.border = "1px solid red";
    item.style.padding = "17px";
})

// ** Lets add another section

const section2 = document.createElement("section");

section2.innerHTML = `
    <h1>My Dresses</h1>
    <ul>
        <li>Pant</li>
        <li>Shirt</li>
        <li>Genji</li>
        <li>Lungi</li>
    </ul>
   
`
mainContainer.appendChild(section2);



