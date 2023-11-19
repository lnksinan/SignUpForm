let signupBtn = document.getElementById("signupBtn")
let signinBtn = document.getElementById("signipBtn")
let nameField = document.getElementById("nameField")
let title = document.getElementById("title")


signinBtn.addEventListener("click", function() {
    nameField.style.maxHeight=0;
    title.innerHTML = "Sign In"
    signinBtn.classList.add("disable")
    signinBtn.classList.remove("disable")

})

signupBtn.addEventListener("click", function() {
    nameField.style.maxHeight="60px";
    title.innerHTML = "Sign Up"
    signupBtn.classList.remove("disable")
    signupBtn.classList.add("disable")

})