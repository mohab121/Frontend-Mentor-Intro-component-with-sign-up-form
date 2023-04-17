const input = document.querySelectorAll("input");
const text = document.querySelectorAll(".text");
const submit = document.querySelector("button");
const name = ["First Name cannot be empty", "Last Name cannot be empty",
             "Looks like this is not an email", "Password cannot be empty"];
             
const reg_mail =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const reg_pass = /^[a-zA-Z0-9_]{6,18}$/;

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    for(let i = 0; i < input.length; i++){
        for(let j = 0; j < text.length; j++){
            if(input[i].value.trim() === ""){
                input[i].classList.add("error");
                text[i].innerHTML = name[i];
            } else{
                input[i].classList.remove("error");
                text[i].innerHTML = "";
            }

            if(i == 2 && !input[2].value.trim().match(reg_mail)){
                input[i].classList.add("error");
                text[i].innerHTML = name[i];
            }

            if(i == 3 && !input[3].value.trim().match(reg_pass)){
                input[i].classList.add("error");
                text[i].innerHTML = name[i];
            }
        }
    }
})