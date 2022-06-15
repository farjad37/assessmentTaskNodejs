const fs = require("fs");
const { parse } = require("csv-parse");
process.argv.forEach(function (val, index, array) {    
});
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
const args = process.argv.slice(2);

let search = args[1];
let startLine = Number(search) + 1;
let searchKey = capitalizeFirstLetter(args[2])
fs.createReadStream(args[0])
  .pipe(parse({  from_line: startLine }))
  .on("data", function (row) {
    if(row[2] == searchKey)
    {
        let output = row.toString();
        console.log(output);
    }
  })
  .on("error", function (error) {
    console.log(error.message);
  });