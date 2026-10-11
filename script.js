// // console.log("Merhaba Dünya");
// // console.log('Hello World');

// // document.write('Merhaba Dünya <br>');
// // document.write("Merhaba Dünya");

// // // Değişkenler 


// // console.log(17000 + (17000*0.3)); // maaş yusuf
// // console.log(20000 + (20000*0.3)); // maaş ali

// // var maasYusuf = 17000;
// // var maasAli = 20000;
// // var zam = 0.3;

// // console.log(maasYusuf + (maasYusuf*zam));
// // console.log(maasAli + (maasAli*zam));

// // // değişken kuralları

// // // Türkçe karakter kullanılmamalı
// // // Sayı ile başlamamalı
// // // Arada boşluk olmamalı

// // var a;

// // a = 10 

// // console.log(a);

// // // Değişkeni sonrasında çağırılıp değişken değeri atanabilir 

// // // const değişkeni başlangıç değeri almadan başlatılamaz 

// // // const değişkeni sonradan değiştirilmez

// // var urunAdi = "İphone15"; // çift tırnak içine yazılı değerler stringtir 
// // let urunFiyat = 50000; // tırnaksız kullanımlar da değer number dır

// // // var a = "10";
// // // var b = "20";
// // // var toplam = a+b;
// // // console.log(toplam);

// // // var a = 10;
// // // var b = 20;
// // // var toplam = a+b;
// // // console.log(toplam);

// // console.log(typeof urunAdi);
// // console.log(typeof urunFiyat);


// // var a = "10";
// // var b = "20";
// // var toplam = Number(a)+Number(b);
// // console.log(toplam);

// // var c = 10;
// // var d = 20;
// // var toplam = String(c)+String(d);
// // console.log(toplam);

// // // buradaki dönüşümler değişkenlerin tipini değiştirmez type of la bakıcak olursak yine numberdır c.toString() te stringe dönüştürür.

// // let isim = "Yusuf";
// // let soyAd = "Yıldız";
// // console.log(isim+" "+soyAd);


// // let sinavNotu = 80;
// // let basarilimi = (sinavNotu>=50);
// // console.log(basarilimi);
// // console.log(typeof basarilimi); // boolean değer döndürür

// /* 

// Örnek çalışma

// 1 İki öğrencinin bilgilerini değişkenler içersine sakla

// öğrenci a : Fatma Yıldız
// doğum tarihi : 2010 
// matematik notları : 70 70 80 

// öğrenci b : Murat Yıldız
// doğum tarihi : 2016
// matematik notlar : 40 30 20 

// yaş bilgilerini değişkende tut
// ders ortalamalarını tutun

// */

// // const aİsim = ("Fatma" +" " +"Yıldız");
// // const aDgtrh = 2010;
// // let mtNotort = ((70 + 70 + 80)/3);
// // let ayas = (2026-aDgtrh);

// // console.log(ayas);
// // console.log(mtNotort);

// // let ogrb_isim = "Murat";
// // let ogrb_soyisim = "Yıldız"
// // let ogrb_dgtrh = 2016;
// // let ogrb_not1= 40;
// // let ogrb_not2= 30;
// // let ogrb_not3= 20;
// // let mevcutYil = 2026;

// // let ogrb_yas = (mevcutYil-ogrb_dgtrh);
// // let ogrb_notOrt = ((ogrb_not1 + ogrb_not2 + ogrb_not3)/3);
// // let ogr_basarilimia = (mtNotort)<=50;
// // let ogr_basarilimib = (ogrb_notOrt)<=50;

// // console.log(ogrb_yas);
// // console.log(ogrb_notOrt);
// // // console.log(ogr_basarilimia);
// // // console.log(ogr_basarilimib);


// // // OPERATÖRLER 

// // // 1 - Aritmetik Operatörler
// // // 2- Atama Operatörleri 
// // // 3- Karşılaştırma Operatörleri

// // // 1 ARİTEMATİK OPERATÖRLER

// // // // TOPLAMA ÇIKARMA ÇARPMA BÖLME MOD ALMA

// // // let a = 10;
// // // let b = 15;
// // // let c = 30;
// // // let sonuc;
// // // sonuc = a+b;
// // // sonuc = a-b;
// // // sonuc = a*b;
// // // sonuc = c/a;
// // // sonuc= b%a;
// // // sonuc = ++a;
// // // sonuc = --a;
// // // sonuc = a*=3;


// // // mod bölümden kalan sonucu verir 
// // console.log(sonuc);

// // // console.log(a);


// // // // ATAMA OPERATÖRLERİ

// // sonuc = a ;
// // sonuc += a // sonuc = sonuc + a 
// // sonuc -= a // sonuc = sonuc - a 
// // sonuc *= a // sonuc = sonuc * a 
// // sonuc /= a // sonuc = sonuc / a 

// // // KARŞILAŞTIRMA OPERATÖRLERİ 

// // // sonuc = (a==b);
// // // sonuc = (a!=b); // bu eşit değil demek
// // sonuc = (a===b); // bu 3 eşitte tip kontrolü ve değer kontrolüde yapar güncel js de bu kullanılır

// // // if (5>4) {
// // //     console.log("Merhaba")
// // // } /// bu blok true değer döndürürse çalışır sadece merhaba sadece true olduğunda çalıştır.


// // let isLoggedin = true;

// // if(isLoggedin){
// //     console.log("Uygulamaya Giriş Yapıldı")
// // }


// let userName = "FurkanColpan";
// let password = "123456";

// if(userName =="FurkanColpan") {
//     if (password=="123456"){
//         console.log("Uygulama Giriş Okey")
//     } else {
//         console.log("Parola Yanlış")

//     }
// }
// else {
//     console.log("Kullanıcı Adı Yanlış")
// }

// // Ehliye Uygulaması

// // yaş >= 18;
// // mezuniyet == lise 
// // yada mezuniyet == üniversite ise ehliyet alabilir

// let yas = 18;
// let mezuniyet = "lise";


// if(yas>=18) {
//     if(mezuniyet === "lise" || mezuniyet === "üniversite") {
//         console.log("Ehliyet Alabilir")
//     } else {
//         console.log("Ehliyet almak için mezuniyeti yeterli değildir")
//     }
// }
// else {
//     console.log("Ehliyet Almak İçin Yaşı Uygun Değildir")
// }  

// // && bu işaretle de iki koşuluda aynı anda true aldığımızda çalışması içinde ayarlayabilirdik üsteki gibi de bir yapı oluşturabiliriz.


// // // 1- Çalışma if else 

// //     // bir sayının 10 ile 50 arasında olup olmadığını kontrol ederim

// //     let sayi = 50;

// //     // if(sayi<50){
// //     //     if(sayi>10) {
// //     //         console.log("Sayı 10 ile 50 arasındadır")
// //     //     }
// //     //         else {
// //     //     console.log("Sayı 10 ile 50 arasında değildir")
// //     // }
// //     // }
// //     // else {
// //     //     console.log("Sayı 10 ile 50 arasında değiltir")
// //     // }


// //     if(sayi>=10 && sayi<=50) {
// //         console.log("Sayı 10 ile 50 arasındadır")
// // //     } else {
// // //         console.log("sayı 10 ile 50 arasında değildir")
// // //     }

// // //2. çalışma

// // // bir sayının pozitif tek sayı olup olmadığı  kontrol etsin

// // let sayi = 3;

// // if(sayi %2 === 1 && sayi>0){
// //     console.log("Bu bir pozitif tek sayıdır")
// // } else {
// //     console.log("sayı pozitif ve tek bir sayı değildir.")
// // }

// // // 3 . x y z sayılarının büyüklük sıralamasını yapınız (else if kullanarak else if kullanımını araştırıp uygulayın)

// // let x,y,z;
// // x = 60;
// // y = 60;
// // z = 60;

// // if (x>y &&  x>z) {
// //     console.log("x en büyük sayıdır")

// // } else if (y>z && y>x) {
// //     console.log("y en büyük sayıdır")
// // // } else if (z>y && z>x) {
// // //     console.log("z en büyük sayıdır.")
// // // } else if (z === y && y === x) {
// // //     console.log("sayılar birbirinw eşittir.")
// // // } else {
// // //     console.log("her hangi bir sayı birbirine eşittir.")
// // // }

// // // örnek durum çalisma

// // // 2 vize ve 1 final notuna göre hesaplanan ortalama için

// // // // görev1 ortalama 50 üstündeyse geçti değilse kaldı yazsın
// // // // görev2 geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır.
// // // // görev3 finalden 70 alındığında ortalama 50 in altındaysa bile geçsin

// // // let vize1 = 50;
// // // let vize2 = 60;
// // // let final = 70;

// // // let ortalama = (vize1 * 0.20) + (vize2 * 0.20) + (final * 0.60);

// // // if (ortalama >= 50 && final === 70) {
// // //     console.log("Final 70, geçtiniz");

// // // } else if (ortalama >= 50 && final >= 50) {
// // //     console.log("Geçtiniz");

// // // } else if (ortalama >= 50 && final < 50) {
// // //     console.log("Final barajına takıldınız");

// // // } else {
// // //     console.log("Ortalamadan kaldınız");
// // // }


// // // STRİNGS

// // let ad = "Furkan";
// // let soyad = 'Çolpan';
// // let yass = 32;
// // let sehir = "Çanakkale"


// // let mesaj = "Benim adım " + ad + " ve soyadım: " + soyad + " yaşım: " + yass + " yaşadığım şehir: " + sehir 

// // console.log(mesaj)

// // // $ kullanoldığı yerlerde kullanım test tırnaklar arasında olacak metin ve ${buraya değişkenin ismi gelecek} örnek alt taraf

// // let mesaj2 = `Benim adım: ${ad} soyadım: ${soyad} yaşım: ${yass} yaşadığım şehir ${sehir}`;

// // console.log(mesaj2);

// // STRİNG METODLARI

// let egitimAdi = "JavaScript Uygulamalı Web Geliştirme Eğitimi";

// let sonuc;

// sonuc = egitimAdi.toUpperCase(); // küçük
// sonuc = egitimAdi.toLowerCase(); // büyük
// sonuc = egitimAdi.length; // uzunluk verir
// sonuc = egitimAdi.indexOf("u");
// sonuc = egitimAdi[0]
// sonuc = egitimAdi.slice(0,10);
// sonuc = egitimAdi.slice(-10, -5);

// sonuc = egitimAdi.substring(0,10);
// sonuc = egitimAdi.substring(10);

// sonuc = egitimAdi.replace("Eğitimi", "Kursu")  // belirtilen öğeyi direkt değiştirir

// // sonuc = egitimAdi.trim();
// sonuc = egitimAdi.trimStart();
// // sonuc = egitimAdi.trimEnd();

// sonuc = egitimAdi.indexOf("Geliştirme");
// sonuc = egitimAdi.split(" ")[3]

// console.log(sonuc);

// // STRİNGS UYGULAMA  

// let url = "https://www.google.com";
// let kursAdi = "JavaScript Uygulamalı Web Geliştirme Eğitimi";


// let sonucson;

// // 1-URL kaç karakterden oluşuyor

// sonucson = url.length
// // 2- kursAdi kaç kelimeden oluşuyor

// kursAdi.split(" ").length
// // 3- url https ile mi başlıyor 

// sonucson = url.startsWith("https:")
// // 4- kurs adi içerisinde eğitimi kelimesi varmı

// sonucson = kursAdi.indexOf("Eğitimi");

// console.log(sonucson)