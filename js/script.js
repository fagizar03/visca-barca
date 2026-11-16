
// Mengambil semua checkbox kegiatan
const kegiatan = document.querySelectorAll(".kegiatan");

// Mengambil bagian hasil checklist
const hasilAksi = document.getElementById("hasil-aksi");

// Memeriksa apakah elemen checklist tersedia
if (hasilAksi && kegiatan.length > 0) {

    // Membuat fungsi untuk menghitung kegiatan
    function hitungKegiatan() {

        let jumlahSelesai = 0;

        // Menghitung checkbox yang sudah dicentang
        kegiatan.forEach(function(item) {

            if (item.checked) {
                jumlahSelesai++;
            }

        });

        // Menampilkan hasil perhitungan
        hasilAksi.textContent =
            "Kegiatan selesai: " +
            jumlahSelesai +
            " dari " +
            kegiatan.length;
    }

    // Menjalankan perhitungan ketika checkbox berubah
    kegiatan.forEach(function(checkbox) {

        checkbox.addEventListener("change", hitungKegiatan);

    });

}
