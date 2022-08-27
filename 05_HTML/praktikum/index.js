let firstName = "";
let lastName = "";
function Submit() {
  firstName = document.getElementById("Fname").value;
  lastName = document.getElementById("Lname").value;
  let name = firstName + " " + lastName;
  localStorage.setItem("name", name);
  window.location.replace("welcome.html");
}
let getName = localStorage.getItem("name");
getName = getName.toUpperCase();
document.getElementById("greet").innerHTML = `SELAMAT DATANG ${getName}`;
