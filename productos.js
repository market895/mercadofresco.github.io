document.addEventListener("DOMContentLoaded", function () {

  const productos = [
    { nombre: "Apio", precio: null, imagen: "img/apio.jpg" },
    { nombre: "Papa", precio: null, imagen: "img/papa.jpg" },
    { nombre: "Zanahoria", precio: null, imagen: "img/zanahoria.jpg" },
    { nombre: "Coliflor", precio: null, imagen: "img/coliflor.jpg" },
    { nombre: "Lechuga", precio: null, imagen: "img/lechuga.jpg" },
    { nombre: "Remolacha", precio: null, imagen: "img/remolacha.jpg" },
    { nombre: "Cilantro", precio: null, imagen: "img/cilantro.jpg" },
    { nombre: "Hierbabuena", precio: null, imagen: "img/hierbabuena.jpg" },
    { nombre: "Perejil", precio: null, imagen: "img/perejil.jpg" }
  ];

  const contenedor = document.getElementById("productos");

  productos.forEach(p => {
    const div = document.createElement("div");
    div.className = "producto-card";
    div.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}">
      <h3>${p.nombre}</h3>
      <p>Precio próximamente</p>
    `;
    contenedor.appendChild(div);
  });

});
