// Login User
let username = document.getElementById("username");
let password = document.getElementById("password");
let sign_in = document.getElementById("sign-in");

let getuser = localStorage.getItem("Username");
let getpassword = localStorage.getItem("Password");

sign_in.addEventListener('click', function (e) {
    e.preventDefault();
    if (username.value === "" || password.value === "") {
        alert("Fill Inputs Please!...");
    }
    else if ((getuser && getuser === username.value) && (getpassword && getpassword === password.value)) {
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1500);
    }
    else {
        alert("Wrong Username Or Password!...");
    }
});