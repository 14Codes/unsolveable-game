var bird = document.getElementById('bird');
var pipe1 = document.getElementById('pipe1');
var pipe2 = document.getElementById('pipe2');
var game = document.getElementById('game');

var gravity = 0.5;
var velocity = 0;
var jumpStrength = 10;

function jump() {
    velocity -= jumpStrength;
}

function update() {
    velocity += gravity;
    bird.style.top = (bird.offsetTop + velocity) + 'px';

    // Check collision with pipes
    var birdRect = bird.getBoundingClientRect();
    var pipe1Rect = pipe1.getBoundingClientRect();
    var pipe2Rect = pipe2.getBoundingClientRect();

    if (birdRect.right >= pipe1Rect.left && birdRect.left <= pipe1Rect.right &&
        (birdRect.top <= pipe1Rect.top || birdRect.bottom >= pipe1Rect.bottom)) {
        // Collision with pipe 1, game over
        console.log('Game over!');
    }

    if (birdRect.right >= pipe2Rect.left && birdRect.left <= pipe2Rect.right &&
        (birdRect.top <= pipe2Rect.top || birdRect.bottom >= pipe2Rect.bottom)) {
        // Collision with pipe 2, game over
        console.log('Game over!');
    }

    requestAnimationFrame(update);
}

// Start the game loop
update();
