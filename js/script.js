//Current Page
// let currentUrl = window.location.href;
// console.log(currentUrl);

// if(currentUrl== "http://127.0.0.1:5500/register.html"){
// document.getElementById("sgnp").style.color="red";
// }

// ***********************************Show user info or clear it  
let userinfo = document.getElementById("user-info");//should be shown
let links = document.getElementById("links");//should be hidden
let user = document.getElementById("user");
let logout = document.getElementById("logout");

let username = localStorage.getItem("Username");

if (username) {
    links.remove();//remove signin and signup
    user.style.display = "flex";
    logout.style.display = "flex";
    user.innerHTML = "Hi, " + username;
}

//clear storage
logout.addEventListener('click', ClearFunction);
function ClearFunction() {
    localStorage.clear();
    setTimeout(() => {
        window.location.href = "register.html";
    }, 1500);
}
// ***********************************Define products as object

let products = [
    {
        id: 1,
        title: "Glasses",
        size: "Large",
        imgageUrl: "images/glasses.jpg"
    },
    {
        id: 2,
        title: "Headphones",
        size: "Large",
        imgageUrl: "images/headphones.jpg"
    },
    {
        id: 3,
        title: "Laptop",
        size: "Small",
        imgageUrl: "images/laptop.jpg"
    },
    {
        id: 4,
        title: "Watch",
        size: "Small",
        imgageUrl: "images/watch.jpg"
    },
]

// ***********************************display products
let domofproducts = document.querySelector(".products");
function drawUIProducts() {
    let productUi = products.map((item) => {
        return `
        <div class="product-item">
                    <img src="${item.imgageUrl}" alt="Glassess" class="product-item-img">
                    <div class="product-item-discription">
                        <h2>${item.title}</h2>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <span>Size : ${item.size}</span>
                    </div>
                    <div class="product-item-actions">
                        <button class="add-to-cart" onClick="checkLogin()" >Add To Cart</button>
                        <i class="fa-solid fa-heart favorite" onClick="checkLogin()"></i>
                    </div>
                </div>
        `
    });
    domofproducts.innerHTML = productUi;
}

drawUIProducts();

// ***********************************If click on product and he/she not register 
function checkLogin() {
    if (localStorage.getItem("Username") === null) {
        setInterval((e) => {
            window.location.href = "login.html";
        }, 1000);
    }
    else {
        window.Location.href = "register.html";
    }
}


