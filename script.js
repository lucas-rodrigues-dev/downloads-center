function showAlert() {
    var overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "#000";
    overlay.style.zIndex = "999";
    document.body.appendChild(overlay);
  
    swal.fire({
      title: 'Tela com menos de 1200px',
      text: 'Esta central foi desenvolvida apenas para computadores',
      icon: 'warning',
      width: '60%',
      onClose: function () {
        document.body.removeChild(overlay);
      }
    });
  }
  
  function screenValidation() {
    if (window.innerWidth < 1200) {
      showAlert();
    }
  }
  
  window.addEventListener('load', screenValidation);
  window.addEventListener('resize', screenValidation);