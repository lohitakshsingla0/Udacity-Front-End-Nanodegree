
var top_speed = 100;
var least_speed = 200;

var count = 0;
var score = 0;
var moves=0;

33
// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
	//this.speed = this.fetch_speed();
    this.x = x;
    this.y = y;
	this.speed = this.Get_Speed();
};


Enemy.prototype.Get_Speed = function() {
    return Math.floor(Math.random() * (top_speed - least_speed + 1) + least_speed);
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.


 if (this.x < 550)
        this.x += this.speed * dt;
    else {
        this.x = -100;
        this.speed = this.Get_Speed();
    }};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
};



Player.prototype.update = function() {
	//console.log(allEnemies.length);
    for (var i = 0; i < 4; i++) {
    		document.getElementById("moves").innerHTML = moves;

        if ((this.x + 65 > allEnemies[i].x) && (this.x < allEnemies[i].x + 65) && (this.y + 65 > allEnemies[i].y) && (this.y < allEnemies[i].y + 65)) {
            this.reset();

             alert("Game Over and your score is:"+" "+ count +" "+ "moves are:"+" "+ moves);
            count = 0;
            moves = 0;
            document.getElementById("score").innerHTML = count;
            document.getElementById("moves").innerHTML = moves;
        
        }
    }
};



Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.reset = function() {
    this.x = 300;
    this.y = 400;
};
Player.prototype.handleInput = function(key) {
    // make sure player is within boundaries of canvas
    // make player move with appropriate keyboard key presse
     if (key == 'left') {
        if (this.x > 0) {
           moves++;
            this.x -= 50;
        }
        

    } else if (key == 'right') {
        if (this.x < 400) {
           moves++;
            this.x += 50;
        }
    } else if (key == 'up') {
        if (this.y > 40) {
        	moves++;
            this.y -= 50;
        }  else {

            this.reset();
            count++;
           //  $('#moves').text(moves);
            document.getElementById("score").innerHTML = count;
            	document.getElementById("moves").innerHTML = moves;

        }
    } else if (key == 'down') {
        if (this.y < 400) {
           moves++;
            this.y += 50;
        }
    }
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [
   new Enemy(0, 40),
    new Enemy(0, 130),
  //  new Enemy(0, 50),
    //new Enemy(0, 150),
     new Enemy(0, 80),
    new Enemy(0, 220)
];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.


var player = new Player(300, 400);
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
