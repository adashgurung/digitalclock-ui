function clock() {
  var hour = document.getElementById("hr");
  var minute = document.getElementById("min");
  var second = document.getElementById("sec");
  var ampm = document.getElementById("ampm");

  var h = new Date().getHours();
  var m = new Date().getMinutes();
  var s = new Date().getSeconds();
  var am = "AM";

  /*   if (h == 0) {
    h = 12;
  } */

  if (h > 12) {
    h = h - 12;
    var am = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hour.innerHTML = h;
  minute.innerHTML = m;
  second.innerHTML = s;
  ampm.innerHTML = am;
}

setInterval(clock, 1000);
