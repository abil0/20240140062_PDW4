
function displayDate() {
    const el = document.getElementById("tanggal");
    const d = new Date(); // D kapital
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    el.innerHTML = "EST. " + d.toLocaleDateString('id-ID', options);
}
displayDate();


function tampil() {
    alert("🌟 COFFEBILLS EXCLUSIVE 🌟\n\nSelamat! Anda diundang menjadi member premium. Dapatkan akses ke CEO Lounge setiap hari!");
}


function show() {
    alert("OFFICIAL FOUNDER\n\nNama: Nabil Rafif\nNIM: 20240140062\n\n'Success is brewed with hard work and a lot of caffeine.'");
}