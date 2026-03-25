// Sayfa yüklendiğinde konsola bir selam gönderelim (F12 ile görebilirsin)
console.log("Jiyan'ın Portfolyo Sitesine Hoş Geldiniz!");

// Küçük bir etkileşim: Sayfa başlığına tıklandığında renk değişsin
const anaBaslik = document.querySelector('h1');

anaBaslik.addEventListener('click', () => {
    anaBaslik.style.color = '#e74c3c'; // Kırmızıya döner
    alert("Merhaba! Benimle iletişime geçmek için sayfanın altına göz atabilirsin.");
});
const form = document.getElementById('iletisim-formu');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Sayfanın yenilenmesini engeller
    alert('Mesajınız başarıyla (simüle edilerek) gönderildi, Jiyan!');
    form.reset(); // Formu temizler
});