window.addEventListener("DOMContentLoaded", () => {
    renderSignUpContent();
})

let signUpContainerContent = document.querySelector('.userSignUpContainer');
function renderSignUpContent() {
    signUpContainerContent.innerHTML = " ";
    let signUpContent = `
        <div class="grid grid-cols-1 md:grid-cols-2 p-5  w-[95vw] min-h-[70vh]  max-w-[900px] my-10  mx-auto  page-sections" data-aos="fade-up" data-aos-duration="1000">
            <div class="p-2">
                <div class="flex flex-col py-5 space-y-2">
                    <h1 class="text-5xl font-bold py-5 text-white">Aqme Products User !!</h1>
                    <p class="text-lg text-white">Welcome to Aqme Company's user login system. This documentation outlines the login process for customers accessing our luxury timepiece platform. Our secure authentication system ensures the safety of your personal information while providing a seamless shopping experience.</p>
                </div>
                <div class="flex flex-col py-5 space-y-2">
                    <div class="grid grid-cols-2 p-1 justify-start overflow-hidden w-[90%] border border-white text-white rounded-xl relative signUpSocialMedia" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" style="--i:#5b5b03">
                        <div class="w-[30%] relative">
                            <img src="./icons/socialmedia/google.png" class="w-[50px]" alt="signup with google" />
                        </div>
                        <div class=" relative w-[100%] items-center float-left py-4">
                            <a href="#">Continue with Google</a>
                        </div>
                    </div>
                
                    <div class="grid grid-cols-2 p-1 justify-start overflow-hidden w-[90%] border border-white text-white rounded-xl relative signUpSocialMedia" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" style="--i:#f1644b">
                        <div class="w-[30%] relative">
                            <img src="./icons/socialmedia/gmail.png" class="w-[50px]" alt="signup with gmail" />
                        </div>
                        <div class=" relative w-[100%] items-center float-left py-4">
                            <a href="#">Continue with Gmail</a>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 p-1 justify-start overflow-hidden w-[90%] border border-white text-white rounded-xl relative signUpSocialMedia" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" style="--i:#2196f3">
                        <div class="w-[30%] relative">
                            <img src="./icons/socialmedia/facebook.png" class="w-[50px]" alt="signup with facebook" />
                        </div>
                        <div class=" relative w-[100%] items-center float-left py-4">
                            <a href="#">Continue with Facebook</a>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 p-1 justify-start overflow-hidden w-[90%] border border-white text-white rounded-xl relative signUpSocialMedia" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" style="--i:#0a4a7e">
                        <div class="w-[30%] relative">
                            <img src="./icons/socialmedia/linkedin.png" class="w-[50px]" alt="signup with linkedIn" />
                        </div>
                        <div class=" relative w-[100%] items-center float-left py-4">
                            <a href="#">Continue with Linked In</a>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="p-2">
                <div>
                    <h2 class="text-2xl font-semibold text-white text-center">SIGN UP</h2>
                    <form class="flex flex-col space-y-4">
                        <div class="flex flex-col space-y-2">
                            <label for="userName" class="text-white">User Name :</label>
                            <input type="text" name="userName" id="userName" class="w-full p-2 bg-transparent border border-white text-white" placeholder="User Name" required/>
                        </div>
                        <div class="flex flex-col space-y-2">
                            <label for="email" class="text-white">Email Address : </label>
                            <input type="password" name=userPassword" id="userPassword" class="w-full p-2 bg-transparent border border-white text-white" placeholder="Password" required/>
                        </div>
                        <div class="flex flex-col space-y-2">
                            <label for="userPassword" class="text-white">Password : </label>
                            <input type="password" name=userPassword" id="userPassword" class="w-full p-2 bg-transparent border border-white text-white" placeholder="Password" required/>
                        </div>
                        <div class="flex flex-col py-5 space-y-2">
                            <input type="submit" class="p-3 bg-transparent border duration-1000 font-bold border-white text-white hover:bg-white hover:text-black" value="Sign Up"/>
                        </div>

                        <div class="flex flex-col py-5 space-y-2">
                            <p class="text-white">I already have an account <a href="./userProfile.html" class="text-blue-400"> Login</a></p>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
        
    `;

    signUpContainerContent.innerHTML = signUpContent;
}