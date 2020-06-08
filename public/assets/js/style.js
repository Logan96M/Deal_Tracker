// Drag & Drop card functionality:
function allowDrop(ev) {
  ev.preventDefault();
}
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev, el) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  console.log(ev.target.id)
  el.appendChild(document.getElementById(data));
  axios({
    url: "/api/deals/" + data + "/" + ev.target.id, method: "PUT"
  })
}


