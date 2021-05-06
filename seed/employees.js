const db = require("../db");
const Employee = require("../models/employee");

db.on("error", console.error.bind(console, "MongoDB Connection Error!"));

const main = async () => {
  const employees = [
    {
      first_name: "Harry",
      last_name: "Potter",
      email: "hpotter@gmail.com",
      job_title: "Quidditcher",
      address: {
        street: "4 Privet Drive",
        city: "Bronx",
        state: "NY",
        zip: 10456,
      },
    },
    {
      first_name: "Hermione",
      last_name: "Granger",
      email: "hgranger@gmail.com",
      job_title: "student",
      address: {
        street: "Hampstead Garden",
        city: "Bronx",
        state: "NY",
        zip: 10456,
      },
    },

  ];

  await Employee.insertMany(employees);
  console.log("Employees has been created!");
};

const run = async () => {
  await main();
  db.close();
};

run();