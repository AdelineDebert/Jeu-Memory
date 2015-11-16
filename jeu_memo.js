var changed_color = ["lightgrey", "blue", "pink", "green","lightgrey", "blue", "pink", "green"];
var clicked_card = [];
var numberCard_Array = [];
var timer;
var timer2;

compteur = 0;

function paf(i) {
  compteur ++;
  console.log("compteur" + compteur);
  if (compteur < 3) {
    console.log("je suis la couleur : " + changed_color[i]);
    var numberCard = "card" + i;
    numberCard_Array.push(numberCard);
    console.log("je suis le tableau des id de carte " + numberCard_Array);
    document.getElementById(numberCard).style.backgroundColor = changed_color[i];
    clicked_card.push(changed_color[i]);


    if (compteur === 1) {
      timer = setTimeout(function(){document.getElementById(numberCard).style.backgroundColor = "grey"; clicked_card=[]; compteur = 0;}, 2000);
    }else{
      timer2 = setTimeout(function(){document.getElementById(numberCard).style.backgroundColor = "grey";}, 2000);
    }


    if (numberCard_Array[0] === numberCard_Array[1]){
      console.log("je suis la même carte");
      compteur = 0;
      clicked_card=[];
      numberCard_Array= [];
      alert("Tu as clické 2 fois sur la même carte petit sacripan !");
      console.log("clicked_card quand la carte est la même " + clicked_card);
    } else if ((compteur === 2) && (clicked_card[0] != clicked_card[1])) {
      console.log("je suis une paire fausse");
      clicked_card=[];
      numberCard_Array= [];
      alert("Perdu, ce ne sont pas les 2 mêmes cartes ...");
    } else if (clicked_card[0] === clicked_card[1]){
      clearTimeout(timer);
      clearTimeout(timer2);
      compteur = 0;
      clicked_card=[];
      numberCard_Array= [];
      console.log("compteur après juste = " + compteur);
      alert("Bravo ! Les 2 font la paire !");
    } else {
      console.log("je ne suis ni bon ni mauvais");
    }
  } else {
    console.log("le compteur a explosé");
    alert("Tu ne peux découvrir que 2 cartes à la fois, chenapan !");
  }
}
