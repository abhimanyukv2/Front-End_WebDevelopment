/*
Creating classes:

Class declaration: class name {}
class expression: const Name = class {}
*/

// export default Backpack;

class Backpack {
    constructor(
        //Defines Parameters:
        name,
        volume,
        color,
        pocketNum,
        strapLengthL,
        strapLengthR,
        lidOpen,
        dateAcquired,
        image,
    ) {
        // Define Properties:
        this.name = name;
        this.volume = volume;
        this.color = color;
        this.pocketNum = pocketNum;
        this.strapLength = {
            left: strapLengthL,
            right: strapLengthR,
        };
        this.lidOpen = lidOpen;
        this.dateAcquired = dateAcquired;
        this.image = image;
    }

    // Add method like normal function
    toggleLid(lidStatus) {
        this.lidOpen = lidStatus;
    }
    newStrapLength(lengthLeft, lengthRight) {
        this.strapLength.left = lengthLeft;
        this.strapLength.right = lengthRight;
    }
    backpackAge() {
        let now = new Date()
        let acquired = new Date(this.dateAcquired);
        let elapsed = now - acquired  // elasped time in miliseconds
        let daysSinceAcquired = Math.floor(elapsed/(1000*3600*24))
        return daysSinceAcquired
    }
}

export default Backpack;