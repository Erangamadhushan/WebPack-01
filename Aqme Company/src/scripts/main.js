import {main, aboutUs} from './sources/mainContent.js';
import {itemQuatar} from './sources/itemContents.js';

window.addEventListener("DOMContentLoaded", () => {
    renderOpenContent(main);
    renderLineContent();
    renderProductOverview(itemQuatar);
});
document.body.style.scrollBehavior = "Smooth"

// Load header section here

document.querySelector('header').innerHTML = `
    <h2 class="text-2xl font-bold px-3 py-5">Aqme Company</h2>
    <nav class="justify-center items-center space-x-4  hidden custom:block">
        <a href="index.html" class="text-xl font-semibold hover:font-bold px-4">Home</a>
        <a href="index.html#aboutUs" class="text-xl text-semibold hover:font-bold">About Us</a>
        <a href="#" class="text-xl font-semibold hover:font-bold">Products</a>
        <a href="#" class="text-xl font-semibold hover:font-bold">FAQ</a>
    </nav>
    <div class="items-center hidden md:block justify-center px-2">
        <input class="p-2 border focus:border-green-200 focus:outline-none" type="text" name="SearchOption" placeholder="Search here.." id="SearchOption"/>
        <button class="bg-black p-2 text-white">Search</button>
    </div>
    <div class="hidden md:block space-x-5">
        <button class="bg-gray-300 p-2"><img src="./icons/buy.png" style="width:30px;"/></button>
        <button class="bg-gray-300 p-2"><img src="./icons/user.png" style="width:30px;"/></button>
    </div>
    <div class=" p-3">
        <button  class="bg-black text-3xl text-white p-1 px-3 rounded-lg custom:hidden" id="flip">&#9776;</button>
    </div>
    
`;


// Load 

document.querySelector('#panel').innerHTML = `
    <nav class="justify-center items-center grid grid-cols-1  px-3 custom:hidden">
        <a href="index.html" class="text-xl font-semibold hover:font-bold text-center py-3" >Home</a>
        <a href="index.html#aboutUs" class="text-xl font-semibold hover:font-bold text-center py-3">About Us</a>
        <a href="#" class="text-xl font-semibold hover:font-bold text-center py-3">Products</a>
        <a href="#" class="text-xl font-semibold hover:font-bold text-center py-3">FAQ</a>
    </nav>
`;


// Load open content here

let openContainer = document.querySelector('.openContent');
function renderOpenContent(items) {
    openContainer.innerHTML = " ";
    let openContent = " ";
    let leftContent = items[0];
    let rightContent = items[1];

    openContent += `
        <div class=" py-10 overflow-hidden rounded-lg items-center">
            <img src="${leftContent.src}" alt="" class=""/>
        </div>
    `;
    openContent += `
        <div class=" p-5 py-10 flex flex-col gap-2">
            <h1 class="text-5xl text-center font-bold text-red-600 pb-5">Special OFfer</h1>
            <p class="text-gray-800">${rightContent.subtext}</p>
            <h2 class="text-3xl text-gray-800">${rightContent.topic}</h2>
            <h1 class="text-4xl text-gray-800 font-bold">$${rightContent.price}</h1>
            <p class="text-lg py-4">${rightContent.desc}</p>
            <div>
                <a href="products.html" class="bg-gray-800 hover:bg-black text-white p-4 px-10 text-lg font-bold rounded-lg">Explorer More..</a>
            </div>
        </div>
        
    `;

    openContainer.innerHTML = openContent; 
}


// Loac line content here

let lineContainer = document.querySelector(".OpenDescription");

function renderLineContent() {
    lineContainer.innerHTML = `
        <h2 class="text-center text-gray-800 text-4xl font-bold py-5">${aboutUs.topic}</h2>
        <p class="text-lg text-center">${aboutUs.desc}</p>
    `;
}
