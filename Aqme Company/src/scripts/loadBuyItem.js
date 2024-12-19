let loadBuyItemContainer = document.querySelector('.loadbuyItem');
let buyItem = JSON.parse(sessionStorage.getItem('buyItem'));

window.addEventListener("DOMContentLoaded", () => {
    loadBuyItemContainer.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            <div class="flex justify-center items-center">
                <img src="${buyItem.itemImage}" alt="" style="width:300px;"/>
            </div>
            <div class="flex flex-col justify-center items-center">
                <h2 class="text-2xl font-bold">${buyItem.itemName}</h2>
                <p class="text-xl font-semibold">${buyItem.itemPrice}</p>
                <p class="text-lg font-semibold">${buyItem.itemDescription}</p>
                <button class="bg-black text-white p-2 mt-4" onclick="addToCartProductItem(${buyItem})">Add to Cart</button>
            </div>
        </div>
    `;
})