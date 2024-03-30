function teknisi() {
    document.getElementById("tulis1").classList.add("hide");
    document.getElementById("konten").classList.add("merah");
    document.getElementById("tombol1").classList.add("hide");
    document.getElementById("tombol2").classList.add("hide");
    document.getElementById("head1").classList.add("hide");
    document.getElementById("img1").classList.add("hide");
    document.getElementById("konten").classList.remove("abu");
    document.getElementById("tulis2").classList.remove("hide");
    document.getElementById("head2").classList.remove("hide");
    document.getElementById("img2").classList.remove("hide");
    setTimeout(awal, 2000);
}
function mahasiswa() {
    document.getElementById("tulis1").classList.add("hide");
    document.getElementById("konten").classList.add("hijau");
    document.getElementById("tombol1").classList.add("hide");
    document.getElementById("tombol2").classList.add("hide");
    document.getElementById("head1").classList.add("hide");
    document.getElementById("img1").classList.add("hide");
    document.getElementById("konten").classList.remove("abu");
    document.getElementById("tulis3").classList.remove("hide");
    document.getElementById("head3").classList.remove("hide");
    document.getElementById("img3").classList.remove("hide");
    setTimeout(awal, 2000);
}

function awal(){
    document.getElementById("tulis2").classList.add("hide");
    document.getElementById("tulis3").classList.add("hide");
    document.getElementById("konten").classList.add("abu");
    document.getElementById("img2").classList.add("hide");
    document.getElementById("img3").classList.add("hide");
    document.getElementById("head2").classList.add("hide");
    document.getElementById("head3").classList.add("hide");

    document.getElementById("konten").classList.remove("merah");
    document.getElementById("konten").classList.remove("hijau");
    document.getElementById("head1").classList.remove("hide");
    document.getElementById("img1").classList.remove("hide");
    document.getElementById("tulis1").classList.remove("hide");
    document.getElementById("tombol1").classList.remove("hide");
    document.getElementById("tombol2").classList.remove("hide");
    
}