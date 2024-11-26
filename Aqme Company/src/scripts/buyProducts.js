function buyProductItem(img,brand,price,description) {
    let itemImage = img;
    let itemName = brand;
    let itemPrice = price;
    let itemDescription = description;

    let item = {itemImage, itemName, itemPrice, itemDescription};
    item  = JSON.stringify(item);
    sessionStorage.setItem('buyItem',item);

    window.location.replace("./buyItem.html");

}

function addToCartProductItem (img,brand,price,description) {

}