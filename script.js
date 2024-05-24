const container = document.querySelector(".container");

const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "skyblue",
  "blue",
  "purple",
];

for (let i = 0; i < 25; i++) {
  const row = document.createElement("div");
  row.className = "row";
  for (let j = 0; j < 20; j++) {
    const box = document.createElement("div");
    box.className = "box";
    row.appendChild(box);
  }
  container.appendChild(row);
}

const boxes = document.querySelectorAll(".box");

console.log(boxes);

function start() {
  this.style.transition = "0s";
  let index = Math.floor(Math.random() * colors.length);
  console.log(index);
  this.classList.add(colors[index]);
}

function end() {
  setTimeout(() => {
    this.className = "box";
    this.style.transition = "1s";
  }, 1000);
}

boxes.forEach((box) => {
  box.addEventListener("mouseenter", start);
  box.addEventListener("mouseleave", end);
  box.addEventListener("touchstart", start);
  box.addEventListener("touchend", end);
  box.addEventListener("touchmove", () => {
    box.style.transition = "0s";
    let index = Math.floor(Math.random() * colors.length);
    console.log(index);
    box.classList.add(colors[index]);
    setTimeout(() => {
      box.className = "box";
      box.style.transition = "1s";
    }, 1000);
  });
});
