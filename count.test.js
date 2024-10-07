const { countByCountry, countByPerson } = require("./count.js");

const sampleData = [
  {
    name: "Dillauti",
    people: [
      {
        name: "Winifred Graham",
        animals: [{ name: "Anoa" }, { name: "Duck" }, { name: "Narwhal" }],
      },
      {
        name: "Blanche Viciani",
        animals: [
          { name: "Barbet" },
          { name: "Rhea" },
          { name: "Snakes" },
          { name: "Antelope" },
        ],
      },
    ],
  },
  {
    name: "Dillauti Two",
    people: [
      {
        name: "Winifred Graham",
        animals: [{ name: "Anoa" }, { name: "Duck" }, { name: "Narwhal" }],
      },
      {
        name: "Blanche Viciani",
        animals: [
          { name: "Barbet" },
          { name: "Rhea" },
          { name: "Snakes" },
          { name: "Antelope" },
        ],
      },
      {
        name: "Blanche Viciani Two",
        animals: [{ name: "Barbet" }],
      },
    ],
  },
];
describe("countByPerson function test", () => {
  it("Should add the number of animals to each person's name", () => {
    const somePeople = [
      {
        name: "Winifred Graham",
        animals: [
          { name: "Anoa" },
          { name: "Duck" },
          { name: "Narwhal" },
          { name: "Badger" },
          { name: "Cobra" },
          { name: "Crow" },
        ],
      },
      {
        name: "Blanche Viciani",
        animals: [
          { name: "Barbet" },
          { name: "Rhea" },
          { name: "Snakes" },
          { name: "Antelope" },
          { name: "Echidna" },
          { name: "Crow" },
          { name: "Guinea Fowl" },
          { name: "Deer Mouse" },
        ],
      },
    ];
    const result = countByPerson(somePeople);
    expect(result).toEqual([
      {
        name: "Winifred Graham [6]",
        animals: [
          { name: "Anoa" },
          { name: "Duck" },
          { name: "Narwhal" },
          { name: "Badger" },
          { name: "Cobra" },
          { name: "Crow" },
        ],
      },
      {
        name: "Blanche Viciani [8]",
        animals: [
          { name: "Barbet" },
          { name: "Rhea" },
          { name: "Snakes" },
          { name: "Antelope" },
          { name: "Echidna" },
          { name: "Crow" },
          { name: "Guinea Fowl" },
          { name: "Deer Mouse" },
        ],
      },
    ]);
  });
});
describe("countByCountry function test", () => {
  it("should add the number of people in each country's name and the number of animals for each person", () => {
    const result = countByCountry(sampleData);

    expect(result).toEqual([
      {
        name: "Dillauti [2]",
        people: [
          {
            name: "Winifred Graham [3]",
            animals: [{ name: "Anoa" }, { name: "Duck" }, { name: "Narwhal" }],
          },
          {
            name: "Blanche Viciani [4]",
            animals: [
              { name: "Barbet" },
              { name: "Rhea" },
              { name: "Snakes" },
              { name: "Antelope" },
            ],
          },
        ],
      },
      {
        name: "Dillauti Two [3]",
        people: [
          {
            name: "Winifred Graham [3]",
            animals: [{ name: "Anoa" }, { name: "Duck" }, { name: "Narwhal" }],
          },
          {
            name: "Blanche Viciani [4]",
            animals: [
              { name: "Barbet" },
              { name: "Rhea" },
              { name: "Snakes" },
              { name: "Antelope" },
            ],
          },
          {
            name: "Blanche Viciani Two [1]",
            animals: [{ name: "Barbet" }],
          },
        ],
      },
    ]);
  });
});
