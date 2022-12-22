// dom
let eventKey = document.querySelector(".event-key"),
  eventKeyCode = document.querySelector(".event-keycode"),
  eventCode = document.querySelector(".event-code");
// Add event listener on keydown

document.addEventListener("keydown", (event) => {
  let name = event.key,
    code = event.code,
    Keycode = event.which;

  eventKey.innerHTML = name;
  eventCode.innerHTML = code;
  eventKeyCode.innerHTML = Keycode;
});
