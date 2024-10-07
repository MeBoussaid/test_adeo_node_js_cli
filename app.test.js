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

  it("should return count argument when --count is passed", () => {
    process.argv.push("--count");
    const result = getCLIArgument();
    expect(result).toEqual({ type: "count" });
  });
});
