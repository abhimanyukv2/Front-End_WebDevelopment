const backpack = {
    name: "Everday Backpack",
    volume: 30,
    color: "gray",
    pocketNum: 15,
    strapLength: {
        left: 26,
        right: 26,
    },
    lidOpen: false,
    toggleLid: function(lidStatus) {
        this.lidOpen(lidStatus);
    },
    newStrapLength: function(lengthLeft, lengthRight) {
        this.strapLength.left = lengthLeft;
        this.strapLength.right = lengthRight;
    },
};

console.log('the backpack object:',backpack);
console.log('The pocketNum value:', backpack.pocketNum)
console.log('Strap length left:', backpack.strapLength.left)

console.log('The pocketNum value:', backpack["pocketNum"]);


var quary = "pocketNum";
console.log("The pocketNum value:", backpack[quary]);