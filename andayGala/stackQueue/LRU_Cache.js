// L#5 146

// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// capacity is constant

//[[key, val]]
//[[1, a], [2, b], [3, c]]
// LRU            MRU
// add [4,d]
//[[2, b], [3, c], [4, d]]
// update key=3's value to 'e', [3, e]
//[[2, b], [4, d], [3, e]]
// get key=2's value [2, b]
// [[4, d], [3, e], [2, b]]


// T: O(1) and S: O(N)  

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();  // S: O(N)  
    }
  
    get(key) {
        if (this.map.has(key)) {
            let val = this.map.get(key); // T: O(1)
            this.map.delete(key);  
            // new it will be MRU
            this.map.set(key, val);
            return val;
        } else {
            return -1;
        }
    }

    put(key, val) {
        if (this.get(key) == -1) {
            if (this.map.size === this.capacity) {
                for (let keyVal of this.map) { // T: O(1)
                    this.map.delete(keyVal[0]);
                    break;
                }
            }
        }
        this.map.set(key, val);
    }

   
}

const cache = new LRUCache(4);
cache.put(1, 'a');
cache.put(2, 'b');
cache.put(3, 'c');
cache.put(4, 'd');
cache.put(3, 'f');
cache.put(4, 'e');
cache.put(5, 'g');
cache.get(3);
cache.get(5)
console.log(cache);

