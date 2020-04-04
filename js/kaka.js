let toggle = document.querySelector('.togle-nav');
let mobnav = document.querySelector('.mobile-nav');
toggle.onclick = function click() {
    mobnav.classList.toggle('hidden');
    mobnav.classList.toggle('show');
}

// Popup

// Declaration
const container = document.querySelector('#popup');
const image = document.querySelector('#popup img');
const title = document.querySelector('#popup h1');
const content = document.querySelector('#popup p');
const close = document.querySelector('#popup button');
const launch = document.querySelectorAll('.launch');

const body = document.querySelector('body');
const size = body.clientHeight;
const back = document.querySelector('.back');
const cover = document.querySelector('.cover');
back.style = 'height:' + size + 'px';
// Sejarah
let sejarah = {
    gambar: "img/kaka/naismith.jpg",
    judul: 'Sejarah Bola Basket',
    konten: `Bola Basket dianggap sebagai olahraga yang unik karena diciptakan secara tidak sengaja oleh seorang guru
        olahraga asal Kanada yang mengajar di sebuah perguruan tinggi di YMCA, beliau adalah Dr. James Naismith. Saat itu ia harus membuat suatu permainan di ruang tertutup untuk mengisi waktu luang para siswa pada masa liburan musim dingin di New England. Terinspirasi dari permainan yang pernah ia mainkan saat kecil di Ontairo, Naismith menciptakan permainan yang sekarang dikenal dengan bola basket  pada 15 Desember 1891.
    `
}
// Lapangan
let lapangan = {
    gambar: "img/kaka/court.svg",
    judul: 'Lapangan Bola Basket',
    konten: `Lapangan Bola Basket berbentuk persegi panjang dengan dua standar ukuran, yakni panjang 28,5 meter dan
        lebar untuk standar Nasional Basketball Association dan panjang 26 meter dan lebar 14 meter untuk standar
        Federasi Bola Basket Internasional.Tiga buah lingkaran yang terdapat di dalam lapangan basket memiliki
        panjang jari - jari yaitu 1, 8 meter.
    `
}
// bola
let bola = {
    gambar: "img/kaka/ball.svg",
    judul: 'Bola dalam Bola Basket',
    konten: `Keliling bola yang digunakan dalam permainan bola basket adalah 75cm - 78 cm. Sedangkan berat bola basket
              adalah 600 - 650 gram. Jika Bola dijatuhkan dari ketinggian 1,80 meter pada lantai papan, maka bola harus kembali pada ketinggian antara 1,20 - 1,40 meter.
    `
}

function popup(section) {
    image.setAttribute('src', section.gambar);
    title.textContent = section.judul;
    content.textContent = section.konten;

}

launch[0].addEventListener('click', () => {
    let sejarah_sec = document.querySelector('#sejarah');
    sejarahTop = sejarah_sec.offsetTop;
    container.style = 'margin-top:' + sejarahTop + 'px';
    popup(sejarah);
    back.classList.remove('hidden');
    cover.classList.remove('hidden');
});
launch[1].addEventListener('click', () => {
    let lapangan_sec = document.querySelector('#lapangan');
    lapanganTop = lapangan_sec.offsetTop;
    container.style = 'margin-top:' + lapanganTop + 'px';
    popup(lapangan);
    back.classList.remove('hidden');
    cover.classList.remove('hidden');
});
launch[2].addEventListener('click', () => {
    let bola_sec = document.querySelector('#bola');
    bolaTop = bola_sec.offsetTop;
    container.style = 'margin-top:' + bolaTop + 'px';
    popup(bola);
    back.classList.remove('hidden');
    cover.classList.remove('hidden');
    image.classList.add('w-1/2');
    image.classList.remove('w-full');
});
close.addEventListener('click', () => {
    back.classList.add('hidden');
    cover.classList.add('hidden');
    image.classList.add('w-full');
});