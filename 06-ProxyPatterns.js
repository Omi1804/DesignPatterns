/*
    Proxy Design Pattern:
    The Proxy Design Pattern provides a surrogate or placeholder object, known as the proxy, that controls access to another object.
    The proxy can be used to add an extra layer of functionality, such as lazy initialization, logging, access control, or caching, before delegating the request to the original object.
    
    In this example, we're simulating an API that fetches cryptocurrency prices. The proxy object will cache the results of API calls to avoid making redundant and expensive requests.
*/

// Simulated external API that fetches cryptocurrency prices
function CryptocurrencyAPI() {
  // Method to get the value of a specific cryptocurrency
  this.getValue = function (coin) {
    console.log("Calling External API...");

    // Simulate returning different prices for different cryptocurrencies
    switch (coin) {
      case "Bitcoin":
        return "$8500";
      case "Litecoin":
        return "$50";
      case "Ethereum":
        return "$100";
      default:
        return "Unknown Coin";
    }
  };
}

// Example usage of the external API
const api = new CryptocurrencyAPI();
console.log(api.getValue("Bitcoin")); // This makes a direct API call

// The problem: If we need to make multiple requests, especially repeated ones, it could become inefficient and time-consuming
// Solution: Use a proxy to cache results and avoid redundant API calls

// Proxy class that adds a caching layer on top of the external API
function CryptoCurrencyProxy() {
  this.api = new CryptocurrencyAPI(); // Reference to the original API
  this.cache = {}; // Object to store cached results

  // Method to get the value of a specific cryptocurrency, using cache if available
  this.getValue = function (coin) {
    // Check if the value is already in the cache
    if (this.cache[coin] == null) {
      // If not in cache, call the external API and store the result in the cache
      this.cache[coin] = this.api.getValue(coin);
    }
    // Return the cached value
    return this.cache[coin];
  };
}

// Example usage of the proxy
const proxy = new CryptoCurrencyProxy();

// The first call to each coin will fetch from the API and cache the result
console.log(proxy.getValue("Bitcoin")); // Calls external API and caches the result
console.log(proxy.getValue("Litecoin")); // Calls external API and caches the result
console.log(proxy.getValue("Ethereum")); // Calls external API and caches the result

// Subsequent calls will use the cached result, avoiding the external API
console.log(proxy.getValue("Bitcoin")); // Returns cached result
console.log(proxy.getValue("Litecoin")); // Returns cached result
console.log(proxy.getValue("Ethereum")); // Returns cached result
// In these results you can notice that external api console is not working as the result directly comes from cached apis
