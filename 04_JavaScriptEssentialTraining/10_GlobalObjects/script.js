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
    "16 December 2022"
);

console.log('The everydayPack object:',everydayPack)
console.log("Date Acquired:",everydayPack.dateAcquired)

console.log("Days since aquired:", everydayPack.backpackAge())