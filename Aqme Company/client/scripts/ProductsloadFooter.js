import { footerContent } from "./sources/mainContent.js";

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
            <p class="text-blue-400 hover:underline"><a href="" >${footerContainer1.link1}</a></p>
            <p class="text-blue-400 hover:underline"><a href="">${footerContainer1.link2}</a></p>
            <p class="text-blue-400 hover:underline"><a href="">${footerContainer1.link3}</a></p>
            <p class="text-blue-400 hover:underline"><a href="">${footerContainer1.link4}</a></p>
        </div>
    `;
    loadFooterContent += `
        <div class="">
            <h3>${footerContainer2.title}</h3>
        </div>
    `;
    loadFooterContent += `
        <div class="">
            <img src="${footerContainer3.img}" alt="" style="width:120px;"/>
        </div>
    `;
    
    loadFooterContent += `
       <div class="">
            <h3>${footerContainer4.title}</h3>
            <p class="text-blue-400 hover:underline"><a href="./cartItem.html" >${footerContainer4.link1}</a></p>
            <p class="text-blue-400 hover:underline"><a href="./userProfile.html">${footerContainer4.link2}</a></p>
        </div>
    `;
    loadFooterContent += `
        <div class="">
            <h3>${footerContainer5.title}</h3>
        </div>
    `;

    footerContainer.innerHTML = loadFooterContent;
}

function loadFooterEnd() {
    footerEndContainer.innerHTML = "";
    let footerEndContent = " ";
    footerEndContent += `
        <div class="">
            <img src="./images/main.jpg" style="width:150px;" alt="Lorem ipsum dolor"/>
            <h2 class="text-3xl">Aqme Luxury Watch Selling Company</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    `;
    footerEndContent += `
        <div class="">
            <p class="py-4 text-xl text-white">Subscribe to our newsletter</p>
            <input type="text" name="text" class="p-2 w-[300px] rounded-md" id="submit"/>
            <input type="submit" class="bg-gray-500 p-2 rounded-md hover:bg-gray-600" value="subcribe"/>
        </div>
    `;
    footerEndContent += `
        <div class="flex justify-center">
            <a href=""><img class="socialMedia" src="./icons/socialmedia/facebook.png" alt="Lorem ipsum dolor sit amet consectetur" style="width:60px;height:60px;"/></a>
            <a href=""><img class="socialMedia" src="./icons/socialmedia/instagram.png" alt="Lorem ipsum dolor sit amet consectetur" style="width:60px;height:60px;"/></a>            
            <a href=""><img class="socialMedia" src="./icons/socialmedia/twitter.png" alt="Lorem ipsum dolor sit amet consectetur" style="width:60px;height:60px;"/></a>
            <a href=""><img class="socialMedia" src="./icons/socialmedia/pinterest.png" alt="Lorem ipsum dolor sit amet consectetur" style="width:60px;height:60px;"/></a>
            <a href=""><img class="socialMedia" src="./icons/socialmedia/linkedIn.png" alt="Lorem ipsum dolor sit amet consectetur" style="width:60px;height:60px;"/></a>
        </div>
    `;

    footerEndContainer.innerHTML = footerEndContent;
}