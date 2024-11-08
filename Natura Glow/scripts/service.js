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

let welcomeNote = " Where beauty meets science, and your unique style shines! We’re dedicated to providing top-quality, innovative cosmetic services that bring out the best in you. Our team of beauty experts and skincare specialists work with leading products and techniques to offer you a luxurious, tailored experience.";
let services_content = [];
let services_heading = [];
services_content[0] = "From everyday elegance to special occasion glam, our professional makeup artists craft stunning looks that enhance your natural beauty. We use premium products to ensure a flawless finish every time.";
services_content[1] = "Experience our rejuvenating skincare services, designed to give you radiant, healthy skin. Our facials, peels, and skin consultations are customized for all skin types and concerns.";
services_content[2] = "Not sure which products or treatments are best for you? Our experts are here to guide you with personalized consultations, helping you achieve the perfect routine tailored to your needs.";
services_content[3] = "Learn from the best! We offer group and private beauty workshops where you can master makeup techniques, skincare routines, and more.";

services_heading[0] = "Makeup Artistry";
services_heading[1] = "Skin Care Treatments";
services_heading[2] = "Personalized Beauty Consultations";
services_heading[3] = "Beauty Workshops";
let endNote = "At Natura Glow, we're committed to delivering beauty solutions that make you feel confident, empowered, and effortlessly radiant. Explore our services and let us help you reveal your most beautiful self!";

let welcomeNoteDesc = document.querySelector('.welcomeNoteDesc');
welcomeNoteDesc.innerHTML = welcomeNote;

let service_heading = document.querySelectorAll('.service_heading');
let service_desc = document.querySelectorAll('.service_desc');

service_heading[0].innerHTML = services_heading[0];
service_heading[1].innerHTML = services_heading[1];
service_heading[2].innerHTML = services_heading[2];
service_heading[3].innerHTML = services_heading[3];

service_desc[0].innerHTML = services_content[0];
service_desc[1].innerHTML = services_content[1];
service_desc[2].innerHTML = services_content[2];
service_desc[3].innerHTML = services_content[3];
