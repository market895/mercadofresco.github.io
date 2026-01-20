const productos = [
 { nombre: "Apio", precio: null, imagen: "image/apio.jpg" },
{ nombre: "Papa", precio: null, imagen: "image/papa.jpg" },
{ nombre: "Zanahoria", precio: null, imagen: "image/zanahoria.jpg" },
{ nombre: "Coliflor", precio: null, imagen: "image/coliflor.jpg" },
{ nombre: "Lechuga", precio: null, imagen: "image/lechuga.jpg" },
{ nombre: "Remolacha", precio: null, imagen: "image/remolacha.jpg" },
{ nombre: "Cilantro", precio: null, imagen: "image/cilantro.jpg" },
{ nombre: "Hierbabuena", precio: null, imagen: "image/hierbabuena.jpg" },
{ nombre: "Perejil", precio: null, imagen: "image/perejil.jpg" }


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
