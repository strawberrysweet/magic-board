//hämtar content diver
var contentDiv = document.getElementById('content');

// skapar ett nytt element
var board = document.createElement('div');
//sätter klassnamnet board på diven
board.className = 'board';

//y för att det är y-led
// var y, skapar en ny variabel, riskerar att inte skriva över
for (var y=0; y <= 9; y++) {
    //kallar på funktionen med foor loopen
    addRowToBoard();
}


//if y är ojämnt så skriver den ut en färg
//i 

// lägger till diven med classen board i diven content (det sista vi gör, ger bättre prestanda). 
//  Det är prestandakrävande att göra uppdateringar - Varje ändringar vi gör till domen kräver prestanda
// Alltså skapa trädet först, sen skriva ut
contentDiv.appendChild(board);

function addRowToBoard() {
    

    /*create row */
    var row = document.createElement('div');
    row.className = 'row';

    /*Set background */
    if(y%2){
        row.style.backgroundColor = 'black';
    } else {
        row.style.backgroundColor = 'white';
    }


    /*Add row to the board */
    board.appendChild(row);


}