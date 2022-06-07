// ! JANGAN DIMODIFIKASI
/*
  Data Array Object Pegawai
  [
    {
      "id": 1,
      "namaDepan": "Edyth",
      "namaBelakang": "Roberts",
      "jenisKelamin": "M"
    },
    ...
  ]
*/
const arrayObjectPegawai = require("./data-customer.json");

function lakukanLooping(arrPegawai) {
  // ! JANGAN DIMODIFIKASI
  let dataYangAkanDilooping = arrPegawai;

  /*
    TODO 1: Buatlah sebuah variabel bernama "hasilLooping" 
      yang berisi gabungan nama depan dan belakang dari masing masing pegawai

      Contoh: ["Aisyah Nirmala", "Mansur Faisal", ...]
  */
  let hasilLooping = [];

  /*
    TODO 2: Buatlah sebuah variabel bernama "jumlahPria"
      yang berisi jumlah pria dari masing masing pegawai
  */
  let jumlahPria = 0;

  /*
    TODO 3: Buatlah sebuah variabel bernama "jumlahWanita"
      yang berisi jumlah wanita dari masing masing pegawai
  */
  let jumlahWanita = 0;

  for (let x=0;x<dataYangAkanDilooping.length;x++){
    hasilLooping.push(dataYangAkanDilooping[x].namaDepan +" " + dataYangAkanDilooping[x].namaBelakang);
    if(dataYangAkanDilooping[x].jenisKelamin=="M"){
      jumlahPria+=1;
    }else {
      jumlahWanita+=1;
    }
  }
  let komentar = ""
  if(jumlahWanita>jumlahPria){
    komentar="Jumlah Wanita lebih banyak dari Pria";
  }else if(jumlahWanita<jumlahPria){
    komentar="Jumlah Pria lebih banyak dari Wanita";
  }else {komentar="Jumlah Pria dan Wanita berimbang"};

    
  // ! JANGAN DIMODIFIKASI
  return {
    hasilLooping,
    jumlahPria,
    jumlahWanita,
    komentar,
  };
}

function main(data) {
  const hasil = lakukanLooping(data || arrayObjectPegawai);

  console.log(hasil.hasilLooping);
  console.log(hasil.jumlahPria);
  console.log(hasil.jumlahWanita);


  return hasil;
}

main(arrayObjectPegawai);

module.exports = main;
