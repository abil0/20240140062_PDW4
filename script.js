
function updateTimeLive() {
    const el = document.getElementById("tanggal");
    
    const d = new Date(); 
    
    const options = { 
        weekday: 'long', 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
    };

    el.innerHTML = "EST. " + d.toLocaleString('id-ID', options);
}

setInterval(updateTimeLive, 1000);

updateTimeLive();


function tampil() {
    alert("🌟 COFFEBILLS EXCLUSIVE 🌟\n\nSelamat! Anda diundang menjadi member premium. Dapatkan akses ke CEO Lounge setiap hari!");
}

function show() {
    alert("OFFICIAL FOUNDER\n\nNama: Nabil Rafif\nNIM: 20250140062\n\n'Success is brewed with hard work and a lot of caffeine.'");
}