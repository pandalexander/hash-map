function hash(key) {
  let hashCode = 0;
  let prime = 31;

  for (let i = 0; i < key.length; i++) {
    hashCode = prime * hashCode + key.charCodeAt(i);
  }

  return hashCode;
}

console.log(hash("pete"));
