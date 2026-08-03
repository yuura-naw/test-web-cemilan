let pesanan = {};

function tambah(nama, harga) {

    if (!pesanan[nama]) {
        pesanan[nama] = {
            jumlah: 0,
            harga: harga
        };
    }

    pesanan[nama].jumlah++;

    update();
}

function kurang(nama, harga) {

    if (pesanan[nama]) {

        pesanan[nama].jumlah--;

        if (pesanan[nama].jumlah <= 0) {
            delete pesanan[nama];
        }

    }

    update();
}

function update() {

    let total = 0;

    const semuaProduk = [
        "Cilok Pedas",
        "Keripik Pisang Tiramisu",
        "Keripik Pisang Coklat",
        "Keripik Pisang Matcha"
    ];

    semuaProduk.forEach(function(nama){

        let jumlah = 0;

        if(pesanan[nama]){
            jumlah = pesanan[nama].jumlah;
            total += pesanan[nama].jumlah * pesanan[nama].harga;
        }

        document.getElementById(nama).innerHTML =
        jumlah + " pcs";

    });

    document.getElementById("total").innerHTML =
    total.toLocaleString("id-ID");

}

function checkout(){

    const nama =
    document.getElementById("namaPembeli").value.trim();

    if(nama==""){

        alert("Silakan isi nama pembeli.");

        return;

    }

    if(Object.keys(pesanan).length===0){

        alert("Keranjang masih kosong.");

        return;

    }

    let total=0;

    let pesan =
`Halo, saya ingin memesan:

👤 Nama : ${nama}

Pesanan:
`;

    for(let item in pesanan){

        let subtotal =
        pesanan[item].jumlah *
        pesanan[item].harga;

        total += subtotal;

        pesan +=
`• ${item}
  ${pesanan[item].jumlah} pcs
  Rp${subtotal.toLocaleString("id-ID")}

`;

    }

    pesan +=
`====================
Total : Rp${total.toLocaleString("id-ID")}

Terima kasih 😊`;

    window.open(

        "https://wa.me/6281367811790?text=" +
        encodeURIComponent(pesan),

        "_blank"

    );

    }
