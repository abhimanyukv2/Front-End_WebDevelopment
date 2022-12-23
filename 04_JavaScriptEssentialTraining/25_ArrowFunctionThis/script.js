// Arrow Function and "this"
// How arrow function help us with scoping

window.volume = 20;

const greenPack = {
    name: "Frog Pack",
    color: "green",
    volume: 8,
    pocketNum: 3,
    newVolume: function(volume) {
        console.log("this.volume in the method:", this.volume);
        this.volume = volume;
        console.log("this,volume after update:",this.volume);
        (() => {
            console.log("this.volume in nested function:",this.volume);
        })();
        (function ()  {
            console.log("this.volume in nested function:",this.volume);
        })();
    },
};

const addPack = (currentPack) => {
    const newArticle = document.createElement("article");
    newArticle.innerHTML = `
        <h1>${currentPack.name}</h1>
        <ul>
            <li>Volume: ${currentPack.color}</li>
            <li>Color: ${currentPack.volume}</li>
            <li>Number of pockets: ${currentPack.pocketNum}</li>
        </ul>
    `;
    return newArticle;
};

console.log(greenPack.newVolume(5));