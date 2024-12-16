import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-2xl font-bold tracking-widest">MEBELKU</div>
      <ul className="flex space-x-4">
        <li>
          <a href="/" className="hover:text-gray-400">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="hover:text-gray-400">
            About
          </a>
        </li>
        <li>
          <a href="/pengembang" className="hover:text-gray-400">
            Pengembang
          </a>
        </li>
        <li>
          <a href="/petunjuk" className="hover:text-gray-400">
            Petunjuk Penggunaan
          </a>
        </li>
        <li>
          <a href="/simulasi" className="hover:text-gray-400">
            Simulasi Hitung
          </a>
        </li>
      </ul>
      <details className="dropdown dropdown-end">
        <summary className="btn m-1 bg-white text-black hover:bg-slate-200">
          Login
        </summary>
        <ul className="menu dropdown-content bg-white text-black font-semibold rounded-box z-[1] w-36 p-2 shadow">
          <li>
            <a href="/login">Admin</a>
          </li>
          <li>
            <a href="/register">User</a>
          </li>
        </ul>
      </details>
    </nav>
  );
};

export default Navbar;