document.getElementById("IDform").addEventListener("submit", function (event) {
  event.preventDefault(); //preevent default submission

  //get form data
  var currentpswd = document.getElementById("currentpswd").value;
  var newpswd = document.getElementById("newpswd").value;
  var confirmpswd = document.getElementById("confirmpswd").value;

  //   basic validation == condition here
  if (currentpswd === "" || newpswd === "" || confirmpswd === "") {
    alert("please fill all information");
    return;
  }
  if (newpswd !== confirmpswd) {
    alert("please re-enter your password");
    return;
  }
  //   minimum
  if (
    currentpswd.length <= 6 ||
    newpswd.length <= 6 ||
    confirmpswd.length <= 6
  ) {
    document.getElementById("message").innerHTML =
      "**Password length must be atleast 6 characters";
    return;
  }
  //   maximum
  if (
    currentpswd.length < 15 &&
    newpswd.length < 15 &&
    confirmpswd.length < 15
  ) {
    document.getElementById("message").innerHTML =
      "**Password length must not exceed 15 characters";
    return false;
  } else {
    alert("Password is correct");
  }

  //  password change logic
  console.log("Current password:", currentpswd);
  console.log("New password:", newpswd);
  console.log("confirm password:", confirmpswd);

  //   clear all form detail if submit all the informations
  document.getElementById("currentpswd").value = "";
  document.getElementById("newpswd").value = "";
  document.getElementById("confirmpswd").value = "";
});
