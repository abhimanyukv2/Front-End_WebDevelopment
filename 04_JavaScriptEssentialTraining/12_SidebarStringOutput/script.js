/*
Create a class for the backpack object type
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
    "16 December 2022"
);

// Traditional String output
const con = "<h1>hello</h1>";
document.body.innerHTML = con;

// Template Literals
const content = `
<main>
    <article>
        <h1>${everydayPack.name}</h1>
        <ul>
            <li>Volume: ${everydayPack.volume}</li>
            <li>Color: ${everydayPack.color}</li>
            <li>Age: ${everydayPack.dateAcquired}</li>
            <li>Number of Pockets: ${everydayPack.pocketNum}</li>
            <li>Left strap length: ${everydayPack.strapLength.left}</li>
            <li>Right strap length: ${everydayPack.strapLength.right}</li>
            <li>Lid status: ${everydayPack.lidOpen}</li>
        </ul>
    </article>
</main>
`;

document.body.innerHTML = content;

console.log("The everydayPack object:", everydayPack);
console.log("Date Acquired:", everydayPack.dateAcquired);

console.log("Days since aquired:", everydayPack.backpackAge());
