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
let arrayRandom = []

//genero il numero random
function numeroRandom(){
    let numero = Math.floor(Math.random() * 100) + 1
    return numero
}
console.log(numeroRandom())

//faccio una funzione che mi crea 5 elementi nell'array
function numberCreated(){
    i = 0
    while( arrayRandom.length < 5){
        arrayRandom.push(numeroRandom())
        containerlista.innerHTML += `<li>${arrayRandom[i]}</li>`
        i++
    }
    
    return containerlista
}
console.log(numberCreated())
console.log(arrayRandom)

//targettizzo il bottone
let button = document.querySelector(".button")

button.addEventListener(`click`, function(){
    //aggiungi la classe all'elemento
    containerlista.classList.add("opacity")
    //attivo una funzione che dice dopo 2 secondi fai questo..
    setTimeout(function(){
        
        
        console.log("ciao")

        let s = prompt("scrivi i numeri che hai visto divisi da uno spazio...")
        //crea un array di quello che scrivo nel prompt, diviso da uno spazio
        let array = s.split(" ")
        console.log(array)
        //condizione per paragonare gli elementi dei due array2r
        if(array.toString() === arrayRandom.toString()){
            containerlista.classList.remove("opacity")
            containerlista.innerHTML = "HAI VINTO"
            console.log("you win")

        }else{
            console.log("you lose")
            containerlista.classList.remove("opacity")
            containerlista.innerHTML = "HAI PERSO"
        }
    }, 2000)

    
})

