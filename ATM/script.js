const users = {
  user1: { username: "user1", pin: "1234", balance: 1000 },
  user2: { username: "user2", pin: "5678", balance: 2000 },
  user3: { username: "user3", pin: "9101", balance: 1500 },
};

function login() {
  let username = document.getElementById("username").value;
  let pin = document.getElementById("pin").value;
  let loginMessage = document.getElementById("login-message");

  if (users.hasOwnProperty(username)) {
    let user = users[username];

    if (user.pin === pin) {
      currentUser = user;
      loginMessage.textContent = "";
      document.getElementById("login-section").style.display = "none";
      document.getElementById("atm-section").style.display = "block";
      document.getElementById("user").textContent = currentUser.username;
      return;
    }
  }

  loginMessage.textContent = "Invalid username or PIN.";
}

function checkBalance() {
  showMessage(`Your balance is $${currentUser.balance.toFixed(2)}`);
}

function deposit() {
  let amount = parseFloat(prompt("Enter amount to deposit:"));
  if (isNaN(amount) || amount <= 0) {
    showMessage("Please enter a valid amount.");
    return;
  }

  currentUser.balance += amount;
  showMessage(
    `Deposited $${amount.toFixed(
      2
    )}. Your new balance is $${currentUser.balance.toFixed(2)}`
  );
}

function withdraw() {
  let amount = parseFloat(prompt("Enter amount to withdraw:"));
  if (isNaN(amount) || amount <= 0) {
    showMessage("Please enter a valid amount.");
    return;
  }

  if (amount > currentUser.balance) {
    showMessage("Insufficient funds.");
    return;
  }

  currentUser.balance -= amount;
  showMessage(
    `Withdrawn $${amount.toFixed(
      2
    )}. Your new balance is $${currentUser.balance.toFixed(2)}`
  );
}

function exit() {
  currentUser = null;
  document.getElementById("login-section").style.display = "block";
  document.getElementById("atm-section").style.display = "none";
  document.getElementById("username").value = "";
  document.getElementById("pin").value = "";
  document.getElementById("login-message").textContent = "";
}

function showMessage(msg) {
  var transactionMessage = document.getElementById("transaction-message");
  transactionMessage.textContent = msg;
  setTimeout(function () {
    transactionMessage.textContent = "";
  }, 3000);
}
