
function renderTime() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const hariIni = new Date();
    
   
    document.getElementById("tanggal").innerHTML = "🕒 " + hariIni.toLocaleDateString('id-ID', options);
}

renderTime();

function tampil() {
    alert("✨ PROMO KHUSUS DEVELOPER ✨\nTunjukkan kode ini: 'KopiAsix6'\nDiskon 30% untuk Caramel Macchiato hari ini!");
}

function show() {
    alert("👨‍🍳 BARISTA INFO\nNama: Nabil Rafif\nNIM: 20240140062\nSpesialisasi: manual brew.");
}