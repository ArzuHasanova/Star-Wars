var characters = [
  {
    name: "Obi-Wan Kenobi",
    health: 120,
    attack: 8,
    imageUrl: "assets/images/obi-wan.jpg",
    enemyAttackBack: 15,
  },
  {
    name: "Luke Skywalker",
    health: 100,
    attack: 14,
    imageUrl: "assets/images/luke-skywalker.jpg",
    enemyAttackBack: 5,
  },
  {
    name: "Darth Sidious",
    health: 150,
    attack: 8,
    imageUrl: "assets/images/darth-sidious.png",
    enemyAttackBack: 20,
  },
  {
    name: "Darth Maul",
    health: 180,
    attack: 7,
    imageUrl: "assets/images/darth-maul.jpg",
    enemyAttackBack: 25,
  },
];

// var yourpoint;

$.each(characters, function (index, value) {
  let div = $(
    `<div class="character" data-indeks=${index} data-attack=${value.attack} data-health=${value.health} data-attackback=${value.enemyAttackBack}>`
  );
  let h6 = $(`<h6>${value.name}</h6>`);
  let img = $(`<img src='${value.imageUrl}' />`);
  let p = $(`<p>${value.health}</p>`);
  div.append(h6, img, p);
  $(".characters").append(div);
});

let count = 0;
// var attack = 8;

$(".characters .character").on("click", function () {
  $(".yourChar").append($(this));
  yourpoint = $(this).find("p").text();
  $(".enemies").append($(".characters").html());
  $(".characters").html("");
  $(".chooseChar").html("");

  let yourChar = $(".yourChar .character").find("p").text();
  let yourAttack = $(".yourChar .character").data("attack");
  let yourAttackIncr = parseInt(yourAttack);
  var defenderChar;
  var defenderAttack;
  var defenderAttackIncr;

  $(document).on("click", ".enemies .character", function () {
    if (count < 1) {
      $(".defenderChar").append($(this));

      defenderChar = $(".defenderChar .character").find("p").text();
      defenderAttack = $(".defenderChar .character").data("attack");
      defenderAttackBack = $(".defenderChar .character").data("attackback");
      defenderAttackIncr = parseInt(defenderAttack);
      $(document).on("click", ".attack", function () {
        yourChar = parseInt(yourChar) - defenderAttackBack;
        $(".yourChar .character").find("p").text(yourChar);
        // console.log(defenderAttack);
        defenderChar = parseInt(defenderChar) - yourAttack;
        $(".defenderChar .character").find("p").text(defenderChar);
        console.log(yourAttack);
        yourAttack += yourAttackIncr;
        defenderAttack += defenderAttackIncr;
        if ($(".defenderChar .character").find("p").text() <= 0) {
          $(".defenderChar").html("");
          defenderChar = $(".defenderChar .character").find("p").text();
          count = 0;
          yourAttack = $(".yourChar .character").data("attack");
          console.log("test", defenderChar);
        }
      });
    }
    count++;
  });
});
