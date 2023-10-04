import * as readline from "readline";
function main() {
  console.log("hello world");
  var day = process.argv[2];
  var month = process.argv[3];
  var year = process.argv[4];
  if (day == undefined) {
    console.log("day not defined");
  } else {
    console.log(`day:${day}`);
  }
  if (month == undefined) {
    console.log("month not defined");
  } else {
    console.log(`month:${month}`);
  }
  if (year == undefined) {
    console.log("year not defined");
  } else {
    console.log(`year:${year}`);
  }
  const dayName :string = dateToDayName({day:2,month:3,year:1995});
}

main();
