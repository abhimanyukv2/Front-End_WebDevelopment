// import the Backpack class so we can make new Backpack objects.
import Backpack from "./Backpack.js";

// Create new backpack object
const everydayPack = new Backpack(
    'pack01',
    'Everyday Backpack',
    30,
    'gray',
    15,
    26,
    26,
    false,
    "December 5, 2018 15:00:00 IST",
    "../assets/images/everyday.svg"
);

// Create new baackpack object
const frogPack = new Backpack(
    'pack02',
    'Frog Backpack',
    8,
    'green',
    3,
    10,
    10,
    false,
    'October 16, 2019 15:00:00 IST',
    "../assets/images/frog.svg"
);

// Add Backpack objects into an array
const backpackObjectArray = [everydayPack, frogPack];

// Export the array to be used in other files
export default backpackObjectArray;