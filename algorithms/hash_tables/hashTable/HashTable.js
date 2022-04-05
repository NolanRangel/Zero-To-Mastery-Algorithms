class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    // O(1)
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    //  O(1)
    set(key, value) {
        let address = this._hash(key)
        if (!this.data[address]) {
            this.data[address] = [];
            this.data[address].push([key, value]);
            // console.log(this.data);
        } else {
            this.data[address].push([key, value]);
        }
    }

    //  *No collisions O(1) *collisions O(n)
    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        // console.log(currentBucket);
        if (currentBucket.length) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1]
                }
            }
        }
        return undefined
    }

    // #1 does not check for collisions O(n)
    // #2 does check for collisions O(n^2)
    keys() {
        if (!this.data.length) {
            return undefined
        }

        // #1
        // const keysArray = [];
        // for (let i = 0; i < this.data.length; i++) {
        //     if (this.data[i]) {
        //         // console.log(this.data[i][0][0]);
        //         keysArray.push(this.data[i][0][0])
        //     }
        // }
        // return keysArray

        // #2
        let result = []
        // loop through all the elements
        for (let i = 0; i < this.data.length; i++) {
            // if it's not an empty memory cell
            if (this.data[i] && this.data[i].length) {
                // but also loop through all the potential collisions
                if (this.data.length > 1) {
                    for (let j = 0; j < this.data[i].length; j++) {
                        result.push(this.data[i][j][0])
                    }
                } else {
                    result.push(this.data[i][0])
                }
            }
        }
        return result;
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('orange', 2);
myHashTable.set('apples', 54);

// myHashTable.get('grapes', 10000);

console.log(myHashTable.keys());


