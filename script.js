const startCircleGame=(function(){
let circle = null;

function createElement(width, height, borderRadius, color) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.style.width = width;
  square.style.height = height;
  square.style.backgroundColor = color;
  square.style.borderRadius = borderRadius;
  square.style.position = "absolute";
  square.style.top = "10px";
  square.style.left = "10px";
  document.body.appendChild(square);
  return square;
}

function moveElement(x = 0, y = 0) {
  const element = document.querySelector(".square");
  let newPositionTop = Number(element.style.top.replace("px", "")) + x;
  let newPositionLeft = Number(element.style.left.replace("px", "")) + y;
  element.style.top = newPositionTop + "px";
  element.style.left = newPositionLeft + "px";
  displayPositionCirkle()
}

function moveLeft(deltaLeft = 10) {
  moveElement(0, -deltaLeft);
}

function moveRight(deltaLeft = 10) {
  moveElement(0, deltaLeft);
}

function moveTop(deltaTop = 10) {
  moveElement(-deltaTop, 0);
}

function moveBottom(deltaLeft = 10) {
  moveElement(deltaLeft, 0);
}

function keyEventHandler(event) {
  switch (event.keyCode) {
    case 37:
      moveLeft();
      break;
    case 38:
      moveTop();
      break;
    case 39:
      moveRight();
      break;
    case 40:
      moveBottom();
      break;
    default:
      break;
  }
  window.removeEventListener("keydown", keyEventHandler);
}
function keyUpEventHandler() {
  window.addEventListener("keydown", keyEventHandler);
}

function keyDownEventHandler() {
  window.addEventListener("keydown", keyEventHandler);
}
function displayPositionCirkle() {
const wrapper=document.querySelector(".wrapper")
if(wrapper){wrapper.remove()}
  const div = document.createElement("div");
  div.className = "wrapper";
  div.style.position = "absolute";
  div.style.bottom = "50px";
  div.style.right = "50px";
  div.style.fontSize = "30px";
  div.innerHTML = `<p>x: ${circle.style.left}</p>`
  div.innerHTML += `<p>y: ${circle.style.top}</p>`
  document.body.appendChild(div);
}

function init() {
  circle = createElement("100px", "100px", "50%", "red");

  keyDownEventHandler();

  window.addEventListener("keyup", keyUpEventHandler);
  window.addEventListener("keyup", keyUpEventHandler);
}
return init();
})