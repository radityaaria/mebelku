import React from "react";
import Image from "next/image";

const Pengembang = () => {
  return (
    <div className="min-h-screen flex items-center text-black flex-col py-20">
      <p className="mb-10 text-3xl font-bold">Team Pengembang Project</p>
      <div className="flex flex-row space-x-10">
        <div className="avatar flex flex-col items-center p-4">
          <div className="w-36 rounded-full">
            <Image src="/aria.jpeg" width={80} height={80} alt="aria" />
          </div>
          <p className="mt-4 font-bold text-xl">Raditya Aria Ramadhani</p>
        </div>
        <div className="avatar flex flex-col items-center p-4">
          <div className="w-36 rounded-full">
            <Image src="/yumarlin.jpeg" width={80} height={80} alt="yumarlin" />
          </div>
          <p className="mt-4 font-bold text-xl">
            Yumarlin MZ, S.Kom., M.Pd., M.Kom.
          </p>
        </div>
        <div className="avatar flex flex-col items-center p-4">
          <div className="w-36 rounded-full">
            <Image src="/heri.jpeg" width={80} height={80} alt="heri" />
          </div>
          <p className="mt-4 font-bold text-xl">Heri Agus Supriyanto</p>
        </div>
      </div>
      <p className="bg-slate-200 px-10 py-8 mt-4 text-xl">
        Website ini merupakan hasil pengembangan dari sebuah proyek yang
        dirancang dan dikerjakan oleh mahasiswa Universitas Janabadra, <span className="font-semibold">Raditya
        Aria Ramadhani</span> dan <span className="font-semibold">Heri Agus Supriyanto</span>, sebagai bagian dari tugas akhir
        dalam rangka project tugas akhir mata kuliah Metode Numerik. Proyek ini
        dikembangkan dengan bimbingan dari dosen pembimbing kami, <span className="font-semibold">Yumarlin MZ,
        S.Kom., M.Pd., M.Kom.</span>, yang telah memberikan arahan, masukan, dan
        dukungan penuh selama proses pengembangan berlangsung. Tujuan utama dari
        website ini adalah untuk menyediakan sebuah platform modern dan
        interaktif yang membantu pengguna dalam melakukan perhitungan
        menggunakan rumus persamaan serta mempermudah pengelolaan data. Dengan
        memanfaatkan teknologi terkini dan desain yang responsif, kami berharap
        website ini dapat memberikan pengalaman terbaik bagi penggunanya. Kami
        mengucapkan terima kasih atas semua dukungan yang telah diberikan oleh
        Universitas Janabadra, dosen pembimbing, serta semua pihak yang telah
        berkontribusi dalam proses pengembangan website ini. Semoga hasil kerja
        keras ini dapat bermanfaat bagi banyak orang dan menjadi awal dari
        inovasi yang lebih besar di masa depan.
      </p>
    </div>
  );
};

export default Pengembang;
