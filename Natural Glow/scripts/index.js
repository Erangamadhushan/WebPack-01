import {products} from './products.js';
import { testiminals } from './terminologies.js';

let products_container = document.querySelector('.products_container');
let terminologie = document.querySelector('.terminologies');

window.addEventListener('DOMContentLoaded',() => {
    renderitems(products);
    renderterminologies(testiminals);
});

function renderitems(products) {
    let products_content = "";
    products_container.innerHTML = " ";
    products.forEach((item,index) => {
        products_content += `
            <div class="col-lg-2 col-md-3 cold-sm-6 bg-main rounded-4 py-4" data-aos="fade-up" data-aos-duration="400" data-aos-easing="linear" data-aos-delay="300" data-aos-anchor-placement="bottom-bottom">
                <div class="d-grid" style="display:grid;place-items:center;">
                    <img src="${item.img}" alt="services_images" style="width:120px;aspect-ratio:3/2;object-fit:cover;"/>
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