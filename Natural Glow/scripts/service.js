import {content1,content2,content3,content4} from './footer.js';

let footercontent = document.querySelector('.footer');
window.addEventListener('DOMContentLoaded',() => {
    loadFooter();
})

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
                <div class="d-grid" style="display:grid;place-items:center;">
                    <h2 class="text-center text-white">${item.title}</h2>
                    <p class="text-white">${item.topic}</p>
                    <button type="button" class="line_btn">${item.buttonValue}</button>
                </div>
            </div>
        `
    });

    console.log(footerContent);
    footer.innerHTML = footerContent;
}