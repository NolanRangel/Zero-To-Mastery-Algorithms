


const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        let j = i - 1;

        while ((j > -1) && (current < array[j])) {
            array[j + 1] = array[j]
            j--
        }
        array[j + 1] = current;
    }
    return array;
}

console.log(insertionSort(numbers));

function insertionSort(inputArr) {
    let n = inputArr.length;
    for (let i = 1; i < n; i++) {
        // Choosing the first element in our unsorted subarray
        let current = inputArr[i];
        // The last element of our sorted subarray
        let j = i - 1;
        while ((j > -1) && (current < inputArr[j])) {
            inputArr[j + 1] = inputArr[j];
            j--;
        }
        inputArr[j + 1] = current;
    }
    return inputArr;
}

console.log(insertionSort(numbers));