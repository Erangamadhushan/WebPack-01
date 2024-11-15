import {items, line_img, line_text, cardProperty, customerReviews, experts, industryDistribution1, industryDistribution2} from './itemContent.js'
import {footer1Content1, footer2Content3, footer1Content3, footer1Content2, footer2Content1, footer2Content2, footer2Content4 } from './footer.js';

window.addEventListener("DOMContentLoaded", () => {
    renderItems(items);
    renderlineContent(line_img,line_text);
    renderCardProperties(cardProperty);
    renderCustomerReviews(customerReviews);
    renderExpertDetails(experts);
    renderIndustryDistribution(industryDistribution1, industryDistribution2);
});

//Catch ContentContainers
let showCategories = document.querySelector('.getCategory');
let line_images = document.querySelector('.line_img_container');
let line_context = document.querySelector('.line_text_container');
let footerContainer1 = document.querySelector('.footerlayer1');
let footerContainer2 = document.querySelector('.footerlayer2');


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
            <div class="col-md-2 col-sm-5 " style="display:grid;place-items:center;" data-aos="fade-up" data-aos-duration="400" data-aos-easing="linear" data-aos-anchor-placement="bottom-bottom">
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
        <div data-aos="fade-down" data-aos-duration="400" data-aos-easing="linear" data-aos-anchor-placement="bottom-bottom">
            <img src="${item.img}" alt="${item.alt}" style="width:100%"/>
        </div>
    `;
    console.log(item);
    })

    text.forEach((item) => {
        text_sec += `
        <div class="row" data-aos="fade-down" data-aos-duration="400" data-aos-easing="linear" data-aos-anchor-placement="bottom-bottom">
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
           text_sec += `<div class="row" data-aos="fade-down" data-aos-duration="400" data-aos-easing="linear" data-aos-anchor-placement="bottom-bottom">`;
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
        <div class="col-md-2 col-sm-5 " style="display:grid;place-items:center;" data-aos="fade-right" data-aos-duration="400" data-aos-easing="linear" data-aos-anchor-placement="bottom-bottom">
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
            <div class="col-lg-3 col-md-5 col-sm-5 mt-2" data-aos="fade-right" data-aos-duration="400" data-aos-easing="linear" data-aos-anchor-placement="bottom-bottom">
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
            <div class="col-lg-3 col-md-4 col-md-5 py-3 reviews" data-aos="fade-up" data-aos-duration="400" data-aos-easing="linear" data-aos-anchor-placement="bottom-bottom">
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
            <div class="col-lg-3 col-md-5 col-sm-5 my-2" data-aos="fade-up" data-aos-duration="400" data-aos-easing="linear" data-aos-anchor-placement="bottom-bottom">
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

// load industry distribution details

function renderIndustryDistribution(industryDistributionDetails1, industryDistributionDetails12) {
    let industryDistributionContainer = document.querySelector('.loadIndustryDistributionContainer');
    industryDistributionContainer.innerHTML = " ";
    let industryDistributionContent = " ";

    industryDistribution1.forEach((element) => {
        console.log(industryDistribution1);
        industryDistributionContent += `
            <div class="col-lg-5 col-md-5 ">
                <div class="card" >
                    <img src="${element.img}" alt="${element.desc}" class="card-img-top"/>
                    <div class="card-body" data-aos="fade-right" data-aos-duration="400" data-aos-easing="linear" data-aos-anchor-placement="bottom-bottom">
                        <h3 class="">${element.topic}</h3>
                        <p>${element.desc}</p>
                        <div class="progress-thumb">
                            <div class="progress-track" style="width:${element.rate}%;background-color:${element.color};">
                            </div>
                        </div>
                        <p>${element.rate}% Progressing...</p>
                        <a href="${element.more.direction}" class="btn btn-outline-danger mt-2">${element.more.buttonProperty}</a>
                    </div>
                </div>
            </div>
        `;
    });

    industryDistributionContent += `<div class="col-lg-5 col-md-5 d-flex flex-column align-items-center py-4">`;
    industryDistribution2.forEach((element) => {
        console.log(industryDistribution2);
        industryDistributionContent += `
                <div class="row row-cols-2 py-4 border-line" data-aos="fade-left" data-aos-duration="400" data-aos-easing="linear" data-aos-anchor-placement="bottom-bottom">
                    <div class="col-4">
                        <img src="${element.img}" alt="${element.desc}" class="card-img-top"/>
                    </div>
                    <div class="col-8">
                        <h3 class="">${element.topic}</h3>
                        <p>${element.desc}</p>
                        <div class="progress-thumb">
                            <div class="progress-track" style="width:${element.rate}%;background-color:${element.color};">
                            </div>
                        </div>
                        <p>${element.rate}% Progressing...</p>
                        <a href="${element.more.direction}" class="btn btn-outline-danger mt-2">${element.more.buttonProperty}</a>
                    </div>
                </div>
            
        `;
    });
    industryDistributionContent += `</div>`;

    industryDistributionContainer.innerHTML = industryDistributionContent;
}

// load the footer content 


