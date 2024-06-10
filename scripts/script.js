document.addEventListener("DOMContentLoaded", function () {
  const clickSound = new Audio("/sounds/clickar.mp3");

  document.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function (event) {
      clickSound.play();
    });
  });
});
