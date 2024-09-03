// function sum!!!

// let result ;
// function calcul(){
//     let number1 = parseInt(prompt("enter the first number")) ;
//     console.log(number1);
//     let number2 = parseInt(prompt("enter the first number"));
//     console.log(number2);
//     let result = (number1 + number2);
//     console.log("the sum of these two number is: " + result)
// }
// calcul();



// change le fond apres un click sur submit!!!

// let envoie = document.getElementById("envoie");
//     envoie.addEventListener('click', () => {
//         console.log("j ai cliquer sur le bouton");
        
        // let body = document.querySelector("body");
        // body.style.backgroundColor = "yellow"
// });



// somme de deux numbre!!!

// let number1 = prompt("enter the first number");
// let number2 = prompt("enter the second number");
// let result = parseInt(number1) + parseInt(number2);
// console.log("the sum of these two numbers is: " + result);



// calcul le factorielle des nombre !!!

// let nbr1 = parseInt(prompt("entrer un nombre"));
// let i = 0;
// let factorielle;
// console.log(nbr1);
// while( nbr1 > 0 || nbr1 !=1 ){
//     i = nbr1*(nbr1-1);
//     console.log(i);
// }


   

//     console.log(factorielle);
// console.log(factorielle)
// let nbr1 = parseInt(prompt("entrer le nombre dont vous voulez calculer le factorielle: "));
// console.log(nbr1);
// function factorielle(){
//     let i =1
// }


// Fonction pour calculer le factoriel d'un nombre

function factoriel() {
    // nbr = prompt("entrer un nombre");
    if (nbr === 0 || nbr === 1) {
        return 1;
    }
    return nbr * factoriel(nbr - 1);
}

// Calcul du factoriel de 5
let resultat = factoriel(8);
console.log("Le factoriel de 8 est : " + resultat); // Affiche : Le factoriel de 5 est : 120
