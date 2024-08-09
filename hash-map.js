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

    if (setIndex < 0 || setIndex >= this.numOfBuckets.length) {
      throw new Error("Trying to access index out of bound");
    }

    if (this.hashMap[setIndex] === null) {
      this.hashMap[setIndex] = newNode;
    } else {
      if (this.hashMap[setIndex].key === key) {
        this.hashMap[setIndex].value = value;
      } else if (this.hashMap[setIndex].nextNode !== null) {
        let current = this.hashMap[setIndex];
        while (current.nextNode !== null) {
          if (current.key === key) {
            current.value = value;
          } else {
            current = current.nextNode;
          }
        }
        current.nextNode = newNode;
      } else {
        this.hashMap[setIndex].nextNode = newNode;
      }
    }
  }

  get(key) {
    let index = this.hash(key);
    let currentBucket = this.hashMap[index];

    if (index < 0 || index >= this.numOfBuckets.length) {
      throw new Error("Trying to access index out of bound");
    }

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

  has(key) {
    let index = this.hash(key);
    if (index < 0 || index >= this.numOfBuckets.length) {
      throw new Error("Trying to access index out of bound");
    }

    let currentBucket = this.hashMap[index];

    if (currentBucket !== null) {
      if (currentBucket.key === key) {
        return true;
      } else if (currentBucket.nextNode !== null) {
        while (currentBucket.nextNode !== null) {
          currentBucket = currentBucket.nextNode;
          if (currentBucket.key === key) {
            return true;
          }
        }
        return false;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  remove(key) {
    let current = this.hashMap[this.hash(key)];

    if (current === null) {
      return false;
    } else if (current.key === key) {
      this.hashMap[this.hash(key)] = current.nextNode;
      return true;
    } else {
      while (current.nextNode !== null) {
        let child = current.nextNode;
        if (child.key === key) {
          current.nextNode = child.nextNode;
          return true;
        } else {
          current = current.nextNode;
        }
      }
      return false;
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

myHash.set("a", "This is the a");

myHash.set("pa", "This is the pa");

myHash.set("aaa", "This is the aaa");

console.log(myHash.remove("patter"));
