/*
 * Singleton Pattern:
 *
 * The Singleton Pattern is a creational pattern that ensures a class has only one instance and provides a global point of access to that instance.
 * This pattern is useful when exactly one object is needed to coordinate actions across the system, such as managing processes or maintaining a global state.
 *
 * In this example, we'll create a Singleton for a Process Manager, which ensures that only one instance of the manager can exist to manage all processes.
 */

// Constructor function for a Process, representing an individual process with a specific state
function Process(state) {
  this.state = state;
}

/*
 * Singleton Implementation:
 *
 * This immediately invoked function expression (IIFE) creates a closure that encapsulates the singleton logic.
 * The `Singleton` object has a private variable `pManager` that holds the single instance of `ProcessManager`.
 * The `getProcessManager` method checks if an instance already exists; if not, it creates one.
 * This ensures that only one instance of `ProcessManager` can ever be created.
 */
const Singleton = (function () {
  // Constructor for ProcessManager, which tracks the number of processes
  function ProcessManager() {
    this.numProcesses = 0;
  }

  // Private variable to hold the single instance of ProcessManager
  let pManager;

  // Function to create the ProcessManager instance
  function createProcessManager() {
    pManager = new ProcessManager();
    return pManager;
  }

  // Return an object with a method to get the singleton instance
  return {
    getProcessManager: () => {
      if (!pManager) {
        pManager = createProcessManager();
      }
      return pManager;
    },
  };
})();

// Obtain the singleton instance of ProcessManager
const processManager = Singleton.getProcessManager();
const processManager2 = Singleton.getProcessManager();

console.log(processManager === processManager2); // true, both references point to the same instance
