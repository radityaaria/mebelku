import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

// Hanya satu pemanggilan dynamic untuk MapComponent
const MapComponent = dynamic(() => import("../../components/Map"), {
  ssr: false,
});

const About = () => {
  return (
    <div className="min-h-screen p-6">
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        <div className="flex-1 space-y-4 text-lg">
          <h1 className="text-2xl font-bold mt-4 text-center md:text-left">
            Selamat Datang di Toko Mebel Mbah Kayyun
          </h1>
          <p>
            Mbah Kayyun adalah toko mebel terpercaya yang telah melayani
            pelanggan sejak tahun 2014. Selama satu dekade, kami terus
            menghadirkan beragam produk berkualitas tinggi dengan sentuhan
            kehangatan dan keindahan kayu asli. Dari furnitur klasik hingga
            desain modern, kami menyediakan berbagai pilihan untuk mempercantik
            rumah Anda.
          </p>
          <p>
            Semua produk kami dibuat dengan bahan kayu terbaik, dikerjakan oleh
            pengrajin berpengalaman yang menjaga setiap detail dengan teliti. Di
            sini, Anda akan menemukan meja, kursi, lemari, dan dekorasi kayu
            lainnya yang tidak hanya fungsional tetapi juga artistik.
          </p>
          <p>
            Jadikan rumah Anda lebih nyaman dan berkarakter dengan sentuhan
            mebel khas Mbah Kayyun. Pesan sekarang dan rasakan kehangatan kayu
            dalam setiap sudut ruang Anda!
          </p>
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-center md:text-left">
            Lokasi Kami
          </h2>
          <MapComponent /> {/* Menampilkan peta lokasi */}
        </div>
      </div>
      <div className="mt-10 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-4xl mb-6 font-bold">Kontak Kami</h2>
        <p className="">
          Jika Anda memiliki pertanyaan atau ingin melakukan pemesanan, silakan
          hubungi kami melalui informasi di bawah ini:
        </p>
        <p className="mt-6">
          <strong>Nama Toko:</strong> Toko Mebel Mbah Kayyun
          <br />
          <strong>Alamat:</strong> Jl.Godean No. 123, Yogyakarta, Indonesia
          <br />
          <strong>Telepon:</strong> (0274) 1234567
          <br />
          <strong>Email:</strong> info@mbahkayyun.com
        </p>
      </div>
      <div className="flex justify-center mt-4">
        <Image src="/about.jpeg" width={400} height={400} alt="about" />
      </div>
    </div>
  );
};

export default About;