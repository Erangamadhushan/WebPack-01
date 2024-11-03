import {products} from './all-products.js';


window.addEventListener("DOMContentLoaded",() => {
    renderingItems(products);
});

let loadcategory1Items = document.querySelector('.category1Items');
let loadcategory2Items = document.querySelector('.category2Items');
let loadcategory3Items = document.querySelector('.category3Items');
let loadcategory4Items = document.querySelector('.category4Items');
let loadcategory5Items = document.querySelector('.category5Items');

let categoryType1Heading = document.querySelector('.category1ItemsHeading');
let categoryType2Heading = document.querySelector('.category2ItemsHeading');
let categoryType3Heading = document.querySelector('.category3ItemsHeading');
let categoryType4Heading = document.querySelector('.category4ItemsHeading');
let categoryType5Heading = document.querySelector('.category5ItemsHeading');

let category1Items = [];
let category2Items = [];
let category3Items = [];
let category4Items = [];
let category5Items = [];

function renderingItems(product) {
    product.forEach((item) => {
        switch(item.category){
            case "category1":
                if(!category1Items.includes(item.title)) {
                    category1Items.push(item);
                }
                // loadItems(category1Items);
            break;
            case "category2":
                if(!category2Items.includes(item.title)) {
                    category2Items.push(item);
                    
                }
                // loadItems(category2Items);
                // console.log(item.title);
            break;
            case "category3":
                if(!category3Items.includes(item.title)) {
                    category3Items.push(item);
                    
                }
                // loadItems(category3Items);
            break;
            case "category4":
                if(!category4Items.includes(item.title)) {
                    category4Items.push(item);
                    
                }
                // loadItems(category4Items);
            break;
            case "category5":
                if(!category5Items.includes(item.title)) {
                    category5Items.push(item);
                }
                // loadItems(category5Items);
            break;
        }

    })
    loadItems(category1Items);
    loadItems(category2Items);
    loadItems(category3Items);
    loadItems(category4Items);
    loadItems(category5Items);
}

loadcategory1Items.innerHTML = " ";
loadcategory2Items.innerHTML = " ";
loadcategory3Items.innerHTML = " ";
loadcategory4Items.innerHTML = " ";
loadcategory5Items.innerHTML = " ";
function loadItems(items){
    let content = " ";
    items.forEach((item) => {
        switch(item.category) {
            case "category1":
                content += `
                    <div class="col-lg-2 col-md-4 cold-sm-6 rounded-4 py-4" data-aos="fade-up" data-aos-duration="400" data-aos-easing="linear" data-aos-delay="300" data-aos-anchor-placement="bottom-bottom">
                        <div class="card">
                            <img src="${item.img}" class="card-img-top"/>
                            <div class="card-body">
                                <h1>${item.title}</h1>
                                <p>${item.category}</p>
                                <p>${item.desc}</p>
                                <span class="main_description">$${item.price} </span>
                                <button type="button" class="main_btn">Buy Now</button>
                            </div>
                        </div>
                    </div>
                `;
                loadcategory1Items.innerHTML = content;
                categoryType1Heading.innerHTML = item.category;
            break;
            case "category2":
                content += `
                    <div class="col-lg-2 col-md-4 cold-sm-6 rounded-4 py-4" data-aos="fade-up" data-aos-duration="400" data-aos-easing="linear" data-aos-delay="300" data-aos-anchor-placement="bottom-bottom">
                        <div class="card">
                            <img src="${item.img}" class="card-img-top"/>
                            <div class="card-body">
                                <h1>${item.title}</h1>
                                <p>${item.category}</p>
                                <p>${item.desc}</p>
                                <span class="main_description">$${item.price} </span>
                                <button type="button" class="main_btn">Buy Now</button>
                            </div>
                        </div>
                    </div>
                `
                loadcategory2Items.innerHTML = content;
                categoryType2Heading.innerHTML = item.category;
            break;
            case "category3":
                content += `
                    <div class="col-lg-2 col-md-4 cold-sm-6 rounded-4 py-4" data-aos="fade-up" data-aos-duration="400" data-aos-easing="linear" data-aos-delay="300" data-aos-anchor-placement="bottom-bottom">
                        <div class="card">
                            <img src="${item.img}" class="card-img-top"/>
                            <div class="card-body">
                                <h1>${item.title}</h1>
                                <p>${item.category}</p>
                                <p>${item.desc}</p>
                                <span class="main_description">$${item.price} </span>
                                <button type="button" class="main_btn">Buy Now</button>
                            </div>
                        </div>
                    </div>
                `;
                loadcategory3Items.innerHTML = content;
                categoryType3Heading.innerHTML = item.category;
            break;
            case "category4":
                content += `
                    <div class="col-lg-2 col-md-4 cold-sm-6 rounded-4 py-4" data-aos="fade-up" data-aos-duration="400" data-aos-easing="linear" data-aos-delay="300" data-aos-anchor-placement="bottom-bottom">
                        <div class="card">
                            <img src="${item.img}" class="card-img-top"/>
                            <div class="card-body">
                                <h1>${item.title}</h1>
                                <p>${item.category}</p>
                                <p>${item.desc}</p>
                                <span class="main_description">$${item.price} </span>
                                <button type="button" class="main_btn">Buy Now</button>
                            </div>
                        </div>
                    </div>
                `;
                loadcategory4Items.innerHTML = content;
                categoryType4Heading.innerHTML = item.category;
            break;
            case "category5":
                content += `
                    <div class="col-lg-2 col-md-4 cold-sm-6 rounded-4 py-4" data-aos="fade-up" data-aos-duration="400" data-aos-easing="linear" data-aos-delay="300" data-aos-anchor-placement="bottom-bottom">
                        <div class="card">
                            <img src="${item.img}" class="card-img-top"/>
                            <div class="card-body">
                                <h1>${item.title}</h1>
                                <p>${item.category}</p>
                                <p>${item.desc}</p>
                                <span class="main_description">$${item.price} </span>
                                <button type="button" class="main_btn">Buy Now</button>
                            </div>
                        </div>
                    </div>
                `;
                loadcategory5Items.innerHTML = content;
                categoryType5Heading.innerHTML = item.category;
            break;
        }
    });

    
}



