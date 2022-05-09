const flock = [];

let alignSlider,  cohesionSlider, separationSlider;


function setup() {
  // put setup code here
  createCanvas(640, 360);
  alignSlider = createSlider(0, 1, 0.5, 0.1);
  cohesionSlider = createSlider(0, 1, 0.5, 0.1);
  separationSlider = createSlider(0, 1, 0.5, 0.1);
  for(let i = 0; i < 100; i++) {
    flock.push(new Boid());
  }
}

function draw() {
  // put drawing code here
  background(51);

  for (let boid of flock) {
    boid.edges();
    boid.flock(flock);
    boid.update();
    boid.show();
  }
