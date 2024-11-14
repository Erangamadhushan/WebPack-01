import {items,line_img,line_text} from './itemContent.js'

window.addEventListener("DOMContentLoaded", () => {
    renderItems(items);
    renderlineContent(line_img,line_text);
});

let showCategories = document.querySelector('.getCategory');
let line_images = document.querySelector('.line_img_container');
let line_context = document.querySelector('.line_text_container');

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
            <div class="col-md-2 col-sm-5">
                <button type="button" class="btn btn-secondary">${ele}</button>
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
            <img src="${item.img}" alt="${item.alt}" style="width:80%"/>
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
           text_sec += `<div class="row row-cols-2">`;
           plots.subPlot.forEach((plot) => {
                console.log(plot.img);
                text_sec += `
                    <div>
                        <div class="row row-cols-2">
                            <div class="col-4">
                                <img src="${plot.img}" alt="${plot.desc}" style="width:60px;"/>
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
