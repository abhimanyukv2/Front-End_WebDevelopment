/*
Traverse the DOM treee using querySelector() and  querySelectorAll()
*/

import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
    "Everyday Backpack",
    30,
    "gray",
    15,
    26,
    26,
    false,
    "16 December 2022",
    "../assets/images/everyday.svg",
);

// const main = document.querySelector(".maincontent");
// document.body.innerHTML = con;

// Template Literals
const content = `

    <figure class="backpack__image">
        <img src="${everydayPack.image}" alt=""/>
    </figure>
    <h1 class="backpack__name">${everydayPack.name}</h1>
    <ul class="backpack__features">
        <li class="backpack__volume packprop">Volume: <span>${everydayPack.volume}</span></li>
        <li class="backpack__color packprop">Color: <span>${everydayPack.color}</span></li>
        <li class="backpack__age packprop">Age: <span>${everydayPack.backpackAge()} days old</span></li>
        <li class="backpack__pockets">Number of pockets: <span>${everydayPack.pocketNum}</span></li>
        <li class="backpack__strap">Left strap length: <span>${everydayPack.strapLength.left}</span> inches</li>
        <li class="backpack__strap">Right strap length: <span>${everydayPack.strapLength.right}</span> inches</li>
        <li class="backpack__lid packprop">Lid Status: <span>${everydayPack.lidOpen ? 'Open' : 'Closed'}</span></li>
    </ul>

`;

const main = document.querySelector(".maincontent");

const newArticle = document.createElement("article");
newArticle.classList.add("backpack");
newArticle.setAttribute("id","everyday");

newArticle.innerHTML = content;

main.append(newArticle);

const usedStatus = () => {
    let age = everydayPack.backpackAge();
    let description;

    switch (true) {
        case age < 30:
            description = 'new'
            break
        case age >= 30 && age < 365:
            description = 'lightly used'
            break
        case age >= 356 && age < 1095:
            description = 'used'
            break
        case age >= 1095:
            description = 'old'
            break
        default:
            console.log(`There is no description for ${age}`)
    }

    console.log(`
    Age: ${age} days
    Status: ${description}
    `);
};

usedStatus();