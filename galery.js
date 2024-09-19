let currentIndex = 0;
const images = document.querySelectorAll(".carousel-img img");

function showImage(index) {
  images.forEach((img, i) => {
    img.style.transform = `translateX(${(i - index) * 100}%)`;
  });
}

// Control del carrusel
document.getElementById("prevbtn").addEventListener("click", () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
  showImage(currentIndex);
});

document.getElementById("next-bnt").addEventListener("click", () => {
  currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
  showImage(currentIndex);
});

// Ejecutar las funciones al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  generarNoticias();
  generarCalendario();
  showImage(currentIndex); // Mostrar la primera imagen del carrusel al cargar
});
