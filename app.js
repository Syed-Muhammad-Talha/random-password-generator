const generatedPassword = document.querySelector("#password");
const copy = document.querySelector("#copy");
const generateBtn = document.querySelector("#btn");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "!@#$%^&*()-_=+[]{}|;:',.<>?/`~";
const allchars = upperCase + lowerCase + numbers + symbols;

const length = 15;

const generatePassword = () => {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(length > password.length){
        password += allchars[Math.floor(Math.random() * allchars.length)];
    }

    generatedPassword.value = password;
}

const copyPassword = () => {
    password.select();
    navigator.clipboard.writeText(generatedPassword.value);
}

generateBtn.addEventListener("click", generatePassword);
copy.addEventListener("click" , copyPassword)
