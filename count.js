function countByCountry(countries) {
  return countries.map((country) => {
    const countedPeople = countByPerson(country.people);

    return {
      name: `${country.name} [${countedPeople.length}]`,
      people: countedPeople,
    };
  });
}

function countByPerson(people) {
  return people.map((person) => {
    return {
      name: `${person.name} [${person.animals.length}]`,
      animals: person.animals,
    };
  });
}

module.exports = { countByCountry, countByPerson };
