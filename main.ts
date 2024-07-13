// 15 METHODS OF ARRAYS:
//  1st METHOD = indexOf()
// this method is used to check the true and fals statement of index
let emoji:string[] = ["😎","😐","😊","🙄","😜"];
console.log(emoji.indexOf("😎") == 0);

// 2nd METHOD = lastIndexOf()
// this method is used to check the index number of an element
console.log(emoji.lastIndexOf("😊"));

// 3rd METHOD = concat()
// this method is used to to joint two array's
let emoji_1:string[] = ["😍","😒","😘","😁","🥺"]
console.log(emoji.concat(emoji_1));

// 4th METHOD = join()
// this method is used to join array
console.log(emoji.join("@"));

// 5th METHOD = push()
// this method is used to add an element in last of the array 
console.log(emoji.push("🤣"));

// 6th METHOD = pop()
// this method is used to remove an element from last of the array
console.log(emoji.pop());

// 7th METHOD = reverse()
// this method is used to reverse an array
console.log(emoji.reverse());

// 8th METHOD = shift()
// this method is used to remove an element from start of an array
console.log(emoji.shift());

// 9th METHOD = unshift()
// this method is used to add an element in start of array
console.log(emoji.unshift("🤔"));

// 10th METHOD = slice()
// this method is used to cut an array
console.log(emoji.slice(1,3));

// 11th METHOD = splice()
// this method is used to remove element from an array
console.log(emoji_1.splice(0,4));

// 12th METHOD = toString()
// this method is used to convert an array to string
 console.log(emoji_1.toString());

// 13th METHOD = filter()
// this method is used to filter an array with specific condition
let filter: string[] = ["🤣","🥺","🤣","😁","😎","🥺"];
let filter1: string[] = ["🥺","🤣","🤣","😎","🥺","🤦‍♂️","😘","😁"];
console.log(filter.filter(f => filter1.indexOf(f)));

// 14th METHOD = map()
// this method is used to get new array from given array
let number : Array<number> = [3.9, 67.5, 76.9];
console.log(number.map(Math.ceil));

// 15th METHOD = reduce()
// this method is used to reduce array from left
let result = number.reduce(function(a,b){return a - b});
console.log(result);