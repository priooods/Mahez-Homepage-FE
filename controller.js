$(document).ready(function () {
  $("#header").load("./components/navigasi/navigasi.html");
  $("#root").load("./layout/home/index.html", function () {
    $.getScript("./layout/home/controller.js");
  });
  $("#footer").load("./components/footer/footer.html");
});
