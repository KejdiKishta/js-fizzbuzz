//* seleziono il container in cui poi voglio andare a mettere i quadrati numerati
const containerElem = document.querySelector(".container"); //object | null

//* funzione for
for (let i = 0; i <100; i++) {

    //? creazione elemento
    const boxElem = document.createElement("div"); // object
    boxElem.innerHTML = i;
    boxElem.classList.add("box");
    console.log(boxElem);

    if (i % 3 === 0) {
        boxElem.classList.add("color1")
    } else if ((i+1) % 3 === 0) {
        boxElem.classList.add("color2")
    } else {
        boxElem.classList.add("color3")
    }

    containerElem.append(boxElem)
}

