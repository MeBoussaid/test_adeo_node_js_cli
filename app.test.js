const { filter } = require("./filter.js");
const { countByCountry } = require("./count.js");
const { getCLIArgument, runCliApp } = require("./app");

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
