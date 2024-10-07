function count(countries) {
  return countries.map((country) => {
    const countedPeople = countPeopleOfACountry(country.people);

    return {
      name: `${country.name} [${countedPeople.length}]`,
      people: countedPeople,
    };
  });
}

function countPeopleOfACountry(people) {
  return people.map((person) => {
    const countedAnimals = countAnimalsOfAPerson(person.animals);

    return {
      name: `${person.name} [${countedAnimals.length}]`,
      animals: countedAnimals,
    };
  });
}

function countAnimalsOfAPerson(animals) {
  return animals.map((animal) => ({
    name: animal.name,
  }));
}

module.exports = { count };
