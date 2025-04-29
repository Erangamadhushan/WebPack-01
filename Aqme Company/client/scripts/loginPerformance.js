window.addEventListener("DOMContentLoaded", () => {
    renderLoginInstructions();
});

let loginContainer = document.querySelector('.userEntering');
function renderLoginInstructions() {
    
    let loginContainerContent = `
        <div class="grid grid-cols- p-5  w-[95vw] min-h-[70vh]  max-w-[900px] my-10  mx-auto md:grid-cols-2 page-sections" data-aos="fade-up" data-aos-duration="1000">
            <div class="p-2">
                <div>
                    <h1 class="text-5xl font-bold py-10 text-white">Aqme Products User !!</h1>
                    <p class="text-lg text-white">Welcome to Aqme Company's user login system. This documentation outlines the login process for customers accessing our luxury timepiece platform. Our secure authentication system ensures the safety of your personal information while providing a seamless shopping experience.</p>
                </div>
            </div>
            <div class="p-2">
                <div>
                    <h2 class="text-2xl font-semibold text-white text-center">LOGIN</h2>
                    <form class="flex flex-col space-y-4" action="../server/Login/userLogin.php" method="post" >
                        <div class="flex flex-col space-y-2">
                            <label for="userName" class="text-white">User Name :</label>
                            <input type="text" name="userName" id="userName" class="w-full p-2 bg-transparent border border-white text-white" placeholder="User Name" required/>
                        </div class="flex flex-col space-y-2">
                        <div class="flex flex-col space-y-2">
                            <label for="userPassword" class="text-white">Password : </label>
                            <input type="password" name=userPassword" id="userPassword" class="w-full p-2 bg-transparent border border-white text-white" placeholder="Password" required/>
                        </div>
                        <div class="flex flex-col py-5 space-y-2">
                            <input type="submit" class="p-3 bg-transparent border duration-1000 font-bold border-white text-white hover:bg-white hover:text-black" value="Login"/>
                        </div>

                        <div class="flex flex-col py-5 space-y-2">
                            <p class="text-white">You haven't an Account <a href="./userSignUp.html" class="text-blue-400">Create an Account </a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;

    loginContainer.innerHTML = loginContainerContent;
}