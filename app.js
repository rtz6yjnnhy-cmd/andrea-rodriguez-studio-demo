/* Andrea Rodriguez Studio — Gate 2 prototype behaviour (UX_SPEC.md, PROPOSED).
   All products, names and prices below are SAMPLE data (UX_SPEC §5). */
(() => {
  'use strict';

  const WA_URL = 'https://wa.me/message/KO7KRN5WCKZZN1';
  const CART_KEY = 'ars-cart-v1';
  const LANG_KEY = 'ars-lang';
  const MAX_QTY = 10;
  const SIZES = ['XS', 'S', 'M', 'L', 'XL'];
  const mq = (q) => window.matchMedia(q).matches;
  const reduced = () => mq('(prefers-reduced-motion: reduce)');
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  /* ---------------- Strings (ES lines are suggested translations, UX_SPEC Q2) ---------------- */
  const STRINGS = {
    en: {
      'meta.title': 'Andrea Rodriguez Studio — Discipline with Purpose (demo prototype)',
      'meta.desc': 'Sales demo prototype for Andrea Rodriguez Studio. All products, prices and images are samples.',
      skip: 'Skip to content',
      announce: 'Discipline with purpose.',
      menu: 'Menu', close: 'Close',
      'logo.home': 'Andrea Rodriguez Studio, back to top',
      'nav.label': 'Main', 'nav.shop': 'Shop', 'nav.about': 'About', 'nav.shipping': 'Shipping', 'nav.contact': 'Contact',
      'lang.group': 'Language', 'lang.sr': 'Language: English',
      'hero.l1': 'Discipline', 'hero.l2': 'with purpose.',
      'hero.sub': 'A lifestyle brand for women building their lives with intention.',
      'cta.shop': 'Shop the collection', 'cta.wa': 'Questions? Chat on WhatsApp',
      newtab: '(opens in a new tab)',
      'ph.heroVideo': 'Stock footage — not Andrea Rodriguez Studio products',
      'tag.sample': 'Sample', 'tag.stock': 'Stock photo',
      'alt.product': 'Sample product photo', 'alt.about': 'Sample lifestyle photo (stock photography)',
      'alt.ig': 'Sample lifestyle photo (stock photography)',
      'intro.label': 'Andrea Rodriguez Studio',
      'intro.l1': 'More than activewear.', 'intro.l2': 'A way of living.',
      'intro.l1v': 'Movement. Elegance.', 'intro.l2v': 'Purpose.',
      'intro.words': 'Movement • Elegance • Purpose',
      'about.label': 'About', 'about.title': 'A lifestyle brand for women building their lives with intention.',
      'cta.ig': 'Follow on Instagram',
      'ship.title': 'Shipping & orders', 'ship.us': 'United States', 'ship.usText': 'We ship to the United States.',
      'ship.co': 'Colombia', 'ship.coText': 'We ship to Colombia.', 'ship.ret': 'Returns',
      'ship.retText': 'Return terms to be confirmed.', 'ship.q': 'Questions?', 'ship.wa': 'Chat on WhatsApp',
      'closing.title': 'Your best version starts with a decision',
      'ig.title': 'Join the movement', 'ig.cta': 'Shop our Instagram',
      'ig.note': 'Photos shown are stock photography, not posts from @andrearodriguezstudio.',
      'foot.title': 'Contact', 'foot.nav': 'Footer',
      'foot.more': 'Checkout is a demo: no order is placed and no payment is processed. The logo shown is a typeset placeholder. Hero video: Gustavo Fring, Pexels.',
      'cat.title': 'Shop by category', 'cat.shopnow': 'Shop now', 'cat.aria': 'Shop {cat}',
      'shop.title': 'Your next favorite set', 'shop.count': '{n} sample products', 'shop.count1': '1 sample product',
      'shop.demo': 'Demo — products, prices and photos are samples; photos are stock photography.',
      'filter.group': 'Filter by category', 'filter.all': 'All', 'filter.sets': 'Sets', 'filter.tops': 'Tops',
      'filter.leggings': 'Leggings', 'filter.new-in': 'New in',
      'filter.empty': 'No sample products in this category.',
      'sr.filter': 'Showing {n} sample products: {cat}',
      'card.size': 'Size',
      'card.sizeOf': 'Size, {name}', 'card.err': 'Select a size', 'card.errPrefix': 'Error:',
      'card.add': 'Add to cart', 'card.addOf': 'Add to cart, {name}', 'card.added': 'Added',
      'cart.title': 'Your cart', 'cart.items': '{n} items', 'cart.item1': '1 item',
      'cart.btn': 'Cart, {n} items', 'cart.btn1': 'Cart, 1 item', 'cart.btnEmpty': 'Cart, empty',
      'cart.meta': 'Size {s} · Sample product', 'cart.dec': 'Decrease quantity, {name}, size {s}',
      'cart.inc': 'Increase quantity, {name}, size {s}', 'cart.qty': 'Quantity', 'cart.remove': 'Remove',
      'cart.removeOf': 'Remove, {name}, size {s}',
      'cart.subtotal': 'Subtotal', 'cart.shipLabel': 'Shipping', 'cart.shipping': 'Calculated at checkout', 'cart.checkout': 'Checkout',
      'cart.continue': 'Continue shopping', 'cart.help': 'Need help?', 'cart.empty': 'Your cart is empty',
      'sr.added': '{name}, size {s}, added. Cart: {count}.', 'sr.qty': 'Quantity {q}',
      'sr.removed': '{name}, size {s} removed. Cart: {count}.',
      'toast.added': 'Added to cart', 'toast.view': 'View cart',
      'co.strip': 'Demo checkout — no payment is processed',
      'co.title': 'Checkout (demo)', 'co.text': 'This checkout is a demo: no order is placed and no payment is processed.',
      'co.back': 'Back to cart'
    },
    es: {
      'meta.title': 'Andrea Rodriguez Studio — Disciplina con propósito (prototipo de demostración)',
      'meta.desc': 'Prototipo de demostración de ventas para Andrea Rodriguez Studio. Todos los productos, precios e imágenes son muestras.',
      skip: 'Saltar al contenido',
      announce: 'Disciplina con propósito.',
      menu: 'Menú', close: 'Cerrar',
      'logo.home': 'Andrea Rodriguez Studio, volver arriba',
      'nav.label': 'Principal', 'nav.shop': 'Tienda', 'nav.about': 'Sobre la marca', 'nav.shipping': 'Envíos', 'nav.contact': 'Contacto',
      'lang.group': 'Idioma', 'lang.sr': 'Idioma: Español',
      'hero.l1': 'Disciplina', 'hero.l2': 'con propósito.',
      'hero.sub': 'Una marca de estilo de vida para mujeres que construyen su vida con intención.',
      'cta.shop': 'Comprar la colección', 'cta.wa': '¿Preguntas? Escríbenos por WhatsApp',
      newtab: '(se abre en una pestaña nueva)',
      'ph.heroVideo': 'Video de archivo — no son productos de Andrea Rodriguez Studio',
      'tag.sample': 'Muestra', 'tag.stock': 'Foto de archivo',
      'alt.product': 'Foto de producto de muestra', 'alt.about': 'Foto de estilo de vida de muestra (foto de archivo)',
      'alt.ig': 'Foto de estilo de vida de muestra (foto de archivo)',
      'intro.label': 'Andrea Rodriguez Studio',
      'intro.l1': 'Más que ropa deportiva.', 'intro.l2': 'Una forma de vida.',
      'intro.l1v': 'Movimiento. Elegancia.', 'intro.l2v': 'Propósito.',
      'intro.words': 'Movimiento • Elegancia • Propósito',
      'about.label': 'Sobre la marca', 'about.title': 'Una marca de estilo de vida para mujeres que construyen su vida con intención.',
      'cta.ig': 'Síguenos en Instagram',
      'ship.title': 'Envíos y pedidos', 'ship.us': 'Estados Unidos', 'ship.usText': 'Enviamos a Estados Unidos.',
      'ship.co': 'Colombia', 'ship.coText': 'Enviamos a Colombia.', 'ship.ret': 'Devoluciones',
      'ship.retText': 'Condiciones de devolución por confirmar.', 'ship.q': '¿Preguntas?', 'ship.wa': 'Escríbenos por WhatsApp',
      'closing.title': 'Tu mejor versión comienza con una decisión',
      'ig.title': 'Únete al movimiento', 'ig.cta': 'Compra en nuestro Instagram',
      'ig.note': 'Las fotos son de archivo, no publicaciones de @andrearodriguezstudio.',
      'foot.title': 'Contacto', 'foot.nav': 'Pie de página',
      'foot.more': 'El pago es una demostración: no se realiza ningún pedido ni se procesa ningún pago. El logo es un marcador tipográfico provisional. Video de portada: Gustavo Fring, Pexels.',
      'cat.title': 'Comprar por categoría', 'cat.shopnow': 'Comprar', 'cat.aria': 'Comprar {cat}',
      'shop.title': 'Tu próximo conjunto favorito', 'shop.count': '{n} productos de muestra', 'shop.count1': '1 producto de muestra',
      'shop.demo': 'Demo: los productos, precios y fotos son muestras; las fotos son de archivo.',
      'filter.group': 'Filtrar por categoría', 'filter.all': 'Todo', 'filter.sets': 'Conjuntos', 'filter.tops': 'Tops',
      'filter.leggings': 'Leggings', 'filter.new-in': 'Novedades',
      'filter.empty': 'No hay productos de muestra en esta categoría.',
      'sr.filter': 'Mostrando {n} productos de muestra: {cat}',
      'card.size': 'Talla',
      'card.sizeOf': 'Talla, {name}', 'card.err': 'Elige una talla', 'card.errPrefix': 'Error:',
      'card.add': 'Agregar al carrito', 'card.addOf': 'Agregar al carrito, {name}', 'card.added': 'Agregado',
      'cart.title': 'Tu carrito', 'cart.items': '{n} artículos', 'cart.item1': '1 artículo',
      'cart.btn': 'Carrito, {n} artículos', 'cart.btn1': 'Carrito, 1 artículo', 'cart.btnEmpty': 'Carrito vacío',
      'cart.meta': 'Talla {s} · Producto de muestra', 'cart.dec': 'Reducir cantidad, {name}, talla {s}',
      'cart.inc': 'Aumentar cantidad, {name}, talla {s}', 'cart.qty': 'Cantidad', 'cart.remove': 'Quitar',
      'cart.removeOf': 'Quitar, {name}, talla {s}',
      'cart.subtotal': 'Subtotal', 'cart.shipLabel': 'Envío', 'cart.shipping': 'Se calcula al finalizar', 'cart.checkout': 'Finalizar compra',
      'cart.continue': 'Seguir comprando', 'cart.help': '¿Necesitas ayuda?', 'cart.empty': 'Tu carrito está vacío',
      'sr.added': '{name}, talla {s}, agregado. Carrito: {count}.', 'sr.qty': 'Cantidad {q}',
      'sr.removed': '{name}, talla {s} eliminado. Carrito: {count}.',
      'toast.added': 'Agregado al carrito', 'toast.view': 'Ver carrito',
      'co.strip': 'Pago de demostración — no se procesa ningún pago',
      'co.title': 'Finalizar compra (demo)', 'co.text': 'Este pago es una demostración: no se realiza ningún pedido ni se procesa ningún pago.',
      'co.back': 'Volver al carrito'
    }
  };

  /* ---------------- Data (SAMPLE, UX_SPEC §5) ---------------- */
  const CATEGORIES = [
    { id: 'all' }, { id: 'sets', kind: 'type' }, { id: 'tops', kind: 'type' },
    { id: 'leggings', kind: 'type' }, { id: 'new-in', kind: 'tag' }
  ];
  const NAME = {
    sets: (n) => ({ en: `Sample Set ${n}`, es: `Conjunto de muestra ${n}` }),
    tops: (n) => ({ en: `Sample Top ${n}`, es: `Top de muestra ${n}` }),
    leggings: (n) => ({ en: `Sample Leggings ${n}`, es: `Leggings de muestra ${n}` })
  };
  const P = (category, n, silhouette, priceCents, isNew) => {
    const nn = String(n).padStart(2, '0');
    const prefix = { sets: 'set', tops: 'top', leggings: 'leg' }[category];
    return {
      id: `${prefix}-${nn}`, name: NAME[category](nn), category, tags: isNew ? ['new-in'] : [],
      priceCents, currency: 'USD', sizes: SIZES.slice(), silhouette, isPlaceholder: true,
      img: `media/products/${prefix}-${nn}.jpg`
    };
  };
  const PRODUCTS = [
    P('sets', 1, 'set-shorts', 8800), P('sets', 2, 'set-shorts', 9200), P('sets', 3, 'set-shorts', 9600),
    P('sets', 4, 'set-shorts', 8800), P('sets', 5, 'set-shorts', 9800), P('sets', 6, 'set-bike-shorts', 10400),
    P('sets', 7, 'set-bike-shorts', 9200, true), P('sets', 8, 'set-bike-shorts', 11000, true),
    P('tops', 1, 'bralette', 4200), P('tops', 2, 'bralette', 4600), P('tops', 3, 'bralette', 4800),
    P('tops', 4, 'bralette', 5200), P('tops', 5, 'tee', 3800), P('tops', 6, 'tee', 4000, true),
    P('tops', 7, 'pullover', 7800, true),
    P('leggings', 1, 'leggings', 6400), P('leggings', 2, 'leggings', 6800), P('leggings', 3, 'leggings', 7200),
    P('leggings', 4, 'leggings', 6600), P('leggings', 5, 'leggings', 7000), P('leggings', 6, 'leggings', 7400, true),
    P('leggings', 7, 'leggings', 6800, true)
  ];
  const BY_ID = new Map(PRODUCTS.map((p) => [p.id, p]));
  const TILES = [
    { id: 'sets', sil: 'set-shorts', img: 'media/tiles/tile-sets.jpg' },
    { id: 'tops', sil: 'bralette', img: 'media/tiles/tile-tops.jpg' },
    { id: 'leggings', sil: 'leggings', img: 'media/tiles/tile-leggings.jpg' },
    { id: 'new-in', sil: 'pullover', img: 'media/tiles/tile-new-in.jpg' }
  ];

  /* ---------------- Image slots (D-007) ----------------
     Paths are fixed; the files are added later by the media manager. A missing file falls back to the drawn
     placeholder (see __arsSlot in index.html). Intro heading: true = reference copy allowed by D-005
     ("More than activewear. / A way of living.", client to confirm); false = verified bio words. */
  const INTRO_REFERENCE_COPY = true;
  const IG_IMAGES = [1, 2, 3, 4, 5].map((n) => `media/instagram/ig-${n}.jpg`);
  /* Focal point per image (CSS object-position), keyed by path. Default is the centre. Tune after the
     photos arrive, e.g. 'media/products/set-01.jpg': '50% 30%'. A data-focal attribute on a static <img>
     in index.html overrides this map. */
  const FOCAL = {
    // 'media/about/about.jpg': '40% 50%',
  };
  const focalOf = (src) => FOCAL[src] || '50% 50%';
  /* One <img> for a slot. If the same src already loaded (or failed) earlier in this session, the slot
     class is set up front, so re-renders (filter, language) never flash the placeholder. */
  const slotState = (src) => (window.__arsImg.ok.has(src) ? ' is-loaded' : window.__arsImg.bad.has(src) ? ' is-fallback' : '');
  const slotImg = (src, alt, w, h) => (window.__arsImg.bad.has(src) ? '' :
    `<img class="slot-img" src="${src}" alt="${esc(alt)}" width="${w}" height="${h}" loading="lazy" decoding="async"` +
    ` style="object-position:${focalOf(src)}" onload="__arsSlot(this,1)" onerror="__arsSlot(this,0)">`);

  /* ---------------- Placeholder drawings (ART_DIRECTION §10; flat, tone-on-tone) ---------------- */
  const HANGER =
    '<path class="sil-hook" d="M200 68V54c0-9 13-11 13-22 0-8-6-13-13-13s-12 5-12 11"/>' +
    '<path class="sil-h" d="M200 64C232 74 282 88 314 96q7 2 4 10l-2 4H84l-2-4q-3-8 4-10C118 88 168 74 200 64Z"/>';
  const mark = (x, y, s = 11) => `<text class="sil-mark" x="${x}" y="${y}" font-size="${s}">A|R</text>`;
  const SIL = {
    bralette:
      '<path class="sil-g" d="M146 108H160L178 210Q200 230 222 210L240 108H254L288 226L286 296H114L112 226Z"/>' +
      '<rect class="sil-g" x="114" y="302" width="172" height="34"/>' + mark(126, 324),
    'set-shorts':
      '<path class="sil-g" d="M156 108H168L182 176Q200 192 218 176L232 108H244L270 186L268 222H132L130 186Z"/>' +
      '<rect class="sil-g" x="132" y="226" width="136" height="16"/>' +
      '<rect class="sil-g" x="134" y="262" width="132" height="18"/>' +
      '<path class="sil-g" d="M134 274H266L282 366L216 372L200 324L184 372L118 366Z" transform="translate(0 10)"/>' + mark(130, 368, 10),
    'set-bike-shorts':
      '<path class="sil-g" d="M156 108H168L182 176Q200 192 218 176L232 108H244L270 186L268 222H132L130 186Z"/>' +
      '<rect class="sil-g" x="132" y="226" width="136" height="16"/>' +
      '<rect class="sil-g" x="136" y="262" width="128" height="18"/>' +
      '<path class="sil-g" d="M136 284H264L268 398L214 400L200 326L186 400L132 398Z"/>' + mark(140, 388, 10),
    tee:
      '<path class="sil-g" d="M124 112L170 102Q200 126 230 102L276 112L326 168L294 194L272 170L274 372H126L128 170L106 194L74 168Z"/>' +
      mark(144, 162, 10),
    pullover:
      '<path class="sil-shade" d="M160 108Q158 70 200 66Q242 70 240 108Z"/>' +
      '<path class="sil-g" d="M118 112L168 102Q200 128 232 102L282 112L322 232L334 350L300 356L286 250L286 352H114L114 250L100 356L66 350L78 232Z"/>' +
      '<rect class="sil-g" x="114" y="358" width="172" height="16"/>' +
      '<path class="sil-shade" d="M150 286H250L262 336H138Z"/>' + mark(144, 162, 10),
    leggings:
      '<rect class="sil-g" x="138" y="114" width="124" height="22"/>' +
      '<path class="sil-g" d="M138 140H262L256 384H214L200 196L186 384H144Z"/>' + mark(146, 172, 13)
  };
  /* Fit boxes in the 400 x 500 drawing space (measured with getBBox; hook top includes its 2.5 stroke).
     Garment only (hanger excluded): y0, y1. All drawings are symmetric about x = 200. */
  const HANGER_TOP = 16.5;
  const GARMENT_Y = {
    bralette: [108, 336], 'set-shorts': [108, 382], 'set-bike-shorts': [108, 400],
    tee: [102, 372], pullover: [66, 374], leggings: [114, 384]
  };
  // Scale s about x = 200 and move the box top (in drawing units) to `top`.
  const fit = (s, y0, top) => ({ s: +s.toFixed(5), tx: +(200 - 200 * s).toFixed(2), ty: +(top - s * y0).toFixed(2) });
  /* Product cards (fallback drawing only; a loaded photo covers it): the whole hanger, hook included, must
     sit >= 8px below the "Sample" tag. The tag is 6px in and at most ~21.4px tall, so the hook may start
     36px from the top edge. The garment keeps 6% (30 units) clear of the bottom edge. In drawing units that
     depends on the card width, so there is one fit per width tier, computed at the tier's narrowest card:
     < 768: 150px (360px phone), 768-1023: 223px, 1024-1279: 216.75px, 1280-1439: 277.75px, >= 1440: 317.75px.
     Within the band: garment as large as possible, capped at the original 62% (310 units); then placed
     with its centre at 42% (8% above centre) if that still fits, else as high as the band allows. */
  const TAG_CLEAR_PX = 36;
  const CARD_TIERS = [['--fit-s', 150], ['--fit-m', 223], ['--fit-d', 216.75], ['--fit-w', 277.75], ['--fit-x', 317.75]];
  const cardFit = (sil, cardW) => {
    const [y0, y1] = GARMENT_Y[sil];
    const top = TAG_CLEAR_PX * 400 / cardW, bottom = 470;
    const s = Math.min(310 / (y1 - y0), (bottom - top) / (y1 - HANGER_TOP));
    const want = 210 - s * (y1 - y0) / 2 - s * (y0 - HANGER_TOP); // hook top for a 42% garment centre
    const hook = Math.min(Math.max(want, top), bottom - s * (y1 - HANGER_TOP));
    return fit(s, HANGER_TOP, hook);
  };
  // Category tiles: whole drawing (hanger + garment) 48% of tile height, top at 10%, bottom at 58%.
  const tileFit = (sil) => { const y1 = GARMENT_Y[sil][1]; return fit(240 / (y1 - HANGER_TOP), HANGER_TOP, 50); };
  const garmentSVG = (sil, cls) => {
    const vars = CARD_TIERS.map(([v, w]) => { const d = cardFit(sil, w); return `${v}: translate(${d.tx}px, ${d.ty}px) scale(${d.s})`; }).join('; ');
    return `<svg class="${cls}" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">` +
      `<g class="fit" transform="translate(16 44) scale(0.92)" style="${vars}">` +
      `${HANGER}<g class="garment">${SIL[sil]}</g></g></svg>`;
  };
  const tileSVG = (sil) => {
    const f = tileFit(sil);
    return '<svg class="tile-art ground-tile" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">' +
      `<g class="fit" transform="translate(${f.tx} ${f.ty}) scale(${f.s})">${HANGER}<g class="garment">${SIL[sil]}</g></g></svg>`;
  };

  /* ---------------- State ---------------- */
  let lang = 'en';
  let filter = 'all';
  let cart = [];
  const sizeSel = {};          // id -> size
  const sizeErr = new Set();   // ids showing the size error
  const addLock = {};          // id -> timestamp
  const addedTimers = {};

  /* ---------------- Helpers ---------------- */
  const t = (key, vars) => {
    let s = (STRINGS[lang] && STRINGS[lang][key]) ?? STRINGS.en[key] ?? key;
    if (vars) s = s.replace(/\{(\w+)\}/g, (m, k) => (vars[k] != null ? vars[k] : m));
    return s;
  };
  const money = (cents) => '$' + (cents / 100).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const pname = (p) => p.name[lang] || p.name.en;
  const catLabel = (id) => t('filter.' + id);
  const totalQty = () => cart.reduce((n, l) => n + l.qty, 0);
  const itemsText = (n) => (n === 1 ? t('cart.item1') : t('cart.items', { n }));
  const srStatus = $('#sr-status');
  let srTimer;
  const announce = (msg) => {
    srStatus.textContent = '';
    clearTimeout(srTimer);
    srTimer = setTimeout(() => { srStatus.textContent = msg; }, 60);
  };
  const matches = (p, f) => f === 'all' || p.category === f || p.tags.includes(f);
  const visibleProducts = () => PRODUCTS.filter((p) => matches(p, filter));

  /* ---------------- Storage ---------------- */
  const store = {
    get(k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { window.localStorage.setItem(k, v); } catch (e) { /* memory only */ } }
  };
  function loadCart() {
    let raw;
    try { raw = JSON.parse(store.get(CART_KEY) || '[]'); } catch (e) { raw = []; }
    if (!Array.isArray(raw)) raw = [];
    const out = [];
    raw.forEach((l) => {
      if (!l || !BY_ID.has(l.id) || !SIZES.includes(l.size)) return;
      let q = Number(l.qty);
      if (!Number.isInteger(q) || q < 1) return;
      q = Math.min(q, MAX_QTY);
      const ex = out.find((o) => o.id === l.id && o.size === l.size);
      if (ex) ex.qty = Math.min(MAX_QTY, ex.qty + q); else out.push({ id: l.id, size: l.size, qty: q });
    });
    cart = out;
  }
  const saveCart = () => store.set(CART_KEY, JSON.stringify(cart));

  /* ---------------- i18n ---------------- */
  function applyStatic() {
    document.documentElement.lang = lang;
    document.title = t('meta.title');
    const md = $('meta[name="description"]');
    if (md) md.setAttribute('content', t('meta.desc'));
    $$('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $$('[data-i18n-attr]').forEach((el) => {
      el.dataset.i18nAttr.split(';').forEach((pair) => {
        const [attr, key] = pair.split(':');
        el.setAttribute(attr, t(key));
      });
    });
    $$('a[data-ext]').forEach((a) => a.setAttribute('aria-label', `${a.textContent.trim()} ${t('newtab')}`));
    $$('.lang-btn').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    const mb = $('#menu-btn');
    mb.textContent = t(mb.getAttribute('aria-expanded') === 'true' ? 'close' : 'menu');
  }
  function setLang(next, opts = {}) {
    if (!STRINGS[next]) return;
    lang = next;
    store.set(LANG_KEY, lang);
    applyStatic();
    applyIntro();
    renderTiles();
    renderFilters();
    renderGrid();
    renderInstagram();
    renderCart();
    updateCount(false);
    if ($('#toast-text')) $('#toast-text').textContent = t('toast.added');
    if (opts.announce) announce(t('lang.sr'));
  }
  function initLang() {
    const saved = store.get(LANG_KEY);
    if (saved === 'en' || saved === 'es') return saved;
    return (navigator.language || '').toLowerCase().startsWith('es') ? 'es' : 'en';
  }

  /* ---------------- Category tiles ---------------- */
  function renderTiles() {
    $('#tiles').innerHTML = TILES.map((tile, i) => `
      <li class="reveal" style="--d:${i * 80}ms">
        <a class="tile" href="#shop" data-filter="${tile.id}" aria-label="${esc(t('cat.aria', { cat: catLabel(tile.id) }))}">
          <span class="tile-media slot${slotState(tile.img)}">${tileSVG(tile.sil)}${slotImg(tile.img, '', 800, 1000)}</span>
          <span class="sample-tag">${esc(t('tag.sample'))}</span>
          <span class="tile-label" aria-hidden="true">
            <span class="tile-name">${esc(catLabel(tile.id))}</span>
            <span class="tile-cta">${esc(t('cat.shopnow'))}</span>
          </span>
        </a>
      </li>`).join('');
    observeReveals();
  }

  /* ---------------- Instagram row (5 decorative stock slots + one link tile) ---------------- */
  function renderInstagram() {
    const mono = '<svg class="slot-art" viewBox="0 0 64 44" aria-hidden="true" focusable="false">' +
      '<text class="mono-letter" x="30" y="38" text-anchor="end" font-size="46">A</text>' +
      '<rect x="31.2" y="2" width="1.6" height="40" class="mono-bar"/>' +
      '<text class="mono-letter" x="34.5" y="38" font-size="46">R</text></svg>';
    $('#ig-row').innerHTML = IG_IMAGES.map((src, i) => `
      <li class="ig-tile slot ${i % 2 === 0 ? 'ground-b' : 'ground-a'}${slotState(src)} reveal" style="--d:${i * 60}ms">
        ${mono}${slotImg(src, t('alt.ig'), 600, 600)}
      </li>`).join('') + `
      <li class="ig-tile ig-cta-tile reveal" style="--d:300ms">
        <a class="ig-cta" href="https://www.instagram.com/andrearodriguezstudio/" target="_blank" rel="noopener" data-ext>
          <span class="label">${esc(t('ig.cta'))}</span><span class="ig-arrow" aria-hidden="true">→</span>
        </a>
      </li>`;
    $$('a[data-ext]', $('#ig-row')).forEach((a) => a.setAttribute('aria-label', `${a.textContent.trim()} ${t('newtab')}`));
    observeReveals();
  }
  // Intro heading: reference copy (D-005) or the verified words; the words line is dropped when it would repeat the heading.
  function applyIntro() {
    const [l1, l2] = $$('#intro-title .line');
    l1.textContent = t(INTRO_REFERENCE_COPY ? 'intro.l1' : 'intro.l1v');
    l2.textContent = t(INTRO_REFERENCE_COPY ? 'intro.l2' : 'intro.l2v');
    $('#intro-words').hidden = !INTRO_REFERENCE_COPY;
  }
  // Static <img data-focal="x% y%"> in index.html: the attribute wins over the FOCAL map.
  function applyStaticFocal() {
    $$('img.slot-img[data-focal]').forEach((img) => {
      img.style.objectPosition = img.dataset.focal || focalOf(img.getAttribute('src'));
    });
  }

  /* ---------------- Filters ---------------- */
  function renderFilters() {
    $('#filter-row').innerHTML = CATEGORIES.map((c) =>
      `<button type="button" class="filter-chip" data-chip="${c.id}" aria-pressed="${c.id === filter}">${esc(catLabel(c.id))}</button>`
    ).join('');
  }
  function updateShopCount() {
    const n = visibleProducts().length;
    $('#shop-count').textContent = n === 1 ? t('shop.count1') : t('shop.count', { n });
  }
  function setFilter(next, { announceIt = true, animate = true } = {}) {
    const changed = next !== filter;
    filter = next;
    $$('.filter-chip').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.chip === filter)));
    const grid = $('#shop-grid');
    const done = () => {
      renderGrid({ instant: true });
      if (announceIt) announce(t('sr.filter', { n: visibleProducts().length, cat: catLabel(filter) }));
    };
    if (!changed) { if (announceIt) announce(t('sr.filter', { n: visibleProducts().length, cat: catLabel(filter) })); return; }
    if (!animate || reduced() || !grid.animate) { done(); return; }
    grid.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 150, easing: 'ease-out', fill: 'forwards' }).finished
      .then(() => {
        done();
        grid.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 200, easing: 'ease-out', fill: 'forwards' });
      });
  }

  /* ---------------- Grid ---------------- */
  function cardHTML(p, i, instant) {
    const name = esc(pname(p));
    const sel = sizeSel[p.id] || '';
    const err = sizeErr.has(p.id);
    const errId = `err-${p.id}`;
    const ground = i % 2 === 0 ? 'ground-a' : 'ground-b';
    const col = i % 4;
    const radios = p.sizes.map((s) => `
      <label class="size-chip"><input type="radio" name="size-${p.id}" value="${s}"${s === sel ? ' checked' : ''}><span>${s}</span></label>`).join('');
    const opts = `<option value="">${esc(t('card.size'))}</option>` +
      p.sizes.map((s) => `<option value="${s}"${s === sel ? ' selected' : ''}>${s}</option>`).join('');
    const inv = err ? ` aria-invalid="true" aria-describedby="${errId}"` : '';
    return `
      <li class="card${instant ? '' : ' reveal'}" data-id="${p.id}" style="--d:${col * 70}ms">
        <div class="card-media slot ${ground}${slotState(p.img)}">
          ${garmentSVG(p.silhouette, 'card-art')}
          ${slotImg(p.img, t('alt.product'), 800, 1000)}
          <span class="sample-tag">${esc(t('tag.sample'))}</span>
        </div>
        <div class="card-body">
          <p class="card-cat label">${esc(catLabel(p.category))}</p>
          <h3 class="card-name">${name}</h3>
          <p class="card-price"><span class="price">${money(p.priceCents)} USD</span></p>
          <div class="size-block${err ? ' is-error' : ''}">
            <fieldset class="size-chips"${inv}>
              <legend class="sr-only">${esc(t('card.sizeOf', { name: pname(p) }))}</legend>
              <div class="size-row">${radios}</div>
            </fieldset>
            <div class="size-select-wrap">
              <label class="sr-only" for="sel-${p.id}">${esc(t('card.sizeOf', { name: pname(p) }))}</label>
              <select class="size-select" id="sel-${p.id}"${inv}>${opts}</select>
            </div>
            <p class="size-error" id="${errId}"${err ? '' : ' hidden'}><span class="sr-only">${esc(t('card.errPrefix'))} </span>${esc(t('card.err'))}</p>
          </div>
          <button type="button" class="btn btn-primary card-add" aria-label="${esc(t('card.addOf', { name: pname(p) }))}">${esc(t('card.add'))}</button>
        </div>
      </li>`;
  }
  function renderGrid({ instant = false } = {}) {
    const list = visibleProducts();
    $('#shop-grid').innerHTML = list.map((p, i) => cardHTML(p, i, instant)).join('');
    $('#grid-empty').hidden = list.length > 0;
    updateShopCount();
    if (!instant) observeReveals();
  }
  function setCardError(card, on) {
    const id = card.dataset.id;
    const block = $('.size-block', card);
    const errEl = $('.size-error', card);
    const ctrls = [$('.size-chips', card), $('.size-select', card)];
    if (on) {
      sizeErr.add(id);
      block.classList.add('is-error');
      errEl.hidden = false;
      ctrls.forEach((c) => { c.setAttribute('aria-invalid', 'true'); c.setAttribute('aria-describedby', errEl.id); });
    } else {
      sizeErr.delete(id);
      block.classList.remove('is-error');
      errEl.hidden = true;
      ctrls.forEach((c) => { c.removeAttribute('aria-invalid'); c.removeAttribute('aria-describedby'); });
    }
  }
  function onSizeChange(card, size) {
    const id = card.dataset.id;
    sizeSel[id] = size || undefined;
    if (!size) return;
    $$('input[type=radio]', card).forEach((r) => { r.checked = r.value === size; });
    $('.size-select', card).value = size;
    if (sizeErr.has(id)) setCardError(card, false);
  }
  function onAdd(card, btn) {
    const id = card.dataset.id;
    const p = BY_ID.get(id);
    const now = Date.now();
    if (addLock[id] && now - addLock[id] < 300) return;
    const size = sizeSel[id];
    if (!size) {
      setCardError(card, true);
      const chipsVisible = getComputedStyle($('.size-chips', card)).display !== 'none';
      const target = chipsVisible ? ($('input[type=radio]:checked', card) || $('input[type=radio]', card)) : $('.size-select', card);
      target.focus();
      return;
    }
    addLock[id] = now;
    const line = cart.find((l) => l.id === id && l.size === size);
    if (line) line.qty = Math.min(MAX_QTY, line.qty + 1); else cart.push({ id, size, qty: 1 });
    saveCart();
    renderCart();
    updateCount(true);
    // Button feedback for 1.2s
    btn.innerHTML = `${esc(t('card.added'))} <svg class="check" viewBox="0 0 12 12" aria-hidden="true" focusable="false"><path d="M2 6.5l2.6 2.5L10 3.2"/></svg>`;
    clearTimeout(addedTimers[id]);
    addedTimers[id] = setTimeout(() => { if (btn.isConnected) btn.textContent = t('card.add'); }, 1200);
    if (mq('(min-width: 1024px)')) {
      announce(t('sr.added', { name: pname(p), s: size, count: itemsText(totalQty()) }));
      openCart(btn);
    } else {
      showToast();
    }
  }

  /* ---------------- Count ---------------- */
  function updateCount(bump) {
    const n = totalQty();
    const el = $('.cart-count');
    el.textContent = String(n);
    $('#cart-btn').setAttribute('aria-label', n === 0 ? t('cart.btnEmpty') : n === 1 ? t('cart.btn1') : t('cart.btn', { n }));
    if (bump && !reduced() && el.animate) {
      el.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.15)' }, { transform: 'scale(1)' }], { duration: 300, easing: 'cubic-bezier(0.23, 1, 0.32, 1)' });
    }
  }

  /* ---------------- Cart rendering ---------------- */
  function renderCart() {
    const lines = $('#cart-lines');
    const empty = cart.length === 0;
    $('#cart-empty').hidden = !empty;
    $('#cart-foot').hidden = empty;
    lines.hidden = empty;
    $('#cart-head-count').textContent = itemsText(totalQty());
    lines.innerHTML = cart.map((l, i) => {
      const p = BY_ID.get(l.id);
      const n = pname(p);
      const v = { name: n, s: l.size };
      return `
        <li class="line" data-key="${l.id}|${l.size}" data-i="${i}">
          <div class="line-thumb slot ${i % 2 === 0 ? 'ground-a' : 'ground-b'}${slotState(p.img)}">${garmentSVG(p.silhouette, '')}${slotImg(p.img, '', 800, 1000)}</div>
          <div class="line-info">
            <p class="line-name">${esc(n)}</p>
            <p class="line-meta label">${esc(t('cart.meta', { s: l.size }))}</p>
            <div class="line-controls">
              <div class="stepper" role="group" aria-label="${esc(t('cart.qty'))}">
                <button type="button" data-act="dec" aria-label="${esc(t('cart.dec', v))}" aria-disabled="${l.qty <= 1}">−</button>
                <span class="qty">${l.qty}</span>
                <button type="button" data-act="inc" aria-label="${esc(t('cart.inc', v))}" aria-disabled="${l.qty >= MAX_QTY}">+</button>
              </div>
              <button type="button" class="text-cta line-remove" data-act="remove" aria-label="${esc(t('cart.removeOf', v))}">${esc(t('cart.remove'))}</button>
            </div>
          </div>
          <p class="line-total">${money(p.priceCents * l.qty)}</p>
        </li>`;
    }).join('');
    const sub = cart.reduce((s, l) => s + BY_ID.get(l.id).priceCents * l.qty, 0);
    $('#cart-subtotal').textContent = money(sub);
    $('#co-subtotal').textContent = money(sub);
  }

  /* ---------------- Layers: menu, cart, checkout ---------------- */
  const layers = [];   // stack of { el, opener }
  const BG = () => [$('#announcement'), $('#site-header'), $('#main'), $('#contact'), $('#wa-float'), $('.skip-link'), $('#toast')];
  function lockPage(on) {
    BG().forEach((el) => { if (el) el.inert = on; });
    const sbw = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.overflow = on ? 'hidden' : '';
    document.body.style.paddingRight = on && sbw > 0 ? sbw + 'px' : '';
  }
  function focusables(root) {
    return $$('a[href], button:not([disabled]), input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])', root)
      .filter((el) => !el.hidden && el.offsetParent !== null && !el.closest('[hidden]'));
  }
  function show(el) {
    el.hidden = false;
    void el.offsetWidth;
    el.classList.add('is-open');
  }
  function hide(el, ms) {
    el.classList.remove('is-open');
    const d = reduced() ? 160 : ms;
    clearTimeout(el._hideT);
    el._hideT = setTimeout(() => { if (!el.classList.contains('is-open')) el.hidden = true; }, d);
  }
  function pushLayer(el, opener) {
    layers.push({ el, opener });
    if (layers.length === 1) lockPage(true);
    updateWaFloat();
  }
  function popLayer(el) {
    const i = layers.findIndex((l) => l.el === el);
    const rec = i >= 0 ? layers.splice(i, 1)[0] : null;
    if (layers.length === 0) lockPage(false);
    updateWaFloat();
    return rec;
  }

  /* Floating WhatsApp (UX_SPEC §8): hidden while a layer is open, while the product grid or the footer
     meets the viewport (it must never cover Add to cart; the footer has its own button), while the hero is
     in view (the hero has its own WhatsApp link, and at desktop the button would sit on the stock-footage
     label; UX_SPEC limits this to < 768px, widened here), and below 1024px while the toast shows.
     Hidden = visibility hidden (out of the tab order). */
  const waState = { grid: false, footer: false, hero: false };
  function updateWaFloat() {
    const el = $('#wa-float');
    if (!el) return;
    const toastOn = $('#toast').classList.contains('is-open') && mq('(max-width: 1023px)');
    const hide = layers.length > 0 || waState.grid || waState.footer || waState.hero || toastOn;
    el.classList.toggle('is-hidden', hide);
  }
  function initWaFloat() {
    if (!('IntersectionObserver' in window)) return;
    const keys = new Map([[$('#shop-grid'), 'grid'], [$('#contact'), 'footer'], [$('#hero'), 'hero']]);
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((en) => { waState[keys.get(en.target)] = en.isIntersecting; });
      updateWaFloat();
    });
    keys.forEach((k, el) => obs.observe(el));
    window.matchMedia('(max-width: 1023px)').addEventListener('change', updateWaFloat);
  }
  function restoreFocus(opener, fallback) {
    const ok = opener && opener.isConnected && opener.offsetParent !== null && !opener.closest('[inert]');
    (ok ? opener : fallback).focus({ preventScroll: true });
  }

  // Mobile menu
  const menu = $('#mobile-menu');
  function openMenu() {
    const btn = $('#menu-btn');
    btn.setAttribute('aria-expanded', 'true');
    pushLayer(menu, btn);
    show(menu);
    const first = $('.mm-nav a', menu);
    requestAnimationFrame(() => first.focus());
  }
  function closeMenu({ returnFocus = true } = {}) {
    if (menu.hidden) return;
    const btn = $('#menu-btn');
    btn.setAttribute('aria-expanded', 'false');
    btn.textContent = t('menu');
    const rec = popLayer(menu);
    hide(menu, 250);
    if (returnFocus) restoreFocus(rec && rec.opener, btn);
  }

  // Cart
  const cartEl = $('#cart');
  const scrim = $('#scrim');
  function openCart(opener) {
    if (!cartEl.hidden && cartEl.classList.contains('is-open')) return;
    hideToast(true);
    renderCart();
    pushLayer(cartEl, opener || $('#cart-btn'));
    show(scrim);
    show(cartEl);
    cartEl.style.transform = '';
    requestAnimationFrame(() => $('#cart-title').focus({ preventScroll: true }));
  }
  function closeCart({ returnFocus = true } = {}) {
    if (cartEl.hidden) return;
    const rec = popLayer(cartEl);
    cartEl.style.transform = '';
    hide(cartEl, 400);
    hide(scrim, 400);
    if (returnFocus) restoreFocus(rec && rec.opener, $('#cart-btn'));
  }

  // Checkout placeholder
  const co = $('#checkout');
  function openCheckout() {
    closeCart({ returnFocus: false });
    pushLayer(co, $('#cart-btn'));
    show(co);
    requestAnimationFrame(() => $('#co-title').focus({ preventScroll: true }));
  }
  function closeCheckout() {
    popLayer(co);
    hide(co, 250);
    openCart($('#cart-btn'));
  }

  // Esc and focus trap
  document.addEventListener('keydown', (e) => {
    const top = layers[layers.length - 1];
    if (!top) return;
    if (e.key === 'Escape') {
      e.preventDefault();
      if (top.el === menu) closeMenu();
      else if (top.el === cartEl) closeCart();
      else if (top.el === co) closeCheckout();
      return;
    }
    if (e.key === 'Tab') {
      const f = focusables(top.el);
      if (!f.length) return;
      const first = f[0];
      const last = f[f.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && (active === first || !top.el.contains(active) || active === $('#cart-title') || active === $('#co-title'))) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && (active === last || !top.el.contains(active))) {
        e.preventDefault(); first.focus();
      }
    }
  });

  /* ---------------- Toast ---------------- */
  const toast = $('#toast');
  let toastTimer = null;
  let toastRemaining = 3000;
  let toastStart = 0;
  let toastPaused = false;
  function startToastTimer() {
    clearTimeout(toastTimer);
    toastStart = Date.now();
    toastTimer = setTimeout(() => hideToast(), toastRemaining);
  }
  function showToast() {
    $('#toast-text').textContent = t('toast.added');
    toastRemaining = 3000;
    show(toast);
    updateWaFloat();
    if (!toastPaused) startToastTimer();
  }
  function hideToast(instant) {
    clearTimeout(toastTimer);
    toastPaused = false;
    if (toast.hidden) return;
    if (instant) { toast.classList.remove('is-open'); toast.hidden = true; } else hide(toast, 200);
    updateWaFloat();
  }
  const pauseToast = () => {
    if (toast.hidden || toastPaused) return;
    toastPaused = true;
    clearTimeout(toastTimer);
    toastRemaining = Math.max(800, toastRemaining - (Date.now() - toastStart));
  };
  const resumeToast = () => {
    if (toast.hidden || !toastPaused) return;
    if (toast.matches(':hover') || toast.contains(document.activeElement)) return;
    toastPaused = false;
    startToastTimer();
  };
  toast.addEventListener('mouseenter', pauseToast);
  toast.addEventListener('focusin', pauseToast);
  toast.addEventListener('mouseleave', resumeToast);
  toast.addEventListener('focusout', () => setTimeout(resumeToast, 0));
  $('#toast-view').addEventListener('click', (e) => { hideToast(true); openCart($('#cart-btn')); });

  /* ---------------- Bottom sheet drag (below 768px) ---------------- */
  (function sheetDrag() {
    const grab = $('#cart-grab');
    let startY = 0; let startT = 0; let dy = 0; let dragging = false; let pid = null;
    grab.addEventListener('pointerdown', (e) => {
      if (!mq('(max-width: 767px)') || dragging || e.target.closest('button')) return;
      dragging = true; pid = e.pointerId; startY = e.clientY; startT = performance.now(); dy = 0;
      grab.setPointerCapture(pid);
      cartEl.classList.add('is-dragging');
    });
    grab.addEventListener('pointermove', (e) => {
      if (!dragging || e.pointerId !== pid) return;
      const raw = e.clientY - startY;
      dy = raw > 0 ? raw : raw * 0.15; // friction when dragging up
      cartEl.style.transform = `translateY(${dy}px)`;
    });
    const end = (e) => {
      if (!dragging || e.pointerId !== pid) return;
      dragging = false;
      cartEl.classList.remove('is-dragging');
      const v = dy / Math.max(1, performance.now() - startT);
      if (dy > cartEl.offsetHeight * 0.25 || v > 0.5) {
        cartEl.style.transform = '';
        closeCart();
      } else {
        cartEl.style.transform = '';
      }
    };
    grab.addEventListener('pointerup', end);
    grab.addEventListener('pointercancel', end);
  })();

  /* ---------------- Scrolling to sections ---------------- */
  function goTo(target, focusEl) {
    if (!target) return;
    target.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block: 'start' });
    if (focusEl) focusEl.focus({ preventScroll: true });
  }
  function goToShop() { goTo($('#shop'), $('#shop-title')); }
  const NAV_TARGETS = {
    shop: () => [$('#shop'), $('#shop-title')],
    about: () => [$('#about'), $('#about-title')],
    shipping: () => [$('#shipping'), $('#shipping-title')],
    contact: () => [$('#contact'), $('#contact-title')]
  };

  /* ---------------- Reveal on scroll ---------------- */
  let io = null;
  function observeReveals() {
    const els = $$('.reveal:not(.is-in)');
    if (!('IntersectionObserver' in window) || reduced()) { els.forEach((el) => el.classList.add('is-in')); return; }
    if (!io) {
      io = new IntersectionObserver((entries) => {
        entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
      }, { threshold: 0.15 });
    }
    els.forEach((el) => io.observe(el));
  }

  /* ---------------- Events ---------------- */
  function bind() {
    // Language
    document.addEventListener('click', (e) => {
      const lb = e.target.closest('.lang-btn');
      if (lb) { if (lb.dataset.lang !== lang) setLang(lb.dataset.lang, { announce: true }); return; }

      const nav = e.target.closest('a[data-nav]');
      if (nav) {
        e.preventDefault();
        const [sec, h] = NAV_TARGETS[nav.dataset.nav]();
        if (!menu.hidden) closeMenu({ returnFocus: false });
        requestAnimationFrame(() => goTo(sec, h));
        return;
      }
      const top = e.target.closest('a[data-scroll-top]');
      if (top) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: reduced() ? 'auto' : 'smooth' });
        $('#main').focus({ preventScroll: true });
        return;
      }
      const shopLink = e.target.closest('a[data-goto-shop]');
      if (shopLink) { e.preventDefault(); goToShop(); return; }

      const tile = e.target.closest('a.tile');
      if (tile) {
        e.preventDefault();
        setFilter(tile.dataset.filter, { announceIt: false, animate: false });
        goToShop();
        announce(t('sr.filter', { n: visibleProducts().length, cat: catLabel(filter) }));
        return;
      }
      const chip = e.target.closest('.filter-chip');
      if (chip) {
        setFilter(chip.dataset.chip);
        chip.scrollIntoView({ inline: 'nearest', block: 'nearest', behavior: reduced() ? 'auto' : 'smooth' });
        return;
      }
      if (e.target.closest('[data-filter-reset]')) { setFilter('all'); return; }

      const add = e.target.closest('.card-add');
      if (add) { onAdd(add.closest('.card'), add); return; }

      if (e.target.closest('#menu-btn')) { menu.hidden ? openMenu() : closeMenu(); return; }
      if (e.target.closest('.mm-close')) { closeMenu(); return; }
      if (e.target.closest('#cart-btn')) { openCart(e.target.closest('#cart-btn')); return; }
      if (e.target.closest('[data-cart-close]')) { closeCart(); return; }
      if (e.target === scrim) { closeCart(); return; }
      if (e.target.closest('[data-cart-shop]')) {
        e.preventDefault();
        closeCart({ returnFocus: false });
        goToShop();
        return;
      }
      if (e.target.closest('#checkout-btn')) { if (cart.length) openCheckout(); return; }
      if (e.target.closest('#co-back, #co-back-2')) { closeCheckout(); return; }

      const act = e.target.closest('.line [data-act]');
      if (act) { onLineAction(act); }
    });

    // Size changes
    $('#shop-grid').addEventListener('change', (e) => {
      const card = e.target.closest('.card');
      if (!card) return;
      if (e.target.matches('input[type=radio], select')) onSizeChange(card, e.target.value);
    });
    // Chip focus scrolls into view (mobile row)
    $('#filter-row').addEventListener('focusin', (e) => {
      const chip = e.target.closest('.filter-chip');
      if (chip && mq('(max-width: 767px)')) chip.scrollIntoView({ inline: 'nearest', block: 'nearest' });
    });

    // Sticky header
    const header = $('#site-header');
    const onScroll = () => header.classList.toggle('is-stuck', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Close the menu if the viewport becomes desktop
    window.matchMedia('(min-width: 1024px)').addEventListener('change', (ev) => { if (ev.matches) closeMenu({ returnFocus: false }); });
  }

  function onLineAction(btn) {
    const li = btn.closest('.line');
    const [id, size] = li.dataset.key.split('|');
    const idx = cart.findIndex((l) => l.id === id && l.size === size);
    if (idx < 0) return;
    const line = cart[idx];
    const p = BY_ID.get(id);
    const act = btn.dataset.act;
    if (act === 'inc' || act === 'dec') {
      if (btn.getAttribute('aria-disabled') === 'true') return;
      line.qty = Math.max(1, Math.min(MAX_QTY, line.qty + (act === 'inc' ? 1 : -1)));
      saveCart(); renderCart(); updateCount(true);
      const again = $(`.line[data-key="${id}|${size}"] [data-act="${act}"]`);
      if (again) again.focus();
      announce(t('sr.qty', { q: line.qty }));
    } else if (act === 'remove') {
      cart.splice(idx, 1);
      saveCart(); renderCart(); updateCount(true);
      announce(t('sr.removed', { name: pname(p), s: size, count: itemsText(totalQty()) }));
      const removes = $$('.line [data-act="remove"]');
      const next = removes[idx] || removes[idx - 1] || $('[data-cart-shop]');
      if (next) next.focus();
    }
  }

  /* ---------------- Hero video (D-006, stock placeholder) ----------------
     One file per viewport: the src is chosen here from matchMedia (no <source media>), so only that file
     is requested. Under prefers-reduced-motion no src is ever set: the poster <picture> stays. */
  function initHeroVideo() {
    const video = $('.hero-video');
    if (!video) return;
    const wide = window.matchMedia('(min-width: 768px)');
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pick = () => {
      if (!wide.matches) return { src: 'media/hero-mobile-800.mp4', poster: 'media/hero-mobile-poster.jpg' };
      const webm = video.canPlayType('video/webm; codecs="vp9"') !== '';
      return { src: webm ? 'media/hero-desktop-1920.webm' : 'media/hero-desktop-1920.mp4', poster: 'media/hero-desktop-poster.jpg' };
    };
    let inView = true;
    const tryPlay = () => {
      if (!video.getAttribute('src') || !inView || motion.matches) return;
      const p = video.play();
      if (p) p.catch(() => {});
    };
    const load = () => {
      if (motion.matches) {
        video.pause();
        video.removeAttribute('autoplay');
        video.classList.remove('is-playing');
        if (video.getAttribute('src')) { video.removeAttribute('src'); video.load(); }
        return;
      }
      const { src, poster } = pick();
      if (video.getAttribute('src') === src) { tryPlay(); return; }
      video.classList.remove('is-playing');
      video.muted = true; video.defaultMuted = true; video.playsInline = true; video.loop = true;
      video.poster = poster;
      video.src = src;
      tryPlay();
    };
    video.addEventListener('playing', () => video.classList.add('is-playing'));
    wide.addEventListener('change', load);
    motion.addEventListener('change', load);
    // Pause while the hero is off screen, resume when it returns.
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(([e]) => {
        inView = e.isIntersecting;
        if (inView) tryPlay(); else if (!video.paused) video.pause();
      }).observe(video);
    }
    load();
  }

  /* ---------------- Init ---------------- */
  lang = initLang();
  loadCart();
  saveCart();
  applyStatic();
  applyIntro();
  applyStaticFocal();
  renderTiles();
  renderFilters();
  renderGrid();
  renderInstagram();
  renderCart();
  updateCount(false);
  bind();
  initHeroVideo();
  initWaFloat();

  // Keep cart in sync across tabs
  window.addEventListener('storage', (e) => {
    if (e.key === CART_KEY) { loadCart(); renderCart(); updateCount(false); }
  });
  // exposed for QA scripts only
  window.__ars = { PRODUCTS, get cart() { return cart; }, get lang() { return lang; }, WA_URL };
})();
