/* Creating an advance function.
loop through backpackObjectArray to create an article with the class 'backpack'
Give the article the ID of the current backpack object.
set the innerHTML of the article to the existing HTML output provided in const content
append each object to the <main> element */

import backpackObjectArray from "./components/data.js";

// map throught the array and make a new array
const content = backpackObjectArray.map((backpack) => {
    // 'backpack' now hold single backpack object

    // Create a new article
    let backpackArticle = document.createElement("article");
    backpackArticle.classList.add("backpack");

    // set article to the backpack.id property
    backpackArticle.setAttribute("id",backpack.id);

    // set the innerHTML of the backpackArticle using the backpack objects.
    backpackArticle.innerHTML = `
    <figure class="backpack__image">
        <img src=${backpack.image} alt="" loading="lazy" />
    </figure>
    <h1 class="backpack__name">${backpack.name}</h1>
    <ul class="backpack__features">
        <li class="feature backpack__volume">Volume: <span>${backpack.volume}</span></li>
        <li class="feature backpack__color">Color: <span>${backpack.color}</span></li>
        <li class="feature backpack__age">Age: <span>${backpack.backpackAge()} days old</span></li>
        <li class="feature backpack__pockets">Number of pockets: <span>${backpack.pocketNum}</span></li>
        <li class="feature backpack__strap">Left strap length: <span>${backpack.strapLength.left}</span></li>
        <li class="feature backpack__strap">Right strap length: <span>${backpack.strapLength.right}</span></li>
        <li class="feature backpack__lid">Lid Status: <span>${backpack.lidOpen ? 'Open' : 'Closed'}</span></li>
    </ul>
    `;

    // return the backpaclArticle to the content array
    return backpackArticle;
});

// Get the main
const main = document.querySelector(".maincontent");

// Loop through the content array to append each backpack article
content.forEach((backpack) => {
    main.append(backpack)
});