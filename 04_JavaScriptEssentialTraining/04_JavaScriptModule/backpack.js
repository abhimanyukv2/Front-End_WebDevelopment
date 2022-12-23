const updateBackpack = (update) => {
    let main = document.querySelector("main");
    main.innerHTML = markup(backpack);
    console.log(update);
};

const backpack = {
    name: "Everday Backpack",
    volume: 30,
    color: "gray",
    pocketNum: 15,
    strapLength: {
        left: 26,
        right: 26
    },
    lidOpen: false,
    toggleLid: function (lidStatus) {
        this.lidOpen = lidStatus;
        updateBackpack(`Lid status changed;`)
    },
    newStrapLength: function (lengthLeft, lengthRight) {
        this.strapLength.left = lengthLeft;
        this.strapLength.right = lengthRight;
        updateBackpack(`Strap lengths updated.`);
    },
};

export default backpack;