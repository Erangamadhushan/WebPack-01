let loadBuyItemContainer = document.querySelector('.loadbuyItem');
let buyItem = JSON.parse(sessionStorage.getItem('currentItem'));

window.addEventListener("DOMContentLoaded", () => {
    loadBuyItemContainer.innerHTML = `
        <div class="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-4 py-10 my-10 border border-green-400">
            <div class="flex justify-center items-center">
                <img src="${buyItem.img}" alt="" style="width:300px;"/>
            </div>
            <div class="flex flex-col justify-center items-center">
                <h2 class="text-2xl font-bold">${buyItem.brandName}</h2>
                <p class="text-xl font-semibold">${buyItem.price}</p>
                <p class="text-lg font-semibold">${buyItem.desc}</p>
                <button class="bg-black text-white p-2 mt-4 rounded-lg" onclick="addToCartProductItem('${buyItem}')">Add to Cart</button>
            </div>
        </div>
    `;
});

function addToCartProductItem() {
    const productStorage = JSON.parse(localStorage.getItem('products'));
    productStorage.unshift(buyItem);
    // localStorage.setItem('products', JSON.stringify(productStorage));
    // console.log("Product added to cart !");
    // window.location.replace("index.html");
    displayCart(productStorage);
}

function displayCart(productStorage) {
    let tbody = document.querySelector('tbody');
    productStorage.forEach((product, index) => {
        let template = document.querySelector('template');
        let tr = template.content.cloneNode(true);
        tr.querySelector('.productName').textContent = product.brandName;
        tr.querySelector('.productPrice').textContent = product.price;
        tr.querySelector('.productDesc').textContent = product.desc;
        tr.querySelector('.itemRemove').addEventListener('click', () => {
            window.alert("Hello World !");
            
        });
        tbody.appendChild(tr);
    })
    
}
