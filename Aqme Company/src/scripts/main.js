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
        <a href="index.html#aboutUs" class="text-xl font-semibold hover:font-bold">About Us</a>
        <a href="products.html" class="text-xl font-semibold hover:font-bold">Products</a>
        <a href="faq.html" class="text-xl font-semibold hover:font-bold">FAQ</a>
    </nav>
    <div class="items-center hidden md:block justify-center px-2 gap-2">
        <input class="p-2 border focus:border-green-200 rounded-lg text-black focus:outline-none" type="text" name="SearchOption" placeholder="Search here.." id="SearchOption"/>
        <button class="bg-black p-2 m-1 text-white" onclick="javascript:focusInputSection()">Search</button>
    </div>
    <div class="hidden md:block space-x-5">
        <button onclick="visitCartproducts()" class="bg-gray-500 p-2"><img src="./icons/buy.png" style="width:30px;"/></button>
        <button onclick="visitUserprofile()" class="bg-gray-500 p-2"><img src="./icons/user.png" style="width:30px;"/></button>
    </div>
    <div class=" p-3">
        <button  class="bg-black text-3xl text-white p-1 px-3 rounded-lg custom:hidden" id="flip">&#9776;</button>
    </div>
    
`;


// Load nav bar into the main html files

document.querySelector('#panel').innerHTML = `
    <nav class="justify-center items-center grid grid-cols-1 bg-black text-white  px-3 custom:hidden">
        <a href="index.html" class="text-xl font-semibold text-white hover:font-bold text-center py-3" >Home</a>
        <a href="index.html#aboutUs" class="text-xl font-semibold text-white hover:font-bold text-center py-3">About Us</a>
        <a href="./products.html" class="text-xl font-semibold text-white hover:font-bold text-center py-3">Products</a>
        <a href="./faq.html" class="text-xl font-semibold text-white hover:font-bold text-center py-3">FAQ</a>
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
        <div class=" p-5 flex flex-col gap-2 justify-center text-white" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000" data-aos-delay="200">
            <div>
                <h1 class="text-5xl text-center font-bold text-red-600 pb-5">Special OFfer</h1>
                <p class=" text-white">${rightContent.subtext}</p>
                <h2 class="text-3xl text-white">${rightContent.topic}</h2>
                <h1 class="text-4xl text-white font-bold">$${rightContent.price}</h1>
                <p class="text-lg py-4 text-white">${rightContent.desc}</p>
                <div>
                    <a href="products.html" class="bg-gray-800 hover:bg-black text-white p-4 px-10 text-lg font-bold rounded-lg">Explorer More..</a>
                </div>
            </div>
        </div>
        
    `;
    openContent += `
        <div class=" py-10 overflow-hidden rounded-lg items-center">
            
        </div>
    `;

    openContainer.innerHTML = openContent; 
}


// Load line content here

let lineContainer = document.querySelector(".OpenDescription");

function renderLineContent() {
    lineContainer.innerHTML = `
        <h2 class="text-center text-white text-4xl font-bold py-5" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000" data-aos-delay="200">${aboutUs.topic}</h2>
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
            <div class="max-w-[300px] rounded-lg border border-white text-white bg-black duration-200 group hover:bg-gray-900 hover:text-white p-4 mt-4 relative"  data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000" data-aos-delay="200">
                <div class=" group-hover:text-green-400">
                    <div class="max-w-[350px] mx-auto my-10">
                        <img src="${item.img}" alt="${item.desc}" style="margin:auto;width:70%;"/>
                    </div>
                    <div>
                        <h2 class="text-center font-semibold">${item.brandName}</h2>
                        <h3 class="text-center font-bold">$${item.price}</h3>
                    </div>
                </div>
                <div class="grid place-items-center  mt-4 gap-3  ">
                    <button class=" z-0 bg-red-600 w-[80%] border relative overflow-hidden border-red-600 mx-auto rounded-xl text-white p-3 py-3 group-hover:bg-black group-hover:text-white group-hover:border-green-400 group"  onclick="buyProductItem('${item.img}', '${item.desc}','${item.brandName}',  '${item.price}')"><span class="z-100 text-white">Add to Cart</span>
                        <div class="button-animation group-hover:translate-x-0 group-hover:translate-y-0 group-hover:z-0 duration-300 absolute top-0 left-0 w-full min-h-full overflow-hidden bg-green-400"></div>
                    </button>
                    
                </div>
            </div>
        `;
    });
    productsExplorerContainer.innerHTML = productsExplorerContent;
}

//<button class="bg-blue-600 mx-auto  rounded-xl text-white p-3 py-3 hover:bg-black"  onclick="buyProductItem('${item.img}', '${item.desc}','${item.brandName}',  '${item.price}')">Buy Now</button>

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
        <div class="p-5 text-white page-sections" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="2000" data-aos-delay="200">
            <h2 class="text-center font-bold text-2xl pb-5">${textContent.title}</h2>
            <p class="py-5">${textContent.content1}</p>
            <p class="pb-2">${textContent.content2}</p>
            <p class="font-semibold text-center text-lg">${textContent.endContent}</p>
            <div class="justify-center p-4">
                <a href="./products.html" class="bg-gray-800 text-white rounded-md p-5 hover:bg-gray-700">Explorer More ..</a>
            </div>
        </div>
    `;

    subContentContainer.innerHTML = subContentContainerContent;
}

/* load footer content */
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
        </div>
    `;
    loadFooterContent += `
        <div class="">
            <img src="${footerContainer3.img}" alt="" style="width:120px;"/>
        </div>
    `;
    
    loadFooterContent += `
        <div class="">
            <h3>${footerContainer4.title}</h3>
            <p class="text-blue-400 hover:underline"><a href="./cartItem.html" >${footerContainer4.link1}</a></p>
            <p class="text-blue-400 hover:underline"><a href="./userProfile.html">${footerContainer4.link2}</a></p>
        </div>
    `;
    loadFooterContent += `
        <div class="">
            <h3>${footerContainer5.title}</h3>
        </div>
    `;

    footerContainer.innerHTML = loadFooterContent;
}

function loadFooterEnd() {
    footerEndContainer.innerHTML = "";
    let footerEndContent = " ";
    footerEndContent += `
        <div class="">
            <img src="./images/main.jpg" style="width:150px;" alt="Lorem ipsum dolor"/>
            <h2 class="text-3xl">Aqme Luxury Watch Selling Company</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    `;
    footerEndContent += `
        <div class="">
            <p class="py-4 text-xl text-white">Subscribe to our newsletter</p>
            <input type="text" name="text" class="p-2 w-[300px] rounded-md" id="submit"/>
            <input type="submit" class="bg-gray-500 p-2 rounded-md hover:bg-gray-600" value="subcribe"/>
            
        </div>
    `;
    footerEndContent += `
        <div class="flex justify-center flex-col">
            <p>Copyright 2022 Aqme Luxury Watch Selling Company</p>
            <div class="flex justify-center gap-2">
                <a href=""><img class="socialMedia" src="./icons/socialmedia/facebook.png" alt="Lorem ipsum dolor sit amet consectetur" style="width:60px;height:60px;"/></a>
                <a href=""><img class="socialMedia" src="./icons/socialmedia/instagram.png" alt="Lorem ipsum dolor sit amet consectetur" style="width:60px;height:60px;"/></a>            
                <a href=""><img class="socialMedia" src="./icons/socialmedia/twitter.png" alt="Lorem ipsum dolor sit amet consectetur" style="width:60px;height:60px;"/></a>
                <a href=""><img class="socialMedia" src="./icons/socialmedia/pinterest.png" alt="Lorem ipsum dolor sit amet consectetur" style="width:60px;height:60px;"/></a>
                <a href=""><img class="socialMedia" src="./icons/socialmedia/linkedIn.png" alt="Lorem ipsum dolor sit amet consectetur" style="width:60px;height:60px;"/></a>
            </div>
        </div>
    `;

    footerEndContainer.innerHTML = footerEndContent;
}


