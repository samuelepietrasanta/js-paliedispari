function checkPalindrom (str) {
    return str == str.split('').reverse().join('');
  }

let parolaUtente = prompt("inserisci una parola");

if (checkPalindrom(parolaUtente) == true){
    document.getElementById("paliyes").innerHTML = "Figo, hai scritto una parola palindroma!"

}else{
    document.getElementById("palinope").innerHTML = "Mi deludi, potevi scrivere almeno una parola palindroma";
}


// pari e dispari


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function IsPari(numero){
    if (numero % 2 == 0){
        return true
    }
    return false
}




let UserPariODispari = prompt("Scegli. Pari o dispari?");

if (UserPariODispari != "pari" && UserPariODispari != "dispari"){
    alert("scrivi pari o dispari, tutto minuscolo e senza spazi grazie");
}else{
    let NumeroUtente = parseInt(prompt("Ora scegli un numero da 1 a 5"));
    if (NumeroUtente < 1 || NumeroUtente > 5){
        alert("Accetto solo numeri tra 1 e 5")
    }else{
        let sommaNumeri = NumeroUtente + getRandomInt(1, 5);
        if(UserPariODispari == "pari"){
            if(IsPari(sommaNumeri) ){
                document.getElementById("pari").innerHTML = "E' uscito il numero :" + sommaNumeri +  ". Hai vinto Tu!!";
            }else {
                document.getElementById("dispari").innerHTML = "E' uscito il numero :" + sommaNumeri +  ". Ho Vinto Iooo!!";
            }
        }else if (UserPariODispari == "dispari") {
            if(IsPari(sommaNumeri)){
                document.getElementById("pari").innerHTML = "E' uscito pari. Ho vinto io!!";
            }else {
                document.getElementById("dispari").innerHTML = "E' uscito dispari. Hai vinto tu!!";
            }
        }
    }
}
