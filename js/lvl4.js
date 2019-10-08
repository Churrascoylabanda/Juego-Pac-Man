// Configuración del juego.
// Estos númmeros representan los campos. 
let gameData = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,2,2,2,2,2,2,5,2,2,2,2,2,2,1],
  [1,2,1,1,2,1,1,2,1,1,2,1,1,2,1],
  [1,2,1,1,2,1,1,2,1,1,2,1,1,2,1],
  [1,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
  [1,2,1,1,1,1,6,1,7,1,1,1,1,2,1],
  [1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],
  [1,2,1,1,1,1,4,1,8,1,1,1,1,2,1],
  [1,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
  [1,2,1,1,2,1,1,2,1,1,2,1,1,2,1],
  [1,2,1,1,2,1,1,2,1,1,2,1,1,2,1],
  [1,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];

// La pared es representada por el número 1.
// Una moneda sería el numero dos , espacios vacíos se representan con un 3,
// y el pacman es el número 5.


// en este codigo se aclara el campo que es representado por cada número.
const WALL   = 1;
const COIN   = 2;
const GROUND   = 3;
const GHOSTA   = 4;
const GHOSTB   = 6;
const GHOSTC   = 7;
const GHOSTD   = 8;
const PACMAN   = 5;


// Utilizaremos el identificador "map" para referirnos al mapa del juego.
let map;

// Con este código sabremos por donde está llendo pacman.
// Esto se logra a través de un par de cordenadas.
let pacman = {
  x: 7,
  y: 1,
  direction: 'right'
};

// Creación de las funciones del mapa.

function createTiles(data) {

  
  let tilesArray = [];

  
  for (let row of data) {

    
    for (let col of row) {

     
      let tile = document.createElement('div');

    
      tile.classList.add('tile');

      
      
      if (col === WALL) {
        tile.classList.add('wall');

      } else if (col === COIN) {
        tile.classList.add('coin');

      } else if (col === GROUND) {
        tile.classList.add('ground');

      } else if (col === PACMAN) {
        tile.classList.add('pacman');

      } else if (col === GHOSTA){
        tile.classList.add('ghosta');
      
      } else if (col === GHOSTB){
        tile.classList.add('ghostb');
      
      } else if (col === GHOSTC){
        tile.classList.add('ghostc');

      } else if (col === GHOSTD){
        tile.classList.add('ghostd');
        
        tile.classList.add(pacman.direction);

      }

    
      tilesArray.push(tile);
    }

  
    let brTile = document.createElement('br');
 
    tilesArray.push(brTile);
  }
  return tilesArray;
}

// Esta función agrega elementos del mapa,
// y los añade a la página.
function drawMap() {
  map = document.createElement('div');

  let tiles = createTiles(gameData);
  for (let tile of tiles) {
    map.appendChild(tile);
  }

  document.body.appendChild(map);
}

// Esta función borra los elementos del mapa desde la página.
function eraseMap() {
  document.body.removeChild(map);
}

// Funciones de movimiento.

function moveDown() {
  pacman.direction = 'down';
  if (gameData[pacman.y+1][pacman.x] !== WALL) {
    gameData[pacman.y][pacman.x] = GROUND;
    pacman.y = pacman.y + 1 ;
    gameData[pacman.y][pacman.x] = PACMAN;
  }
}

function moveUp() {
  pacman.direction = 'up';
  if (gameData[pacman.y-1][pacman.x] !== WALL) {
    gameData[pacman.y][pacman.x] = GROUND;
    pacman.y = pacman.y - 1;
    gameData[pacman.y][pacman.x] = PACMAN;
  }
}

function moveLeft() {
  pacman.direction = 'left';
  if (gameData[pacman.y][pacman.x-1] !== WALL) {
    gameData[pacman.y][pacman.x] = GROUND;
    pacman.x = pacman.x - 1 ;
    gameData[pacman.y][pacman.x] = PACMAN;
  }
}

function moveRight() {
  pacman.direction = 'right';
  if (gameData[pacman.y][pacman.x+1] !== WALL) {
    gameData[pacman.y][pacman.x] = GROUND;
    pacman.x = pacman.x + 1 ;
    gameData[pacman.y][pacman.x] = PACMAN;
  }
}

// Esta función establece un listener para toda la página.
// Cuando el usuario preciona una tecla se ejecuta una función
function setupKeyboardControls() {
  document.addEventListener('keydown', function (e) {
    if (e.keyCode === 37) {         
      moveLeft();

    } else if (e.keyCode === 38) {  
      moveUp();

    } else if (e.keyCode === 39){   
      moveRight();

    } else if (e.keyCode === 40){   
      moveDown();
    }

    // Luego de cada moviemiento el mapa se borra y rehace.
    eraseMap();
    drawMap();
  });
}

// Configurución principal del juego.

function main() {
  drawMap();
  setupKeyboardControls();
}

// Luego de definir todas las funciones se iniciara el juego.
main();