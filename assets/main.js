/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. 
- i numeri random li creo con una funzione e li richiamo all'interno del click

Da lì parte un timer di 5 secondi.
- visualizzo i numeri per 5 secondi e poi scompaiono

Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
- condizione dove confronto i numeri generati con quelli inseriti dall'utente (includes)

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

*/

let containerlista = document.querySelector("#lista")
let containerFine = document.querySelector(".fine")
let arrayRandom = []
let arrayControllo = []

//genero il numero random
function numeroRandom(){
    let numero = Math.floor(Math.random() * 100) + 1
    return numero
}
numeroRandom()

//faccio una funzione che mi crea 5 elementi nell'array
function numberCreated(){
    i = 0
    while( arrayRandom.length < 5){
        arrayRandom.push(numeroRandom())
        containerlista.innerHTML += `<li>${arrayRandom[i]}</li>`
        i++
    }
}

numberCreated()
console.log(arrayRandom)

//targettizzo il bottone
let button = document.querySelector(".button")

button.addEventListener(`click`, function(){
    //aggiungi la classe all'elemento
    containerlista.classList.add("opacity")
    //attivo una funzione che dice dopo 1 secondo fai questo..
    setTimeout(function(){
        
        
        console.log("ciao")

        
        //crea un array di quello che scrivo nel prompt
        for(let s = 0; arrayControllo.length < 5; s++ ){
            let s = parseInt(prompt("scrivi singolarmente i numeri che hai visto"))
            arrayControllo.push(s)
            
        }
        console.log(arrayControllo)
        //condizione per paragonare gli elementi dei due array
        if(arrayControllo.toString() === arrayRandom.toString()){
            containerlista.classList.remove("opacity")
            containerlista.innerHTML = "HAI VINTO"
            console.log("you win")

        }else{
            console.log("you lose")
            containerlista.classList.remove("opacity")
            containerlista.innerHTML = "HAI PERSO"

            //creo un terzo array che contiene gli elemtni in comune
            //elemento è il singolo elemetno del mio array
            let commonElements = arrayRandom.filter(elemento => arrayControllo.includes(elemento));

            console.log(`Gli elementi comuni sono: ${commonElements}`);
            console.log(`Il numero di elementi comuni è: ${commonElements.length}`);

            containerFine.innerHTML += `Gli elementi comuni sono: ${commonElements}`
            containerFine.innerHTML += `Il numero di elementi comuni è: ${commonElements.length}`
        }
    }, 1000)

    
})

