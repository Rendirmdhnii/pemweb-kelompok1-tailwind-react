// Iki import standar teko React rek
import { useState } from 'react'

function App() {
  return (
    // min-h-screen ben full sak layar, bg-slate-200 ben wernone abu-abu enom
    // flex, items-center, justify-center iku jurus Tailwind gawe nengahno kabeh konten rek
    <div className="min-h-screen bg-slate-200 flex items-center justify-center p-4">
      
      {/* Container utamane tak cilikno titik dadi max-w-2xl ben gak kebesaren ndek layar rek */}
      <div className="grid gap-3 max-w-2xl w-full">
        
        {/* Alert Bootstrap seng tak kei animasi kedip-kedip alus, font-e tak cilikno dadi text-sm */}
        <div className="alert alert-info text-center shadow-sm font-semibold tracking-wide animate-pulse py-2 text-sm" role="alert">
          Implementasi React + Vite Kelompok 1 T2F
        </div>

        {/* Card utamane. Border-0 ben gak onok garis pinggire, diganti shadow-lg ben onok bayangane */}
        <div className="card shadow-lg rounded-2xl overflow-hidden border-0">
          
          {/* Bagian judule Card, nggawe werno peteng (bg-dark). Ukuran huruf tak dadekno text-lg rek */}
          <div className="card-header bg-dark text-white text-center py-2 text-lg font-bold">
            Profil Mahasiswa Kelompok 1
          </div>
          
          <div className="card-body p-5">
            
            {/* Grid Tailwind, gap-e tak cilikno dadi gap-3 ben luwih rapet */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              
              {/* --- KOTAK JENENG 1 (SOFYAN - KETUA) --- */}
              {/* hover:-translate-y-1 ambek hover:scale-105 gawe animasi ben mantep pas demo rek */}
              <div className="p-3 border rounded-xl bg-blue-50 hover:-translate-y-1 hover:scale-105 hover:shadow-md transition-all duration-300 cursor-pointer">
                <h5 className="text-lg text-blue-700 font-bold mb-1">Sufyan Muzakki Hafiansyah</h5>
                <h6 className="text-xs text-gray-600 font-medium">NIM: 253140707111087</h6>
                <span className="badge bg-primary mt-1 shadow-sm">Ketua Kelompok</span>
              </div>

              {/* --- KOTAK JENENG 2 (RENDY) --- */}
              <div className="p-3 border rounded-xl bg-gray-50 hover:-translate-y-1 hover:scale-105 hover:shadow-md transition-all duration-300 cursor-pointer">
                <h5 className="text-lg text-blue-600 font-bold mb-1">Muhammad Rendy Ramadhani</h5>
                <h6 className="text-xs text-gray-500 font-medium">NIM: 253140707111058</h6>
                <span className="badge bg-secondary mt-1 shadow-sm">Anggota</span>
              </div>

              {/* --- KOTAK JENENG 3 (KRISNA) --- */}
              <div className="p-3 border rounded-xl bg-gray-50 hover:-translate-y-1 hover:scale-105 hover:shadow-md transition-all duration-300 cursor-pointer">
                <h5 className="text-lg text-blue-600 font-bold mb-1">Krisna Aji Dharma Jati</h5>
                <h6 className="text-xs text-gray-500 font-medium">NIM: 253140707111078</h6>
                <span className="badge bg-secondary mt-1 shadow-sm">Anggota</span>
              </div>

              {/* --- KOTAK JENENG 4 (DESBELION) --- */}
              <div className="p-3 border rounded-xl bg-gray-50 hover:-translate-y-1 hover:scale-105 hover:shadow-md transition-all duration-300 cursor-pointer">
                <h5 className="text-lg text-blue-600 font-bold mb-1">Desbelion Seccar Ramis</h5>
                <h6 className="text-xs text-gray-500 font-medium">NIM: 253140707111074</h6>
                <span className="badge bg-secondary mt-1 shadow-sm">Anggota</span>
              </div>

            </div>

            {/* Garis pemisah gawe misahno jeneng ambek paragraf ngisor. Margin tak cilikno dadi my-4 */}
            <hr className="my-4 border-gray-300" />
            
            {/* Teks deskripsi wes diganti dadi boso Indonesia formal ben apik gawe presentasi rek */}
            <p className="card-text text-gray-700 leading-relaxed text-center px-2 text-sm">
              Tugas Praktikum Pemrograman Web: Implementasi penggabungan framework Bootstrap (untuk komponen Card, Alert, dan Badge) dengan Tailwind CSS (untuk layouting dan animasi) pada environment React Vite.
            </p>
            
            {/* Tombol tulisan formal (Selesai), ukuran py-1.5 ben gak kebesaran */}
            <button className="btn btn-primary mt-4 w-full rounded-full transition-transform hover:scale-105 shadow-sm py-1.5 font-bold text-base">
              Selesai
            </button>
            
            {/* Catatan dummy dadi formal sisan ben selaras ambek liyane rek */}
            <p className="text-center text-xs text-gray-400 mt-2 italic">
              
            </p>
            
          </div>
        </div>

      </div>
    </div>
  )
}

// Ojo lali di-export ben isok diwoco ambek main.jsx rek
export default App