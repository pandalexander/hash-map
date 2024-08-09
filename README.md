# HashMap Data Structure Practice in JavaScript

This repository contains a practice implementation of a HashMap in JavaScript. The `HashMap` class is designed to efficiently store and retrieve key-value pairs using hashing techniques, including handling collisions through linked lists (separate chaining).

## Features

- **Dynamic Bucket Resizing:** The HashMap automatically resizes its buckets when the load factor exceeds a predefined threshold, ensuring efficient storage and retrieval.
- **Collision Handling:** The implementation uses separate chaining with linked lists to handle collisions, allowing multiple key-value pairs to be stored in the same bucket.
- **CRUD Operations:** Supports standard operations like `set`, `get`, `remove`, and utility methods like `has`, `keys`, `values`, `entries`, `clear`, and `length`.

## Getting Started

### Prerequisites

To run the code, you only need a modern JavaScript runtime, such as Node.js or a web browser console.

### Usage

Here's a quick example of how to use the `HashMap` class:

```javascript
const myHash = new HashMap(16);

myHash.set("apple", "red");
myHash.set("banana", "yellow");
// Add more key-value pairs...
myHash.set("lion", "golden");

myHash.set("moon", "silver");

console.log(myHash.hashMap); // Displays the internal structure of the HashMap
```

## Methods

- **`constructor(numOfBuckets = 16, loadFactor = 0.75)`**: Initializes the HashMap with a default number of buckets and load factor.
- **`set(key, value)`**: Inserts or updates a key-value pair in the HashMap.
- **`get(key)`**: Retrieves the value associated with the given key.
- **`has(key)`**: Checks if the key exists in the HashMap.
- **`remove(key)`**: Removes the key-value pair associated with the given key.
- **`length()`**: Returns the number of key-value pairs in the HashMap.
- **`clear()`**: Clears all entries in the HashMap.
- **`entries()`**: Returns an array of all entries (nodes) in the HashMap.
- **`keys()`**: Returns an array of all keys in the HashMap.
- **`values()`**: Returns an array of all values in the HashMap.

## Hashing Function

The `hash` function generates a hash code for a given key using the multiplication of the prime number 31 and the sum of the ASCII values of the characters in the key. The resulting hash code is then modded by the number of buckets to get the index.

## Resizing and Rehashing

When the number of entries exceeds the maximum allowed by the load factor, the HashMap resizes itself by doubling the number of buckets and rehashing all existing entries.

