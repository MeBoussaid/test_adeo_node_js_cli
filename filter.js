const { data } = require("./data.js");

function getFilterPatternFromCLI() {
  const filterArgument = process.argv.find((argument) =>
    argument.startsWith("--filter=")
  );
  if (!filterArgument) {
    console.log("Use: node filter.js --filter=<pattern>");
    process.exit(1);
  }

  return filterArgument.split("=")[1];
}

function filter(data, pattern) {
  const trimmedPattern = pattern.trim();

  if (!trimmedPattern) {
    console.log("Invalid pattern: cannot be empty or white spaces.");
    return null;
  }

  const filteredCountries = filterCountries(data, trimmedPattern);

  if (filteredCountries.length === 0) {
    console.log("No animals found for the given pattern.");
    return null;
  }

  return filteredCountries;
}

function filterCountries(countries, pattern) {
  return countries
    .map((country) => {
      const filteredPeople = filterPeopleOfACountry(country.people, pattern);

      if (filteredPeople.length > 0) {
        return {
          name: country.name,
          people: filteredPeople,
        };
      }

      return null;
    })
    .filter((country) => country !== null);
}

function filterPeopleOfACountry(people, pattern) {
  return people
    .map((person) => {
      const filteredAnimals = filterAnimalsOfAPerson(person.animals, pattern);

      if (filteredAnimals.length > 0) {
        return {
          name: person.name,
          animals: filteredAnimals,
        };
      }

      return null;
    })
    .filter((person) => person !== null);
}

function filterAnimalsOfAPerson(animals, pattern) {
  return animals.filter((animal) => animal.name.includes(pattern));
}

const pattern = getFilterPatternFromCLI();
const filteredData = filter(data, pattern);

if (filteredData) {
  console.log(JSON.stringify(filteredData, null, 2));
} else {
  process.exit();
}
