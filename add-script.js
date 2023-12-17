const API_URL = "https://open-long-puck.glitch.me/"
const notification = document.getElementById("notification")
const form = document.getElementById("form")
const carBrandInput = document.getElementById("carBrandInput")
const carModelInput = document.getElementById("carModelInput")

notification.innerText = "Užpildykite laukelius: "

// Fetch data with GET method
fetch(API_URL, {
method: "GET"
}).then(resp => resp.json())

// Fetch data with POST method
const submitData = (e) => {
    e.preventDefault()

    if(!carBrandInput.value || !carModelInput.value) return notification.innerText = "KLAIDA: Prašome užpildyti visus laukelius!"

    const newCar =  {
        brand: carBrandInput.value,
        model: carModelInput.value,
        
    }

    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newCar)
    })
    .then(resp => resp.json())
    .then(data => {
        notification.innerText = "Duomenys sėkmingai išsaugoti"

        // Clear input
        carBrandInput.value = ""
        carModelInput.value = ""
    })
}

// Submit data with post request
form.addEventListener("submit", submitData)
