
function buyProductItem(img, desc, brandName, price) {
    // Create a new product item
    let item = {
        img: img,
        desc: desc,
        brandName: brandName,
        price:price
    }

    // Add the item to the current item list
    sessionStorage.setItem('currentItem', JSON.stringify(item));
    window.location.replace("buyItem.html");
}

function addToCartProductItem(img, desc, brandName, price) {
    // Create a new product item
    
    let item = {
        img:img,
        desc:desc,
        brandName:brandName,
        price:price
    };
    
    let showCartItem = localStorage.getItem('showCartItem');
    if(showCartItem == null) {
        showCartItem = [];
    }
    else {
        showCartItem = JSON.parse(showCartItem);
    }
    showCartItem.push(item);
    localStorage.setItem('showCartItem', JSON.stringify(showCartItem));
    
    window.location.replace("./cartItem.html");
    // Add the item to the current item list
}

function visitUserprofile() {
    window.location.replace("./userProfile.html");
}

function focusInputSection() {
    document.querySelector("#SearchOption").focus();
}