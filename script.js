let pesanan = {};

function tambah(id, nama, harga) {

    if (!pesanan[id]) {
        pesanan[id] = {
            nama: nama,
            jumlah: 0,
            harga: harga
        };
    }

    pesanan[id].jumlah++;

    update();
}

function kurang(id, nama, harga) {

    if (pesanan[id]) {

        pesanan[id].jumlah--;

        if (pesanan[id].jumlah <= 0) {
            delete pesanan[id];
        }

    }

    update();
}

function update() {

    let total = 0;

    const semuaProduk = ["pentol", "tiramisu", "coklat", "matcha"];

    semuaProduk.forEach(function(id) {

        let jumlah = 0;

        if (pesanan[id]) {
            jumlah = pesanan[id].jumlah;
            total += pesanan[id].jumlah * pesanan[id].harga;
        }

        document.getElementById(id).innerHTML = jumlah + " pcs";

    });

    document.getElementById("total").innerHTML =
        "Rp " + total.toLocaleString("id-ID");

}

function checkout() {

    const namaPembeli =
        document.getElementById("namaPembeli").value.trim();

    if (namaPembeli === "") {
        alert("Silakan isi nama pembeli.");
        return;
    }

    if (Object.keys(pesanan).length === 0) {
        alert("Keranjang masih kosong.");
        return;
    }

    let total = 0;

    let pesan =
`Halo, saya ingin memesan.

👤 Nama : ${namaPembeli}

Pesanan:
`;

    for (let id in pesanan) {

        let item = pesanan[id];

        let subtotal = item.jumlah * item.harga;

        total += subtotal;

        pesan += `• ${item.nama}
- ${item.jumlah} pcs
- Rp${subtotal.toLocaleString("id-ID")}

`;

    }

    pesan += `====================
Total : Rp${total.toLocaleString("id-ID")}

Terima kasih 😊`;

    window.open(
        "https://wa.me/6281367811790?text=" + encodeURIComponent(pesan),
        "_blank"
    );

}
