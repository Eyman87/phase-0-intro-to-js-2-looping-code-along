// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.lenght; i++) {
//         console.log(`Wrapped ${gifts[i]} and addeda  bow!`);
//         debugger;
//     }
//     return gifts;
// }
// wrapGifts(gifts);

function writeCards (names, eventName) {
    let newArray = []
    for (let i = 0; i < names.length; i++) {
    newArray.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
}
return newArray
}


let countDown = function(i) {
    console.log(i);
    i>0 && countDown(i-1)
}
countDown(10)
