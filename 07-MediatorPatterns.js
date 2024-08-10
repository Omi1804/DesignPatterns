/*
  Mediator Design Pattern:
  The Mediator pattern allows you to define an object (called the mediator) that encapsulates and controls how a set of objects interact with each other.

  Instead of objects communicating directly with each other, they send messages to the mediator, which handles the logic of where each message should go. This helps reduce the dependencies between objects, making the system easier to manage.

  Example: Chatroom
  In a chatroom, users do not send messages directly to each other. Instead, they send messages to the chatroom (mediator), which then decides how to route those messages to the appropriate recipients.
*/

// Constructor function for creating a Member (user) in the chatroom
function Member(name) {
  this.name = name; // Each member has a name
  this.chatroom = null; // The chatroom reference will be set when the member joins a chatroom
}

// Assigning methods to the Member constructor function
Member.prototype = {
  // Method to send a message to another member via the chatroom mediator
  send: function (message, toMember) {
    // The message, the sender, and the intended recipient are passed to the chatroom's send method
    this.chatroom.send(message, this, toMember);
  },

  // Method to receive a message from another member
  receive: function (message, fromMember) {
    // Logs the message received along with the sender's name
    console.log(`${fromMember.name} to ${this.name} : ${message}`);
  },
};

// Constructor function for creating the Chatroom (mediator)
function Chatroom() {
  this.members = {}; // An object to keep track of all members in the chatroom
}

Chatroom.prototype = {
  // Method to add a member to the chatroom
  addMember: function (member) {
    this.members[member.name] = member; // Adds the member to the members object
    member.chatroom = this; // Sets the chatroom reference in the member
  },

  // Method to send a message from one member to another
  send: function (message, fromMember, toMember) {
    // Calls the receive method on the recipient member, passing the message and sender
    toMember.receive(message, fromMember);
  },
};

// Example usage
const chat = new Chatroom(); // Create a new chatroom instance

// Create members
const bob = new Member("Bob");
const john = new Member("John");
const tim = new Member("Tim");

// Add members to the chatroom
chat.addMember(bob);
chat.addMember(john);
chat.addMember(tim);

// Bob sends messages to John and Tim via the chatroom mediator
bob.send("Hey, John", john);
bob.send("Hey, Tim", tim);
