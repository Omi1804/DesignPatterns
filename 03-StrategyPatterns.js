/*
 * Strategy Design Pattern:
 *
 * The Strategy Pattern is a behavioral design pattern that allows you to define a family of algorithms (strategies),
 * encapsulate each one, and make them interchangeable. This pattern enables a client to choose which algorithm to use
 * at runtime, making it easier to swap out different strategies without modifying the client code.
 *
 * In this example, we'll use the Strategy Pattern to calculate shipping costs using different shipping companies.
 */

// Shipping rate calculation for FedEx
function Fedex() {
  this.calculate = (package) => {
    // FedEx calculations...
    return 2.45;
  };
}

// Shipping rate calculation for UPS
function UPS() {
  this.calculate = (package) => {
    // UPS calculations...
    return 1.56;
  };
}

// Shipping rate calculation for USPS
function USPS() {
  this.calculate = (package) => {
    // USPS calculations...
    return 4.5;
  };
}

// Example usage without the Strategy Pattern
const fedex = new Fedex();
const ups = new UPS();
const usps = new USPS();

const package = { from: "Alabama", to: "Georgia", weight: 1.56 };
console.log("Fedex: " + fedex.calculate(package));
console.log("UPS: " + ups.calculate(package));
console.log("USPS: " + usps.calculate(package));

/*
 * Strategy Pattern Implementation:
 *
 * The Shipping class acts as the context that interacts with the strategy objects (shipping companies).
 * It allows you to set the strategy dynamically and then execute the selected strategy's calculation method.
 */
function Shipping() {
  this.company = null; // Holds the current strategy (shipping company)

  // Set the strategy (which company to use)
  this.setStrategy = (company) => {
    this.company = company;
  };

  // Calculate the shipping cost using the chosen strategy
  this.calculate = (package) => {
    return this.company.calculate(package);
  };
}

// Example usage with the Strategy Pattern
const shipping = new Shipping();

shipping.setStrategy(fedex); // Set FedEx as the strategy
console.log("Fedex: " + shipping.calculate(package)); // Output the FedEx shipping cost

shipping.setStrategy(ups); // Switch to UPS strategy
console.log("UPS: " + shipping.calculate(package)); // Output the UPS shipping cost

shipping.setStrategy(usps); // Switch to USPS strategy
console.log("USPS: " + shipping.calculate(package)); // Output the USPS shipping cost
