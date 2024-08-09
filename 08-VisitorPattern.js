/*
  Visitor Design Pattern:

  The Visitor pattern allows you to add new functionality to an existing object structure without modifying the original objects. 
  This is particularly useful when you want to extend a library or framework with new operations.

  Key Concepts:
  - **Visitor Object**: The object that defines the new operation or functionality.
  - **Receiving Method**: The original object must have a method (usually named `accept`) that accepts a visitor object and allows it to access and modify the original object.

  Example:
  In this example, we have an `Employee` class, and we want to extend its functionality (e.g., doubling the salary) without altering the `Employee` class directly.
*/

function Employee(name, salary) {
  this.name = name; // Name of the employee
  this.salary = salary; // Initial salary of the employee
}

Employee.prototype = {
  // Method to get the current salary
  getSalary: function () {
    return this.salary;
  },

  // Method to set a new salary
  setSalary: function (salary) {
    this.salary = salary;
  },

  // Method to accept a visitor function, allowing it to modify the employee object
  accept: function (visitorFunction) {
    // The visitor function is given access to the employee instance (this)
    visitorFunction(this);
  },
};

// Creating an instance of Employee
const devSage = new Employee("DevSage", 10000);
console.log(devSage.getSalary()); // Output: 10000

// Now we want to extend the Employee class's functionalities

// Visitor function to double the employee's salary
function ExtraSalary(emp) {
  // Modify the employee's salary by doubling it
  emp.setSalary(emp.getSalary() * 2);
}

// Apply the visitor function to the devSage instance
devSage.accept(ExtraSalary);

console.log(devSage.getSalary()); // Output: 20000
