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

if (contenedor) {
  productos.forEach(p => {
    const div = document.createElement("div");
    div.className = "producto-card";
    div.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}">
      <h3>${p.nombre}</h3>
      <p class="precio">
        ${p.precio ? "$" + p.precio : "Precio próximamente"}
      </p>
      <a 
        href="https://wa.me/521XXXXXXXXXX?text=Quiero%20comprar%20${p.nombre}" 
        class="btn"
        target="_blank"
      >
        Pedir por WhatsApp
      </a>
    `;
    contenedor.appendChild(div);
  });
}
