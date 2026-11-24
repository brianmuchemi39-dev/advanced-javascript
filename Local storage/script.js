//we select the button from html using its id
const btn =document.querySelector("#btn");

// we select the paragraph where we want out message to appear

const msg = document.querySelector("#msg");

function showMessage(){
    msg.textContent = "Hello JavaScript"
}
btn.addEventListener("click", showMessage);

const username = document.querySelector("#username");
const output = document.querySelector ("output");

username.addEventListener("input", function()){
    output.textcontent = username.value
}

