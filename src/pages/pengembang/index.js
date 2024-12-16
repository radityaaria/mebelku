import React from "react";
import Image from "next/image";

const Pengembang = () => {
  return (
    <div className="min-h-screen flex items-center text-black flex-col py-20">
      <p className="mb-10 text-3xl font-bold">Team Pengembang Project</p>
      <div className="flex flex-row space-x-10">
        <div className="avatar flex flex-col items-center p-4">
          <div className="w-36 rounded-full">
            <Image src="/aria.jpeg" width={80} height={80} alt="aria"/>
          </div>
          <p className="mt-4 font-bold text-xl">Raditya Aria Ramadhani</p>
        </div>
        <div className="avatar flex flex-col items-center p-4">
          <div className="w-36 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
          <p className="mt-4 font-bold text-xl">
            Yumarlin MZ, S.Kom., M.Pd., M.Kom.
          </p>
        </div>
        <div className="avatar flex flex-col items-center p-4">
          <div className="w-36 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
          <p className="mt-4 font-bold text-xl">Heri Agus Supriyanto</p>
        </div>
      </div>
    </div>
  );
};

export default Pengembang;
