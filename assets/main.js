/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. 
- al click di un botton appaiono i numeri
- i numeri random li creo con una funzione e li richiamo all'interno del click

Da lì parte un timer di 5 secondi.
- visualizzo i numeri per 5 secondi e poi scompaiono

Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
- condizione dove confronto i numeri generati con quelli inseriti dall'utente (includes)

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

*/

let containerlista = document.querySelector("#lista")

//genero il numero random
function numeroRandom(){
    let numero = Math.floor(Math.random() * 100) + 1
    return numero
}
console.log(numeroRandom())

//faccio una funzione che mi crea 5 elementi
function numberCreated(){
    i = 0
    while( i < 5){

        let lista = document.createElement("li")
        lista.innerHTML = `${numeroRandom()}`
        containerlista.append(lista)
        i++
    }
    return lista
}
console.log(numberCreated())

//targettizzo il bottone
let button = document.querySelector(".button")

button.addEventListener(`click`, function(){
    setTimeout(function(){
        containerlista.classList.add("none")
        console.log("ciao")
        prompt("che numeri hai visto ?")
    }, 2000)
})

