var changed_color = ["lightgrey", "blue", "pink", "green","lightgrey", "blue", "pink", "green"];
var clicked_card = [];
var timer;
var timer2;

compteur = 0;

function paf(i) {
  compteur ++;
  console.log("compteur" + compteur);
  if (compteur < 3) {
    console.log("je suis la couleur : " + changed_color[i]);
    var numberCard = "card" + i;
    document.getElementById(numberCard).style.backgroundColor = changed_color[i];
    clicked_card.push(changed_color[i]);
    console.log(clicked_card);
    if (compteur === 1) {
      timer = setTimeout(function(){document.getElementById(numberCard).style.backgroundColor = "grey";}, 3000);
      console.log("timer " + timer);
    }else{
      timer2 = setTimeout(function(){document.getElementById(numberCard).style.backgroundColor = "grey";}, 3000);
      console.log("timer2 "+ timer2);
    }

    if (clicked_card[0] === clicked_card[1]){
      console.log("timer", timer, timer2 );
      clearTimeout(timer);
      clearTimeout(timer2);
    } else {
      console.log("lilili");
    }
  } else {
    console.log("lalala");
  }
}
