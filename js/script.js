
// ***********************************Show user info or clear it  
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

let domofproducts = document.querySelector(".products");
let cartProductDom = document.querySelector('.cart-products div')
let BadgeProductDom = document.querySelector('.user-info-cart-badge')
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
                        <button class="add-to-cart" onClick="AddedToCart(${item.id})" >Add To Cart</button>
                        <i class="fa-solid fa-heart favorite" onClick="checkLogin()"></i>
                    </div>
                </div>
        `
    });
    domofproducts.innerHTML = productUi;
}

drawUIProducts();

let counter = 1;
let AddedItems = [];
function AddedToCart(id) {
    if (localStorage.getItem("Username")) {
        let ChoosenItem = products.find((item) => item.id === id);
        cartProductDom.innerHTML += `<p>${ChoosenItem.title}</p>`
        BadgeProductDom.style.display = 'block';
        BadgeProductDom.innerHTML = counter;
        counter++;
        AddedItems = [...AddedItems, ChoosenItem];
        localStorage.setItem('ProductsInCart',JSON.stringify(AddedItems));
    }
    else {
        window.location = 'login.html';
    }
}

let cartProduct = document.querySelector('.cart-products');
function ShowProductItems() {
    if (cartProduct.innerHTML != '') {
        if (cartProduct.style.display == 'block') {
            cartProduct.style.display = 'none';
        }
        else {
            cartProduct.style.display = 'block';
        }
    }
}
