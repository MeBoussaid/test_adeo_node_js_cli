const {
  filter,
  filterAnimalsOfAPerson,
  filterPeopleOfACountry,
  filterCountries,
} = require("./filter.js");

const { sampleData } = require("./_fixtures.js");

describe("filter function tests", () => {
  it("should filter countries, people, and animals based on the given pattern", () => {
    const pattern = "Anoa";
    const result = filter(sampleData, pattern);

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

  it("should return null and log a message if the pattern is empty or whitespace", () => {
    const pattern = "    ";
    const consoleSpy = jest.spyOn(console, "log");
    const result = filter(sampleData, pattern);
    expect(result).toBeNull();
    expect(consoleSpy).toHaveBeenCalledWith(
      "Oops! Invalid pattern: cannot be empty or white spaces. Can you call a 🐕 '   ' !?"
    );
    consoleSpy.mockRestore();
  });

  it("should return null and log a message if no animals match the pattern", () => {
    const pattern = "ige";
    const consoleSpy = jest.spyOn(console, "log");
    const result = filter(sampleData, pattern);
    expect(result).toBeNull();
    expect(consoleSpy).toHaveBeenCalledWith(
      "No animals found for the given pattern ... So, try another pattern 🐾"
    );
    consoleSpy.mockRestore();
  });
});
describe("filterAnimalsOfAPerson function tests", () => {
  const animals = [
    { name: "Wox" },
    { name: "Cat" },
    { name: "Leopard" },
    { name: "Fish" },
    { name: "Fox" },
  ];
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

  it("should return only animals containing the pattern while keeping the order intact", () => {
    const pattern = "x";
    const result = filterAnimalsOfAPerson(animals, pattern);
    expect(result).toEqual([{ name: "Wox" }, { name: "Fox" }]);
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
