const player1 = {
    name: 'Scorpion',
    hp: 50,
    img: src = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Spear'],
    attack: function () {
        console.log(name + '' +'Fight...');
    }
}

const player2 = {
    name: 'Sonya',
    hp: 30,
    img: srs = 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['Machete'],
    attack: function () {
        console.log(name + '' + 'Fight...');
    }
}

function createPlayer(name, player) {
    const $player = document.createElement('div');
    $player.classList.add('player');

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = '100%';
    $life.innerHTML = player.hp;

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerHTML = player.name;
    
    const $character = document.createElement('div');
    $character.classList.add('character');

    const $img = document.createElement('img');
    $img.src = player.img;

    const $arenas = document.querySelector('.arenas');

  

   
    $player.appendChild($progressbar);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $player.appendChild($character);
    $character.appendChild($img);
    $arenas.appendChild($player);

    console.log(player);
}

createPlayer('player1', player1, 90);
createPlayer('player2', player2, 70);