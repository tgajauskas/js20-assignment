// BASE URL = https://open-long-puck.glitch.me

// Sukurkite puslapį, index.html, kurį užkrovus atsiranda lentelė su visais automobiliais iš base URL.
// Sukurkite papildomą puslapį, add.html, kuriame būtų forma su dviem inputais - brand ir model; šie paduotų su post'u informaciją į base url (formatas: objektas su dviem properties: brand ir model).
// Sukurkite notification - t.y. sėkmingai užpildžius formą ir gavus patvirtinimą, turi virš formos rašyti, kad duomenys sėkmingai išsaugoti; o jei blogai - išmesti errorą.
// Sukurkite navigaciją, kad galėtumėte tarp puslapių vaikščioti ir patikrinkite ar įrašyti duomenys atsivaizduoja :)


const API_URL = "https://open-long-puck.glitch.me"
const content = document.getElementById("content")
const notification = document.getElementById("notification")
const submitButton = document.getElementById("submitButton")
const goBackButton = document.getElementById("goBackButton")

fetch(API_URL, {
    method: "GET"
}).then(resp => resp.json()).then(data => loadData(data))


const loadData = (data) => {
    const table = document.createElement("table")

    const headerRow = table.insertRow();
    ["Brand", "Model", "Image"].forEach((label) => {
        const th = document.createElement("th");
        th.textContent = label;
        headerRow.appendChild(th);
    })

    data.forEach((car) => {
        const row = table.insertRow();
        row.insertCell(0).textContent = car.brand;
        row.insertCell(1).textContent = car.model;

        const imageCell = row.insertCell(2);
        const image = document.createElement("img");
        image.src = car.image;
        imageCell.appendChild(image);
    })

    content.innerHTML = "";
    content.appendChild(table);
}
