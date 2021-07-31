const images = require('images');
const text2png = require('text2png');

const style = {color: '#707070', font : '25px PT Sans'};
const kontrasignText = 'Kontrasigned by:';
const first12DigitOfPubKey = 'A2D45V7G90X1...';
const signImg = 'sign-sample.png';
const kontrasignImg = text2png(kontrasignText, style);
const pubKeyImg = text2png(first12DigitOfPubKey, style);



images("background-sign.png")                  //Load image from file
    .size(400)                                 //Geometric scaling the image to 400 pixels width
    .draw(images(kontrasignImg),120, 10)
    .draw(images(signImg).size(150), 100, 30)  //Drawn logo at coordinates (10,10)
    .draw(images(pubKeyImg),120, 130)
    .save("output.png", {                       //Save the image to a file, with the quality of 50
        quality : 50
    });