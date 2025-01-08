window.addEventListener("DOMContentLoaded", () => {
    renderNavbar();
});

function renderNavbar() {
    const navbarContainer = document.querySelector('.navbar-expand-md');
    navbarContainer.innerHTML = " ";
    let navbarContent = `
        <div class="container-fluid ">
            <a href="#" class="navbar-brand text-uppercase text-light">AMANA Construction</a>
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#pageNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse collapse " id="pageNavbar">
                <ul class="navbar-nav ">
                    <li class="nav-item">
                        <a href="index.html" class="nav-link">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="aboutUs.html" class="nav-link">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a href="services.html" class="nav-link">Services</a>
                    </li>
                    <li class="nav-item">
                        <a href="faq.html" class="nav-link">FAQ</a>
                    </li>
                </ul>
            </div>
        </div>
    `;

    navbarContainer.innerHTML = navbarContent;
}