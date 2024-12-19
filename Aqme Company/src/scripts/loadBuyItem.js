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
                <button class="bg-black text-white p-2 mt-4 rounded-lg" onclick="addToCartProductItem(${buyItem})">Add to Cart</button>
            </div>
        </div>
    `;
});

function addToCartProductItem() {

}

