const dataFile = "./data.json";
const image1 = document.querySelector(".step1 img");
const image2 = document.querySelector(".step2 img");
const image3 = document.querySelector(".step3 img");
const desc1 = document.querySelector(".step1 p");
const desc2 = document.querySelector(".step2 p");
const desc3 = document.querySelector(".step3 p");
const bLink = document.querySelector(".buyers");
const sLink = document.querySelector(".sellers");
let dropA = document.querySelector(".dropdown-a");
let dropB = document.querySelector(".dropdown-b");
let iConA = document.querySelector(".dropdown-a .material-icons");
let iConB = document.querySelector(".dropdown-b .material-icons");
let openBtn = document.getElementById("open");
let closeBtn = document.getElementById("close");
let mobNavigation = document.querySelector(".top-header-mobile nav");
fetch(dataFile)
  .then((res) => res.json())
  .then((data) => {
    image1.src = data.connections[0].stepImage1;
    image2.src = data.connections[0].stepImage2;
    image3.src = data.connections[0].stepImage3;
    desc1.innerHTML = `<a href='#' style="color:#0070ba">Sign up</a> ${data.connections[0].description1}`;
    desc2.textContent = data.connections[0].description2;
    desc3.textContent = data.connections[0].description3;
  });
sLink.addEventListener("click", function () {
  fetch(dataFile)
    .then((res) => res.json())
    .then((data) => {
      image1.src = data.connections[1].stepImage1;
      image2.src = data.connections[1].stepImage2;
      image3.src = data.connections[1].stepImage3;
      desc1.innerHTML = `<a href='#' style="color:#0070ba">Sign up</a> ${data.connections[0].description1}`;
      desc2.textContent = data.connections[1].description2;
      desc3.textContent = data.connections[1].description3;
    });
  this.style.color = "grey";
  this.style.borderBottom = "2px solid grey";
  bLink.style.color = "#0070ba";
  bLink.style.borderBottom = "none";
});

bLink.addEventListener("click", function () {
  fetch(dataFile)
    .then((res) => res.json())
    .then((data) => {
      image1.src = data.connections[0].stepImage1;
      image2.src = data.connections[0].stepImage2;
      image3.src = data.connections[0].stepImage3;
      desc1.innerHTML = `<a href='#' style="color:#0070ba">Sign up</a> ${data.connections[0].description1}`;
      desc2.textContent = data.connections[0].description2;
      desc3.textContent = data.connections[0].description3;
    });
  this.style.color = "grey";
  this.style.borderBottom = "2px solid grey";
  sLink.style.color = "#0070ba";
  sLink.style.borderBottom = "none";
});

dropA.addEventListener("mouseover", function () {
  iConA.classList.toggle("open-caret");
});
dropB.addEventListener("mouseover", function () {
  iConB.classList.toggle("open-caret");
});
dropA.addEventListener("mouseout", function () {
  iConA.classList.toggle("close-caret");
});
dropB.addEventListener("mouseout", function () {
  iConB.classList.toggle("close-caret");
});

openBtn.addEventListener("click", function () {
  openBtn.style.display = "none";
  closeBtn.style.display = "block";
  mobNavigation.style.width = "280px";
  mobNavigation.style.left = "0";
  document.getElementsByTagName("body")[0].style.marginLeft = "280px";
});
closeBtn.addEventListener("click", function () {
  closeBtn.style.display = "none";
  openBtn.style.display = "block";
  mobNavigation.style.width = "0";
  mobNavigation.style.left = "-2rem";
  document.getElementsByTagName("body")[0].style.marginLeft = "0";
});
