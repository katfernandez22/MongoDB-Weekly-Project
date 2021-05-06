const db = require("./db");
const Employee = require("./models/employee");

db.on("error", console.error.bind(console, "MongoDB Connection Error!"));

const createEmployee = async () => {
  const addEmployee = await Employee.insertMany({
    first_name: "Ron",
    last_name: "Weasley",
    email: "rweasley@gmail.com",
    job_title: "magic trickster",
    address: {
      street: "Ottery St Catchpole",
      city: "Bronx",
      state: "NY",
      zip: 10456,
    },
  });
  console.log("Employee has been added!", addEmployee);
};

const updateEmployee = async () => {
  const employee = await Employee.updateOne(
    { first_name: "Harry" },
    { $set: { email: "hpotter1991@gmail.com" } }
  );
  console.log("Employee has been updated!", employee);
};

const deleteEmployee = async () => {
  const employee = await Employee.deleteOne({
    first_name: "Hermione",
  });
  console.log("Employee has been deleted!", employee);
};

const findAllEmployee = async () => {
  const employees = await Employee.find();
  console.log("All employees has been found!", employees);
};


const run = async () => {
  await createEmployee();
  await updateEmployee();
  await deleteEmployee();
  await findAllEmployee();

  db.close();
};

run();