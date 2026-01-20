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

if (contenedor) {
  productos.forEach(p => {
    contenedor.innerHTML += `
      <div class="producto-card">
        <img src="${p.imagen}" alt="${p.nombre}">
        <h3>${p.nombre}</h3>
        <p class="precio">
          ${p.precio ? `$${p.precio}` : "Precio próximamente"}
        </p>
        <a href="https://wa.me/521XXXXXXXXXX?text=Quiero%20comprar%20${p.nombre}" class="btn">
          Pedir por WhatsApp
        </a>
      </div>
    `;
  });
}
