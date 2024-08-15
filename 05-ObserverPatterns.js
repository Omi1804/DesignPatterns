/*
    Observer Design Pattern:
    This pattern establishes a one-to-many relationship between a subject (the entity being observed) and multiple observers (entities that react to changes in the subject).
    
    Observers subscribe to the subject, meaning they register themselves to be notified of any events or changes in the subject.
    When the subject triggers an event, all subscribed observers are notified and execute their respective functions.
*/

function Subject() {
  this.observers = []; // Initialize an array to hold the observer functions
}

Subject.prototype = {
  // Method to add an observer function to the subject
  subscribe: function (fn) {
    this.observers.push(fn); // Add the observer function to the observers array
  },
  // Method to remove an observer function from the subject
  unsubscribe: function (fnToRemove) {
    // Filter out the observer function that matches the one to be removed
    this.observers = this.observers.filter((fn) => fn !== fnToRemove);
  },
  // Method to trigger all observer functions
  fire: function () {
    // Call each observer function that is subscribed to the subject
    this.observers.forEach((fn) => fn.call());
  },
};

// Create a new Subject instance
const subject = new Subject();

// Define observer functions
function Observer1() {
  console.log("Observer 1 Firing!");
}

function Observer2() {
  console.log("Observer 2 Firing!");
}

function Observer3() {
  console.log("Observer 3 Firing!");
}

// Subscribe the observers to the subject
subject.subscribe(Observer1);
subject.subscribe(Observer2);
subject.subscribe(Observer3);

// Trigger the observers by firing the subject
subject.fire();
