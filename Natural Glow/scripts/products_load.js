import {products} from './all-products.js';

window.addEventListener("DOMContentLoaded",() => {
    renderingItems(products);
});

let category1ItemsCollection = document.querySelector('.category1Items');
let category2ItemsCollection = document.querySelector('.category2Items');
let category3ItemsCollection = document.querySelector('.category3Items');
let category4ItemsCollection = document.querySelector('.category4Items');
let category5ItemsCollection = document.querySelector('.category5Items');

let category1Items = [];
function renderingItems(products) {
    products.forEach((item) => {
        category1ItemsCollection.innerHTML = " ";
        category2ItemsCollection.innerHTML = " ";
        category3ItemsCollection.innerHTML = " ";
        category4ItemsCollection.innerHTML = " ";
        category5ItemsCollection.innerHTML = " ";
        switch(item.category){
            case "category1":
                console.log(item.title);
                if(!category1Items.includes(item.title)) {
                    category1Items.push(item);
                    
                }
                loadItems(category1Items);
            break;
            case "category2":
                if(!category2Items.includes(item.title)) {
                    category2Items.push(item);
                    
                }
                loadItems(category2Items);
                console.log(item.title);
            break;
            case "category3":
                if(!category3Items.includes(item.title)) {
                    category3Items.push(item);
                    
                }
                loadItems(category3Items);
            break;
            case "category2":
                if(!category4Items.includes(item.title)) {
                    category4Items.push(item);
                    
                }
                loadItems(category4Items);
            break;
            case "category5":
                if(!category5Items.includes(item.title)) {
                    category5Items.push(item);
                }
                loadItems(category5Items);
            break;
        }
    })
}

function loadItems(items) {
    let content = " ";
    

    switch(items.category){
        case "category1":
            category1ItemsCollection.innerHTML += `
                <div class="col-lg-3 col-md-4 col-sm-6 border-line  border-rl py-4 mb-3" data-aos="fade-up" data-aos-duration="400" data-aos-easing="linear" data-aos-anchor-placement="bottom-bottom">
                    <div class="d-grid" style="display:grid;place-items:center;">
                        <div>
                            <h2 class="text-center">${items.title}</h2>
                            <p class="text-center">${items.category}</p>
                        </div>
                        <div class="row row-cols-2">
                            <div class="col-5">
                                <img src="${items.img}" alt="services_images" style="width:100px;aspect-ratio:1;object-fit:cover;"/>
                            </div>
                            <div class="col-7">
                                <p class="text-center main_heading">${items.desc}</p>
                                <p class="text-center main_heading">${items.price}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            break;
            case "category2":
                category2ItemsCollection.innerHTML += `
                    <div class="col-lg-3 col-md-4 col-sm-6 border-line  border-rl py-4 mb-3" data-aos="fade-up" data-aos-duration="400" data-aos-easing="linear" data-aos-anchor-placement="bottom-bottom">
                        <div class="d-grid" style="display:grid;place-items:center;">
                            <div>
                                <h2 class="text-center">${items.title}</h2>
                                <p class="text-center">${items.category}</p>
                            </div>
                            <div class="row row-cols-2">
                                <div class="col-5">
                                    <img src="${items.img}" alt="services_images" style="width:100px;aspect-ratio:1;object-fit:cover;"/>
                                </div>
                                <div class="col-7">
                                    <p class="text-center main_heading">${items.desc}</p>
                                    <p class="text-center main_heading">${items.price}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            break;
            case "category3":
                category3ItemsCollection.innerHTML += `
                    <div class="col-lg-3 col-md-4 col-sm-6 border-line  border-rl py-4 mb-3" data-aos="fade-up" data-aos-duration="400" data-aos-easing="linear" data-aos-anchor-placement="bottom-bottom">
                        <div class="d-grid" style="display:grid;place-items:center;">
                            <div>
                                <h2 class="text-center">${items.title}</h2>
                                <p class="text-center">${items.category}</p>
                            </div>
                            <div class="row row-cols-2">
                                <div class="col-5">
                                    <img src="${items.img}" alt="services_images" style="width:100px;aspect-ratio:1;object-fit:cover;"/>
                                </div>
                                <div class="col-7">
                                    <p class="text-center main_heading">${items.desc}</p>
                                    <p class="text-center main_heading">${items.price}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            break;
            case "category4":
                category4ItemsCollection.innerHTML += `
                    <div class="col-lg-3 col-md-4 col-sm-6 border-line  border-rl py-4 mb-3" data-aos="fade-up" data-aos-duration="400" data-aos-easing="linear" data-aos-anchor-placement="bottom-bottom">
                        <div class="d-grid" style="display:grid;place-items:center;">
                            <div>
                                <h2 class="text-center">${items.title}</h2>
                                <p class="text-center">${items.category}</p>
                            </div>
                            <div class="row row-cols-2">
                                <div class="col-5">
                                    <img src="${items.img}" alt="services_images" style="width:100px;aspect-ratio:1;object-fit:cover;"/>
                                </div>
                                <div class="col-7">
                                    <p class="text-center main_heading">${items.desc}</p>
                                    <p class="text-center main_heading">${items.price}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            break;
            case "category5":
                category5ItemsCollection.innerHTML += `
                    <div class="col-lg-3 col-md-4 col-sm-6 border-line  border-rl py-4 mb-3" data-aos="fade-up" data-aos-duration="400" data-aos-easing="linear" data-aos-anchor-placement="bottom-bottom">
                        <div class="d-grid" style="display:grid;place-items:center;">
                            <div>
                                <h2 class="text-center">${items.title}</h2>
                                <p class="text-center">${items.category}</p>
                            </div>
                            <div class="row row-cols-2">
                                <div class="col-5">
                                    <img src="${items.img}" alt="services_images" style="width:100px;aspect-ratio:1;object-fit:cover;"/>
                                </div>
                                <div class="col-7">
                                    <p class="text-center main_heading">${items.desc}</p>
                                    <p class="text-center main_heading">${items.price}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            break;
        }
    }
