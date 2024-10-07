const { countByCountry, countByPerson } = require("./count.js");

const sampleData = [
  {
    name: "Dillauti",
    people: [
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
      {
        name: "Philip Murray",
        animals: [
          { name: "Sand Dollar" },
          { name: "Buzzard" },
          { name: "Elephant" },
          { name: "Xenops" },
          { name: "Dormouse" },
          { name: "Anchovy" },
          { name: "Dinosaur" },
        ],
      },
      {
        name: "Bobby Ristori",
        animals: [
          { name: "Kowari" },
          { name: "Caecilian" },
          { name: "Common Genet" },
          { name: "Chipmunk" },
          { name: "Aardwolf" },
          { name: "Przewalski's Horse" },
          { name: "Badger" },
          { name: "Sand Cat" },
          { name: "Linne's Two-toed Sloth" },
        ],
      },
      {
        name: "Louise Pinzauti",
        animals: [
          { name: "Manta Ray" },
          { name: "Nubian Ibex" },
          { name: "Warbler" },
          { name: "Duck" },
          { name: "Mice" },
        ],
      },
    ],
  },
];
describe("countByPerson", () => {
  it("Should add the number of animals to each person name", () => {
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
// describe("countByCountry function tests", () => {});
