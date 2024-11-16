import {footer1Content1, footer1Content2, footer1Content3, footer2Content1, footer2Content2, footer2Content3, footer2Content4 } from './footer.js';

window.addEventListener("DOMContentLoaded", () => {
    renderFooterDetails(footer1Content1, footer1Content2, footer1Content3, footer2Content1, footer2Content2, footer2Content3, footer2Content4 );
})

function renderFooterDetails(Content1,Content2, Content3, Content4, Content5, Content6, Content7) {
    let footerLayerContainer1 = document.querySelector('.footerlayercontainer1');
    let footerLayerContainer2 = document.querySelector('.footerlayercontainer2');
    let footerLayerContainer3 = document.querySelector('.footerlayercontainer3');
    let footerLayerContainer4 = document.querySelector('.footerlayercontainer4');
    let footerLayerContainer5 = document.querySelector('.footerlayercontainer5');
    let footerLayerContainer6 = document.querySelector('.footerlayercontainer6');
    let footerLayerContainer7 = document.querySelector('.footerlayercontainer7');


    footerLayerContainer1.innerHTML = " ";
    footerLayerContainer2.innerHTML = " ";
    footerLayerContainer3.innerHTML = " ";
    footerLayerContainer4.innerHTML = " ";
    footerLayerContainer5.innerHTML = " ";
    footerLayerContainer6.innerHTML = " ";
    footerLayerContainer7.innerHTML = " ";


    let footerLayerContainer1Content = " ";
    let footerLayerContainer2Content = " ";
    let footerLayerContainer3Content = " ";
    let footerLayerContainer4Content = " ";
    let footerLayerContainer5Content = " ";
    let footerLayerContainer6Content = " ";
    let footerLayerContainer7Content = " ";

    footerLayerContainer1Content += `
        <div>
            <h2>${Content1.topic}</h2>
            <p>${Content1.desc}</p>
        </div>
    `;

    footerLayerContainer2Content += `
        <div>
            <div>
                <img src="${Content2.img}" alt="${Content2.desc}" style="max-width:120px; margin:auto;"/>
            </div>
            <h3>${Content2.topic}</h3>
            <p>${Content2.desc}</p>
        </div>
    `;

    footerLayerContainer3Content += `
        <div>
            <h5>Search here..</h5>
            <div >
                <form method="get" action="#">
                    <input type="text" name="searchThings" id="searchThings" required/>
                    <button type="submit" class="main-btn"><img src="${Content3.img}" alt="searchBtn" style="width:30px;"/></button>
                </form>
            </div>
        </div>
    `;

    footerLayerContainer4Content += `
        <div>
            <div class="d-flex justify-content-center">
                <img src="${Content4.img1}" alt="${Content4.img1}" style="width:50px;height:50px;"/>
                <img src="${Content4.img2}" alt="${Content4.img2}" style="width:50px;height:50px;"/>
                <img src="${Content4.img3}" alt="${Content4.img3}" style="width:50px;height:50px;"/>
            </div>
            <div class="d-flex justify-content-center gap-2">
                <button type="button" class="btn footer-btn">PlayStore <img src="${Content4.playStoreImg}" alt="${Content4.playStoreImg}" style="width:50px;height:50px;"/></button>
                <button type="button" class="btn footer-btn">Apple Store<img src="${Content4.appleStoreImg}" alt="${Content4.appleStoreImg}" style="width:50px;height:50px;"/></button>
            </div>
        </div>
    `;

    footerLayerContainer5Content += `
        <div>
            <h5>${Content5.topic}</h5>
            <p><a href="aboutUs.html#cusreveiws" class="footerlink">${Content5.items1}</a></p>
            <p><a href="#" class="footerlink">${Content5.items2}</a></p>
            <p><a href="#" class="footerlink">${Content5.items3}</a></p>
        </div>
    `;

    footerLayerContainer6Content += `
        <div>
            <h5>${Content6.topic}</h5>
            <p><a href="#" class="footerlink">${Content6.items1}</a></p>
            <p><a href="#" class="footerlink">${Content6.items2}</a></p>
        </div>
    `;

    footerLayerContainer7Content += `
        <div>
            <p>${Content7.content}</p>
        </div>
    `;

    footerLayerContainer1.innerHTML = footerLayerContainer1Content;
    footerLayerContainer2.innerHTML = footerLayerContainer2Content;
    footerLayerContainer3.innerHTML = footerLayerContainer3Content;
    footerLayerContainer4.innerHTML = footerLayerContainer4Content;
    footerLayerContainer5.innerHTML = footerLayerContainer5Content;
    footerLayerContainer6.innerHTML = footerLayerContainer6Content;
    footerLayerContainer7.innerHTML = footerLayerContainer7Content;

}