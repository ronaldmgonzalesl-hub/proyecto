document.addEventListener("DOMContentLoaded", function() {
  const startButton = document.getElementById("startButton");
  const miAudio = document.getElementById("miAudio");
  const hiddenContent = document.querySelector(".hidden-content");

  document.body.classList.remove("container");
  
  startButton.addEventListener("click", function() {
    startButton.style.display = "none";

    // ✅ ¡Cambia "none" a "block" para mostrar el mensaje!
    hiddenContent.style.display = "block";
    
    miAudio.play();
  });
});