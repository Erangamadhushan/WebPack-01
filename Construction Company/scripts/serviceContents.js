import {AllcategoryContents} from './CategoriesContents/categoryContents.js';
import {items} from './itemContent.js';


window.addEventListener("DOMContentLoaded", () => {
    renderCategoryNames(AllcategoryContents);
    renderCategoryDetails(AllcategoryContents);
});

function renderCategoryNames(categoryContents) {
    // categoryContents.forEach((categoryContent) => {
    //     console.log(categoryContent);
    // })

    console.log(categoryContents[0]);
}

function renderCategoryDetails(categories) {
    categories.forEach((category) => {
        category.forEach((categoryItems) => {
            //console.log(categoryItems);
        })
    })
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
    console.log(ele);
    categorycontent += `
        <div class="col-md-2 col-sm-5 mt-3" style="display:grid;place-items:center;" data-aos="fade-right" data-aos-duration="400" data-aos-easing="linear" data-aos-anchor-placement="bottom-bottom">
            <button type="button" class="btn-outline-main">  ${ele}</button>
        </div>  
    `;
    


});
CategoryMenu.innerHTML = categorycontent;