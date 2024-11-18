import {AllcategoryContents} from './CategoriesContents/categoryContents.js';
import {items} from './itemContent.js';


window.addEventListener("DOMContentLoaded", () => {
    //renderCategoryNames(AllcategoryContents);
    renderCategoryDetails(AllcategoryContents);
});


function renderCategoryDetails(categories) {
    let outputCategoryContents = document.querySelector('.categoryContents');
    let categoryContentItem = " "; 
    categories.forEach((category) => {
        categoryContentItem += `<h1>${category.topic}</h1>`;
        category.forEach((categoryItems) => {
            categoryContentItem += `
                <div class="col-md-8">
                    <div class="row row-cols-2">
                        <div class="col-4">

                        </div>
                        <div class="col-8">

                        </div>
                    </div>
                </div>
            `
        })
    });
    outputCategoryContents.innerHTML = categoryContentItem;
}

//load categoryMenu content

let CategoryMenu = document.querySelector('.categoryMenu');


CategoryMenu.innerHTML = " ";
let Categories = [];
let categorycontent = " ";
items.forEach((apartment) => {
    if(!Categories.includes(apartment.category)) {
        Categories.push(apartment.category);
    }
})
Categories.forEach((ele) => {
    categorycontent += `
        <div class="col-md-2 col-sm-5 mt-3" style="display:grid;place-items:center;" data-aos="fade-right" data-aos-duration="400" data-aos-easing="linear" data-aos-anchor-placement="bottom-bottom">
            <button type="button" class="btn-outline-main">  ${ele}</button>
        </div>  
    `;
    

});
CategoryMenu.innerHTML = categorycontent;