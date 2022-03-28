//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

// psuedo
// check to see if the given input has data, if not return undefined
// create a variable and assign it as an object
// loop over the given array 
// if check, if current iteration === any of the keys
// return that key
// else add that current iteration to the hash table as,
// hashTable[input] = 1

// O(n^2)
// function firstRecurringCharacter(input) {
//     if (!input.length) {
//         return undefined
//     }
//     for (let i = 0; i < input.length; i++) {
//         for (let j = i + 1; j < input.length; j++) {
//             if (input[i] === input[j]) {
//                 return input[i]
//             }
//         }
//     }
//     return undefined
// }
// function profitLossRatio(itemName, product) {

//     for (let i = 0; i < itemName.length; i++) {
//         for (let j = 0; j < itemName.length; j++) {
//             if (itemName[i] === product[j]) {
//                 return=
//             }
//         }
//     }
//     return undefined
// }

// O(n)
// decreased the time complexity but it increases
// the space complexity because of adding the hash table
function firstRecurringCharacter(input) {
    if (!input.length) {
        return undefined
    }
    let map = {};
    for (let i = 0; i < input.length; i++) {
        // console.log(map[input[i]]);
        // if map.2 exist?
        if (map[input[i]] !== undefined) {
            return input[i]
        } else {
            map[input[i]] = 1;
        }
    }
    // console.log(map);
    return undefined
}



console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter([2, 3, 4, 5]));
console.log(firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]));

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2