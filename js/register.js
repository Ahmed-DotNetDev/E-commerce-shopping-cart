// Register User
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let register_btn = document.getElementById("sign_up");

register_btn.addEventListener('click', function (e) {
    e.preventDefault();
    if (username.value === "" || email.value === "" || password.value === "") {
        alert("Fill Inputs Please!...");
    }
    else {
        localStorage.setItem("Username", username.value);
        localStorage.setItem("Email", email.value);
        localStorage.setItem("Password", password.value);
        setInterval(() => {
            window.location.href = "login.html";
        }, 1500);
    }
});