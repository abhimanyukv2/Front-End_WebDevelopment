// Standaed Function

const greenPack = {
    name: "Frog Pack",
    color: "green",
    volume: 8,
    pocketNum: 3,
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

const theArticle = addPack(greenPack);
console.log(theArticle);

const main = document.querySelector("main");
main.append(addPack(greenPack));