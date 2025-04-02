const elementPassword = document.getElementById("password");
const elementLength = document.getElementById("lenght-info");
const elementRange = document.getElementById("range-length");
const elemenbutton = document.getElementById("button");

const passwordContent = ' ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()_+-={}[]:;<>,.?/'

const  passwordLengthCounter = (event) =>{
    const countLength = event.target.value;
      elementLength.textContent = `Length: ${countLength}`
}

elementRange.addEventListener("input", passwordLengthCounter)


const passwordGenerator = (passwordLength) =>{
    let passwordCreated = "";
    for(let i = 0; i < passwordLength; i++){
        passwordCreated += passwordContent.charAt(Math.floor(Math.random()*passwordContent.length))
    }   
    elementPassword.value = passwordCreated;
}

const CreateThePasswordByLength = () =>{
    const passwordLength = elementRange.value //se que no esta causando problemas, pero puede ser confuso de leer que el valor de passwordGenerator y este const tiene el mismo nombre? porque yo entinedo que al estar en este const son valores distintos pero no se si podria prestarse para confusión.
    passwordGenerator(passwordLength);
}

elementPassword.addEventListener("change",passwordGenerator);
elementRange.addEventListener("input",passwordLengthCounter);
elemenbutton.addEventListener("click",CreateThePasswordByLength);