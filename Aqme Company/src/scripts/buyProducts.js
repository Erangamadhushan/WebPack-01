// Filename: buyProducts.js

function buyProductItem(img, desc, brandName, price) {
    console.log(desc);
    const product = {
        img,
        desc,
        brandName,
        price
    }
    sessionStorage.setItem('currentItem', JSON.stringify(product));
    console.log("function is working !");
    window.location.replace("buyItem.html");
}