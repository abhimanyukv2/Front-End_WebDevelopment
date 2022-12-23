/*
Create a class for the backpack object type
*/

import Backpack from "./Backpack.js";

const everydayPack = new Backpack (
    "Everyday Backpack",
    30,
    "gray",
    15,
    26,
    26,
    false,
);

console.log('The everydayPack object:',everydayPack)
console.log("The pocketNum:",everydayPack.pocketNum)