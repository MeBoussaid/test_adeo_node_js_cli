const { getCLIArgument, runCliApp } = require("./app");

const { expectedCountedData } = require("./_fixtures.js");

describe("getCLIArgument function tests", () => {
  beforeEach(() => {
    process.argv = ["node", "app.js"];
  });

  it("should return filter argument when --filter=<pattern> is passed", () => {
    process.argv.push("--filter=hh");
    const result = getCLIArgument();
    expect(result).toEqual({ type: "filter", pattern: "hh" });
  });

  it("should return count argument when --count is passed", () => {
    process.argv.push("--count");
    const result = getCLIArgument();
    expect(result).toEqual({ type: "count" });
  });

  it("should log a message and exit when no valid arguments are passed", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();
    const processExitSpy = jest.spyOn(process, "exit").mockImplementation();
    getCLIArgument();
    expect(consoleSpy).toHaveBeenCalledWith(
      "Use: node app.js --filter=<pattern> /_OR_/ --count"
    );
    expect(processExitSpy).toHaveBeenCalledWith(1);
    consoleSpy.mockRestore();
    processExitSpy.mockRestore();
  });
});

describe("runCliApp function tests", () => {
  // here, testing with "real data", as it is static and like _fixtures.js
  it("should filter data and log the result when --filter argument is passed", () => {
    const pattern = "Anoa";
    process.argv = ["node", "app.js", "--filter=" + pattern];

    const consoleSpy = jest.spyOn(console, "log").mockImplementation();

    runCliApp();
    expect(consoleSpy).toHaveBeenCalledWith(
      JSON.stringify(
        [
          {
            name: "Dillauti",
            people: [
              {
                name: "Winifred Graham",
                animals: [{ name: "Anoa" }],
              },
            ],
          },
        ],
        null,
        2
      )
    );

    consoleSpy.mockRestore();
  });

  it("should log the appropriate message and exit when no data matches the filter", () => {
    const pattern = "Tiger";
    process.argv = ["node", "app.js", "--filter=" + pattern];
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();
    const processExitSpy = jest.spyOn(process, "exit").mockImplementation();
    runCliApp();
    expect(consoleSpy).toHaveBeenCalledWith(
      "No animals found for the given pattern ... So, try another pattern 🐾"
    );
    expect(processExitSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
    processExitSpy.mockRestore();
  });

  it("should log the appropriate message and exit the user inters an empty pattern", () => {
    const pattern = "  ";
    process.argv = ["node", "app.js", "--filter=" + pattern];
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();
    const processExitSpy = jest.spyOn(process, "exit").mockImplementation();
    runCliApp();
    expect(consoleSpy).toHaveBeenCalledWith(
      "Oops! Invalid pattern: cannot be empty or white spaces. Can you call a 🐕 '   ' !?"
    );
    expect(processExitSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
    processExitSpy.mockRestore();
  });

  it("should data with correct counts when --count argument is passed", () => {
    process.argv = ["node", "app.js", "--count"];
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();
    runCliApp();
    expect(consoleSpy).toHaveBeenCalledWith(
      JSON.stringify(expectedCountedData, null, 2)
    );
    consoleSpy.mockRestore();
  });
});
