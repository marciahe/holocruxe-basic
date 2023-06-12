function checkCameraPermissions() {
  return navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(function (stream) {
      // Permisos otorgados, no se hace nada
      stream.getTracks().forEach(function (track) {
        track.stop();
      });
    })
    .catch(function (error) {
      // Permisos denegados, se aplica la clase CSS '.hidden'
      var backupDiv = document.querySelector(".backup");
      if (backupDiv) {
        backupDiv.classList.remove("hide");
      }
    });
}

// Verificar los permisos al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  checkCameraPermissions();
});
