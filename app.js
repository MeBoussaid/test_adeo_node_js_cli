const { data } = require("./data/data.js");
const { filter } = require("./filter.js");
const { count } = require("./count.js");

function getCLIArgument() {
  const filterArgument = process.argv.find((argument) =>
    argument.startsWith("--filter=")
  );

  const countArgument = process.argv.find((argument) => argument === "--count");

  if (filterArgument) {
    const pattern = filterArgument.split("=")[1];
    return { type: "filter", pattern };
  } else if (countArgument) {
    return { type: "count" };
  } else {
    console.log("Use: node app.js --filter=<pattern> /_OR_/ --count");
    process.exit(1);
  }
}

function runCliApp() {
  const { type, pattern } = getCLIArgument();

  if (type === "filter") {
    const filteredData = filter(data, pattern);

    if (filteredData && filteredData.length > 0) {
      console.log(JSON.stringify(filteredData, null, 2));
    } else {
      process.exit();
    }
  } else if (type === "count") {
    const countedData = count(data);
    console.log(JSON.stringify(countedData, null, 2));
  }
}

if (require.main === module) {
  runCliApp();
}

module.exports = { getCLIArgument, runCliApp };
