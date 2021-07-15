const btn = document.getElementsByClassName('btn');
const text = document.querySelector('.right');

const akademiktext = "<p>Bidang akademik merupakan bidang yang bekerja dalam lingkup peningkatan kualitas akademik dan pendampingan dalam pengembangan prestasi mahasiswa S1 Sistem Informasi UNAIR<br><br>Jobdesc :<br><br><strong>Divisi Pengembangan Prestasi</strong><br><br>1. Mendata pencapaian prestasi mahasiswa S1 Sistem Informasi UNAIR<br><br>2. Menentukan mahasiswa S1 Sistem Informasi UNAIR yang paling berprestasi untuk diajukan menjadi delegasi Mawapres<br><br>3. Memberikan informasi dan bimbingan seputar PKM kepada mahasiswa baru mahasiswa S1 Sistem Informasi UNAIR<br><br>4. Memberikan apresiasi kepada mahasiswa S1 Sistem Informasi UNAIR yang dinilai paling berprestasi<br><br>5. Pengadaan kompetisi untuk siswa SMA/sederajat untuk memperkenalan prodi S1 Sistem Informasi UNAIR<br><br>6. Memberikan informasi seputar perlombaan yang berkaitan dengan prodi S1 Sistem Informasi UNAIR<br><br>7. Memberikan pendampingan bagi mahasiswa S1 Sistem Informasi UNAIR yang mengikuti lomba<br><br><strong>Divisi Dukungan Akademik</strong><br><br>1. Mengumpulkan materi dan soal dari setiap mata kuliah untuk kemudian dimasukkan ke google drive HIMSI<br><br>2. Membantu mahasiswa S1 Sistem Informasi UNAIR dalam mencari referensi untuk mata kuliah tertentu<br><br>3. Menyediakan contoh PKM dan skripsi dari mahasiswa S1 Sistem Informasi UNAIR<br><br>4. Menyediakan pentutor bimbingan pembelajaran untuk mata kuliah tertentu menjelang ujian bagi 2 angkatan termuda mahasiswa S1 Sistem Informasi UNAIR</p>";

const psdmtext = "<p>Bidang PSDM merupakan bidang yang bertanggung jawab sebagai ujung tombak dalam hal koordinasi, optimalisasi dan pengawalan dalam rangka sumber daya mahasiswa S1 Sistem Informasi UNAIR.<br><br>Jobdesc :<br><br><strong>Divisi Kaderisasi</strong><br><br>1. Menentukan nilai-nilai yang ingin diterapkan untuk keperluan kaderisasi.<br><br>2. Melaksanakan program kerja yang berkaitan dengan kaderisasi beserta serangkaiannya.<br><br><strong>Divisi Personalia</strong><br><br>1. Menyediakan wadah bagi warga S1 Sistem Informasi untuk menyampaikan aspirasi maupun mencurahkan isi hatinya secara personal.<br><br>2. Menyediakan wadah untuk warga HIMSI melakukan interaksi dan komunikasi untuk menjaga hubungan baik per bidang maupun antar bidang.<br><br>Memberikan apresiasi kepada staff HIMSI yang sedang merayakan momen atau pencapaian tertentu.</p>"

const kestaritext = "<p><strong>Kewirausahaan dan Inventaris</strong> <br><br>Bidang KESTARI merupakan bidang yang bertanggung jawab atas pemasukan dana melalui kewirausahaan serta mengatur barang dan berkas yang berada di kesekretariatan HIMSI UNAIR. <br><br>Jobdesc:<br><br>1. Mengelola dan menjual MERSI (Merchandise SI) bagi mahasiswa S1 Sistem Informasi<br><br>2. Mengelola dan menjual JAHIM (Jaket himpunan) bagi mahasiswa S1 Sistem Informasi<br><br>3. Menambah pemasukan kas HIMSI melalui kewirausahaan.<br><br>4. Mendata dan memelihara barang-barang yang berada di sekretariat HIMSI.<br><br>5. Memfasilitasi dan mendata alur peminjaman barang HIMSI.</p>";

const mediatext = "<p>Bidang Media dan Konten Kreatif merupakan bidang yang bertanggung jawab atas pembuatan desain grafis dan video serta pengelolaan media sosial sebagai sarana informasi untuk warga S1 Sistem Informasi UNAIR dan pihak eksternal<br><br> Jobdesc:<br><br>1. Mengelola Official Account HIMSI meliputi Instagram, Line@, Youtube dan Email<br><br>2. Membuat dan menyajikan informasi berupa desain grafis ataupun video melalui media sosial<br><br>3. Menjadi pusat penyebaran informasi yang valid terkait dengan kegiatan yang dilakukan HIMSI UNAIR</p>";

const seratext = "<p>Bidang Sera merupakan bidang yang bertanggung jawab untuk mewadahi dan memfasilitasi minat dan bakat warga s1 sistem informasi unair dibidang non akademik khususnya dalam seni dan olahraga <br><br> Jobdesc:<br><br>1. Memfasilitasi warga S1 Sistem Informasi UNAIR dalam mengembangkan minat dan bakatnya dibidang non akademik melalui Agenda latihan rutin. Bidang Sera juga bertugas mengadakan acara peringatan ulang tahun himsi. <br><br>2. Bidang Sera juga bertugas mengirim delegasi untuk mengikuti kompetisi di bidang seni dan olah raga.</p>";

const hublutext  = "<p>Bidang HUBLU merupakan bidang yang memiliki ranah kerja eksternal dan bertanggung jawab sebagai penghubung HIMSI UNAIR dengan eksternal HIMSI UNAIR. <br><br>Jobdesc:<br><br>Menghubungkan dan menjalin kerjasama HIMSI UNAIR dengan eksternal HIMSI UNAIR, diantaranya alumni, mahasiswa diluar S1 SI UNAIR, dan masyarakat umum demi tercipta dan terjaganya hubungan yang baik dan harmonis sehingga dapat bertukar informasi, ilmu, dan pengetahuan.</p>";

const ristektext = "<p>Bidang Ristek adalah bidang yang memiliki peran untuk membantu, memfasilitasi, memotivasi warga SI terhadap segala hal yang berkaitan dengan keprofesian dan teknologi<br><br>Jobdesc :<br><br>1. memfasilitasi mahasiswa s1 SI untuk mendapatkan peluang pekerjaan sampingan. <br><br>2. memfasilitasi mahasiswa s1 SI dalam pengembangan minat dan bakat dalam dunia teknologi. <br><br>3. menciptakan lingkungan yang mendukung bagi mahasiswa SI dalam pengembangan skill keprofesian.<br><br>4. melakukan pendataan dan pemetaan minat dan bakat mahasiswa SI untuk mendukung pelaksanaan poin 1, 2, dan 3</p>";

text.innerHTML = ristektext;

console.log("start");

console.log(btn);
console.log(text);

for (let index = 0; index < btn.length; index++) {
    const element = btn[index];
    element.addEventListener("click", function () {
        reset();
        element.classList.add('active');
        // console.log(element.id);
        switch (element.id) {
            case "sera":
                text.innerHTML = seratext;
                break;
            case "akademik":
                text.innerHTML = akademiktext;
                break;
            case "psdm":
                text.innerHTML = psdmtext;
                break;
            case "ristek":
                text.innerHTML = ristektext;
                break;
            case "kestari":
                text.innerHTML = kestaritext;
                break;
            case "media":
                text.innerHTML = mediatext;
                break;
            case "hublu":
                text.innerHTML = hublutext;
                break;
            default:
                text.innerHTML = "RISTEK";
        }
    })
}

function reset() {
    for (let index = 0; index < btn.length; index++) {
        const element = btn[index];
        element.classList.remove('active');
    }
}