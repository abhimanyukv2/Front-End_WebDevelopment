let backpackContents = ["Piggy","headlamp",'pen'];
console.log(backpackContents);
console.log(backpackContents.join(" | "))

backpackContents.push("pencil", 5)
console.log(backpackContents)

backpackContents.unshift("pencil", 5)
console.log(backpackContents)

backpackContents.shift()
console.log(backpackContents)

backpackContents.pop()
console.log(backpackContents)


backpackContents.forEach(function (item) {
    item = `<li> ${item} </li>`;
    console.log(item);
})

let longItems = backpackContents.find(function (item) {
    if (item.length >= 5) {
        return item
    }
})
console.log(longItems)