window.addEventListener("DOMContentLoaded", () => {
    renderNavbar();
});

function renderNavbar() {
    document.querySelector(".navbar").innerHTML = `
        <div class="container">
            <a class="navbar-brand text-dark logo main_heading" href="#">Natural Glow</a>
            <button class="navbar-toggler line_btn" type="button" data-bs-toggle="collapse" data-bs-target="#pagenavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="pagenavbar">
                <ul class="navbar-nav gap-2">
                    <li class="nav-item">
                        <a href="index.html" class="nav-link text-dark">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="About.html" class="nav-link text-dark">About</a>
                    </li>
                    <li class="nav-item">
                        <a href="products.html" class="nav-link text-dark">Products</a>
                    </li>
                    <li class="nav-item">
                        <a href="contact.html" class="nav-link text-dark">Contact</a>
                    </li>
                    <li class="nav-item">
                        <!-- <a href="" class="nav-link btn btn-lg ">
                            <img src="icons/search.png" alt="search icon" width="20"/>
                        </a> -->
                    </li>
                    <li class="nav-item">
                        <a href="cartProducts.html" class="nav-link btn btn-lg">
                            <img src="icons/add-to-cart.png" alt="add to cart icon" width="20"/>
                        </a>
                    </li>
                </ul>
            </div>
            
        </div>
    `
}