let keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];


function tambah(nama, harga){

    let produk = keranjang.find(item => item.nama === nama);


    if(produk){

        produk.jumlah++;

    }else{

        keranjang.push({
            nama:nama,
            harga:harga,
            jumlah:1
        });

    }


    simpan();

    alert(nama + " masuk keranjang!");

}



function kurang(index){

    if(keranjang[index].jumlah > 1){

        keranjang[index].jumlah--;

    }else{

        keranjang.splice(index,1);

    }


    simpan();

}




function hapus(index){

    keranjang.splice(index,1);

    simpan();

}



function simpan(){

    localStorage.setItem(
        "keranjang",
        JSON.stringify(keranjang)
    );


    tampilkan();

}




function tampilkan(){

    let list=document.getElementById("list");


    if(!list) return;


    list.innerHTML="";


    let total=0;


    keranjang.forEach((item,index)=>{


        let subtotal=item.harga * item.jumlah;


        total += subtotal;



        let li=document.createElement("li");


        li.innerHTML=`

        <b>${item.nama}</b><br>

        Jumlah:
        <button onclick="kurang(${index})">-</button>

        ${item.jumlah} pcs

        <button onclick="tambah('${item.nama}',${item.harga})">
        +
        </button>

        <br>

        Harga:
        Rp${subtotal.toLocaleString()}


        <button onclick="hapus(${index})">
        Hapus
        </button>

        <hr>

        `;


        list.appendChild(li);


    });



    document.getElementById("total").innerHTML =
    total.toLocaleString();



}





function checkout(){


    let pesan=
    "Halo, saya mau pesan:%0A%0A";


    let total=0;



    keranjang.forEach(item=>{


        let subtotal =
        item.harga * item.jumlah;


        total += subtotal;


        pesan +=
        item.nama+
        " ("+
        item.jumlah+
        " pcs)"+
        " = Rp"+
        subtotal.toLocaleString()+
        "%0A";


    });



    pesan +=
    "%0ATotal: Rp"+
    total.toLocaleString();



    window.open(

    "https://wa.me/6285135632632?text="+pesan,

    "_blank"

    );


}



tampilkan();
