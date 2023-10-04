// Todo create a dateToWeekDay function.

interface dateToWeekInterface {
  day: number;
  month: number;
  year: number;
}

const g_dayNames:Array<string> = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
function dateToDayName({ day, month, year }: dateToWeekInterface) {
  //TODO build a date toWeekday function that prints out
  const index :number = 1;
  return g_dayNames[index];
}
