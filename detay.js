// Küçük resme tıklayınca ana resmi değiştir
const thumbImages = document.querySelectorAll('.thumb');
const mainImage = document.getElementById('mainProductImage');

thumbImages.forEach(thumb => {
  thumb.addEventListener('click', () => {
    // Aktif classını kaldır
    thumbImages.forEach(t => t.classList.remove('active'));
    // Aktif classını ekle
    thumb.classList.add('active');
    // Ana resmi değiştir
    mainImage.src = thumb.src;
    mainImage.alt = thumb.alt;
  });
});