/*
    Iterator Pattern:
    The Iterator Pattern is a behavioral design pattern that provides a way to access the elements of a collection (such as an array or object) sequentially without exposing the underlying structure.
    It allows us to traverse a collection in various ways, such as forward, backward, skipping elements, or applying custom traversal logic.
*/

// Sample array with mixed data types
const items = [1, "Om", false, 1.24];

// Constructor function for creating an iterator
function Iterator(items) {
  this.items = items; // Store the collection of items
  this.index = 0; // Initialize the index to start at the first item
}

// Adding methods to the Iterator's prototype
Iterator.prototype = {
  // hasNext method checks if there are more elements to iterate over
  hasNext: function () {
    return this.index < this.items.length; // Returns true if there are more elements, otherwise false
  },
  // next method returns the next element in the collection and increments the index
  next: function () {
    return this.items[this.index++]; // Returns the current item and moves to the next one
  },
};

// Creating an instance of Iterator to iterate over the 'items' array
const iter = new Iterator(items);
console.log(iter); // Logs the iterator object

// Loop through the collection using the iterator
while (iter.hasNext()) {
  console.log(iter.next()); // Logs each item in the collection sequentially
}

// Note: The Iterator Pattern allows for customization.
// You can define your own rules for traversal, such as iterating in reverse, skipping elements, or applying custom logic.
