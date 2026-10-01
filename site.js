"use strict";
const products = [
  {
    "id": 1,
    "title": "Casaca reflectiva amarillo y gris",
    "category": "casacas",
    "description": "Casaca bicolor con cierre frontal y bandas reflectivas.",
    "image": "public/catalog/product-01.jpeg"
  },
  {
    "id": 2,
    "title": "Casaca reflectiva naranja y azul",
    "category": "casacas",
    "description": "Modelo de cuello alto, cierre frontal y bandas reflectivas.",
    "image": "public/catalog/product-02.jpeg"
  },
  {
    "id": 3,
    "title": "Chaleco reflectivo rojo",
    "category": "chalecos",
    "description": "Vista frontal y posterior de un chaleco con bolsillos.",
    "image": "public/catalog/product-03.jpeg"
  },
  {
    "id": 4,
    "title": "Polos corporativos",
    "category": "polos",
    "description": "Línea de polos con cuello y opciones de manga.",
    "image": "public/catalog/product-04.jpeg"
  },
  {
    "id": 5,
    "title": "Casacas corporativas",
    "category": "casacas",
    "description": "Selección de modelos y colores para uniformes de empresa.",
    "image": "public/catalog/product-05.jpeg"
  },
  {
    "id": 6,
    "title": "Línea de pantalones de trabajo",
    "category": "pantalones",
    "description": "Referencias de pantalones en diferentes colores y acabados.",
    "image": "public/catalog/product-06.jpeg"
  },
  {
    "id": 7,
    "title": "Pantalón naranja reflectivo",
    "category": "pantalones",
    "description": "Modelo naranja con bandas reflectivas en las piernas.",
    "image": "public/catalog/product-07.jpeg"
  },
  {
    "id": 8,
    "title": "Pantalones para uniformes",
    "category": "pantalones",
    "description": "Opciones de diseño para complementar el uniforme.",
    "image": "public/catalog/product-08.jpeg"
  },
  {
    "id": 9,
    "title": "Pantalón azul con reflectivos",
    "category": "pantalones",
    "description": "Prenda azul con bandas reflectivas en ambas piernas.",
    "image": "public/catalog/product-09.jpeg"
  },
  {
    "id": 10,
    "title": "Pantalón denim azul",
    "category": "pantalones",
    "description": "Pantalón de corte recto para uniformes de trabajo.",
    "image": "public/catalog/product-10.jpeg"
  },
  {
    "id": 11,
    "title": "Pantalón denim bordado",
    "category": "pantalones",
    "description": "Referencia de personalización con bordado en denim.",
    "image": "public/catalog/product-11.jpeg"
  },
  {
    "id": 12,
    "title": "Conjunto industrial azul",
    "category": "uniformes",
    "description": "Referencia de chaqueta y pantalón con detalles reflectivos.",
    "image": "public/catalog/product-12.jpeg"
  },
  {
    "id": 13,
    "title": "Chaleco de seguridad amarillo y azul",
    "category": "chalecos",
    "description": "Modelo sin mangas con cierre frontal y bolsillos.",
    "image": "public/catalog/product-13.jpeg"
  },
  {
    "id": 14,
    "title": "Chaleco bicolor personalizado",
    "category": "chalecos",
    "description": "Vista posterior de un chaleco amarillo y azul.",
    "image": "public/catalog/product-14.jpeg"
  },
  {
    "id": 15,
    "title": "Casaca reflectiva con capucha",
    "category": "casacas",
    "description": "Modelo amarillo y azul con capucha y bandas reflectivas.",
    "image": "public/catalog/product-15.jpeg"
  },
  {
    "id": 16,
    "title": "Camisa naranja y pantalón azul",
    "category": "uniformes",
    "description": "Conjunto de trabajo con camisa y pantalón reflectivos.",
    "image": "public/catalog/product-16.jpeg"
  },
  {
    "id": 17,
    "title": "Casaca naranja con capucha",
    "category": "casacas",
    "description": "Casaca bicolor con cierre y bandas reflectivas.",
    "image": "public/catalog/product-17.jpeg"
  },
  {
    "id": 18,
    "title": "Chaleco naranja multibolsillos",
    "category": "chalecos",
    "description": "Modelo con bolsillos frontales y detalles reflectivos.",
    "image": "public/catalog/product-18.jpeg"
  },
  {
    "id": 19,
    "title": "Casaca y chaleco personalizados",
    "category": "uniformes",
    "description": "Referencias gráficas de prendas con identidad corporativa.",
    "image": "public/catalog/product-19.jpeg"
  },
  {
    "id": 20,
    "title": "Chaleco naranja reflectivo",
    "category": "chalecos",
    "description": "Chaleco con bolsillos frontales y bandas reflectivas.",
    "image": "public/catalog/product-20.jpeg"
  },
  {
    "id": 21,
    "title": "Polo beige de manga larga",
    "category": "polos",
    "description": "Cuello y puños en contraste; referencia de bordado.",
    "image": "public/catalog/product-21.jpeg"
  },
  {
    "id": 22,
    "title": "Pantalón cargo gris reflectivo",
    "category": "pantalones",
    "description": "Modelo con bolsillo lateral y bandas en las piernas.",
    "image": "public/catalog/product-22.jpeg"
  },
  {
    "id": 23,
    "title": "Diseño de chaleco naranja y azul",
    "category": "chalecos",
    "description": "Referencia de diseño para una confección personalizada.",
    "image": "public/catalog/product-23.jpeg"
  },
  {
    "id": 24,
    "title": "Mameluco azul reflectivo",
    "category": "uniformes",
    "description": "Prenda enteriza con bolsillos y bandas reflectivas.",
    "image": "public/catalog/product-24.jpeg"
  },
  {
    "id": 25,
    "title": "Chaleco azul reflectivo",
    "category": "chalecos",
    "description": "Modelo azul con interior amarillo y bolsillos frontales.",
    "image": "public/catalog/product-25.jpeg"
  },
  {
    "id": 26,
    "title": "Polo rojo reflectivo",
    "category": "polos",
    "description": "Polo de manga larga con bandas reflectivas.",
    "image": "public/catalog/product-26.jpeg"
  },
  {
    "id": 27,
    "title": "Pantalón azul reflectivo",
    "category": "pantalones",
    "description": "Modelo azul con bandas reflectivas en las piernas.",
    "image": "public/catalog/product-27.jpeg"
  }
];
const categoryNames = {"uniformes":"Uniformes","casacas":"Casacas","chalecos":"Chalecos","pantalones":"Pantalones","polos":"Polos"};
const whatsappNumber = "51993332950";
const whatsappUrl = message => "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message);
const generalWhatsAppMessage = "Hola, More Z Industrial. Deseo información y una cotización de ropa de trabajo. Me gustaría conocer modelos, tallas, colores y precios.";

const menu = document.querySelector(".menu");
const nav = document.getElementById("navegacion");
menu?.addEventListener("click", () => {
  const expanded = menu.getAttribute("aria-expanded") !== "true";
  menu.setAttribute("aria-expanded", String(expanded));
  menu.setAttribute("aria-label", expanded ? "Cerrar menú" : "Abrir menú");
  nav.classList.toggle("open", expanded);
});
document.querySelectorAll('a[href="contacto.html"],a[href^="contacto.html?"]').forEach(link => {
  if (link.closest(".nav-links")) return;
  link.addEventListener("click", event => {
    event.preventDefault();
    location.href = whatsappUrl(generalWhatsAppMessage);
  });
});
document.querySelectorAll('a[href^="tel:"],a[href^="mailto:"]').forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    location.href = whatsappUrl(generalWhatsAppMessage);
  });
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && nav?.classList.contains("open")) {
    nav.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-label", "Abrir menú");
    menu.focus();
  }
});

const modal = document.getElementById("producto-modal");
let lastProductButton;
document.querySelectorAll("[data-product]").forEach(button => {
  button.addEventListener("click", () => {
    const product = products.find(p => String(p.id) === button.dataset.product);
    if (!product || !modal) return;
    lastProductButton = button;
    document.getElementById("modal-img").src = product.image;
    document.getElementById("modal-img").alt = product.title;
    document.getElementById("modal-title").textContent = product.title;
    document.getElementById("modal-category").textContent = categoryNames[product.category];
    document.getElementById("modal-description").textContent = product.description;
    document.getElementById("modal-quote").href = whatsappUrl("Hola, More Z Industrial. Deseo información y cotización de la prenda: " + product.title + ". Quisiera conocer tallas, colores, precio y disponibilidad.");
    modal.showModal();
  });
});
document.querySelector(".modal-close")?.addEventListener("click", () => modal.close());
modal?.addEventListener("click", event => {
  if (event.target === modal) {
    const box = modal.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) modal.close();
  }
});
modal?.addEventListener("close", () => lastProductButton?.focus());

const filters = document.querySelectorAll("[data-filter]");
function filterProducts(category) {
  if (!["todos", ...Object.keys(categoryNames)].includes(category)) category = "todos";
  let count = 0;
  document.querySelectorAll("#catalog-grid .product-card").forEach(card => {
    const visible = category === "todos" || card.dataset.category === category;
    card.hidden = !visible;
    if (visible) count++;
  });
  filters.forEach(button => button.setAttribute("aria-pressed", String(button.dataset.filter === category)));
  const result = document.getElementById("result-count");
  if (result) result.textContent = count + (count === 1 ? " modelo" : " modelos");
}
filters.forEach(button => button.addEventListener("click", () => filterProducts(button.dataset.filter)));
if (filters.length) filterProducts(new URLSearchParams(location.search).get("categoria") || "todos");

const form = document.getElementById("quote-form");
if (form) {
  const selected = new URLSearchParams(location.search).get("producto");
  if (selected) document.getElementById("message").value = "Me interesa el modelo " + selected + ".\nCantidad: \nTallas: ";
  form.addEventListener("submit", event => {
    event.preventDefault();
    const values = new FormData(form);
    const body = "Hola, More Z Industrial:\n\nSolicito una cotización.\n\nNombre: " + values.get("name") +
      "\nEmpresa: " + values.get("company") + "\nCorreo: " + values.get("email") +
      "\nTeléfono: " + values.get("phone") + "\n\nPedido:\n" + values.get("message");
    location.href = whatsappUrl(body);
    document.getElementById("form-note").textContent = "WhatsApp se abrirá con tu solicitud preparada. Revisa el mensaje y presiona enviar.";
  });
}
// Botón flotante de WhatsApp para contacto rápido.
const addWhatsAppButton = () => {
  const phone = '51993332950';
  const message = encodeURIComponent('Hola, quisiera información sobre los uniformes industriales de More Z Industrial.');

  if (document.querySelector('.whatsapp-float')) return;

  const button = document.createElement('a');
  button.className = 'whatsapp-float';
  button.href = `https://wa.me/${phone}?text=${message}`;
  button.target = '_blank';
  button.rel = 'noopener noreferrer';
  button.setAttribute('aria-label', 'Escribir por WhatsApp');
  button.innerHTML = '<span aria-hidden="true"><svg viewBox="0 0 32 32" role="img"><path d="M16 3.2a12.7 12.7 0 0 0-10.9 19L3.2 29l6.9-1.8A12.8 12.8 0 1 0 16 3.2Zm0 23.2a10.4 10.4 0 0 1-5.3-1.5l-.4-.2-4.1 1.1 1.1-4-.3-.4a10.4 10.4 0 1 1 9 5Zm5.7-7.8c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.3-.7.1a8.3 8.3 0 0 1-2.4-1.5 9.2 9.2 0 0 1-1.7-2.1c-.2-.3 0-.5.2-.7l.5-.6c.2-.2.2-.4.3-.6 0-.2 0-.4-.1-.6l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.2 1.4 3.4c.2.2 2.3 3.6 5.6 5 .8.3 1.4.5 1.9.6.8.3 1.6.2 2.2.1.7-.1 1.8-.8 2.1-1.5.3-.7.3-1.3.2-1.5-.1-.2-.3-.3-.6-.5Z"/></svg></span>';
  document.body.appendChild(button);
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', addWhatsAppButton, { once: true });
} else {
  addWhatsAppButton();
}
