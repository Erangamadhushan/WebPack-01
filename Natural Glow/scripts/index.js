import {products} from './products.js';

let products_container = document.querySelector('.products_container');

window.addEventListener('DOMContentLoaded',() => {
    renderitems(products);
});

function renderitems(products) {
    let products_content = "";
    products_container.innerHTML = " ";
    products.forEach((item,index) => {
        products_content += `
            <div class="col-lg-2 col-md-3 cold-sm-6 bg-main rounded-4 py-4">
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