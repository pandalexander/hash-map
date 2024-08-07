class HashMap {
  constructor(numOfBuckets) {
    this.numOfBuckets = numOfBuckets;
    this.hashMap = Array.from({ length: numOfBuckets }).fill(null);
  }

  hash(key) {
    let hashCode = 0;
    let prime = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (prime * hashCode + key.charCodeAt(i)) % this.numOfBuckets;
    }

    return hashCode;
  }

  set(key, value) {
    let newNode = new Node(key, value);

    let hashCode = this.hash(key);
    let setIndex = hashCode;

    if (this.hashMap[setIndex] === null) {
      this.hashMap[setIndex] = newNode;
    } else {
      if (this.hashMap[setIndex].key === key) {
        this.hashMap[setIndex].value = value;
      } else {
        this.hashMap[setIndex].nextNode = newNode;
      }
    }

    console.log(this.hashMap);
    console.log("");
  }

  get(key) {
    let index = this.hash(key);
    let currentBucket = this.hashMap[index];

    if (currentBucket !== null) {
      if (currentBucket.key === key) {
        return currentBucket.value;
      } else {
        while (currentBucket.nextNode !== null) {
          currentBucket = currentBucket.nextNode;
          if (currentBucket.key === key) {
            return currentBucket.value;
          }
        }
      }
    } else {
      return null;
    }
  }
}

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.nextNode = null;
  }
}

const myHash = new HashMap(16);

myHash.set("pete", "This is the pete");

myHash.set("sara", "This is the sara");

myHash.set("tepe", "This is the tepe");

console.log(myHash.get("pete"));

console.log(myHash.get("tepe"));

console.log(myHash.get("peet"));
