//alert("pagina js collegato") verifica collegamento


/*
sezione palindroma
-stringa palindroma:
-lunghezza della stringa deve essere pari
-basta che un solo carattere non corrispondanda affinchè la stringa non sia palindroma

*/






/*let wordToCheck=prompt("inserisci una parola")

console.log(isPalindromFor(wordToCheck));
console.log(isPalindromWhile(wordToCheck));
console.log(invertString(wordToCheck));
console.log(isPali(wordToCheck));
//console.log(isPalindromFor(wordToCheck));
/* input {string} parametro in ingresso alla funzione deve essere una stringa 
 output{boolen} il metodo restituisce un valore booleano 

*/
function isPalindromFor(word){

if(word.length %2 !==0){
    return false;
}
let result=true;
for(let i=0;i<word.length/2  ;i++){
    let charLeft=word[i];
  let charRight=word[word.length-1-i];
    if(charLeft !== charRight){
        result=false;
        break;       
    }


}
return result;

}

//secondo modo tramite ciclo while



function isPalindromWhile(word){
    if(word.length % 2 !==0)
    return false;
    
    let result=true;
    let left=0;
    let right=word.length-1;
    while(left<right){
        if(word[left] !== word[right]){
            result=false;
            break;
        }
        left++;
        right--;
    }
    return result;

}
//terzo modo utilizzando un metodo ausiliario che mi restiuisce una stringa con i caratteri rovesciati rispetto a quella di input
 function invertString(word){
let result="";
for(let i=word.length-1;i>=0;i--){
    result+=word[i];
}
return result; 
}


function isPali(word){
    let wordDown=invertString(word);
    /*if(wordDown === word)
    return true;
    else
    return false;
    */
    //ternary operator
    let result="";
    wordDown === word ? result=true : result=false;

    return result;
}

//let firstUserNumber=getRndInteger(0,5);
//console.log(firstUserNumber);
let userNumber=parseInt(prompt("inserisci un valore tra 1 e 5 "));
let choice=prompt("scegli tra pari e dispari ");
/*while((choice!=="pari"&&choice!="dispari")||(userNumber<1||userNumber> 5)){ versione iniziale
    userNumber=parseInt(prompt("inserisci un valore tra 1 e 5 "));
    choice=prompt("scegli tra pari e dispari");
    }

*/
//versione ottimizzata in cui a seconda di quale valore non rispecchi la condinzione,richiede all'utente di rinserire un valore
let flagChoice=false;
let flagNum=false;
while(!flagChoice || !flagNum){
if(choice==="pari"||choice=="dispari"){
    flagChoice= true;
}
else{
    choice=choice=prompt("scegli tra pari e dispari ");
    
}

console.log(choice);

if(userNumber>=1 && userNumber<=5){
    flagNum= true;
}
else{
userNumber=parseInt(prompt("inserisci un valore tra 1 e 5 "));

}
console.log(userNumber);
}



let pcNumber=getRndInteger(0,5);

let result=oddOrEven(userNumber,pcNumber);
console.log(choice,result);
if(result === choice){
    console.log("Utente ha vinto")
}
else
console.log("il computer ha vinto")
/*
funzione che ritorna un numero compreso tra min e max inclusi
*/
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


function oddOrEven(firstNumber,secondNumber){
let tot=firstNumber+secondNumber;
if(tot % 2 ===0){
    return "pari";
}
else
return "dispari";



}  