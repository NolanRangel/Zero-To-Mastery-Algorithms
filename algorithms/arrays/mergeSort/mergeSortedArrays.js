


function mergeSortedArrays(arr1, arr2) {
    let array1Item = arr1[0]
    let array2Item = arr2[0]
    let newArr = [];
    let i = 1;
    let j = 1;

    if (arr1.length === 0) {
        return arr2;
    }
    if (arr2.length === 0) {
        return arr1;
    }
    // while the array1Item OR array2Item are not undefined
    while (array1Item || array2Item) {
        // if arra2Item is not undefined OR array1Item is less then array2Item
        if (!array2Item || array1Item < array2Item) {
            newArr.push(array1Item);
            array1Item = arr1[i];
            i++;
        } else {
            newArr.push(array2Item);
            array2Item = arr2[j];
            j++;
        }
    }
    return newArr;

}



console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]))