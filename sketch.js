let angle = 0;
let r = 0;

let first = 1;
let second = 1;
let third = 2;
let t;
let prevX = 0;
let prevY = 0;

function setup() {
    angleMode(DEGREES);
    createCanvas(900, 900);
    background(51);
}

function draw() {

    translate(width / 2, height / 2);

    first = second;
    second = third;
    third = first + second;

    t = map(third, 0, 1000000000000, 0, width);

    console.log(t);

    //noStroke();
    fill(255);
    ellipse(t, t, 10, 10);
    line(prevX, prevY, t, t);
    //rect(t, t, t, t);
    prevX = t;
    prevY = t;

    ///////////////

    first = second;
    second = third;
    third = first + second;

    t = map(third, 0, 1000000000000, 0, width);

    console.log(t);

    //noStroke();
    fill(255);
    ellipse(t, -t, 10, 10);
    line(prevX, prevY, t, -t);

    prevX = t;
    prevY = -t;

    //rect(t, -t, t, t);
    /////////////

    first = second;
    second = third;
    third = first + second;

    t = map(third, 0, 1000000000000, 0, width);

    console.log(t);

    //noStroke();
    fill(255);
    ellipse(-t, -t, 10, 10);
    line(prevX, prevY, -t, -t);

    prevX = -t;
    prevY = -t;
    //rect(-t, -t, t, t);

    /////////////////////////////

    first = second;
    second = third;
    third = first + second;

    t = map(third, 0, 1000000000000, 0, width);

    console.log(t);

    //noStroke();
    fill(255);
    ellipse(-t, t, 10, 10);
    noFill();
    arc(0, 0, t, t, PI, (3.0 * PI) / 2)
    line(prevX, prevY, -t, t);
    //rect(-t, t, t, t);

    if (t > 1000000000000) {
        noLoop();
    }

    // ADD CONECTIONS

}