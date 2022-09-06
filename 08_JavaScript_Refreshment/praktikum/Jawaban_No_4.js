let bdays = ["10-17", "05-19", "20-19"];

const newBdays = bdays.map((bday) => {
  return bday.replace("-", "/");
});

console.log(newBdays);
