window.addEventListener("DOMContentLoaded", () => {
    renderNavbar();
});

function renderNavbar() {
    document.querySelector(".navbar").innerHTML = `
        <div class="container text-white">
            <a class="navbar-brand text-white logo main_heading" href="#">Natural Glow</a>
            <button class="navbar-toggler line_btn" type="button" data-bs-toggle="collapse" data-bs-target="#pagenavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="pagenavbar">
                <ul class="navbar-nav gap-2">
                    <li class="nav-item">
                        <a href="index.html" class="nav-link text-white text-lg">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="About.html" class="nav-link text-white">About</a>
                    </li>
                    <li class="nav-item">
                        <a href="products.html" class="nav-link text-white">Products</a>
                    </li>
                    <li class="nav-item">
                        <a href="contact.html" class="nav-link text-white">Contact</a>
                    </li>
                    <li class="nav-item">
                        <!-- <a href="" class="nav-link btn btn-lg ">
                            <img src="icons/search.png" alt="search icon" width="20"/>
                        </a> -->
                    </li>
                    <li class="nav-item">
                        <a href="cartProducts.html" class="nav-link btn btn-lg" style="background-color:white background-clip:text;">
                            <img src="icons/add-to-cart.png" alt="add to cart icon" width="20"/>
                        </a>
                    </li>
                </ul>
            </div>
            
        </div>
    `;
}