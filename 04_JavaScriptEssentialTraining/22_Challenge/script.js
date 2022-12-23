const deskArray = [
    "pen",
    "camera",
    "phone",
    "notebook",
    "headphone",
    "Lightblub",
    "USB drive",
]

console.log("Original array:",deskArray)

// remove the list item
console.log(deskArray.pop())
console.log("New array:",deskArray)

// Add last item as first item on the array
deskArray.unshift(deskArray.pop())
console.log("last item is now first:",deskArray)

// sort item by alphabetical order
deskArray.sort()
console.log("Sorted array:",deskArray)

// find notebook
const foundItem = deskArray.find(item => item === 'notebook')
console.log("Found item:", foundItem)


// find and remove item
const remove = 'notebook'
console.log(deskArray.splice(deskArray.indexOf(remove),1))
console.log(`Array with "${remove}" removed:`, deskArray)