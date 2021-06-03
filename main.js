const Scorpion = {
  name: 'Scorpion',
  hp: 10,
  img: (src = "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif"),
  weapon: ['Spear'],
  attack: function () {
    console.log('Scorpion' +'Fight...');
  },
}
const Sonya = {
  name: 'Sonya',
  hp: 80,
  img: (srs = "http://reactmarathon-api.herokuapp.com/assets/sonya.gif"),
  weapon: ['Machete'],
  attack: function () {
    console.log('Sonya'+'Fight...');
  },
}

const $arenas = document.querySelector(".arenas");

function createPlayer(name, player, life) {
  const $player = document.createElement("div");
  $player.classList.add(name);

  const $progressbar = document.createElement("div");
  $progressbar.classList.add("progressbar");

  const $life = document.createElement("div");
  $life.classList.add("life");
  $life.style.width = player.hp + '%';
  
    

  const $name = document.createElement("div");
  $name.classList.add("name");
  $name.innerHTML = player.name;

  const $character = document.createElement("div");
  $character.classList.add("character");

  const $img = document.createElement("img");
  $img.src = player.img;

  $player.appendChild($progressbar);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $player.appendChild($character);
  $character.appendChild($img);
  $arenas.appendChild($player);
};

createPlayer("player1", Scorpion,);
createPlayer("player2", Sonya,);
