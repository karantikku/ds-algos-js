class Queue {
    constructor(size) {
        this.items = [];
    }

    enqueue(data) {
        this.items.unshift(data);
    }
    dequeue(data) {
        if (this.isEmpty()) {
           return "Underflow";
        }
        else {
            this.items.pop();
        }
    }
    front() {
        if (this.isEmpty()) {
            return "No elements in Queue";
        }
        return this.items[0];
    }
    isEmpty() {
        return this.items.length == 0;
    }
    printQueue() {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
    findItem(findItem) {
        let index = this.items.findIndex((item) => {
            if(item === findItem) {
                return true;
            }
        });
        return index;
    }
    erase(index) {
        this.items.splice(index, 1)
    }
    size() {
        return this.items.length;
    }
};



class LRU {
    constructor(size) {
        this.cacheSize = size;
        let queue = new Queue(size); 
        this.queue = queue;
    } 
    refer(item) {
        if(this.queue.findItem(item) === -1) {
            if(this.queue.size() === this.cacheSize ) {
                console.log('dequeu');
                this.queue.dequeue();
            } 
        }
        else {
            const index = this.queue.findItem(item);
            this.queue.erase(index);
        }
        this.queue.enqueue(item);
    } 
    display() {
        let str = this.queue.printQueue();
        return str;
    } 
}

let cache = new LRU(4);
cache.refer(1); 
cache.refer(2); 
cache.refer(3); 
cache.refer(1); 
cache.refer(4); 
cache.refer(5); 

console.log('cache: ', ca.display());
