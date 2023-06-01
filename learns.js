
//class
/*
Dalam paradigma Object-Oriented Programming (OOP), class merupakan sebuah 
blueprint yang dapat dikembangkan untuk membuat sebuah objek.
Blueprint ini merupakan sebuah template yang di dalamnya menjelaskan 
seperti apa perilaku dari objek itu (berupa properti ataupun method).
 */
class dataSiswa{
    constructor(name,nim,alamat){
        this.name=name;
        this.nim=nim;
        this.alamat=alamat;
    }
}

let data = new dataSiswa("yoga prakasa",171011450274,"Kota Tangerang");
console.log(data.name,data.nim,data.alamat);


/*
enkapsulasi dalam JavaScript adalah proses mengikat data dengan fungsi yang bertindak atas data. 
Enkapsulasi memungkinkan kita untuk mengontrol dan memvalidasi data. Dalam JavaScript, variabel menyerupai data.
Enkapsulasi berarti penyembunyian informasi yaitu gagasan bahwa entitas internal suatu objek tidak boleh langsung 
terbuka sebagai entitas publik. Ini akan membantu membatasi penggunaan variabel yang tidak sah. Sebaliknya, jika 
penelepon ingin mencapai hasil yang ditentukan, pemanggil harus menggunakan 
metode publik atau entitas publik di dalam objek untuk mengakses variabel privat objek.
 */
//encapsulation
class Mahasiswa{
    constructor(name,id,alamat){
        this.name = name;
        this.id = id;
        this.alamat = alamat;
    }

    getNamaMahasiswa(){
        return this.name;
    }
    getIdMahasiswa(){
        return this.id;
    }
    getAlamatMahasiswa(){
        return this.alamat;
    }
    
}

let ambilData = new Mahasiswa("Fahmi",10,"Kunciran jaya");
console.log(ambilData.getNamaMahasiswa());
console.log(ambilData.getIdMahasiswa());
console.log(ambilData.getAlamatMahasiswa());


//inheritace
/*Inheritance itu proses pewarisan. Ketika sesuatu mewarisi atribut atau fungsi dari sesuatu yang lain, itulah inheritance, dalam pemahaman saya. Sebagai contoh sederhana, seorang anak yang mewarisi rambut ikal dari orang tuanya, itu inheritance. Orang tua yang bisa berbicara karena seorang manusia, itu inheritance. */
 class Hewan{
    setNamaHewan(name){
        this.name = name;
        
    }
    setMakanan(makanan){
        this.makanan = makanan;
        console.log(this.name +" adalah hewan pemakan "+ this.makanan);
    }
 }

 class Mamalia extends Hewan{
    setTempatTinggal(tempat){
        this.tempat = tempat;
        console.log(this.name+" bertempat tinggal di " + this.tempat);
    }
 }

 let animals = new Mamalia();
 animals.setNamaHewan("Gajah");
 animals.setMakanan("Sayuran");
 animals.setTempatTinggal("Hutan")

 animals.setNamaHewan("ikan");
 animals.setMakanan("plangton");
 animals.setTempatTinggal("air")

//polymorphism
/*Polymorphism merupakan bagian dari Object Oriented Programming atau pemrograman berbasis obyek. Pada polymorhism ini ada object-object parent yang mempunyai method dan property yang diturunkan */

class Animal{
    constructor(name){
        this.name = name;
    }
    makanan(){
        console.log(this.name+" sedang memakan buah");
    }
}

class mamalia extends  Animal{
    makanan(){
        super.makanan();
        console.log(this.name+" sedang memakan rumput");
    }

}


let hewan = new mamalia("sapi");
hewan.makanan();

//abstraction
// lebih ke arah public dan private 
class phone{
    #menu="";
    #baterai ="";
    constructor(menu,baterai){
        this.menu = menu;
        this.baterai = baterai;
    }
    getMenu(){
        return this.menu;
    }
    getBaterai(){
        return this.baterai;
    }
}
let handphone = new phone("landcape",100);
console.log(handphone.getMenu());
console.log(handphone.getBaterai());
