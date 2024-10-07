const {
  filter,
  filterAnimalsOfAPerson,
  filterPeopleOfACountry,
  filterCountries,
} = require("./filter.js");

const { sampleData } = require("./_fixtures.js");

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

describe("filterPeopleOfACountry function tests", () => {
  it("should return an empty array if no person has animals matching the pattern", () => {
    const people = [
      {
        name: "Winifred Graham",
        animals: [{ name: "Lion" }, { name: "Duck" }],
      },
      {
        name: "Blanche Viciani",
        animals: [{ name: "Barbet" }, { name: "Rhea" }, { name: "Antelope" }],
      },
    ];
    const pattern = "ger";
    const result = filterPeopleOfACountry(people, pattern);

    expect(result).toEqual([]);
  });

  it("should return people with animals matching the given pattern", () => {
    const people = [
      {
        name: "Winifred Graham",
        animals: [{ name: "Lion" }, { name: "Leopard" }, { name: "Duck" }],
      },
      {
        name: "Graham Ben Graham",
        animals: [{ name: "Lion" }, { name: "Leopard" }, { name: "Duck" }],
      },
      {
        name: "Blanche Viciani",
        animals: [{ name: "Barbet" }, { name: "Rhea" }, { name: "Antelope" }],
      },
    ];
    const pattern = "eo";
    const result = filterPeopleOfACountry(people, pattern);

    expect(result).toEqual([
      {
        name: "Winifred Graham",
        animals: [{ name: "Leopard" }],
      },
      {
        name: "Graham Ben Graham",
        animals: [{ name: "Leopard" }],
      },
    ]);
  });
});

describe("filterCountries function tests", () => {
  it("should return countries with people having animals matching the given pattern", () => {
    const pattern = "Anoa";
    const result = filterCountries(sampleData, pattern);

    expect(result).toEqual([
      {
        name: "Dillauti",
        people: [
          {
            name: "Winifred Graham",
            animals: [{ name: "Anoa" }],
          },
        ],
      },
      {
        name: "Dillauti Two",
        people: [
          {
            name: "Winifred Graham",
            animals: [{ name: "Anoa" }],
          },
        ],
      },
    ]);
  });

  it("should return an empty array if no country has people with matching animals", () => {
    const pattern = "ger";
    const result = filterCountries(sampleData, pattern);

    expect(result).toEqual([]);
  });
});
