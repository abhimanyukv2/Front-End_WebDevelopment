// Set up the Backpack class

class Backpack {
    constructor(
        id,
        name,
        volume,
        color,
        pocketNum,
        strapLengthL,
        strapLengthR,
        lidOpen,
        dataAcquired,
        image,
    )
    {
        this.id = id;
        this.name = name;
        this.volume = volume;
        this.color = color;
        this.pocketNum = pocketNum;
        this.strapLength = {
            left: strapLengthL,
            right: strapLengthR,
        };
        this.lidOpen = lidOpen;
        this.dataAcquired = dataAcquired;
        this.image = image;
    }
    toggleLid(lidStatus) {
        this.lidOpen = lidStatus;
    }
    newStrapLength(lenghtLeft, lenghtRight) {
        this.strapLength.left = lenghtLeft;
        this.strapLength.right = lenghtRight;
    }
    backpackAge() {
        let now = new Date();
        let acquired = new Date(this.dataAcquired);
        let elapsed = now - acquired;
        let daysSinceAcquired = Math.floor(elapsed/(1000*3600*24));
        return daysSinceAcquired;
    }
}

// Export the Backpack class to be used by other files
export default Backpack;