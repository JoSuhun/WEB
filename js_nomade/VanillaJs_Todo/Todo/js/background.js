const images = ["1.jpeg","2.jpeg","3.jpeg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

document.body.setAttribute("background", `image/${chosenImage}`)