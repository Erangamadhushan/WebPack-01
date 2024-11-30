import {content1,content2,content3,content4} from './footer.js';
import {subDetails1, subDetails2} from './subscription.js';
import {contact} from './contactDetails.js';

let footercontent = document.querySelector('.footer');
window.addEventListener('DOMContentLoaded',() => {
    loadFooter();
    loadSubDetails(subDetails1, subDetails2);
    loadContactUsDetails(contact);
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

//load userComplains

let complainContainer = document.querySelector('#complain');
function loadComplain() {
    complainContainer.innerHTML = `
        <h1 class="py-5 my-4">Nothing to show Complains</h1>
    `;
}

// call the userComplains function
loadComplain();


//add subcription details


function loadSubDetails(Details1, Details2) {
    let subDetail = document.querySelector('.subscription_details');
    subDetail.innerHTML = " ";
    let content = " ";
    content += `
        <div class="col-lg-5 col-md-6">
            <img src="${Details1.img}" alt="subcriptionImage" style="max-width:100%;"/>
        </div>
    `;
    content +=`
        <div class="col-lg-5 col-md-6 p-5">
            <h2 class="text-center main_heading">${Details2.title}</h2>
            <form action="./backend/subcription.php" method="post">
                <div class="my-3">
                    <label for="name" class="form-label">${Details2.name}</label>
                    <input type="text" class="form-control" id="name" name="name"/>
                </div>
                <div class="my-3">
                    <label for="name" class="form-label">${Details2.email}</label>
                    <input type="text" class="form-control" id="name" name="name"/>
                </div>
                <div class="my-3">
                    <input type="submit" class="btn btn-danger" value="Subscribe" name="submit"/>
                </div>
            </form>
        </div>
    `;

    subDetail.innerHTML += content;
}

