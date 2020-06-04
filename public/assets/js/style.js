// Drag & Drop Cards:
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  console.log(ev.target.id)
  ev.target.appendChild(document.getElementById(data));
  axios({
    url: "/api/deals/" + data + "/" + ev.target.id, method: "PUT"
  })
}


