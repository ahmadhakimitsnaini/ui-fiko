"use client";
import React from "react";
import Image from "next/image";
import { PhotoGallery } from "@/components/ui/gallery";
import TestingYukkaImg from "@/components/asset/testing-yukka.jpeg";
import ProfilPikoImg from "@/components/asset/profil-piko.jpeg";
import { GridPattern } from "@/components/ui/grid-pattern";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-transparent font-sans text-white antialiased selection:bg-pink-600/30 selection:text-pink-200 overflow-x-hidden relative">
      {/* GLOBAL GRID BACKGROUND */}
      <div className="fixed inset-0 z-[-50] pointer-events-none">
        <GridPattern
          width={40}
          height={40}
          strokeDasharray="4 2"
          className="fill-white/5 stroke-white/10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"
        />
      </div>

      {/* 🟢 NAVIGATION BAR */}
      <nav className="w-full bg-[#0D0D0D]/60 backdrop-blur-xl sticky top-0 z-50 border-b border-white/5 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center font-black text-xl text-white tracking-tight">
            {/* Logo LajuRide */}
            <img
              src="/logo_lajuride.png"
              alt="Logo LajuRide"
              className="h-8 w-auto brightness-0 invert"
            />
          </div>
          <div className="hidden md:flex gap-6 text-xs font-semibold text-slate-400">
            <a href="#empathize" className="hover:text-white transition">
              Empathize
            </a>
            <a href="#define" className="hover:text-white transition">
              Define
            </a>
            <a href="#ideate" className="hover:text-white transition">
              Ideate
            </a>
            <a href="#prototype" className="hover:text-white transition">
              Prototype
            </a>
            <a href="#test" className="hover:text-white transition">
              Test
            </a>
          </div>
        </div>
      </nav>

      {/* ================= HERO SECTION (Dark Neon Style) ================= */}
      <section className="w-full pt-20 pb-32 px-6 bg-transparent text-center relative overflow-hidden">
        
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <div className="mb-6 flex justify-center drop-shadow-2xl">
            <img
              src="/logo_lajuride.png"
              alt="Logo LajuRide Besar"
              className="h-24 w-auto brightness-0 invert"
            />
          </div>

          <p className="text-base md:text-lg text-slate-400 font-medium tracking-wide max-w-xl mx-auto leading-relaxed mt-4">
            Solusi transportasi modern yang menghubungkan kebutuhan mobilitas
            Anda dengan kenyamanan dan keamanan.
          </p>

          <div className="flex gap-4 mt-12 mb-16">
            <a
              href="#prototype"
              className="px-8 py-4 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold text-sm rounded-full hover:scale-105 transition-all shadow-[0_10px_25px_-5px_rgba(232,43,113,0.4)]"
            >
              Coba Prototype
            </a>
            <button className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-bold text-sm rounded-full hover:bg-white/10 hover:border-pink-500/50 transition-all border border-white/10 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.5)]">
              Kunjungi Projek
            </button>
          </div>

          {/* Gallery Component */}
          <PhotoGallery />
        </div>
      </section>

      {/* Tagline di Bawah Hero */}
      <section className="w-full bg-transparent py-24 px-6 text-center border-b border-white/5 relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          Cepat, Simpel,{" "}
          <span className="bg-gradient-to-r from-pink-400 to-rose-600 bg-clip-text text-transparent">
            Meluncur.
          </span>
        </h2>
        <p className="text-sm md:text-base text-slate-400 max-w-2xl mx-auto mt-6 leading-relaxed">
          LajuRide hadir untuk memotong waktu tunggu dan memberikan akurasi
          penuh. Fokus pada satu hal utama:{" "}
          <strong className="text-white">
            Mengantar Anda ke tujuan tepat waktu tanpa ketidakpastian.
          </strong>
        </p>

        {/* Info Durasi Kerja, Alat, & Pendekatan (Dark Glass Cards) */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-5xl mx-auto mt-16 text-left">
          <div className="flex-1 bg-gradient-to-br from-[#4f0b20] to-[#b81040] p-8 rounded-[2rem] border border-rose-500/20 shadow-2xl hover:-translate-y-1 hover:border-pink-500/40 transition-all duration-300 flex flex-col">
            <div className="w-14 h-14 rounded-2xl bg-white text-rose-600 shadow-[0_4px_10px_rgba(0,0,0,0.3)] flex items-center justify-center font-bold text-2xl mb-6">
              📅
            </div>
            <div>
              <div className="inline-block rounded-full px-4 py-1.5 bg-pink-500/10 text-pink-400 border border-pink-500/20 text-[10px] font-bold uppercase tracking-widest mb-4">
                Siklus Pengerjaan
              </div>
              <p className="text-xl font-bold text-white">4 Minggu Sprint</p>
            </div>
          </div>

          <div className="flex-1 bg-gradient-to-br from-[#4f0b20] to-[#b81040] p-8 rounded-[2rem] border border-rose-500/20 shadow-2xl hover:-translate-y-1 hover:border-pink-500/40 transition-all duration-300 flex flex-col">
            <div className="w-14 h-14 rounded-2xl bg-white text-rose-600 shadow-[0_4px_10px_rgba(0,0,0,0.3)] flex items-center justify-center font-bold text-2xl mb-6">
              🎨
            </div>
            <div>
              <div className="inline-block rounded-full px-4 py-1.5 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-[10px] font-bold uppercase tracking-widest mb-4">
                Arsitektur Alat
              </div>
              <p className="text-xl font-bold text-white">Figma Ecosystem</p>
            </div>
          </div>

          <div className="flex-1 bg-gradient-to-br from-[#4f0b20] to-[#b81040] p-8 rounded-[2rem] border border-rose-500/20 shadow-2xl hover:-translate-y-1 hover:border-pink-500/40 transition-all duration-300 flex flex-col">
            <div className="w-14 h-14 rounded-2xl bg-white text-rose-600 shadow-[0_4px_10px_rgba(0,0,0,0.3)] flex items-center justify-center font-bold text-2xl mb-6">
              🎯
            </div>
            <div>
              <div className="inline-block rounded-full px-4 py-1.5 bg-pink-500/10 text-pink-400 border border-pink-500/20 text-[10px] font-bold uppercase tracking-widest mb-4">
                Kerangka Kerja
              </div>
              <p className="text-xl font-bold text-white">Design Thinking</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DESIGN GOALS SECTION ================= */}
      <section className="w-full bg-transparent py-24 px-6 border-b border-white/5">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-extrabold text-white tracking-tight mb-4">
              Kenapa LajuRide?
            </h3>
            <p className="text-sm md:text-base text-slate-400 leading-relaxed">
              Proyek ini berfokus untuk mengatasi keresahan pengguna akibat
              manajemen waktu estimasi perjalanan ojek online konvensional yang
              sering tidak akurat, sehingga berpotensi mengacaukan jadwal
              harian.
            </p>
          </div>
          <div className="md:col-span-3 bg-gradient-to-br from-[#4f0b20] to-[#b81040] border border-rose-500/20 shadow-2xl p-8 rounded-[2rem] space-y-6 hover:-translate-y-1 hover:border-pink-500/40 transition-all duration-300">
            <div className="inline-block rounded-full px-4 py-1.5 bg-pink-500/10 text-pink-400 border border-pink-500/20 text-[10px] font-bold uppercase tracking-widest mb-2">
              Design Goals
            </div>
            <div className="space-y-4 text-sm">
              <div className="p-5 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-colors">
                <span className="font-bold text-white block mb-1 text-base">
                  ⏱️ Time Certainty
                </span>
                <span className="text-slate-400 leading-relaxed">
                  Menyajikan akurasi data waktu kedatangan demi meminimalisir
                  risiko keterlambatan aktivitas pengguna.
                </span>
              </div>
              <div className="p-5 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-colors">
                <span className="font-bold text-white block mb-1 text-base">
                  🌐 Inclusive Design
                </span>
                <span className="text-slate-400 leading-relaxed">
                  UI bersih, kontras tinggi, dan fungsional agar mudah dipahami
                  semua kalangan usia.
                </span>
              </div>
              <div className="p-5 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-colors">
                <span className="font-bold text-white block mb-1 text-base">
                  🍃 Fresh Identity
                </span>
                <span className="text-slate-400 leading-relaxed">
                  Kombinasi warna pink dan oranye yang memberikan kesan dinamis,
                  modern, serta responsif.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 1. EMPATHIZE SECTION ================= */}
      <section
        id="empathize"
        className="max-w-5xl mx-auto py-24 px-6 border-b border-white/5 text-center md:text-left"
      >
        <div className="text-center mb-12">
          <h3 className="text-3xl font-extrabold tracking-tight text-white">
            1. Empathize
          </h3>
          <p className="text-sm md:text-base text-slate-400 mt-3 max-w-2xl mx-auto leading-relaxed">
            Kami menggali perspektif pengguna untuk mengidentifikasi hambatan
            utama mereka terkait estimasi waktu mobilitas harian.
          </p>
        </div>

        <div className="w-full aspect-[16/9] bg-white/5 rounded-[2rem] border border-white/10 flex items-center justify-center p-4 mb-10 shadow-2xl">
          <iframe
            className="w-full h-full rounded-[1.5rem] opacity-90 hover:opacity-100 transition-opacity"
            src="https://embed.figma.com/design/HzzlT0lPCgcQ1OHiitJajm/Untitled?node-id=395-2270&embed-host=share"
            allowFullScreen
          ></iframe>
        </div>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-gradient-to-br from-[#4f0b20] to-[#b81040] p-8 rounded-[2rem] border border-rose-500/20 shadow-2xl hover:-translate-y-1 hover:border-pink-500/40 transition-all duration-300">
            <div className="inline-block rounded-full px-4 py-1.5 bg-pink-500/10 text-pink-400 border border-pink-500/20 text-[10px] font-bold uppercase tracking-widest mb-4">
              Metodologi Riset
            </div>
            <ul className="space-y-4 text-slate-400 text-sm leading-relaxed">
              <li>
                <strong className="text-white">Qualitative Interview:</strong>{" "}
                Wawancara langsung guna mendalami pola bepergian responden.
              </li>
              <li>
                <strong className="text-white">User Observation:</strong>{" "}
                Memperhatikan kesulitan pengguna saat memantau estimasi Maps
                aplikasi saat ini.
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-[#4f0b20] to-[#b81040] p-8 rounded-[2rem] border border-rose-500/20 shadow-2xl hover:-translate-y-1 hover:border-pink-500/40 transition-all duration-300">
            <div className="inline-block rounded-full px-4 py-1.5 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-[10px] font-bold uppercase tracking-widest mb-4">
              Key Interview Insights
            </div>
            <ul className="space-y-4 text-slate-400 text-sm leading-relaxed">
              <li>
                <strong className="text-white">Khawatir Telat:</strong> Pengguna
                cemas karena estimasi menit perjalanan sering meleset jauh dari
                realita lapangan.
              </li>
              <li>
                <strong className="text-white">Butuh Kejelasan Driver:</strong>{" "}
                Pengguna ingin tahu kejelasan posisi dan jumlah armada aktif di
                sekitar mereka sejak awal.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= 2. DEFINE SECTION ================= */}
      <section
        id="define"
        className="max-w-5xl mx-auto py-24 px-6 border-b border-white/5"
      >
        <div className="text-center mb-12">
          <h3 className="text-3xl font-extrabold tracking-tight text-white">
            2. Define
          </h3>
          <p className="text-sm md:text-base text-slate-400 mt-3 max-w-2xl mx-auto leading-relaxed">
            Menyusun akar permasalahan utama dari hasil riset lapangan serta
            merumuskan fokus solusi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 text-left text-sm mb-10">
          <div className="p-8 bg-gradient-to-br from-[#4f0b20] to-[#b81040] rounded-[2rem] border border-rose-500/20 shadow-2xl hover:-translate-y-1 hover:border-pink-500/40 transition-all duration-300">
            <div className="inline-block rounded-full px-4 py-1.5 bg-red-500/10 text-red-400 border border-red-500/20 text-[10px] font-bold uppercase tracking-widest mb-4">
              Problem Statement
            </div>
            <p className="text-slate-300 leading-relaxed">
              Pengguna memerlukan kepastian informasi waktu perjalanan yang
              akurat dan transparan demi menghindari risiko keterlambatan
              pengerjaan aktivitas atau jadwal penting mereka.
            </p>
          </div>
          <div className="p-8 bg-gradient-to-br from-[#4f0b20] to-[#b81040] rounded-[2rem] border border-rose-500/20 shadow-2xl hover:-translate-y-1 hover:border-pink-500/40 transition-all duration-300">
            <div className="inline-block rounded-full px-4 py-1.5 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-[10px] font-bold uppercase tracking-widest mb-4">
              How Might We (HMW)
            </div>
            <p className="text-white font-bold leading-relaxed text-base">
              &ldquo;How might we memberikan kepastian waktu perjalanan yang
              akurat agar pengguna dapat merencanakan aktivitasnya tanpa risiko
              keterlambatan?&rdquo;
            </p>
          </div>
        </div>

        {/* Pemetaan Isu (Data Grid Style CATTA) */}
        <div className="p-10 text-left text-sm max-w-4xl mx-auto bg-gradient-to-br from-[#4f0b20] to-[#b81040] rounded-[2rem] border border-rose-500/20 shadow-2xl hover:-translate-y-1 hover:border-pink-500/40 transition-all duration-300">
          <div className="inline-block rounded-full px-4 py-1.5 bg-pink-500/10 text-pink-400 border border-pink-500/20 text-[10px] font-bold uppercase tracking-widest mb-6">
            Matriks Prioritas (High Impact)
          </div>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Berdasarkan pemetaan Prioritas Masalah (Impact Matrix) di FigJam,
            kami memfokuskan pengerjaan pada fitur berdampak tinggi:
          </p>

          <div className="grid md:grid-cols-2 gap-8 border-t border-white/5 pt-8">
            <div className="border-l-2 border-transparent hover:border-pink-500 pl-4 transition-colors">
              <strong className="text-white block mb-1 text-base">
                Driver Availability
              </strong>
              <span className="text-slate-400">
                Menampilkan jumlah driver aktif di sekitar lokasi user sejak
                awal.
              </span>
            </div>
            <div className="border-l-2 border-transparent hover:border-pink-500 pl-4 transition-colors">
              <strong className="text-white block mb-1 text-base">
                Range-Based Time
              </strong>
              <span className="text-slate-400">
                Estimasi durasi dalam bentuk rentang menit.
              </span>
            </div>
            <div className="border-l-2 border-transparent hover:border-pink-500 pl-4 transition-colors">
              <strong className="text-white block mb-1 text-base">
                Dynamic Tracking
              </strong>
              <span className="text-slate-400">
                Pembaruan kalkulasi waktu dinamis sepanjang rute.
              </span>
            </div>
            <div className="border-l-2 border-transparent hover:border-pink-500 pl-4 transition-colors">
              <strong className="text-white block mb-1 text-base">
                Habit Auto Suggestion
              </strong>
              <span className="text-slate-400">
                Saran rute otomatis berdasarkan riwayat rutinitas.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. IDEATE SECTION ================= */}
      <div className="w-full relative overflow-hidden bg-transparent border-b border-white/5">
        
        <section
          id="ideate"
          className="max-w-5xl relative z-10 mx-auto py-24 px-6 text-center md:text-left"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-extrabold tracking-tight text-white">
              3. Ideate
            </h3>
            <p className="text-sm md:text-base text-slate-400 mt-3 max-w-2xl mx-auto leading-relaxed">
              Proses eksplorasi ide solusi dari lembar kerja brainstorming
              hingga pembentukan struktur desain sistem.
            </p>
          </div>

          <div className="space-y-16 max-w-4xl mx-auto text-left">
            <div>
              <h4 className="text-xl md:text-2xl font-extrabold text-white mb-6 tracking-tight flex items-center gap-3">
                <span className="text-2xl">🎨</span> High-Fidelity Flow
              </h4>
              <div className="w-full aspect-[21/9] bg-gradient-to-br from-[#4f0b20] to-[#b81040] rounded-[2rem] shadow-2xl border border-rose-500/20 overflow-hidden hover:border-pink-500/40 transition-all duration-500">
                <iframe
                  className="w-full h-full opacity-90 hover:opacity-100 transition-opacity"
                  src="https://embed.figma.com/design/HzzlT0lPCgcQ1OHiitJajm/Untitled?node-id=498-6887&embed-host=share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div>
              <h4 className="text-xl md:text-2xl font-extrabold text-white mb-6 tracking-tight flex items-center gap-3">
                <span className="text-2xl">📈</span> Crazy8
              </h4>
              <div className="w-full aspect-[21/9] bg-gradient-to-br from-[#4f0b20] to-[#b81040] rounded-[2rem] shadow-2xl border border-rose-500/20 overflow-hidden hover:border-pink-500/40 transition-all duration-500">
                <iframe
                  className="w-full h-full opacity-90 hover:opacity-100 transition-opacity"
                  src="https://embed.figma.com/design/HzzlT0lPCgcQ1OHiitJajm/Untitled?node-id=395-2170&embed-host=share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div>
              <h4 className="text-xl md:text-2xl font-extrabold text-white mb-6 tracking-tight flex items-center gap-3">
                <span className="text-2xl">📐</span> Wireframe
              </h4>
              <div className="w-full aspect-[21/9] bg-gradient-to-br from-[#4f0b20] to-[#b81040] rounded-[2rem] shadow-2xl border border-rose-500/20 overflow-hidden hover:border-pink-500/40 transition-all duration-500">
                <iframe
                  className="w-full h-full opacity-90 hover:opacity-100 transition-opacity"
                  src="https://embed.figma.com/design/HzzlT0lPCgcQ1OHiitJajm/Untitled?node-id=438-3068&embed-host=share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div>
              <h4 className="text-xl md:text-2xl font-extrabold text-white mb-6 tracking-tight flex items-center gap-3">
                <span className="text-2xl">🗺️</span> User Flow Diagram
              </h4>
              <div className="w-full aspect-[21/9] bg-gradient-to-br from-[#4f0b20] to-[#b81040] rounded-[2rem] shadow-2xl border border-rose-500/20 overflow-hidden hover:border-pink-500/40 transition-all duration-500">
                <iframe
                  className="w-full h-full opacity-90 hover:opacity-100 transition-opacity"
                  src="https://embed.figma.com/design/HzzlT0lPCgcQ1OHiitJajm/Untitled?node-id=395-2120&embed-host=share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div>
              <h4 className="text-xl md:text-2xl font-extrabold text-white mb-6 tracking-tight flex items-center gap-3">
                <span className="text-2xl">🧪</span> UI Kit & Design System
              </h4>
              <div className="w-full aspect-[21/9] bg-gradient-to-br from-[#4f0b20] to-[#b81040] rounded-[2rem] shadow-2xl border border-rose-500/20 overflow-hidden hover:border-pink-500/40 transition-all duration-500">
                <iframe
                  className="w-full h-full opacity-90 hover:opacity-100 transition-opacity"
                  src="https://embed.figma.com/design/HzzlT0lPCgcQ1OHiitJajm/Untitled?node-id=453-4605&embed-host=share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ================= 4. PROTOTYPE SECTION ================= */}
      <section
        id="prototype"
        className="max-w-5xl relative z-10 mx-auto py-24 px-6 text-center md:text-left border-b border-white/5"
      >
        
        <div className="text-center mb-12">
          <h3 className="text-3xl font-extrabold tracking-tight text-white">
            4. Prototype
          </h3>
          <p className="text-sm md:text-base text-slate-400 mt-3 max-w-2xl mx-auto leading-relaxed">
            Menyatukan seluruh proses riset dan ideasi menjadi desain antarmuka
            fungsional. Berikut adalah cuplikan visualisasi antarmuka utama dari
            aplikasi ini.
          </p>
        </div>

        {/* Figma Interactive Embed */}
        <div className="w-full aspect-[16/9] bg-gradient-to-br from-[#4f0b20] to-[#b81040] rounded-[2rem] shadow-2xl border border-rose-500/20 overflow-hidden hover:border-pink-500/40 transition-all duration-500">
          <iframe
            className="w-full h-full opacity-90 hover:opacity-100 transition-opacity"
            src="https://embed.figma.com/proto/HzzlT0lPCgcQ1OHiitJajm/Untitled?node-id=134-5&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=134%3A5&embed-host=share"
            allowFullScreen
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
          ></iframe>
        </div>
      </section>

      {/* ================= 5. TEST SECTION ================= */}
      <section
        id="test"
        className="max-w-5xl mx-auto py-24 px-6 text-sm text-slate-400 border-b border-white/5 relative"
      >
        <div className="text-center mb-16">
          <h3 className="text-3xl font-extrabold tracking-tight text-white">
            5. Test
          </h3>
          <p className="text-sm md:text-base text-slate-400 mt-3 max-w-2xl mx-auto leading-relaxed">
            Tahap validasi prototipe lewat metode Usability Testing guna
            mengukur efektivitas dan tingkat pemahaman fungsi alur oleh user.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="bg-gradient-to-br from-[#4f0b20] to-[#b81040] p-6 rounded-[2rem] border border-rose-500/20 shadow-2xl text-center hover:-translate-y-1 hover:border-pink-500/40 transition-all duration-300">
            <div className="relative w-full aspect-square bg-white/5 rounded-2xl flex items-center justify-center font-bold text-slate-500 text-xs mb-5 overflow-hidden border border-white/10">
              <Image 
                src={TestingYukkaImg} 
                alt="Foto Sesi UT Penguji - Yukka" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <p className="font-extrabold text-base text-white">
              User Tester Persona
            </p>
            <div className="inline-block rounded-full px-4 py-1.5 bg-pink-500/10 text-pink-400 border border-pink-500/20 text-[10px] font-bold uppercase tracking-widest mt-2 mb-2">
              Mahasiswa / Pelajar Aktif
            </div>
            <p className="italic text-slate-400 mt-4 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
              &ldquo;Bagus, informasi penjemputannya langsung to the point, jadi
              pas buru-buru ke kampus tidak panik.&rdquo;
            </p>
          </div>

          <div className="md:col-span-2 space-y-6">
            <div className="bg-gradient-to-br from-[#4f0b20] to-[#b81040] p-8 rounded-[2rem] border border-rose-500/20 shadow-2xl overflow-x-auto hover:-translate-y-1 hover:border-pink-500/40 transition-all duration-300">
              <div className="inline-block rounded-full px-4 py-1.5 bg-pink-500/10 text-pink-400 border border-pink-500/20 text-[10px] font-bold uppercase tracking-widest mb-6">
                Hasil Pengujian Task Usability
              </div>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-slate-500 font-bold text-xs uppercase tracking-wider">
                    <th className="pb-4">Task</th>
                    <th className="pb-4">Status</th>
                    <th className="pb-4">Catatan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-sm">
                  <tr>
                    <td className="py-5 font-bold text-white">
                      Mengecek Indikator Driver Terdekat
                    </td>
                    <td className="py-5 text-pink-500 font-bold">✓ Berhasil</td>
                    <td className="py-5 text-slate-400">
                      User langsung paham area ketersediaan armada.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-5 font-bold text-white">
                      Input Tujuan Lewat Autosuggestion
                    </td>
                    <td className="py-5 text-pink-500 font-bold">✓ Berhasil</td>
                    <td className="py-5 text-slate-400">
                      Memotong alur pengetikan manual alamat rute harian.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-5 font-bold text-white">
                      Memantau Rentang Estimasi Waktu
                    </td>
                    <td className="py-5 text-pink-500 font-bold">✓ Berhasil</td>
                    <td className="py-5 text-slate-400">
                      Membantu user mengantisipasi jam macet rute jalan.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-gradient-to-br from-[#4f0b20] to-[#b81040] p-8 rounded-[2rem] border border-rose-500/20 shadow-2xl hover:-translate-y-1 hover:border-pink-500/40 transition-all duration-300">
            <span className="font-extrabold text-white block mb-2 text-lg flex items-center gap-2">
              💬 Feedback Pengguna
            </span>
            <p className="text-slate-400 leading-relaxed">
              &ldquo;Tombol aksi pembatalan darurat (Cancel Order) kalau bisa
              dibuat lebih kontras posisinya.&rdquo;
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#4f0b20] to-[#b81040] p-8 rounded-[2rem] border border-rose-500/20 shadow-2xl hover:-translate-y-1 hover:border-pink-500/40 transition-all duration-300">
            <span className="font-extrabold text-white block mb-2 text-lg flex items-center gap-2">
              🛠️ Hasil & Perbaikan
            </span>
            <p className="text-slate-400 leading-relaxed">
              <strong className="text-red-400">Before:</strong> Penempatan
              layout menu pembatalan terselip di dalam sub-menu geser.
            </p>
            <p className="text-slate-400 leading-relaxed mt-2">
              <strong className="text-pink-500">After:</strong> Menyediakan
              akses tombol batalkan instan yang langsung terlihat jelas selama
              pencarian driver.
            </p>
          </div>
        </div>

        <div className="p-8 bg-pink-500/10 text-white border border-pink-500/30 rounded-[2rem] mt-8 shadow-[0_0_40px_rgba(236,72,153,0.15)] text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-rose-600/20 mix-blend-overlay"></div>
          <span className="font-extrabold block mb-3 text-lg relative z-10">
            📌 Kesimpulan Akhir
          </span>
          <p className="text-slate-300 leading-relaxed max-w-3xl mx-auto relative z-10">
            Penerapan rancangan arsitektur antarmuka LajuRide terbukti sukses
            memberikan efisiensi manajemen waktu bepergian yang jauh lebih baik
            serta memangkas kecemasan operasional mobilitas pengguna.
          </p>
        </div>
      </section>

      {/* ================= CREATOR PROFILE SECTION ================= */}
      <section className="w-full bg-[#0D0D0D] py-24 px-6 text-center">
        <div className="max-w-md mx-auto flex flex-col items-center">
          <div className="inline-block rounded-full px-4 py-1.5 bg-white/5 text-slate-400 border border-white/10 text-[10px] font-bold uppercase tracking-widest mb-8">
            Creator Profile
          </div>
          <div className="relative w-32 h-32 bg-white/5 border-4 border-white/10 shadow-[0_0_30px_rgba(236,72,153,0.3)] rounded-full flex items-center justify-center text-slate-500 font-bold text-xs overflow-hidden mb-6">
            <Image 
              src={ProfilPikoImg} 
              alt="Foto Profil - Ficko Daniar Fachryza Putra" 
              fill
              className="object-cover"
              sizes="128px"
            />
          </div>
          <h5 className="font-extrabold text-white text-xl">
            Ficko Daniar Fachryza Putra
          </h5>
          <p className="text-sm text-pink-500 font-medium tracking-wide mt-1">
            NIM. 253307043
          </p>

          <div className="flex gap-6 mt-8 text-sm font-bold text-slate-400">
            <a 
              href="https://www.linkedin.com/in/ficko-daniar-214a91380?utm_source=share_via&utm_content=profile&utm_medium=member_ios" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-pink-500 cursor-pointer transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://www.instagram.com/fickodnr/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-rose-500 cursor-pointer transition-colors"
            >
              Instagram
            </a>
            <a 
              href="https://github.com/Pikoo1922" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white cursor-pointer transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full py-8 text-center text-xs text-slate-500 bg-[#0D0D0D] border-t border-white/5">
        <p>
          © 2026 LajuRide App — Portofolio Praktikum UI/UX Student Assignment
        </p>
      </footer>
    </main>
  );
}
