const email = document.getElementById("email");

email.addEventListener("input", function () {
    if (email.validity.typeMismatch) {
    document.getElementById("error").innerHTML = "Please provide a valid mail";
  } else {
    document.getElementById("error").innerHTML = "";
  }
});

