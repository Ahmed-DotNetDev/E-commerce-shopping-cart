let domofproducts = document.querySelector(".products");
let productIncart = localStorage.getItem('ProductsInCart');
if (productIncart) {
    let item = JSON.parse(productIncart);
    drawUIProducts(item);
}

function drawUIProducts(products) {
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
                        <button class="add-to-cart" onClick="RemoveFromCart(${item.id})" >Remove Item</button>
                    </div>
                </div>
        `
    });
    domofproducts.innerHTML = productUi;
}
