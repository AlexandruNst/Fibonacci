let angle = 0;
let r = 0;

let first = 1;
let second = 1;
let third = 2;

function setup() {
    angleMode(DEGREES);
    createCanvas(900, 900);
    background(51);
}

function draw() {

    first = second;
    second = third;
    third = first + second;

    console.log(third);

}