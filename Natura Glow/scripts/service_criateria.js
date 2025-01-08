let welcomeNote = " Where beauty meets science, and your unique style shines! We’re dedicated to providing top-quality, innovative cosmetic services that bring out the best in you. Our team of beauty experts and skincare specialists work with leading products and techniques to offer you a luxurious, tailored experience.";
let services_content = [];
let services_heading = [];
services_content[0] = "From everyday elegance to special occasion glam, our professional makeup artists craft stunning looks that enhance your natural beauty. We use premium products to ensure a flawless finish every time.";
services_content[1] = "Experience our rejuvenating skincare services, designed to give you radiant, healthy skin. Our facials, peels, and skin consultations are customized for all skin types and concerns.";
services_content[2] = "Not sure which products or treatments are best for you? Our experts are here to guide you with personalized consultations, helping you achieve the perfect routine tailored to your needs.";
services_content[3] = "Learn from the best! We offer group and private beauty workshops where you can master makeup techniques, skincare routines, and more.";

services_heading[0] = "Makeup Artistry";
services_heading[1] = "Skin Care Treatments";
services_heading[2] = "Personalized Beauty Consultations";
services_heading[3] = "Beauty Workshops";
let endNote = "At Natura Glow, we're committed to delivering beauty solutions that make you feel confident, empowered, and effortlessly radiant. Explore our services and let us help you reveal your most beautiful self!";

let welcomeNoteDesc = document.querySelector('.welcomeNoteDesc');
welcomeNoteDesc.innerHTML = welcomeNote;

let service_heading = document.querySelectorAll('.service_heading');
let service_desc = document.querySelectorAll('.service_desc');

service_heading[0].innerHTML = services_heading[0];
service_heading[1].innerHTML = services_heading[1];
service_heading[2].innerHTML = services_heading[2];
service_heading[3].innerHTML = services_heading[3];

service_desc[0].innerHTML = services_content[0];
service_desc[1].innerHTML = services_content[1];
service_desc[2].innerHTML = services_content[2];
service_desc[3].innerHTML = services_content[3];


document.querySelector('.getEndNote').innerHTML = endNote;
// ====================================================================================================================

function renderNoteDescription() {
    let welcomeNoteDesc = document.querySelector('.noteDesc');
    let welcomeNote = `
    <div class="row d-flex ">
        <div class="col-md-8 py-4">
            <h1 class="main_heading">Welcome to Natura Glow,</h1>
            <h5 class="welcomeNoteDesc"></h5>
        </div>
    </div>

    <div class="row d-flex">
        <div class="col-md-8 py-4 service_content" data-aos="fade-up" data-aos-duration="400" data-aos-easing="linear" data-aos-anchor-placement="bottom-bottom">
            <h4 class=""><a href="#" class="service_heading" get-data="Makeup Artistry"></a></h4>
            <p class="service_desc"></p>
        </div>
    </div>
    <div class="row d-flex">
        <div class="col-md-8 py-4 service_content" data-aos="fade-up" data-aos-duration="400" data-aos-easing="linear" data-aos-anchor-placement="bottom-bottom">
            <h4 class=""><a href="#" class="service_heading" get-data="Skin Care Treatments"></a></h4>
            <p class="service_desc"></p>
        </div>
    </div>
    <div class="row d-flex">
        <div class="col-md-8 py-4 service_content" data-aos="fade-up" data-aos-duration="400" data-aos-easing="linear" data-aos-anchor-placement="bottom-bottom">
            <h4 class=""><a href="#" class="service_heading" get-data="Personalized Beauty Consultations"></a></h4>
            <p class="service_desc"></p>
        </div>
    </div>
    <div class="row d-flex">
        <div class="col-md-8 py-4 service_content" data-aos="fade-up" data-aos-duration="400" data-aos-easing="linear" data-aos-anchor-placement="bottom-bottom">
            <h4 class=""><a href="#" class="service_heading" get-data="Beauty Workshops"></a></h4>
            <p class="service_desc"></p>
        </div>
    </div>
`;

welcomeNoteDesc.innerHTML = welcomeNote;
}

renderNoteDescription();
