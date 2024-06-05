let capture;
let posenet;
let singlePose, skeleton;
let hat_img, moust, bow_tie;
let distanceThreshold = 60; // Adjust this value based on your needs

function setup() {
  createCanvas(800, 500);
  capture = createCapture(VIDEO);
  capture.hide();

  posenet = ml5.poseNet(capture, modelLoaded);
  posenet.on("pose", recievedPoses);

  hat_img = loadImage('images/hat2.png');
  moust = loadImage('images/moustache.png');
  bow_tie = loadImage('images/bow-tie.png');
}

function recievedPoses(poses) {
  if (poses.length > 0) {
    singlePose = poses[0].pose;
    skeleton = poses[0].skeleton;
  }
}

function modelLoaded() {
  console.log("Model has loaded");
}

function draw() {
  // Images and videos (webcam)
  image(capture, 0, 0);

  if (singlePose) {
    // Draw keypoints and skeleton
    for (let i = 0; i < singlePose.keypoints.length; i++) {
      fill(255, 0, 0);
      ellipse(singlePose.keypoints[i].position.x, singlePose.keypoints[i].position.y, 20);
    }
    stroke(255, 255, 255);
    strokeWeight(3);
    for (let j = 0; j < skeleton.length; j++) {
      line(skeleton[j][0].position.x, skeleton[j][0].position.y, skeleton[j][1].position.x, skeleton[j][1].position.y);
    }

    // Calculate distance between the eyes
    let leftEye = singlePose.leftEye;
    let rightEye = singlePose.rightEye;
    let distance = dist(leftEye.x, leftEye.y, rightEye.x, rightEye.y);

    // Calculate the scaling factor based on the distance
    let scaleFactor = map(distance, 0, distanceThreshold, 0.7, 1.1);

    // If the distance is less than the threshold, draw the accessories
    if (distance > distanceThreshold) {
      let hatSize = 150 * scaleFactor;
      let moustSize = 70 * scaleFactor;
      let bowTieSize = 70 * scaleFactor;

      // Move accessories towards the left by subtracting from the x position
      image(hat_img, singlePose.nose.x - 80, singlePose.nose.y - 220, hatSize, hatSize);
      image(moust, singlePose.nose.x - 40, singlePose.nose.y - 15, moustSize, moustSize);
      image(bow_tie, singlePose.nose.x - 30, singlePose.nose.y + 90, bowTieSize, bowTieSize);
    }
  }
}
