var mega = document.getElementById("mega-menu");
var hover = document.getElementsByClassName("hover");

hover[0].addEventListener("click", first);

function first(e) {
  mega.style.top = "110%";
  e.stopImmediatePropagation();
  this.removeEventListener("click", first);
  document.onclick = second;
}
function second(e) {
  mega.style.top = "-1000%";
  e.stopImmediatePropagation();
  this.removeEventListener("click", second);
  hover[0].addEventListener("click", first);
}
