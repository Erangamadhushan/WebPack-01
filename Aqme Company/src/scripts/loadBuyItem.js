let loadBuyItemContainer = document.querySelector('.loadbuyItem');
let buyItem = JSON.parse(sessionStorage.getItem('currentItem'));

window.addEventListener("DOMContentLoaded", () => {
    console.log(buyItem);
    loadBuyItemContainer.innerHTML = `
        <div class="max-w-[1200px] w-[80%] min-h-[70vh] mx-auto grid grid-cols-1 text-white md:grid-cols-2 gap-4 p-4 py-10 my-10 border border-green-400" id="buyItemContainer">
            <div class="flex justify-center items-center">
                <img src="${buyItem.img}" alt="" style="width:350px;"/>
            </div>
            <div class="flex flex-col justify-center items-center">
                <p class="text-lg font-semibold">${buyItem.desc}</p>
                <div class="flex justify-center items-center py-5 gap-1">
                    <p class="text-green-500 text-4xl font-bold">$${Number(buyItem.price)+Number(buyItem.price) *0.1}.00    <span class="text-red-500 text-4xl font-bold">-10% OFF</span></p>
                </div>
                <div class="flex py-5 gap-5">
                    <input type="number" class="border border-gray-900 text-black" value="1" onchange="getTotal()" min="1" max="10" id="quantity"/>
                    <p class="font-bold text-2xl">Total Price :$<span id="total" item-price="${buyItem.price}"><span></p>
                </div>
                <div class="flex space-x-3">
                    <button class="bg-green-700 hover:bg-green-600 text-white p-2 mt-4 rounded-lg" onclick="addToCartProductItem('${buyItem.img}','${buyItem.desc}','${buyItem.brandName}','${buyItem.price}')">Add to Cart</button>
                    <button class="bg-red-700 hover:bg-red-600 text-white p-2 mt-4 rounded-lg" onclick="">Buy Now</button>
                </div>
            </div>
        </div>
    `;
    getTotal();
});



function getTotal() {
    let quantity = parseInt(document.getElementById("quantity").value);
    let price = document.querySelector("#total").getAttribute("item-price");
    console.log(price);
    let grandTotal = quantity * price;
    document.getElementById('total').innerHTML = grandTotal;

}


