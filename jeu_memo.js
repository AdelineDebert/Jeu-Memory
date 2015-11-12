// var changed_color = ["lightgrey", "blue", "pink", "green",
// "lightgrey", "blue", "pink", "green"];
var changed_color = ["lightgrey", "blue", "pink", "green","lightgrey", "blue", "pink", "green"];
var clicked_card = [];
var timer;

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
      timer = setTimeout(function(){document.getElementById(numberCard).style.backgroundColor = "grey";}, 3000);
        if (clicked_card[0] === clicked_card[1]){
          clearTimeout(timer);
        } else {
          console.log("lilili");
        }
    } else {
      console.log("lalala");
    }
}
