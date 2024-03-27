//* seleziono il container in cui poi voglio andare a mettere i quadrati numerati
const containerElem = document.querySelector(".container"); //object | null

//* funzione for
for (let i = 1; i <101; i++) {

    //? creazione elemento
    const boxElem = document.createElement("div"); // object
    boxElem.innerHTML = i;
    boxElem.classList.add("box");
    console.log(boxElem);

    //? condizione colori
    if (i % 3 === 0) {
    } else if ((i+1) % 3 === 0) {
    } else {
    }

    if (i % 3 === 0 && i % 5 === 0) {
        boxElem.innerHTML = `<img src="./Screenshot 2024-03-27 170956.png" alt="">`
        boxElem.classList.add("fizzbuzz")
        boxElem.classList.add("color3")
    } else if (i % 5 === 0) {
        boxElem.innerHTML = `<img src="./Immagine 2024-03-27 170823.png" alt="">`
        boxElem.classList.add("fizzbuzz")
        boxElem.classList.add("color2")
    } else if  (i % 3 === 0){
        boxElem.innerHTML = `<img src="./Screenshot 2024-03-27 170905.png" alt="">`
        boxElem.classList.add("fizzbuzz")
        boxElem.classList.add("color1")
    } else {
        boxElem.classList.add("color4")
    }


    containerElem.append(boxElem)
}

