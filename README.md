# Posture detection using PoseNet 
- Machine Learning in JavaScript.

## What is PoseNet?
PoseNet is a machine learning model that allows for real-time human pose estimation. It can detect the positions of various key points on the human body, such as the nose, eyes, ears, shoulders, elbows, wrists, hips, knees, and ankles, from an image or video.

- There are 17 key points(5 facial and 12 body points)
They are:
1. Nose
2. Left Eye
3. Right Eye
4. Left Ear
5. Right Ear
6. Left Shoulder
7. Right Shoulder
8. Left Elbow
9. Right Elbow
10. Left Wrist
11. Right Wrist
12. Left Hip
13. Right Hip
14. Left Knee
15. Right Knee
16. Left Ankle
17. Right Ankle

- Real Time Applications:
1) Used in Snapchat filters where you see the tongue, aspects, glimpse, dummy faces.

2) Fitness apps like a cult which uses to detect your exercise poses.

3) A very popular Instagram Reels uses posture detection to provide you different features to apply on your face and surrounding.

4) Virtual Games to analyze shots of players.

## We are going to use two main libraries for this project:
### 1. ml5.js:
JavaScript library that simplifies the use of machine learning in web applications. It provides an accessible interface for using pre-trained machine learning models, enabling users to easily incorporate tasks such as image classification, text analysis, and generative models into their projects.

* User-friendly
* Built on TensorFlow.js
* Pre-trained models
* Creative coding

### 2. p5.js:
* Origin:
 Essentially, p5.js is a web-based extension of the Processing language.
 Processing was primarily used for desktop applications, installations, and physical computing projects wheras p5.js could be used on the web browser making it ideal for creating content that can be easily shared and viewed online.
* A JavaScript library designed for creative coding. 
It provides a comprehensive set of tools for creating graphics, animations, and interactive content on the web making it easy for artists, designers, and beginners to create visually engaging applications.

* Built on Processing: JavaScript version of the Processing language.
* Interactive graphics: Ideal for visual arts and interactive applications.
* Wide range of functions: Includes drawing, animation, and interaction capabilities.

## How to work with p5.js?
* BASICS:

//Creates the canvas

function setup() {
  createCanvas(800, 500);
}

//Creates the basic shapes.

function draw() {

  background(200);
  // 1. point
  point(200, 200);
  // 2. line
  line(200, 200, 300, 300);
  // 3. triangle
  triangle(100, 200, 300, 400, 150, 450);
  // 4. rectangle
  rect(500, 200, 200, 100);
  // 5. circle
  ellipse(600,300,100,100)
}

// Stroke and color.

function draw() {

  fill(200, 100, 100, 100)
  stroke(255, 0, 0);
  strokeWeight(5);
  ellipse(100, 200, 100, 100);
  stroke(255, 255, 0);
  ellipse(250, 200, 100, 100);
  stroke(100, 130, 0);
  ellipse(400, 200, 100, 100);
  stroke(0, 255, 0);
  ellipse(550, 200, 100, 100);
  stroke(0, 0, 255);
  ellipse(700, 200, 100, 100);
}

// Display live video (webcam)

function setup() {
  createCanvas(800, 500);
  capture = createCapture(VIDEO)
  capture.hide()
}

function draw() {
  image(capture, 0 , 0, 800, 600);
}
