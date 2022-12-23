const backpack = {
    name: "Everyday Backpack",
    newName: function (Name) {
        this.name = Name;
    },
    volume: 30,
    changeVolume: function(newVolume) {
        this.volume = newVolume;
    },
    color: 'gray',
    changeColor: function (newColor) {
        this.color = this.newColor;
    },
    pocketNum: 15,
    changePocketNum: function (newPocketNum) {
        this.pocketNum = newPocketNum;
    },
    strapLength: {
        left: 26,
        right:26,
    },
    lidOpen: false,
    toggleLid: function (lidStatus) {
        this.lidOpen = lidStatus;
    },
    newStarpLength: function (lengthLeft, lengthRight) {
        this.strapLength.left = lengthLeft;
        this.strapLength.right = lengthRight;
    },

};

console.log(backpack)

console.log('Left before:',backpack.strapLength.left)

backpack.newStarpLength (10, 15)

console.log('Left after:',backpack.strapLength.left)
