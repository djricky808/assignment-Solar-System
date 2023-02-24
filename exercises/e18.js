import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
const discoveryYears = data.asteroids
  .map(asteroid => asteroid.discoveryYear);
var counts = {};
var compare = 0;
  for (var i = 0; i < discoveryYears.length; i++) {
    var year = discoveryYears[i];
    if (counts[year] === undefined) {
        counts[year] = 1;
    }
    else {
      counts[year] = counts[year] + 1 
    }
    if (counts[year] > compare) {
      compare = counts[year];
      var mostFrequentYear = discoveryYears[i];
    }
  }
  return mostFrequentYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
