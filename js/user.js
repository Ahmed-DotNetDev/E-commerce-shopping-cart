let userinfo = document.getElementById("user-info");//should be shown
let links = document.getElementById("links");//should be hidden
let user = document.getElementById("user");
let logout = document.getElementById("logout");
//Handle icon buy
if (localStorage.getItem("Username")) {
    console.log("test");
}
else {
    document.getElementById('cart-push').style.display = 'none';
}
let username = localStorage.getItem("Username");

if (username) {
    links.remove();//remove signin and signup
    user.style.display = "flex";
    logout.style.display = "flex";
    user.innerHTML = "Hi, " + username;
}

logout.addEventListener('click', ClearFunction);
function ClearFunction() {
    localStorage.clear();
    setTimeout(() => {
        window.location.href = "register.html";
    }, 1500);
}