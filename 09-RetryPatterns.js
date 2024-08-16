// Retry Design Pattern
//
// The Retry pattern is used to gracefully handle temporary failures when making external network calls or API requests.
// It helps improve the stability of an application by retrying the failed operation until a successful response is received or a maximum retry threshold is reached.
//
// How it works:
// - The operation (e.g., an API call) is attempted repeatedly in case of failure.
// - If the operation fails, it is retried after a delay (optional) until it succeeds or a predefined number of attempts is reached.
// - This pattern is especially useful in distributed systems where network failures are common.

function retryOperation() {
  let currentTry = 0; // Keeps track of the number of attempts

  while (true) {
    // Optional: Implement a delay between retries (e.g., using setTimeout)
    try {
      // Attempt the external network call
      externalServiceCall();
      console.log("Succeeded");
      break; // Exit loop if the call is successful
    } catch (error) {
      currentTry++; // Increment the attempt count
      console.log("Failed Attempt: " + currentTry);

      // Check if the maximum number of retries has been reached
      if (currentTry >= 10) {
        console.log("Retry maximum reached. Exiting...");
        break; // Exit loop if retry limit is reached
      }
    }
  }
}

function externalServiceCall() {
  console.log("Calling external service...");

  // Simulate a 50% chance of failure
  const shouldPass = Math.random() < 0.5;
  if (shouldPass) {
    return true; // Operation succeeded
  } else {
    throw "Error"; // Operation failed, throw an error
  }
}

// Execute the retry operation
retryOperation();
