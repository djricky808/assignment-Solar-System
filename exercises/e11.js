import { data } from "../data/data";

// SPACE DATA EXERCISE 11
// Return an array of Planets' names with less than 10 moons
// include planets with 0 moons
// Return example: ['name1', 'name2', ... , 'nameN']

export function lowMoonsPlanets(data) {
  // Your code goes here...
  const planetsWithLessThan10Moons = data.planets.filter(planet => {
    if (planet.moons) {
      if (planet.moons.length < 10) {
        return planet; 
      }
    }
    else {
      return planet;
    }});
  return planetsWithLessThan10Moons.map(planet =>
    planet.name);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
