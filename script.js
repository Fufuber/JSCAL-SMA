// console.log("Merhaba Dünya");
// console.log('Hello World');

// document.write('Merhaba Dünya <br>');
// document.write("Merhaba Dünya");

// // Değişkenler 


// console.log(17000 + (17000*0.3)); // maaş yusuf
// console.log(20000 + (20000*0.3)); // maaş ali

// var maasYusuf = 17000;
// var maasAli = 20000;
// var zam = 0.3;

// console.log(maasYusuf + (maasYusuf*zam));
// console.log(maasAli + (maasAli*zam));

// // değişken kuralları

// // Türkçe karakter kullanılmamalı
// // Sayı ile başlamamalı
// // Arada boşluk olmamalı

// var a;

// a = 10 

// console.log(a);

// // Değişkeni sonrasında çağırılıp değişken değeri atanabilir 

// // const değişkeni başlangıç değeri almadan başlatılamaz 

// // const değişkeni sonradan değiştirilmez

// var urunAdi = "İphone15"; // çift tırnak içine yazılı değerler stringtir 
// let urunFiyat = 50000; // tırnaksız kullanımlar da değer number dır

// // var a = "10";
// // var b = "20";
// // var toplam = a+b;
// // console.log(toplam);

// // var a = 10;
// // var b = 20;
// // var toplam = a+b;
// // console.log(toplam);

// console.log(typeof urunAdi);
// console.log(typeof urunFiyat);


// var a = "10";
// var b = "20";
// var toplam = Number(a)+Number(b);
// console.log(toplam);

// var c = 10;
// var d = 20;
// var toplam = String(c)+String(d);
// console.log(toplam);

// // buradaki dönüşümler değişkenlerin tipini değiştirmez type of la bakıcak olursak yine numberdır c.toString() te stringe dönüştürür.

// let isim = "Yusuf";
// let soyAd = "Yıldız";
// console.log(isim+" "+soyAd);


// let sinavNotu = 80;
// let basarilimi = (sinavNotu>=50);
// console.log(basarilimi);
// console.log(typeof basarilimi); // boolean değer döndürür

/* 

Örnek çalışma

1 İki öğrencinin bilgilerini değişkenler içersine sakla

öğrenci a : Fatma Yıldız
doğum tarihi : 2010 
matematik notları : 70 70 80 

öğrenci b : Murat Yıldız
doğum tarihi : 2016
matematik notlar : 40 30 20 

yaş bilgilerini değişkende tut
ders ortalamalarını tutun

*/

// const aİsim = ("Fatma" +" " +"Yıldız");
// const aDgtrh = 2010;
// let mtNotort = ((70 + 70 + 80)/3);
// let ayas = (2026-aDgtrh);

// console.log(ayas);
// console.log(mtNotort);

// let ogrb_isim = "Murat";
// let ogrb_soyisim = "Yıldız"
// let ogrb_dgtrh = 2016;
// let ogrb_not1= 40;
// let ogrb_not2= 30;
// let ogrb_not3= 20;
// let mevcutYil = 2026;

// let ogrb_yas = (mevcutYil-ogrb_dgtrh);
// let ogrb_notOrt = ((ogrb_not1 + ogrb_not2 + ogrb_not3)/3);
// let ogr_basarilimia = (mtNotort)<=50;
// let ogr_basarilimib = (ogrb_notOrt)<=50;

// console.log(ogrb_yas);
// console.log(ogrb_notOrt);
// console.log(ogr_basarilimia);
// console.log(ogr_basarilimib);


// OPERATÖRLER 

// 1 - Aritmetik Operatörler
// 2- Atama Operatörleri 
// 3- Karşılaştırma Operatörleri

// 1 ARİTEMATİK OPERATÖRLER

// TOPLAMA ÇIKARMA ÇARPMA BÖLME MOD ALMA

let a = 10;
let b = 15;
let c = 30;
let sonuc;
sonuc = a+b;
sonuc = a-b;
sonuc = a*b;
sonuc = c/a;
sonuc= b%a;
sonuc = ++a;
sonuc = --a;
sonuc = a*=3;


// mod bölümden kalan sonucu verir 
console.log(sonuc);

console.log(a);


// ATAMA OPERATÖRLERİ

sonuc = a ;
sonuc += a // sonuc = sonuc + a 
sonuc -= a // sonuc = sonuc - a 
sonuc *= a // sonuc = sonuc * a 
sonuc /= a // sonuc = sonuc / a 

// KARŞILAŞTIRMA OPERATÖRLERİ 

// sonuc = (a==b);
// sonuc = (a!=b); // bu eşit değil demek
// sonuc = (a===b); // bu 3 eşitte tip kontrolü ve değer kontrolüde yapar güncel js de bu kullanılır

// // if (5>4) {
// //     console.log("Merhaba")
// // } /// bu blok true değer döndürürse çalışır sadece merhaba sadece true olduğunda çalıştır.


// let isLoggedin = true;

// if(isLoggedin){
//     console.log("Uygulamaya Giriş Yapıldı")
// }


let userName = "FurkanColpan";
let password = "123456";

if(userName =="FurkanColpan") {
    if (password=="123456"){
        console.log("Uygulama Giriş Okey")
    } else {
        console.log("Parola Yanlış")

    }
}
else {
    console.log("Kullanıcı Adı Yanlış")
}

// Ehliye Uygulaması

// yaş >= 18;
// mezuniyet == lise 
// yada mezuniyet == üniversite ise ehliyet alabilir

let yas = 18;
let mezuniyet = "lise";


if(yas>=18) {
    if(mezuniyet === "lise" || mezuniyet === "üniversite") {
        console.log("Ehliyet Alabilir")
    } else {
        console.log("Ehliyet almak için mezuniyeti yeterli değildir")
    }
}
else {
    console.log("Ehliyet Almak İçin Yaşı Uygun Değildir")
}  

// && bu işaretle de iki koşuluda aynı anda true aldığımızda çalışması içinde ayarlayabilirdik üsteki gibi de bir yapı oluşturabiliriz.
















