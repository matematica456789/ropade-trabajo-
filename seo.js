(function () {
  const siteUrl = 'https://morezindustrial.com';
  const path = window.location.pathname.toLowerCase();
  const pages = {
    '/catalogo.html': {
      title: 'Catálogo de uniformes industriales | More Z Industrial EIRL',
      description: 'Compra uniformes industriales, casacas, chalecos, overoles y ropa de trabajo personalizada de More Z Industrial para empresas en Lima y todo el Perú.',
      image: `${siteUrl}/public/catalog/product-01.jpeg`
    },
    '/nosotros.html': {
      title: 'Nosotros | Confección textil industrial en Lima | More Z Industrial',
      description: 'Conoce a More Z Industrial EIRL, empresa peruana especializada en confección de uniformes industriales y ropa corporativa personalizada.',
      image: `${siteUrl}/public/confeccion-morez.jpg`
    },
    '/contacto.html': {
      title: 'Contacto y cotizaciones | More Z Industrial EIRL',
      description: 'Solicita una cotización de uniformes industriales y ropa de trabajo. Contáctanos por WhatsApp, teléfono o correo en Lima, Perú.',
      image: `${siteUrl}/public/hero-morez-v3.jpg`
    },
    '/': {
      title: 'More Z Industrial EIRL | Uniformes industriales y ropa de trabajo en Lima',
      description: 'More Z Industrial EIRL: confección textil industrial, uniformes de trabajo, ropa de seguridad y prendas corporativas personalizadas en Lima, Perú.',
      image: `${siteUrl}/public/hero-morez-v3.jpg`
    }
  };

  const page = pages[path] || pages['/'];
  const canonical = `${siteUrl}${path === '/' ? '/' : path}`;
  document.title = page.title;

  let favicon = document.head.querySelector('link[rel="icon"]');
  if (!favicon) {
    favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.type = 'image/png';
    document.head.appendChild(favicon);
  }
  favicon.href = `${siteUrl}/public/logo-morez.png`;

  const setMeta = (attribute, key, content) => {
    let tag = document.head.querySelector(`meta[${attribute}="${key}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute(attribute, key);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  };

  setMeta('name', 'description', page.description);
  setMeta('name', 'keywords', 'uniformes industriales Lima, ropa de trabajo Lima, confección de uniformes industriales, ropa de seguridad industrial, uniformes corporativos, casacas reflectivas, chalecos reflectivos, overoles industriales, ropa industrial personalizada, uniformes con logo, confección textil industrial Perú');
  setMeta('name', 'author', 'More Z Industrial EIRL');
  setMeta('name', 'robots', 'index, follow, max-image-preview:large');
  setMeta('property', 'og:title', page.title);
  setMeta('property', 'og:description', page.description);
  setMeta('property', 'og:type', 'website');
  setMeta('property', 'og:url', canonical);
  setMeta('property', 'og:image', page.image);
  setMeta('property', 'og:locale', 'es_PE');
  setMeta('name', 'twitter:card', 'summary_large_image');
  setMeta('name', 'twitter:title', page.title);
  setMeta('name', 'twitter:description', page.description);
  setMeta('name', 'twitter:image', page.image);

  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = canonical;

  if (!document.head.querySelector('#morez-structured-data')) {
    const script = document.createElement('script');
    script.id = 'morez-structured-data';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ClothingStore',
      name: 'More Z Industrial EIRL',
      url: siteUrl,
      logo: `${siteUrl}/public/logo-morez.png`,
      image: page.image,
      description: page.description,
      telephone: '+51993332950',
      email: 'morezindustrial@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '28 de Julio 2560',
        addressLocality: 'Lima',
        postalCode: '15018',
        addressCountry: 'PE'
      },
      areaServed: ['Lima', 'Perú'],
      priceRange: '$$',
      sameAs: ['https://wa.me/51993332950']
    });
    document.head.appendChild(script);
  }
})();
// Nombre oficial de la empresa en la pestaña y en los resultados de búsqueda.
document.title = 'More Z Industrial EIRL';
const titleMeta = document.querySelector('meta[property="og:title"]');
if (titleMeta) titleMeta.setAttribute('content', 'More Z Industrial EIRL');
