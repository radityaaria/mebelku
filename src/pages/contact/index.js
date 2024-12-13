import React from 'react';

const Contact = () => {
  return (
    <div style={{ padding: '20px' }} className='min-h-screen'>
      <p className='text-4xl mb-6 font-bold'>Kontak Kami</p>
      <p>
        Jika Anda memiliki pertanyaan atau ingin melakukan pemesanan, silakan hubungi kami melalui informasi di bawah ini:
      </p>
      <p className='mt-6'>
        <strong>Nama Toko:</strong> Toko Mebel Mbah Kayyun<br />
        <strong>Alamat:</strong> Jl.Godean No. 123, Yogyakarta, Indonesia<br />
        <strong>Telepon:</strong> (0274) 1234567<br />
        <strong>Email:</strong> info@mbahkayyun.com
      </p>
      
    </div>
  );
};

export default Contact;