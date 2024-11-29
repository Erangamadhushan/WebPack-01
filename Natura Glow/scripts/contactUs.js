import {contact} from './contactDetails.js';
import {content1,content2,content3,content4} from './footer.js';



window.addEventListener('DOMContentLoaded',() => {
    loadContactUsDetails(contact);
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

/* Load Contact Us Details */
let ContactUsContainer = document.querySelector('.contactContainer');
function loadContactUsDetails(contactDetails) {
    ContactUsContainer.innerHTML = " ";
    let contactUsContainerContent = " ";
    contactDetails.forEach((item) => {
        console.log(item.title)
        contactUsContainerContent += `
            <div class="row row-cols-2 py-5 text-dark " data-aos="fade-up"  data-aos-duration="400" data-aos-easing="linear" data-aos-delay="300" data-aos-anchor-placement="bottom-bottom">
                <div>
                    <h2 class="text-dark text-center">
                        ${item.title}
                    </h2>
                    <p class="text-center">
                        ${item.desc}
                    </p>
                </div>
                <div>
                    <p>${item.criteria[0]}</p>
                    <p>${item.criteria[1]}</p>
                    <p>${item.criteria[2]}</p>
                    <button type="button" class="main_btn">Contact</button>
                </div>
            </div>
        `;
    });

    ContactUsContainer.innerHTML = contactUsContainerContent;
}
