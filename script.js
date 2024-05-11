document.addEventListener("DOMContentLoaded", function () {
  // Sample data for demonstration
  var basicSalary = 15000; // Replace with actual basic salary value

  // Function to calculate HRA based on basic salary
  function calculateHRA(basicSalary) {
    if (basicSalary <= 10000) {
      return basicSalary * 0.2;
    } else if (basicSalary <= 20000) {
      return basicSalary * 0.25;
    } else {
      return basicSalary * 0.3;
    }
  }

  // Function to calculate DA based on basic salary
  function calculateDA(basicSalary) {
    if (basicSalary <= 10000) {
      return basicSalary * 0.8;
    } else if (basicSalary <= 20000) {
      return basicSalary * 0.9;
    } else {
      return basicSalary * 0.95;
    }
  }

  // Function to calculate PF based on basic salary
  function calculatePF(basicSalary) {
    if (basicSalary <= 10000) {
      return basicSalary * 0.08;
    } else if (basicSalary <= 20000) {
      return basicSalary * 0.12;
    } else {
      return 0; // No PF deduction for salary > 20000
    }
  }

  // Function to calculate total and update table
  function updateTable() {
    var HRA = calculateHRA(basicSalary);
    var DA = calculateDA(basicSalary);
    var PF = calculatePF(basicSalary);
    var PT = 200;
    var HI = 1800;

    var grossSalary = basicSalary + HRA + DA;
    var netPay = grossSalary - PF - PT - HI;

    document.getElementById("earnings").innerHTML = `
            <tr>
                <td>Basic Salary</td>
                <td>${basicSalary.toFixed(2)}</td>
            </tr>
            <tr>
                <td>HRA</td>
                <td>${HRA.toFixed(2)}</td>
            </tr>
            <tr>
                <td>DA</td>
                <td>${DA.toFixed(2)}</td>
            </tr>
            <tr>
                <td>Total Earnings</td>
                <td>${grossSalary.toFixed(2)}</td>
            </tr>
        `;

    document.getElementById("deductions").innerHTML = `
            <tr>
                <td>PF</td>
                <td>${PF.toFixed(2)}</td>
            </tr>
            <tr>
                <td>PT</td>
                <td>${PT.toFixed(2)}</td>
            </tr>
            <tr>
                <td>Health Insurance</td>
                <td>${HI.toFixed(2)}</td>
            </tr>
            <tr>
                <td>Total Deductions</td>
                <td>${(PF + PT + HI).toFixed(2)}</td>
            </tr>
        `;

    document.getElementById("gross-salary").textContent =
      grossSalary.toFixed(2);
    document.getElementById("net-pay").textContent = netPay.toFixed(2);
  }

  // Update the table when the DOM is loaded
  updateTable();
});
