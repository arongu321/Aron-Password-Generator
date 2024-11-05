const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// Retrieve HTML elements
const passwordBtn = document.getElementById("password-btn")
const password1El = document.getElementById("password1")
const password2El = document.getElementById("password2")
const password1LengthEl = document.getElementById("password1-length")
const password2LengthEl = document.getElementById("password2-length")
const password1LengthButton = document.getElementById("set-password1-length")
const password2LengthButton = document.getElementById("set-password2-length")

// Variables for password lengths and clipboard text
let password1Length = 15
let password2Length = 15
var copiedText

// Event listeners 

// Listener to generate random passwords for 1 and 2
passwordBtn.addEventListener("click", function() {
    password1El.textContent = generatePassword(password1Length)
    password2El.textContent = generatePassword(password2Length)
})


// Listeners to adjust the password lengths
password1LengthButton.addEventListener("click", function() {
    const length = parseInt(password1LengthEl.value)
    
    // Validate length for password 1
    if (length < 8 || length > 20 || isNaN(length)) {
       alert(`Password 1 length is invalid! Try again!`)
    } else {
        password1Length = length
        alert(`Password 1 length set to ${length}`)
    }
})

password2LengthButton.addEventListener("click", function() {
    const length = parseInt(password2LengthEl.value)
    
    // Validate length for password 2
    if (length < 8 || length > 20 || isNaN(length)) {
       alert(`Password 2 length is invalid! Try again!`)
    } else {
        password2Length = length
        alert(`Password 2 length set to ${length}`)
    }
})

function generatePassword(passwordLength) {
    // Reset password to empty string
    let password = ""
    
    // Generate password
    for (let i=0; i < passwordLength; i++) {
        password += characters[Math.floor(Math.random()*characters.length)]
    }
    return password
}

// Used to copy either password 1 or 2 to clipboard
function copyToClipboard(passwordChoice) {
    if (passwordChoice == 1) {
        copiedText = password1El.innerText
    } else if (passwordChoice == 2) {
        copiedText = password2El.innerText
    }
    navigator.clipboard.writeText(copiedText)
    .then(() => alert("Password is now copied to clipboard!"))
    .catch(() => console.error("Password is not copied!"));
}
