let pesanan = {};



function tambah(nama, harga){

    if(pesanan[nama]){

        pesanan[nama].jumlah++;

    }else{

        pesanan[nama] = {

            harga:harga,

            jumlah:1

        };

    }


    update();

}





function kurang(nama, harga){


    if(pesanan[nama]){


        pesanan[nama].jumlah--;



        if(pesanan[nama].jumlah <= 0){

            delete pesanan[nama];

        }


    }


    update();


}





function update(){


    let total = 0;



    for(let nama in pesanan){


        let item = pesanan[nama];


        total += item.harga * item.jumlah;



        let jumlah = document.getElementById(nama);



        if(jumlah){


            jumlah.innerHTML =
            item.jumlah + " pcs";


        }


    }



    document.getElementById("total").innerHTML =
    total.toLocaleString();



}





function checkout(){



    if(Object.keys(pesanan).length === 0){


        alert("Keranjang masih kosong!");

        return;


    }




    let pesan =
    "Halo, saya mau pesan:%0A%0A";



    let total = 0;



    for(let nama in pesanan){



        let item = pesanan[nama];


        let subtotal =
        item.harga * item.jumlah;



        total += subtotal;



        pesan +=
        "- " + nama +
        " (" + item.jumlah +
        " pcs) = Rp" +
        subtotal.toLocaleString() +
        "%0A";


    }




    pesan +=
    "%0ATotal: Rp" +
    total.toLocaleString();




    window.open(

        "https://wa.me/6285888417300?text=" + pesan,

        "_blank"

    );


}
