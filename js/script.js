//* seleziono il container in cui poi voglio andare a mettere i quadrati numerati
const containerElem = document.querySelector(".container"); //object | null

//* funzione for
for (let i = 0; i <100; i++) {

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
        boxElem.innerHTML = "FizzBuzz"
        boxElem.classList.add("fizzbuzz")
        boxElem.classList.add("color3")
    } else if (i % 5 === 0) {
        boxElem.innerHTML = "Buzz"
        boxElem.classList.add("fizzbuzz")
        boxElem.classList.add("color2")
    } else if  (i % 3 === 0){
        boxElem.innerHTML = "Fizz"
        boxElem.classList.add("fizzbuzz")
        boxElem.classList.add("color1")
    } else {
        boxElem.classList.add("color4")
    }


    containerElem.append(boxElem)
}

