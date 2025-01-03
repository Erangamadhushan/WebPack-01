import {allItems} from './sources/itemContents.js';

window.addEventListener("DOMContentLoaded", () => {
    renderAllProductOverview(allItems);
});

// Load header section here

document.querySelector('header').innerHTML = `
    <h2 class="text-2xl font-bold px-3 py-5">Aqme Company</h2>
    <nav class="justify-center items-center space-x-4  hidden custom:block">
        <a href="index.html" class="text-xl font-semibold hover:font-bold px-4">Home</a>
        <a href="index.html#aboutUs" class="text-xl text-semibold hover:font-bold">About Us</a>
        <a href="products.html" class="text-xl font-semibold hover:font-bold">Products</a>
        <a href="faq.html" class="text-xl font-semibold hover:font-bold">FAQ</a>
    </nav>
    <div class="items-center hidden md:block justify-center px-2">
        <input class="p-2 border focus:border-green-200 focus:outline-none" type="text" name="SearchOption" placeholder="Search here.." id="SearchOption"/>
        <button class="bg-black p-2 text-white">Search</button>
    </div>
    <div class="hidden md:block space-x-5">
        <button onclick="visitCartproducts()" class="bg-gray-300 p-2"><img src="./icons/buy.png" style="width:30px;"/></button>
        <button onclick="visitUserprofile()" class="bg-gray-300 p-2"><img src="./icons/user.png" style="width:30px;"/></button>
    </div>
    <div class=" p-3">
        <button  class="bg-black text-3xl text-white p-1 px-3 rounded-lg custom:hidden" id="flip">&#9776;</button>
    </div>
    
`;


// Load nav bar into the main html files

document.querySelector('#panel').innerHTML = `
    <nav class="justify-center items-center grid grid-cols-1  px-3 custom:hidden">
        <a href="index.html" class="text-xl font-semibold hover:font-bold text-center py-3" >Home</a>
        <a href="index.html#aboutUs" class="text-xl font-semibold hover:font-bold text-center py-3">About Us</a>
        <a href="./products.html" class="text-xl font-semibold hover:font-bold text-center py-3">Products</a>
        <a href="./faq.html" class="text-xl font-semibold hover:font-bold text-center py-3">FAQ</a>
    </nav>
`;
 

//Load all items into the products.html files
let renderAllItemContainer = document.querySelector('.loadAllItems');
function renderAllProductOverview(items) {
    renderAllItemContainer.innerHTML = " ";
    let renderAllItemContent = " ";
    items.forEach((item) => {
        renderAllItemContent += `
            <div class="max-w-[300px] rounded-lg border border-white text-white bg-black duration-200 group hover:bg-gray-900 hover:text-white p-4 mt-4 relative"  data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000" data-aos-delay="200">
                <div class="">
                    <div class="max-w-[350px] mx-auto my-10">
                        <img src="${item.img}" alt="${item.desc}" style="margin:auto;width:70%;"/>
                    </div>
                    <div>
                        <h2 class="text-center font-semibold">${item.brandName}</h2>
                        <h3 class="text-center font-bold">$${item.price}</h3>
                    </div>
                </div>
                <div class="flex place-items-center  mt-4 gap-3">
                    <button class="bg-blue-600 mx-auto  rounded-xl text-white p-3 py-3 hover:bg-black"  onclick="buyProductItem('${item.img}', '${item.desc}','${item.brandName}',  '${item.price}')">Buy Now</button>
                    <button class="bg-red-600 mx-auto rounded-xl text-white p-3 py-3 hover:bg-black" >Add to Cart</button>
                </div>
            </div>
        `
    });

    renderAllItemContainer.innerHTML = renderAllItemContent;
}
