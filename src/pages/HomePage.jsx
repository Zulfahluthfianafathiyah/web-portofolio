import ftoImage from "../assets/images/fto.jpg";
import fto2Image from "../assets/images/fto2.jpeg";
import imgImage from "../assets/images/img.jpg";
import kcingImage from "../assets/images/kcing.jpg";
import tgs1Image from "../assets/images/tgs1.jpeg";


const HomePage = () => {
  return (
    <div className="homepage pb-10">
      <div className="container mx-auto px-4">
        <div className="fto grid grid-cols-2 items-center gap-20 pt-32">
          <div className="box">
            <h1 className="text-5xl/tight font-medium mb-7">Hallo Semuanya saya <span className="font-bold text-pink-300 underline" > zulfah luthfiana Fathiyah</span></h1>
            <p className="text-base/8 mb-7">Mahasiswa Semester 7 di Universitas Dinamika Bangsa Jurusan Sistem Informasi, merupakan individu yang memiliki antusias dan motivasi tinggi untuk mempelajari hal-hal baru. Terampil dalam mengoperasikan Microsoft office, software desain seperti canva,figma dan memiliki pemahaman yang baik tentang bahasa pemrograman PHP,HTML,dan CSS. memiliki minat besar untuk mengembangkan kemampuan bekerja saya di bidang ilmu teknologi,
             saya juga memiliki kemampuan komunikasi yang baik serta mampu bekerja sama dalam tim. </p>
            <a href="#" className="bg-pink-200 hover:bg-pink-300 transition-all py-2 px-4 text-white shadow rounded-full">Tentang Saya</a>
          </div>
         <div className="box">
          <img src={ftoImage} alt="foto Image" className="lg:w-[500px] w-[400px]  mx-auto md:m-0" />
         </div>
        </div>

        <div className="fto2 grid grid-cols-2 items-center gap-20 md:pt-20 pt-32" id="fto2">
          <div className="box">
            <img src={fto2Image} alt="foto 2 Image" className="lg:w-[500px] w-[400px] md:m-0 mx-auto" />
          </div>
          <div className="box">
            <h1 className="text-5xl/tight font-medium mb-4"> <span className="font-bold text-pink-300 underline">Pengalaman Kegiatan </span></h1>
            <p className="text-base/loose">Selama kuliah di Universitas Dinamika Bangsa, saya aktif berpartisipasi dalam kepanitiaan Pengalaman ini mengasah keterampilan manajemen acara, komunikasi, dan kerja sama tim. Salah satu momen berharga adalah ketika saya menjadi bagian dari 
            tim event penyambutan Mahasiswa baru di Kampus, di mana saya belajar menghadapi tantangan teknis dan pentingnya adaptasi.
Selain itu, saya mengikuti Kegiatan Studi Independen di PT Kinema Systrans Multimedia dalam bidang Web Development dan UI/UX Design, pada program ini mampu memperkuat keterampilan teknis dan problem-solving saya. Pengalaman-pengalaman nya juga mempersiapkan saya untuk
 menghadapi dunia kerja dengan kepercayaan diri dan kemampuan kolaborasi yang kuat..</p>

 <div className="grid grid-cols-2 gap-8">
  <div>
    <h1 className="text-3xl/tight font-medium mb-2"> 
      <span className="font-bold text-pink-300 underline">Kemampuan</span>
    </h1>
    <p className="text-base/loose">Microsoft Office Dasar</p>
    <p className="text-base/loose">Figma</p>
    <p className="text-base/loose">Canva</p>
    <p className="text-base/loose">Visual Studio Code</p>
  </div>
  <div>
    <h1 className="text-3xl/tight font-medium mb-2"> 
      <span className="font-bold text-pink-300 underline">Kompetensi</span>
    </h1>
    <p className="text-base/loose">Problem Solving</p>
    <p className="text-base/loose">Tim Manajement</p>
  </div>
</div>

          </div>
        </div>

        <div className="services pt-10" id="services">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">Pendidikan</h1>
          <div className="services-box pt-7 grid grid-cols-3 gap-6">
            <div className="box bg-pink-300 rounded-lg shadow p-4">
              <i className="ri-number- text-3xl text-white"></i>
              <h3 className="text-xl font-bold text-white mt-6 mb-2">SMP MUhammadiyah</h3>
              <p className="text-white text-base/loose"> Sungai Bahar Muaro Jambi </p>
              <p className="text-white text-base/loose"> Tahun 2014-2017</p>
            </div>
            <div className="box box bg-pink-300 rounded-lg shadow p-4">
              <i className="ri-number- text-3xl text-white"></i>
              <h3 className="text-xl font-bold text-white mt-6 mb-2">SMK Negri 2 MJ </h3>
              <p className="text-white text-base/loose"> Sungai Bahar Muaro Jambi</p>
              <p className="text-white text-base/loose"> Tahun 2017-2020!</p>
            </div>
            <div className="box box bg-pink-300 rounded-lg shadow p-4">
              <i className="ri-number-text-3xl text-white"></i>
              <h3 className="text-xl font-bold text-white mt-6 mb-2">Universitas Dinamika Bangsa</h3>
              <p className="text-white text-base/loose"> Kota Jambi</p>
              <p className="text-white text-base/loose">Tahun 2021- Sekarang</p>
            </div>
          </div>
        </div>
        
        <div className="services pt-10" id="proyek">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">Proyek</h1>
          <p className="text-center">Berikut adalah hasil projek selama saya mengikuti kegiatan studi independen bact 6 dan projeck kecil selama kegiatan 
            kuliah berlangsung dengan membuat sebuah design dan website sederhana </p>
            <div className="proyek box pt-11 grid grid-cols-3 gap-6">
            <div className="box p-2 bg-white shadow">
              <img src={imgImage} alt="img Image" />
              <h3 className="text-xl font-bold text-black mt-6 mb-2">Peduli Stunting</h3>
              <p>merupakan sebuah webiste yang dibuat untuk memudahkan pengguna dalam mengakses informasi tentang stunting dimana saja, Platform digital 
                yang dibuat untuk edukasi dan pencegahan stunting di Indonesia  </p>
            </div>
            <div className="box box p-2 bg-white shadow">
              <img src={kcingImage} alt="kucing Image" />
              <h3 className="text-xl font-bold text-black mt-6 mb-2">PawConnect</h3>
              <p>adalah situs web yang memudahkan pengguna untuk mendapatkan dan 
                berbagi informasi tentang adopsi kucing. Paw Connect menyediakan berbagai fitur
                 yang dapat dengan mudah dipahami pengguna saat mencari informasi tentang kucing yang siap diadopsi.
              </p>
            </div>
            <div className="box box p-2 bg-white shadow">
              <img src={tgs1Image} alt="tugas Image" />
              <h3 className="text-xl font-bold text-black mt-6 mb-2">Website Klinik</h3>
              <p>merupakan sebuah website sederhana yang dibuat dengan menggunakan bahasa pemrograman HTML dan framework laravel, tugas ini 
                dibuat untuk memenuhi tugas akhir semester mata kuliah Pemrograman Web 
              </p>
            </div>
            </div>
            </div>
      </div>
    </div>
  );
}

export default HomePage;

