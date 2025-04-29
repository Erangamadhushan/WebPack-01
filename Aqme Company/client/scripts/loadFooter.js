import { footerContent } from "./sources/mainContent";

window.addEventListener("DOMContentLoaded", () => {
    loadFooter(footerContent);
    loadFooterEnd();
})

const footerContainer = document.querySelector('.footer');
const footerEndContainer = document.querySelector('.footerEnd');
function loadFooter(footerContent) {
    footerContainer.innerHTML = "";
    let footerContainer1 = footerContent[0];
    let footerContainer2 = footerContent[1];
    let footerContainer3 = footerContent[2];
    let footerContainer4 = footerContent[3];
    let footerContainer5 = footerContent[4];

    let loadFooterContent = "";
    loadFooterContent += `
        <div class="">
            <h3>${footerContainer1.title}</h3>
            <p><a href="" >${footerContainer1.link1}</a></p>
            <p><a href="">${footerContainer1.link2}</a></p>
            <p><a href="">${footerContainer1.link3}</a></p>
            <p><a href="">${footerContainer1.link4}</a></p>
        </div>
    `;
    loadFooterContent += `
        <div class="">
            <h3>${footerContainer2.title}</h3>
            <p><a href="" >${footerContainer2.link1}</a></p>
            <p><a href="">${footerContainer2.link2}</a></p>
            <p><a href="">${footerContainer2.link3}</a></p>
        </div>
    `;
    loadFooterContent += `
        <div class="">
            <img src="${footerContainer3.img}" alt="" style="width:120px;"/>
            <p><a href="" >${footerContainer3.link1}</a></p>
            <p><a href="">${footerContainer3.link2}</a></p>
            <p><a href="">${footerContainer3.link3}</a></p>
        </div>
    `;
    
    loadFooterContent += `
        <div class="">
            <h3>${footerContainer4.title}</h3>
            <p><a href="" >${footerContainer4.link1}</a></p>
            <p><a href="">${footerContainer4.link2}</a></p>
            <p><a href="">${footerContainer4.link3}</a></p>
            
        </div>
    `;
    loadFooterContent += `
        <div class="">
            <h3>${footerContainer5.title}</h3>
            <p><a href="" >${footerContainer5.link1}</a></p>
            <p><a href="">${footerContainer5.link2}</a></p>
            <p><a href="">${footerContainer5.link3}</a></p>
        </div>
    `;

    footerContainer.innerHTML = loadFooterContent;
}

function loadFooterEnd() {
    footerEndContainer.innerHTML = "";
    let footerEndContent = " ";
    footerEndContent += `
        <div class="">
            <img src="" alt="Lorem ipsum dolor"/>
            <h2 class="text-3xl">Lorem ipsum dolor</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    `;
    footerEndContent += `
        <div class="">
            <input type="text" name="text" id="submit"/>
            <input type="submit" value="subcribe"/>
        </div>
    `;
    footerEndContent += `
        <div class="flex justify-center">
            <img src="" alt="Lorem ipsum dolor sit amet consectetur" style="width:60px;height:60px;"/>
            <img src="" alt="Lorem ipsum dolor sit amet consectetur" style="width:60px;height:60px;"/>
            <img src="" alt="Lorem ipsum dolor sit amet consectetur" style="width:60px;height:60px;"/>
        </div>
    `;

    footerEndContainer.innerHTML = footerEndContent;
}