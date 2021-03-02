//chiedere all'utente la mail
//controllare se la mail è presente nell'array

var i
var database = ["mariorossi@gmail.com", "marioverdi@gmail.com", "mariobianchi@gmail.com"]
var mailUtente
var soldatino = false

mailUtente = prompt("Inserisci la tua mail, controlleremo se è contenuta nel database.");
console.log(mailUtente);

for (i = 0; i < database.length; i++)
{
  if (mailUtente == database[i])
  {
    soldatino = true;
  }
}

console.log(soldatino);

if (soldatino == true)
{
  document.getElementById('mail').innerHTML = "La mail " + mailUtente + " è presente nel nostro database.";
}
else
{
  document.getElementById('mail').innerHTML = "La mail " + mailUtente + " non è presente nel nostro database, riprova.";
}

//----------------------------------------------------//

//numero random da 1 a 6 per utente e computer
//stabilire il vincitore in base al numero più alto

var numeroUtente
var numeroComputer
var vincitore

numeroUtente = Math.floor(Math.random() * 6) + 1;
document.getElementById('numeroUtente').innerHTML = numeroUtente;

numeroComputer = Math.floor(Math.random() * 6) + 1;
document.getElementById('numeroComputer').innerHTML = numeroComputer;

if (numeroUtente > numeroComputer)
{
  vincitore = numeroUtente
  document.getElementById('vincitore').innerHTML = "Vince l'utente con il numero " + vincitore;
}

else if (numeroUtente < numeroComputer) {
  vincitore = numeroComputer
  document.getElementById('vincitore').innerHTML = "Vince il computer con il numero " + vincitore;
}

else
{
  vincitore = numeroComputer;
  document.getElementById('vincitore').innerHTML = "Pareggio, a entrambi è uscito il numero " + vincitore;
}