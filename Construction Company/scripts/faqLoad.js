import {faq} from './faq.js';

window.addEventListener("DOMContentLoaded", () => {
    renderItems(faq);
});

function renderItems(items) {
    let loadContainer = document.querySelector('.faqContainer');
    loadContainer.innerHTML = " ";
    let content = " ";
    items.forEach((item, $index) => {
        console.log(items);
        content += `
            <div class="d-flex flex-column justify-content-center p-3 py-4" data-aos="fade-up" data-aos-duration="400" data-aos-easing="linear" data-aos-anchor-placement="bottom-bottom">
                <h4>Q${$index+1}: ${item.question}</h4>
                <h4>Solutions</h4>
                <ul>
                    <li>${item.answer[0]}</li>
                    <li>${item.answer[1]}</li>
                    <li>${item.answer[2]}</li>
                </ul>
            </div>
        `
    });
    loadContainer.innerHTML = content;
}