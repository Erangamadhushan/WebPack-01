import {main, aboutUs, subContent, footerContent} from './sources/mainContent.js';
import {itemQuatar} from './sources/itemContents.js';

window.addEventListener("DOMContentLoaded", () => {
    renderOpenContent(main);
    renderLineContent();
    renderProductOverview(itemQuatar);
    renderSubContent(subContent);
    loadFooter(footerContent);
    loadFooterEnd();
    
});
document.body.style.scrollBehavior = "Smooth"

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
        <button class="bg-gray-300 p-2"><img src="./icons/buy.png" style="width:30px;"/></button>
        <button class="bg-gray-300 p-2"><img src="./icons/user.png" style="width:30px;"/></button>
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
        <div class=" p-5 py-10 flex flex-col gap-2" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000" data-aos-delay="200">
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


// Load line content here

let lineContainer = document.querySelector(".OpenDescription");

function renderLineContent() {
    lineContainer.innerHTML = `
        <h2 class="text-center text-gray-800 text-4xl font-bold py-5" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000" data-aos-delay="200">${aboutUs.topic}</h2>
        <p class="text-lg text-center" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000" data-aos-delay="300">${aboutUs.desc}</p>
    `;
}


// Load product explorer section here

let productsExplorerContainer = document.querySelector('.productsExplorer');

function renderProductOverview(quaterItems) {
    productsExplorerContainer.innerHTML = " ";
    let productsExplorerContent = " ";
    quaterItems.forEach((item ) => {
        productsExplorerContent += `
            <div class="max-w-[300px] rounded-lg border border-gray-800 p-4 mt-4 relative"  data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000" data-aos-delay="200">
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
                    <button class="bg-blue-600 mx-auto  rounded-xl text-white p-3 py-3 hover:bg-black" onclick="buyProductItem('${item.img}', '${item.brandName}', '${item.price}', '${item.desc}')" >Buy Now</button>
                    <button class="bg-red-600 mx-auto rounded-xl text-white p-3 py-3 hover:bg-black" onclick="addToCartProductItem('${item.img}', '${item.brandName}', '${item.price}', '${item.desc}')" >Add to Cart</button>
                </div>
            </div>
        `;
    });
    productsExplorerContainer.innerHTML = productsExplorerContent;
}


let subContentContainer = document.querySelector('.subContentContainer');
function renderSubContent(totalContent) {
    subContentContainer.innerHTML = "";
    let subContentContainerContent = "";
    let imageContent = totalContent[0];
    let textContent = totalContent[1];
    subContentContainerContent += `
        <div class="" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000" data-aos-delay="200">
            <img src="${imageContent.src}" alt="${imageContent.alt}" /> 
        </div>
    `;

    subContentContainerContent += `
        <div class="p-5" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="2000" data-aos-delay="200">
            <h2 class="text-center font-bold text-2xl pb-5">${textContent.title}</h2>
            <p class="py-5">${textContent.content1}</p>
            <p class="pb-2">${textContent.content2}</p>
            <p class="font-semibold text-center text-lg">${textContent.endContent}</p>
            <div class="justify-center pt-4">
                <button type="button" class="bg-gray-800 text-white rounded-md p-5 hover:bg-gray-700">Explorer More ..</button>
            </div>
        </div>
    `;

    subContentContainer.innerHTML = subContentContainerContent;
}

const footerContainer = document.querySelector('.footer');
const footerEndContainer = document.querySelector('.footerEnd');
function loadFooter(footerContent) {
    footerContainer.innerHTML = "";
    let footerContainer1 = footerContent[0];
    let footerContainer2 = footerContent[1];
    let footerContainer3 = footerContent[2];
    let footerContainer4 = footerContent[3];
    let footerContainer5 = footerContent[4];

    let loadFooterContent = "";
    loadFooterContent += `
        <div class="">
            <h3>${footerContainer1.title}</h3>
            <p><a href="" >${footerContainer1.link1}</a></p>
            <p><a href="">${footerContainer1.link2}</a></p>
            <p><a href="">${footerContainer1.link3}</a></p>
            <p><a href="">${footerContainer1.link4}</a></p>
        </div>
    `;
    loadFooterContent += `
        <div class="">
            <h3>${footerContainer2.title}</h3>
            <p><a href="" >${footerContainer2.link1}</a></p>
            <p><a href="">${footerContainer2.link2}</a></p>
            <p><a href="">${footerContainer2.link3}</a></p>
        </div>
    `;
    loadFooterContent += `
        <div class="">
            <img src="${footerContainer3.img}" alt="" style="width:120px;"/>
            <p><a href="" >${footerContainer3.link1}</a></p>
            <p><a href="">${footerContainer3.link2}</a></p>
            <p><a href="">${footerContainer3.link3}</a></p>
        </div>
    `;
    
    loadFooterContent += `
        <div class="">
            <h3>${footerContainer4.title}</h3>
            <p><a href="" >${footerContainer4.link1}</a></p>
            <p><a href="">${footerContainer4.link2}</a></p>
            <p><a href="">${footerContainer4.link3}</a></p>
            
        </div>
    `;
    loadFooterContent += `
        <div class="">
            <h3>${footerContainer5.title}</h3>
            <p><a href="" >${footerContainer5.link1}</a></p>
            <p><a href="">${footerContainer5.link2}</a></p>
            <p><a href="">${footerContainer5.link3}</a></p>
        </div>
    `;

    footerContainer.innerHTML = loadFooterContent;
}

function loadFooterEnd() {
    footerEndContainer.innerHTML = "";
    let footerEndContent = " ";
    footerEndContent += `
        <div class="">
            <img src="" alt="Lorem ipsum dolor"/>
            <h2 class="text-3xl">Lorem ipsum dolor</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    `;
    footerEndContent += `
        <div class="">
            <input type="text" name="text" id="submit"/>
            <input type="submit" value="subcribe"/>
        </div>
    `;
    footerEndContent += `
        <div class="flex justify-center">
            <a href=""><img src="./icons/socialmedia/facebook.png" alt="Lorem ipsum dolor sit amet consectetur" style="width:60px;height:60px;"/></a>
            <a href=""><img src="./icons/socialmedia/instagram.png" alt="Lorem ipsum dolor sit amet consectetur" style="width:60px;height:60px;"/></a>            
            <a href=""><img src="./icons/socialmedia/twitter.png" alt="Lorem ipsum dolor sit amet consectetur" style="width:60px;height:60px;"/></a>
            <a href=""><img src="./icons/socialmedia/pinterest.png" alt="Lorem ipsum dolor sit amet consectetur" style="width:60px;height:60px;"/></a>
            <a href=""><img src="./icons/socialmedia/linkedIn.png" alt="Lorem ipsum dolor sit amet consectetur" style="width:60px;height:60px;"/></a>
        </div>
    `;

    footerEndContainer.innerHTML = footerEndContent;
}