document.addEventListener("DOMContentLoaded", function () {

  const productos = [
    { nombre: "Apio", precio: null, imagen: "imagen/apio.jpg" },
    { nombre: "Papa", precio: null, imagen: "imagen/papa.jpg" },
    { nombre: "Zanahoria", precio: null, imagen: "imagen/zanahoria.jpg" },
    { nombre: "Coliflor", precio: null, imagen: "imagen/coliflor.jpg" },
    { nombre: "Lechuga", precio: null, imagen: "imagen/lechuga.jpg" },
    { nombre: "Remolacha", precio: null, imagen: "imagen/remolacha.jpg" },
    { nombre: "Cilantro", precio: null, imagen: "imagen/cilantro.jpg" },
    { nombre: "Hierbabuena", precio: null, imagen: "imagen/hierbabuena.jpg" },
    { nombre: "Perejil", precio: null, imagen: "imagen/perejil.jpg" }
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

   

