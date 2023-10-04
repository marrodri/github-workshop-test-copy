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
  // Todo: Implement weekday to Date function. (outdated branch)
  // TODO: Implement a printing function. for the returned string
  // Date to dayName (this goes first with the new branch)
}

main();
