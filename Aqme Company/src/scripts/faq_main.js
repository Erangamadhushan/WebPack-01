import {main, subContent, footerContent} from './sources/mainContent.js';
//import {itemQuatar} from './sources/itemContents.js';

window.addEventListener("DOMContentLoaded", () => {
    loadFooter(footerContent);
    loadFooterEnd();
    renderOverviewContent();
});
document.body.style.scrollBehavior = "Smooth"

// Load header section here

document.querySelector('header').innerHTML = `
    <h2 class="text-2xl font-bold px-3 py-5">Aqme Company</h2>
    <nav class="justify-center items-center space-x-4  hidden custom:block">
        <a href="index.html" class="text-xl font-semibold hover:font-bold px-4">Home</a>
        <a href="index.html#aboutUs" class="text-xl text-semibold hover:font-bold">About Us</a>
        <a href="products.html" class="text-xl font-semibold hover:font-bold">Products</a>
        <a href="faq.html" class="text-xl font-semibold hover:font-bold">FAQ</a>
    </nav>
    <div class="items-center hidden md:block justify-center px-2">
        <input class="p-2 border focus:border-green-200 focus:outline-none" type="text" name="SearchOption" placeholder="Search here.." id="SearchOption"/>
        <button class="bg-black p-2 text-white">Search</button>
    </div>
    <div class="hidden md:block space-x-5">
        <button onclick="visitCartproducts()" class="bg-gray-300 p-2"><img src="./icons/buy.png" style="width:30px;"/></button>
        <button onclick="visitUserprofile()" class="bg-gray-300 p-2"><img src="./icons/user.png" style="width:30px;"/></button>
    </div>
    <div class="">
        <button  class="bg-black text-3xl text-white p-1 px-3 rounded-lg custom:hidden" id="flip">&#9776;</button>
    </div>
    
`;
// Load nav bar into the main html files

document.querySelector('#panel').innerHTML = `
    <nav class="justify-center items-center grid grid-cols-1 bg-black text-white  px-3 custom:hidden">
        <a href="index.html" class="text-xl font-semibold hover:font-bold text-center py-3" >Home</a>
        <a href="index.html#aboutUs" class="text-xl font-semibold hover:font-bold text-center py-3">About Us</a>
        <a href="./products.html" class="text-xl font-semibold hover:font-bold text-center py-3">Products</a>
        <a href="./faq.html" class="text-xl font-semibold hover:font-bold text-center py-3">FAQ</a>
    </nav>
`;

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
            <a href=""><img src="./icons/socialmedia/facebook.png" alt="Lorem ipsum dolor sit amet consectetur" style="width:60px;height:60px;"/></a>
            <a href=""><img src="./icons/socialmedia/instagram.png" alt="Lorem ipsum dolor sit amet consectetur" style="width:60px;height:60px;"/></a>            
            <a href=""><img src="./icons/socialmedia/twitter.png" alt="Lorem ipsum dolor sit amet consectetur" style="width:60px;height:60px;"/></a>
            <a href=""><img src="./icons/socialmedia/pinterest.png" alt="Lorem ipsum dolor sit amet consectetur" style="width:60px;height:60px;"/></a>
            <a href=""><img src="./icons/socialmedia/linkedIn.png" alt="Lorem ipsum dolor sit amet consectetur" style="width:60px;height:60px;"/></a>
        </div>
    `;

    footerEndContainer.innerHTML = footerEndContent;
}

function renderOverviewContent() {
    let overviewContainer = document.querySelector('.overviewContentContainer');
    overviewContainer.innerHTML = " ";
    let overviewContent =`
        <div class="w-full mx-auto page-sections  p-5 py-10 text-center" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000" data-aos-delay="200">
            <h3 class="">Aqme Company that covers the most common questions customers typically have about luxury watches. The content is organized into five main sections:</h3>
            <button type="button" class="bg-white p-2 rounded-lg text-black" id="overviewSummary">Overview Summary</button>
        </div>
        <div id="overviewPanel" class=" page-sections justify-center  mx-auto" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000" data-aos-delay="200">
            <p class="text-center text-xl hover:text-yellow-300"><a href="#Ordering">Ordering & Shipping</a></p>
            <p class="text-center text-xl  hover:text-yellow-300"><a href="#productInformation">Product Information</a></p>
            <p class="text-center text-xl  hover:text-yellow-300"><a href="#return&Exchange">Returns & Exchanges</a></p>
            <p class="text-center text-xl  hover:text-yellow-300"><a href="#maintain">Watch Care & Maintenance</a></p>
            <p class="text-center text-xl  hover:text-yellow-300"><a href="#contact&support">Contact & Support</a></p>
        </div>
        <div class=" mb-10 py-5 page-sections" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000" data-aos-delay="200">
            <h1 class="text-3xl text-center">Frequently Asked Questions - Aqme Company</h1>
        </div>

        <div id="Ordering">
            <div class="p-5 py-5 page-sections max-w-6xl mx-auto my-5"  data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000" data-aos-delay="200">
                <h2 class="text-2xl py-3">Ordering & Shipping</h2>
                <div class="grid gap-2 py-5">
                    <h3 class="text-xl">How long does shipping take?</h3>
                    <p>We process all orders within 1-2 business days. Standard shipping typically takes 3-5 business days within the continental US. International shipping times vary by location and typically take 7-14 business days.</p>
                </div>
                <div class="grid gap-2 py-5">
                    <h3 class="text-xl">Do you ship internationally?</h3>
                    <p>Yes, we ship to most countries worldwide. International shipping costs and delivery times vary by location. Import duties and taxes may apply and are the responsibility of the customer.</p>
                </div>
                <div class="grid gap-2 py-5">
                    <h3 class="text-xl">What payment methods do you accept?</h3>
                    <p>We process all orders within 1-2 business days. Standard shipping typically takes 3-5 business days within the continental US. International shipping times vary by location and typically take 7-14 business days.</p>
                </div>
            </div>
        </div>

        <div id="productInformation">
            <div class="p-5 py-5 page-sections max-w-6xl mx-auto my-5" id="productInformation" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000" data-aos-delay="200">
                <h2 class="text-2xl py-3">Product Information</h2>
                <div class="grid gap-2 py-5">
                    <h3 class="text-xl">Are your watches authentic?</h3>
                    <p>Absolutely. All watches sold by Aqme Company are 100% authentic and come with official manufacturer documentation and warranty cards. We source our timepieces directly from authorized dealers and manufacturers.</p>
                </div>
                <div class="grid gap-2 py-5">
                    <h3 class="text-xl">What warranty coverage do you provide?</h3>
                    <p>All new watches come with the manufacturer's international warranty, typically ranging from 2-5 years depending on the brand. We also offer an additional 1-year Aqme warranty covering any mechanical defects.</p>
                </div>
                <div class="grid gap-2 py-5">
                    <h3 class="text-xl">How do I know my watch size?</h3>
                    <p>We provide detailed sizing information on each product page, including case diameter, thickness, and band length. For a perfect fit, we recommend measuring your wrist circumference. Our customer service team can assist with specific sizing questions.</p>
                </div>
            </div>
        </div>


        <div id="return&Exchange">
            <div class="p-5 py-5 page-sections max-w-6xl mx-auto my-5"  data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000" data-aos-delay="200">
                <h2 class="text-2xl py-3">Returns & Exchanges</h2>
                <div class="grid gap-2 py-5">
                    <h3 class="text-xl">What is your return policy?</h3>
                    <p>We offer a 30-day return policy for unworn watches in their original condition with all tags and protective materials intact. Returns must be initiated through our online return portal, and a return shipping label will be provided.</p>
                </div>
                <div class="grid gap-2 py-5">
                    <h3 class="text-xl">How do I exchange my watch?</h3>
                    <p>Exchanges can be processed within 30 days of purchase. Contact our customer service team to initiate an exchange. The new item will be shipped once we receive and inspect the original watch.</p>
                </div>
                <div class="grid gap-2 py-5">
                    <h3 class="text-xl">Are returns free?</h3>
                    <p>Domestic returns within the US are free. International returns are at the customer's expense. Items must be returned in their original packaging with all accessories included.</p>
                </div>
            </div>
        </div>

        <div id="maintain">
            <div class="p-5 py-5 page-sections max-w-6xl mx-auto my-5"  data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000" data-aos-delay="200">
                <h2 class="text-2xl py-3">Watch Care & Maintenance</h2>
                <div class="grid gap-2 py-5">
                    <h3 class="text-xl">How often should I service my watch?</h3>
                    <p>We recommend servicing mechanical watches every 3-5 years, depending on usage. Quartz watches typically require battery replacement every 2-3 years. Regular maintenance ensures optimal performance and longevity.</p>
                </div>
                <div class="grid gap-2 py-5">
                    <h3 class="text-xl">Is my watch water-resistant?</h3>
                    <p>Water resistance varies by model. Check your specific watch's specifications for water resistance ratings. Note that water resistance can diminish over time and should be tested annually if you frequently expose your watch to water.</p>
                </div>
                <div class="grid gap-2 py-5">
                    <h3 class="text-xl">How do I clean my watch?</h3>
                    <p>For regular cleaning, use a soft, lint-free cloth. For metal bracelets, clean with mild soap and water using a soft brush. Leather straps should be kept dry and cleaned with a leather care product.</p>
                </div>
            </div>
        </div>

        <div id="contact&support">
            <div class="p-5 py-5 page-sections max-w-6xl mx-auto my-5" id="contact&support" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000" data-aos-delay="200">
                <h2 class="text-2xl py-3">Contact & Support</h2>
                <div class="grid gap-2 py-5">
                    <h3 class="text-xl">How can I reach customer service?</h3>
                    <p>Our customer service team is available Monday-Friday, 9 AM - 6 PM EST:</p>
                    <ul>
                        <li>Email: support@aqmecompany.com</li>
                        <li>Phone: 1-800-AQME-123</li>
                        <li>Live Chat: Available on our website during business hours</li>
                    </ul>
                </div>
                <div class="grid gap-2 py-5">
                    <h3 class="text-xl">Can I track my order?</h3>
                    <p>Yes, you'll receive a tracking number via email once your order ships. You can also track your order through your Aqme account or our website's order tracking page.</p>
                </div>
                <div class="grid gap-2 py-5">
                    <h3 class="text-xl">Do you offer watch repairs?</h3>
                    <p>Yes, we provide repair services for watches purchased from Aqme Company. Contact our service department for a repair evaluation and quote. All repairs are performed by certified watchmakers.</p>
                </div>
            </div>
        </div>
        
    `;

    overviewContainer.innerHTML = overviewContent;
}
