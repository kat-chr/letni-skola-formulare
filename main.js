console.log('JavaScript funguje')

let formular = document.querySelector("#formular")
formular.addEventListener("submit", zpracujFormular)

function zpracujFormular(event) {
    event.preventDefault() // IMPORTANT!!!!

    console.log("zpracovavam");
    let jmeno = document.querySelector("#jmeno").value
    console.log(jmeno)

    let prijmeni = document.querySelector("#prijmeni").value
    console.log(jmeno + " " + prijmeni)

    let datum = document.querySelector("#datum").value
    console.log(datum)

    let barva = document.querySelector("#barva").value
    console.log(barva)

    let mesto = document.querySelector("#mesto").value
    console.log(mesto)

    let souhlas = document.querySelector("#souhlas").checked
    if (souhlas == true) {
        console.log("zakos souhlasi posleme spam :)")
    } else {
        console.log("zakos nesouhlasi neposleme spam :(")
    }
    
}

let barvicka = document.querySelector("#barva")
barvicka.addEventListener("change", zmenitBarvu)

function zmenitBarvu() {
    let barva = document.querySelector("#barva").value
    document.querySelector("body").style.backgroundColor = barva
}