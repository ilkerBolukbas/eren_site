// Ürün verisi örneği
const products = [
  {
    id: 1,
    title: 'Ahşap Masa',
    category: 'masa',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    url: 'urun1.html'
  },
  {
    id: 2,
    title: 'Koltuk Takımı',
    category: 'koltuk',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    url: 'urun2.html'
  },
  {
    id: 3,
    title: 'TV Ünitesi',
    category: 'tv-unitesi',
    image: 'https://images.unsplash.com/photo-1503389152951-9c3d327c6ea5?auto=format&fit=crop&w=400&q=80',
    url: 'urun3.html'
  },
  {
    id: 4,
    title: 'Kitaplık',
    category: 'kitaplik',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    url: 'urun4.html'
  },
  {
    id: 5,
    title: 'Büyük Ahşap Masa',
    category: 'masa',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
    url: 'urun5.html'
  },
  {
    id: 6,
    title: 'Modern Koltuk',
    category: 'koltuk',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    url: 'urun6.html'
  },
  {
    id: 7,
    title: 'Modern Koltuk',
    category: 'masa',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    url: 'urun7.html'
  },
  // Dilediğin kadar ürün ekleyebilirsin
];

// Ürünleri listele
function renderProducts(filterCategory = 'all') {
  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = '';
  let filtered = products;
  if (filterCategory !== 'all') {
    filtered = products.filter(p => p.category === filterCategory);
  }
  if(filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; color:#b47b3b; font-size:1.2rem;">Bu kategoride ürün bulunamadı.</div>`;
    return;
  }
  filtered.forEach(product => {
    const card = document.createElement('a');
    card.className = 'gallery-card';
    card.href = product.url;
    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <div class="gallery-card-title">${product.title}</div>
    `;
    grid.appendChild(card);
  });
}

// Kategori filtresi dinleyicisi
document.addEventListener('DOMContentLoaded', () => {
  const categorySelect = document.getElementById('categorySelect');
  renderProducts('all');
  categorySelect.addEventListener('change', (e) => {
    renderProducts(e.target.value);
  });
});