let keranjang =
JSON.parse(localStorage.getItem("keranjang")) || [];



function tambah(nama,harga){


keranjang.push({

nama:nama,

harga:harga

});


localStorage.setItem(
"keranjang",
JSON.stringify(keranjang)
);


alert("Produk masuk keranjang!");

}




function tampilkan(){


let list=document.getElementById("list");

let total=0;


if(!list) return;



list.innerHTML="";



keranjang.forEach((item,index)=>{


total += item.harga;


let li=document.createElement("li");


li.innerHTML=

item.nama+
" - Rp"+
item.harga.toLocaleString()+

` <button onclick="hapus(${index})">
Hapus
</button>`;


list.appendChild(li);



});



document.getElementById("total").innerHTML=
total.toLocaleString();



}




function hapus(index){


keranjang.splice(index,1);


localStorage.setItem(
"keranjang",
JSON.stringify(keranjang)
);


tampilkan();


}




function checkout(){


let pesan=
"Halo saya mau pesan:%0A";


let total=0;



keranjang.forEach(item=>{


pesan +=
"- "+item.nama+"%0A";


total+=item.harga;


});



pesan +=
"%0ATotal : Rp"+
total.toLocaleString();



window.open(

"https://wa.me/6285135632632?text="+pesan

);



}



tampilkan();
