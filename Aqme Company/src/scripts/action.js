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
    let item = {img, desc, brandName, price };
    
    let showCartItem = localStorage.getItem('showCartItem');
    if(showCartItem == null) {
        showCartItem = [];
    }
    else {
        showCartItem = JSON.parse(showCartItem);
    }
    showCartItem.push(item);
    localStorage.setItem('showCartItem', JSON.stringify(showCartItem));
    // Add the item to the current item list
}

function visitUserprofile() {
    
}