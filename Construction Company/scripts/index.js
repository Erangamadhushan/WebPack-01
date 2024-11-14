import {items,line_img,line_text,cardProperty,customerReviews,experts} from './itemContent.js'

window.addEventListener("DOMContentLoaded", () => {
    renderItems(items);
    renderlineContent(line_img,line_text);
    renderCardProperties(cardProperty);
    renderCustomerReviews(customerReviews);
    renderExpertDetails(experts);
});

let showCategories = document.querySelector('.getCategory');
let line_images = document.querySelector('.line_img_container');
let line_context = document.querySelector('.line_text_container');

// render main content in web page

function renderItems(Apartments) {
    showCategories.innerHTML = " ";
    let content = " ";
    let categories = [];
    Apartments.forEach((apartment) => {
        if(!categories.includes(apartment.category)) {
            categories.push(apartment.category);
        }
    })
    categories.forEach((ele) => {
        content += `
            <div class="col-md-2 col-sm-5 " style="display:grid;place-items:center;">
                <button type="button" class="btn btn-outline-dark btn-lg">${ele}</button>
            </div>  
        `
    });
    showCategories.innerHTML = content;
}

// Render the line content here 

function renderlineContent(img,text) {
    line_images.innerHTML = " ";
    line_context.innerHTML = " ";
    console.log(text);
    
    let img_sec = " ";
    let text_sec = " ";
    img.forEach((item) => {
        img_sec += `
        <div>
            <img src="${item.img}" alt="${item.alt}" style="width:100%"/>
        </div>
    `;
    console.log(item);
    })

    text.forEach((item) => {
        text_sec += `
        <div class="row">
            <h4>${item.title}</h4>
            <h1>${item.topic}</h1>
            <p>${item.desc}</p>
            
        </div>
        `;
        console.log(item);
        
    })
    renderSubPlots(line_text);

    function renderSubPlots(plotsContainer) {
        console.log(plotsContainer);
        plotsContainer.forEach((plots) => {
           console.log(plots);
           text_sec += `<div class="row">`;
           plots.subPlot.forEach((plot) => {
                console.log(plot.img);
                text_sec += `
                    <div class="col-md-5">
                        <div class="row row-cols-2">
                            <div class="col-4">
                                <img src="${plot.img}" alt="${plot.desc}" style="width:50px;"/>
                            </div>
                            <div class="col-8">
                                <p>${plot.desc}</p>
                            </div>
                        </div>
                    </div>
                `
           });
           text_sec += `</div>`;
        })
    }

    line_images.innerHTML = img_sec;
    line_context.innerHTML = text_sec;
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
        <div class="col-md-2 col-sm-5 " style="display:grid;place-items:center;">
            <button type="button" class="btn-outline-main">  ${ele}</button>
        </div>  
    `
});
CategoryMenu.innerHTML = categorycontent;


// load cardProperty content here
let cardCategory = document.querySelector('.cardCategories');
function renderCardProperties(cardProperties) {
    cardCategory.innerHTML = " ";
    let cardCategoryContent = " ";
    cardProperties.forEach((card) => {
        console.log(card);
        cardCategoryContent += `
            <div class="col-lg-3 col-md-5 col-sm-5 mt-2">
                <div class="card">
                    <img src="${card.img}" alt="${card.desc}" class="card-img-top"/>
                    <div class="card-body">
                        <h3 class="">${card.topic}</h3>
                        <p>${card.desc}</p>
                        <div class="row row-cols-2">
                            <div class="col-8 p-1">
                                <div class="progress-thumb">
                                    <div class="progress-track" style="width:${card.rating}%">
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <p>${card.rating}%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    })
    cardCategory.innerHTML = cardCategoryContent;

}

//load customerReviews content here
function renderCustomerReviews(reviews){
    let customerReviewContainer = document.querySelector('.customerReviews');
    customerReviewContainer.innerHTML = " ";
    let customerReviewContent = " ";
    reviews.forEach((review) => {
        customerReviewContent += `
            <div class="col-lg-3 col-md-4 col-md-5 py-3 reviews" >
                <div class="row">
                    <div class="col-4 reviewImg">
                        <img src="${review.img}" alt="${review.desc}" style="width:80px;"/>
                    </div>
                    <div class="col-8">
                        <h4 class="text-center">${review.topic}</h4>
                        <p>${review.desc}</p>
                    </div>
                </div>
            </div>
        `
    });

    customerReviewContainer.innerHTML = customerReviewContent;
}

//load experts details
function renderExpertDetails(expertDetails) {
    let Experts = document.querySelector('.keyCharactors');
    Experts.innerHTML = " ";
    let keyCharactorsContent = " ";
    expertDetails.forEach((expert) => {
        keyCharactorsContent += `
            <div class="col-lg-3 col-md-5 col-sm-5 my-2">
                <div class="card">
                    <img src="${expert.img}" alt="${expert.desc}" class="card-img-top"/>
                    <div class="card-body">
                        <h4 class="text-center">${expert.title}</h4>
                        <p class="text-center">${expert.desc}</p>
                    </div>
                </div>
            </div>
        `
    });

    Experts.innerHTML = keyCharactorsContent;
    
}
