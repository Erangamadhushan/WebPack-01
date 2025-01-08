window.addEventListener("DOMContentLoaded", () => {
    addToCartProductItems();
})
function addToCartProductItems() {
    const productStorage = JSON.parse(localStorage.getItem('showCartItem'));
    displayCart(productStorage);
}

function displayCart(productStorage) {
    let tbody = document.querySelector('tbody');
    productStorage.forEach((product, index) => {
        let template = document.querySelector('template');
        let tr = template.content.cloneNode(true);
        tr.querySelector('.productName').textContent = product.brandName;
        tr.querySelector('.productImg img').src = product.img;
        tr.querySelector('.productPrice').textContent = "$" + product.price;
        tr.querySelector('.productDesc').textContent = product.desc;
        tr.querySelector('.buyNowItem').addEventListener("click", () => {
            sessionStorage.setItem('currentItem', JSON.stringify(product));
            window.location.replace('./buyItem.html');
        })
        tr.querySelector('.itemRemove').addEventListener('click', () => {
            window.alert("Hello World !");
            
        });
        tbody.appendChild(tr);
    })
    
}