class Doodler {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.height = 60;
    this.width = 60;
  }
  draw() {
    rect(this.x, this.y, this.width, this.height);
  }
}
let doodler;
function setup() {
  createCanvas(400, 600);
  doodler = new Doodler();
}
function draw() {
  background(100, 100, 255);
  doodler.draw();
} class Doodler {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.height = 60;
    this.width = 40;

    this.velocity = 0;
    this.gravity = 0.1;
  }

  draw() {
    rect(this.x, this.y, this.width, this.height);
  }

  update() {
    this.velocity += this.gravity;
    this.y += this.velocity;
  }
}
let doodler;
function setup() {
  createCanvas(400, 600);
  doodler = new Doodler();
}

function draw() {
  background(100, 100, 255);
  doodler.draw();
  doodler.update();
}

function keyPressed() {
  if (key == ' ') {
    doodler.jump();
  }
}
class Doodler {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.height = 60;
    this.width = 40;

    this.velocity = 0;
    this.gravity = 0.1;
    this.jumpForce = 9; // add this!
  }
  // .....
  // add the new jump function!
  jump() {
    this.velocity -= this.jumpForce;
  }
}
update() {
  this.velocity += this.gravity;
  this.y += this.velocity;


  if (keyIsDown(LEFT_ARROW)) {
    this.x -= 4;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    this.x += 4;
  }
}
update() {
  if (this.x + this.width < 0) this.x = width;   // add this screen wrapping
  if (this.x > width) this.x = -this.width;
  // ...
}
class Platform {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.height = 15;
    this.width = 60;
  }

  draw() {
    fill(100, 255, 100);
    rect(this.x, this.y, this.width, this.height);
  }
}
let doodler;

let gap;
let platforms = []; // create the empty platform array
function setup() {
  createCanvas(400, 600);
  doodler = new Doodler();

  // create the platforms
  let platformCount = 6;
  gap = height / platformCount;
  for (let i = 1; i < 6; i++) {
    platforms.push(new Platform(random(width), height - i * gap))
  }

}

function draw() {
  background(100, 100, 255);
  doodler.draw();
  doodler.update();


  // draw our new platforms
  for (let platform of platforms) {
    platform.draw();
  }
}


function keyPressed() {
  if (key == ' ') {
    doodler.jump();
  }
}
translate(0, width / 2 - doodler.y);
// create more platforms as the doodler moves up the screen
if (doodler.y < platforms[platforms.length - 1].y + 200) {
  platforms.push(new Platform(random(width), platforms[platforms.length - 1].y - gap));
}
doodler.update(platforms);
for (let platform of platforms) {
  if (this.y + this.height >= platform.y && this.y + this.height <= platform.y + platform.height) {

    let minX = platform.x - this.width;
    let maxX = platform.x + platform.width;

    if (this.x >= minX && this.x <= maxX) {
      this.jump();
    }
  }
}
if (this.velocity < -9) this.velocity = -9;
if (platforms[0].y > doodler.y + 400) {
  platforms.splice(0, 1);
  score++;
}
push();
fill(255, 255, 255)
textSize(30);
textAlign(CENTER);
text(score, width / 2, doodler.y - 150);
pop();
let bg;
function setup() {
  // ...
  bg = loadImage('bg.png'); // add this to load the background

}

function draw() {
  image(bg, 0, 0); // at the very start of the draw function
  // ...
}
doodlerLeft = loadImage('doodler-left.png');
doodlerRight = loadImage('doodler-right.png');
doodler = new Doodler(doodlerLeft, doodlerRight);
class Doodler {
  constructor(left, right) {
    // ...
    this.left = left;
    this.right = right;

    this.goingLeft = true;
  }

  draw() {
    // ...
    if (this.goingLeft) {
      image(this.left, this.x, this.y, this.width, this.height);
    } else {
      image(this.right, this.x, this.y, this.width, this.height);
    }
  }

  update(platforms) {
    // ...
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 4;
      this.goingLeft = true;
    }

    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 4;
      this.goingLeft = false;
    }
  }
}