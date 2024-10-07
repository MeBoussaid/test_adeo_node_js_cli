const {
  filter,
  filterAnimalsOfAPerson,
  filterPeopleOfACountry,
  filterCountries,
} = require("./filter.js");

describe("filterAnimalsOfAPerson function tests", () => {
  const animals = [{ name: "Cat" }, { name: "Leopard" }, { name: "Fish" }];
  it("should return animals that match the given pattern", () => {
    const pattern = "eo";
    const result = filterAnimalsOfAPerson(animals, pattern);
    expect(result).toEqual([{ name: "Leopard" }]);
  });

  it("should return multiple animals if multiple  match the given pattern", () => {
    const pattern = "a";
    const result = filterAnimalsOfAPerson(animals, pattern);
    expect(result).toEqual([{ name: "Cat" }, { name: "Leopard" }]);
  });

  it("should return an empty array if no animals match the given pattern", () => {
    const pattern = "bobo";
    const result = filterAnimalsOfAPerson(animals, pattern);
    expect(result).toEqual([]);
  });
});
