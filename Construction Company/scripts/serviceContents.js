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
        console.log(category);
        category.forEach((item) => {
            categoryContentItem += `
                <div class="col-md-10 my-4 border border-4 p-2 py-5">
                    <div class="row">
                        <div class="col-sm-5">
                            <h2>${item.topic}<h2>
                            <h5>Advantages</h5>
                            <p>${item.advantages}</p>
                            <h5>Disadvantages</h5>
                            <p>${item.disadvantages}</p>
                        </div>
                        <div class="col-sm-7">
                            <h5>Status :</h5>
                            <ul>
                                <li>${item.status[0]}</li>
                                <li>${item.status[1]}</li>
                                <li>${item.status[2]}</li>
                            </ul>
                            <p>${item.desc}</p>
                            <button type="button" class="btn btn-outline-success" onclick="setItems('${item.topic}','${item.desc}')">Explorer Chat</button>
                        </div>
                    </div>
                </div>
            `;
        })
    });
    console.log(categoryContentItem);
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


