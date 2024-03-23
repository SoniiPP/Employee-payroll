// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
let myemployees = [];

addEmployeesBtn.addEventListener('click', () => {
  collectEmployees();
});

// Collect employee data

const collectEmployees = function () {

  let addMoreEmployees = true;
  // TODO: Get user input to create and return an array of employee objects

  while (addMoreEmployees) {
    const firstName = prompt('Enter first name:');
    const lastName = prompt(`Enter last name:`);
    const salary = parseFloat(prompt(`Enter Salary:`));
    
    let employee = {
      firstName:firstName,
      lastName: lastName,
      salary: salary
    };

    myemployees.push(employee);
    console.log(myemployees);

    addMoreEmployees = confirm(`Do you want to add more employees?`);
  }
  displayEmployees(myemployees);
}

const displaymyEmployees = function() {
  myemployees.sort((a, b) => (a.lastName > b.lastName) ? 1 : -1);
  console.log("Sorted Employee Data:");
  console.table(myemployees);
  displayAverageSalary(myemployees);
  getRandomEmployee(myemployees);
}





  // Display the average salary

  const displayAverageSalary = function (employeesArray) {
    // TODO: Calculate and display the average salary
    if (myemployees.length === 0){
      console.log(`There's no employees to calculate average salary.`);
      return;
    }

  const totalSalary = employeesArray.reduce((acc, employee) => acc + employee.salary, 0);// reduce method to sum up all the salaries in the array
  const averageSalary = totalSalary / employeesArray.length;

  console.log(`Average Salary: ${averageSalary.toFixed(2)}`);// it displays the average salary and rounding it to 2 decimal places using to.fixed
}
displayAverageSalary();


  

  // Select a random employee
  const getRandomEmployee = function (employeesArray) {
    
    // TODO: Select and display a random employee

    if (myemployees.length === 0) {
      console.log("No employees to select a random employee from.");
      return;
    }
  
    const randomIndex = Math.floor(Math.random() * employeesArray.length);
    const randomEmployee = employeesArray[randomIndex];
  
    console.log("Random Employee:");
    console.log(randomEmployee);
  }
  

  /*
    ====================
    STARTER CODE
    Do not modify any of the code below this line:
  */

  // Display employee data in an HTML table
  const displayEmployees = function (employeesArray) {
    // Get the employee table
    const employeeTable = document.querySelector('#employee-table');

    // Clear the employee table
    employeeTable.innerHTML = '';

    // Loop through the employee data and create a row for each employee
    for (let i = 0; i < employeesArray.length; i++) {
      const currentEmployee = employeesArray[i];

      const newTableRow = document.createElement("tr");

      const firstNameCell = document.createElement("td");
      firstNameCell.textContent = currentEmployee.firstName;
      newTableRow.append(firstNameCell);

      const lastNameCell = document.createElement("td");
      lastNameCell.textContent = currentEmployee.lastName;
      newTableRow.append(lastNameCell);

      const salaryCell = document.createElement("td");
      // Format the salary as currency
      salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
      });

      newTableRow.append(salaryCell);

      employeeTable.append(newTableRow);
    }
  }

  const trackEmployeeData = function () {
    const employees = collectEmployees();

    console.table(employees);

    displayAverageSalary(employees);

    console.log('==============================');

    getRandomEmployee(employees);

    employees.sort(function (a, b) {
      if (a.lastName < b.lastName) {
        return -1;
      } else {
        return 1;
      }
    });

    displayEmployees(employees);
  }

  // Add event listener to 'Add Employees' button
  addEmployeesBtn.addEventListener('click', trackEmployeeData);
