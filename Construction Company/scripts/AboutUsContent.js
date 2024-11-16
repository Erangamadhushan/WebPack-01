import {items, line_img, line_text, cardProperty, customerReviews, experts, industryDistribution1, industryDistribution2, sponserships} from './itemContent.js';

window.addEventListener("DOMContentLoaded", () => {
    renderlineContent(line_img,line_text);
})
// Render the line content here 

let line_context = document.querySelector('.line_img_container');
let line_images = document.querySelector('.line_text_container'); 


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