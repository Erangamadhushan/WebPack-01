function visitCartproducts() {

}

function buyProductItem(img, desc, brandName, price) {
    // Create a new product item
    let item = {
        img: img,
        desc: desc,
        brandName: brandName,
        price:price
    }

    let currentItem = sessionStorage.getItem('currentItem');
    if (currentItem == null) {
        currentItem = [];
    }
    else {
        currentItem = JSON.parse(currentItem);
    }
    // Add the item to the current item list
    sessionStorage.setItem('currentFocusItem', JSON.stringify(item));
    window.location.replace("buyItem.html");
}

function addToCartProductItem(img, desc, brandName, price) {
    // Create a new product item
    let item = {
        img: img,
        desc: desc,
        brandName: brandName,
        price:price
    }

    let cartItem = localStorage.getItem('cartItem');
    if (cartItem == null) {
        cartItem = [];
    }
    else {
        cartItem = JSON.parse(cartItem);
    }
    // Add the item to the cart item list
    localStorage.setItem('cartItem', JSON.stringify(item));
}

function visitUserprofile() {
    
}