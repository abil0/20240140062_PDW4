// 1. Menampilkan Tanggal Otomatis (Wajib D Kapital)
function initWeb() {
    const elTanggal = document.getElementById("tanggal");
    const sekarang = new Date();
    
    // Format tanggal yang rapi
    const options = { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' };
    elTanggal.innerHTML = "Today: " + sekarang.toLocaleDateString('en-US', options);
}

initWeb();

// 2. Alert Tampil (Syarat Modul)
function tampil() {
    alert("☕ GOLDEN VOUCHER ☕\n\nSelamat! Anda mendapatkan diskon 50% untuk pembelian kedua.\nBerlaku hanya untuk hari ini!");
}

// 3. Alert Show (Syarat Perkenalan Modul)
function show() {
    alert("MEET THE OWNER\n\nNabil Rafif\nNIM: 20240140062\n\n'Our coffee are the best in the world.'");
}