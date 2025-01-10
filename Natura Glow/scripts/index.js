import {products} from './products.js';
import { testiminals } from './terminologies.js';
import {content1,content2,content3,content4} from './footer.js';
import {explorer} from './explorer.js';

let products_container = document.querySelector('.products_container');
let terminologie = document.querySelector('.terminologies');

window.addEventListener('DOMContentLoaded',() => {
    renderitems(products);
    renderterminologies(testiminals);
    loadFooter();
    explorerItem(explorer);
    rendersubSectionContent();
    renderProductExplorerContent();
});

function renderitems(products) {
    let products_content = "";
    products_container.innerHTML = " ";
    products.forEach((item,index) => {
        products_content += `
            <div class="col-lg-3 col-md-3 cold-sm-6 border border-3 rounded-4 py-4" data-aos="fade-up" data-aos-duration="400" data-aos-easing="linear" data-aos-delay="300" data-aos-anchor-placement="bottom-bottom" style="max-width:380px;">
                <div class="d-grid" style="display:grid;place-items:center;">
                    <img src="${item.img}" alt="services_images" style="width:90%;aspect-ratio:3/2;object-fit:cover;"/>
                    <h4 class="text-center main_heading py-2">${item.title}</h4>
                    <p class="text-center main_heading">${item.desc}</p>
                    <p class="text-center main_description">$${item.price}
                </div>
            </div>
        `
    });

    products_container.innerHTML = products_content;
}

function renderterminologies(testiminals) {
    terminologie.innerHTML = " ";
    let terminologies_content = " ";
    testiminals.forEach((item,index) => {
        terminologies_content += `
            <div class="col-lg-3 col-md-4 col-sm-6 border-line  border-rl py-4 mb-3" data-aos="fade-up" data-aos-duration="400" data-aos-easing="linear" data-aos-anchor-placement="bottom-bottom">
                <div class="d-grid" style="display:grid;place-items:center;">
                    <div>
                        <p class="text-center">${item.desc}</p>
                    </div>
                    <div class="row row-cols-2">
                        <div class="col-5">
                            <img src="${item.user}" alt="services_images" style="width:100px;aspect-ratio:1;object-fit:cover;"/>
                        </div>
                        <div class="col-7">
                            <h4 class="text-center main_heading py-2">${item.userName}</h4>
                            <p class="text-center main_heading">${item.rating}/10</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    });
    terminologie.innerHTML = terminologies_content;
}

function loadFooter(){
    let footer = document.querySelector('.footer');
    footer.innerHTML = " ";
    let footerContent = " ";
    content1.forEach((item) => {
        footerContent += `
            <div class="col-md-3 col-sm-6">
                <h1 class="text-white">${item.title}</h1>
                <p class="text-white">${item.desc}</p>
                <div class="bg-main p-3 w-50 d-flex justify-content-center">
                    <a href="" target="_blank"><img src="${item.facebookImg}" alt="facebookPageIcon" width="50"/></a>
                    <a href="" target="_blank"><img src="${item.instagramImg}" alt="instagramPageIcon" width="50"/></a>
                    <a href="" target="_blank"><img src="${item.xImg}" alt="xAccountIcon" width="50"/></a>
                </div>
                <p class="text-white">${item.extraContent}</p>
            </div>
        `
    });

    content2.forEach((item) => {
        footerContent += `
            <div class="col-md-3 col-sm-6">
                <h2 class="text-white">${item.title}</h2>
                <p class="text-white"><a href="${item.link1}">Products</a></p>
                <p><a href="${item.link2}">About Us</a></p>
                <p><a href="${item.link3}">Services</a></p>
                <p><a href="${item.link4}">Complain</a></p>
            </div>
        `
    });

    content3.forEach((item) => {
        footerContent += `
            <div class="col-md-3 col-sm-6">
                <h1 class="text-center text-white">${item.title}</h1>
                <img src="${item.img}" alt="Natura Glow logo" style="max-width:100%;"/>
            </div>
        `
    });

    content4.forEach((item) => {
        footerContent += `
            <div class="col-md-3 col-sm-6">
                <div  style="display:grid;place-items:center;">
                    <h2 class="text-center text-white">${item.title}</h2>
                    <p class="text-white text-center">${item.topic}</p>
                    <a href="subcription.html"  class="btn btn-danger">${item.buttonValue}</a>
                </div>
            </div>
        `
    });

    //console.log(footerContent);
    footer.innerHTML = footerContent;
}

let ex_content_container = document.querySelector('.ex_products');

function explorerItem(explorer) {
    // console.log(explorer);
    ex_content_container.innerHTML = "";
    let ex_content = " ";
    explorer.forEach((item) => {
        ex_content += `
            <div class="col-lg-3 col-md-3 col-sm-5 mb-2 item_direct p-0" style="max-width:380px;">
                <div class="card">
                    <img src="${item.img}" alt="${item.desc}" class="card-img-top"/>
                    <div class="card-body">
                        <h3 class="text-center main_heading">${item.category}</h3>
                        <p class="text-center main_description">${item.desc}</p>
                    </div>
                </div>
                <div class="card_explorer" style="display:grid;place-items:center;overflow:hidden;">
                    <h1 class="text-white">Shopping Now</h1>
                    <a href="products.html" class="main_btn">Explorer More..</a>
                </div>
            </div>
        `
    });
    console.log(ex_content);
    
    ex_content_container.innerHTML = ex_content;
}


//subscription information loads

let subscription = document.querySelector('.subscription_details');
subscription.innerHTML = " ";

//load subsection details

function rendersubSectionContent() {
    const subSection = document.querySelector(".subSection");
    subSection.innerHTML = `
        <div class="col-lg-3 col-md-4 col-sm-6 p-2 main_item py-3" data-aos="fade-up" data-aos-duration="400" data-aos-easing="linear" data-aos-anchor-placement="bottom-bottom" style="max-width:380px;">
            <h2 class="text-center">
                Lorem ipsum dolor sit.
            </h2>
            <p class="text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut et, odio, voluptas laudantium nulla reprehenderit consectetur voluptatum quam possimus, adipisci porro. 
            </p>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 main_item py-3" data-aos="fade-up" data-aos-duration="400" data-aos-easing="linear" data-aos-anchor-placement="bottom-bottom" style="max-width:380px;">
            <h2 class="text-center">
                Lorem ipsum dolor sit.
            </h2>
            <p class="text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut et, odio, voluptas laudantium nulla reprehenderit consectetur voluptatum quam possimus, adipisci porro. 
            </p>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 main_item py-3" data-aos="fade-up" data-aos-duration="400" data-aos-easing="linear" data-aos-anchor-placement="bottom-bottom" style="max-width:380px;">
            <h2 class="text-center">
                Lorem ipsum dolor sit.
            </h2>
            <p class="text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut et, odio, voluptas laudantium nulla reprehenderit consectetur voluptatum quam possimus, adipisci porro. 
            </p>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 main_item py-3" data-aos="fade-up" data-aos-duration="400" data-aos-easing="linear" data-aos-anchor-placement="bottom-bottom" style="max-width:380px;">
            <h2 class="text-center">
                Lorem ipsum dolor sit.
            </h2>
            <p class="text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut et, odio, voluptas laudantium nulla reprehenderit consectetur voluptatum quam possimus, adipisci porro. 
            </p>
        </div>
    `
}


//load product explorer content
function renderProductExplorerContent() {
    const productExplorerContainer = document.querySelector('.productExplorer');
    productExplorerContainer.innerHTML = `
        <div class="col-lg-2 col-md-3 col-sm-5 rounded-4 py-4 productExplorerContent" data-aos="fade-up" data-aos-duration="400" data-aos-easing="linear" data-aos-delay="300" data-aos-anchor-placement="bottom-bottom" style="max-width:380px;">
            <div class="d-grid" style="display:grid;place-items:center;">
                <img src="icons/collection.png" alt="services_images" width="70"/>
                <h4 class="text-center main_heading py-2">Heading 1</h4>
                <p class="text-center main_heading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsa reiciendis consequuntur similique distinctio?.</p>
            </div>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6 rounded-4 py-4 productExplorerContent" data-aos="fade-up" data-aos-duration="400" data-aos-easing="linear" data-aos-delay="300" data-aos-anchor-placement="bottom-bottom" style="max-width:380px;">
            <div class="d-grid" style="display:grid;place-items:center;">
                <img src="icons/advice.png" alt="services_images" width="70"/>
                <h4 class="text-center main_heading py-2">Heading 2</h4>
                <p class="text-center main_heading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsa reiciendis consequuntur similique distinctio?</p>
            </div>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6 rounded-4 py-4 productExplorerContent" data-aos="fade-up" data-aos-duration="400" data-aos-easing="linear" data-aos-delay="300" data-aos-anchor-placement="bottom-bottom" style="max-width:380px;">
            <div class="d-grid" style="display:grid;place-items:center;">
                <img src="icons/free-shipping.png" alt="services_images" width="70"/>
                <h4 class="text-center main_heading py-2">Heading 3</h4>
                <p class="text-center main_heading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsa reiciendis consequuntur similique distinctio?.</p>    
            </div>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6 border-solid-2 rounded-4 py-4 productExplorerContent" data-aos="fade-up" data-aos-duration="400" data-aos-easing="linear" data-aos-delay="300" data-aos-anchor-placement="bottom-bottom" style="max-width:380px;">
            <div class="d-grid" style="display:grid;place-items:center;">
                <img src="icons/store.png" alt="services_images" width="70"/>
                <h4 class="text-center main_heading py-2">Heading 4</h4>
                <p class="text-center main_heading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsa reiciendis consequuntur similique distinctio?.</p>
            </div>
        </div>
    `
}



