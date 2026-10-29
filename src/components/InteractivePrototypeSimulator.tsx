import React, { useState } from 'react';
import {
  Smartphone,
  Check,
  ChevronRight,
  ShieldCheck,
  CreditCard,
  User,
  Heart,
  ShoppingBag,
  Sparkles,
  ArrowRight,
  RotateCcw,
  Volume2,
} from 'lucide-react';

export const InteractivePrototypeSimulator: React.FC = () => {
  const [activeFlow, setActiveFlow] = useState<'banking' | 'triage' | 'checkout'>('banking');

  // Banking Prototype State
  const [bankStep, setBankStep] = useState<1 | 2 | 3>(1);
  const [selectedRecipient, setSelectedRecipient] = useState('Sarah Wijaya');
  const [transferAmount, setTransferAmount] = useState('250.000');
  const [isBiometricAuthenticating, setIsBiometricAuthenticating] = useState(false);

  // Triage Prototype State
  const [triageStep, setTriageStep] = useState<1 | 2 | 3>(1);
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>(['Demam Ringan', 'Sakit Kepala']);
  const [painLevel, setPainLevel] = useState<number>(2);

  // Checkout Prototype State
  const [checkoutStep, setCheckoutStep] = useState<1 | 2>(1);
  const [quantity, setQuantity] = useState(1);
  const [selectedShipping, setSelectedShipping] = useState<'express' | 'reguler'>('express');
  const [isPaying, setIsPaying] = useState(false);

  // Audio helper
  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'id-ID';
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleBankBiometric = () => {
    setIsBiometricAuthenticating(true);
    setTimeout(() => {
      setIsBiometricAuthenticating(false);
      setBankStep(3);
    }, 1200);
  };

  const handleCheckoutPay = () => {
    setIsPaying(true);
    setTimeout(() => {
      setIsPaying(false);
      setCheckoutStep(2);
    }, 1000);
  };

  return (
    <section id="prototipe-interaktif" className="border-b border-zinc-200/80 py-20 dark:border-zinc-800/80">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              <Smartphone className="h-3.5 w-3.5" />
              <span>Prototipe Nyata Interaktif</span>
              <span aria-hidden="true">·</span>
              <span>Uji Langsung di Browser</span>
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl dark:text-white">
              Simulator Prototipe Antarmuka Intuitif
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Cobalah langsung micro-flow hasil riset UX Hilga pada frame simulasi perangkat di bawah ini. Rasakan bagaimana kemudahan aksesibilitas dipadukan dengan kecepatan konversi.
            </p>
          </div>

          {/* Prototype Selector Controls */}
          <div className="flex items-center gap-1 rounded-lg border border-zinc-200 bg-zinc-100 p-1 dark:border-zinc-800 dark:bg-zinc-900 shrink-0">
            <button
              onClick={() => setActiveFlow('banking')}
              className={`rounded-md px-3.5 py-1.5 text-xs font-medium transition-all ${
                activeFlow === 'banking'
                  ? 'bg-white text-zinc-950 shadow-xs dark:bg-zinc-800 dark:text-white'
                  : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
              }`}
            >
              1. Transfer Inklusif
            </button>
            <button
              onClick={() => setActiveFlow('triage')}
              className={`rounded-md px-3.5 py-1.5 text-xs font-medium transition-all ${
                activeFlow === 'triage'
                  ? 'bg-white text-zinc-950 shadow-xs dark:bg-zinc-800 dark:text-white'
                  : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
              }`}
            >
              2. Triase Medis
            </button>
            <button
              onClick={() => setActiveFlow('checkout')}
              className={`rounded-md px-3.5 py-1.5 text-xs font-medium transition-all ${
                activeFlow === 'checkout'
                  ? 'bg-white text-zinc-950 shadow-xs dark:bg-zinc-800 dark:text-white'
                  : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
              }`}
            >
              3. Checkout 1-Ketuk
            </button>
          </div>
        </div>

        {/* Prototype Workbench */}
        <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          {/* Left Context & UX Rationale (5 cols) */}
          <div className="flex flex-col justify-center lg:col-span-5">
            {activeFlow === 'banking' && (
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                  Studi Kasus Fluent Bank
                </span>
                <h3 className="mt-1 text-xl font-bold text-zinc-900 dark:text-white">
                  Alur Transfer Ramah Segala Usia
                </h3>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                  Masalah utama perbankan digital adalah ketakutan pengguna salah mentransfer uang akibat teks kecil dan keypad yang padat. Alur ini menyajikan konfirmasi nominal besar, panduan audio, dan autentikasi biometrik tanpa kepanikan PIN terblokir.
                </p>

                <div className="mt-6 space-y-3">
                  <div className="rounded-lg border border-zinc-200 bg-white p-3.5 dark:border-zinc-800 dark:bg-zinc-900/60">
                    <span className="text-xs font-semibold text-zinc-900 dark:text-white">
                      Prinsip Aksesibilitas Diterapkan:
                    </span>
                    <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                      Target sentuh 52px, rasio kontras 8.4:1, serta verifikasi nama penerima dengan font tebal berjenjang.
                    </p>
                  </div>
                  <div className="rounded-lg border border-zinc-200 bg-white p-3.5 dark:border-zinc-800 dark:bg-zinc-900/60">
                    <span className="text-xs font-semibold text-zinc-900 dark:text-white">
                      Hasil Konversi:
                    </span>
                    <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                      Keberhasilan transaksi pertama kali mencapai 98.4% tanpa satupun panggilan ke call center bank.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <button
                    onClick={() => {
                      setBankStep(1);
                      setTransferAmount('250.000');
                    }}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    <span>Mulai Ulang Alur</span>
                  </button>
                  <span className="text-xs text-zinc-500">Status: Langkah {bankStep} dari 3</span>
                </div>
              </div>
            )}

            {activeFlow === 'triage' && (
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Studi Kasus Mediconnect
                </span>
                <h3 className="mt-1 text-xl font-bold text-zinc-900 dark:text-white">
                  Triase Gejala Pasien yang Menenangkan
                </h3>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                  Saat sakit, pasien tidak sanggup membaca istilah medis latin yang rumit. Antarmuka ini menggunakan bahasa percakapan sehari-hari dan rekomendasi spesialis yang instan dalam 90 detik.
                </p>

                <div className="mt-6 space-y-3">
                  <div className="rounded-lg border border-zinc-200 bg-white p-3.5 dark:border-zinc-800 dark:bg-zinc-900/60">
                    <span className="text-xs font-semibold text-zinc-900 dark:text-white">
                      Prinsip Aksesibilitas Diterapkan:
                    </span>
                    <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                      Warna sage/mint yang menenangkan denyut nadi, micro-copy tanpa nada intimidasi, dan navigasi jempol satu tangan.
                    </p>
                  </div>
                  <div className="rounded-lg border border-zinc-200 bg-white p-3.5 dark:border-zinc-800 dark:bg-zinc-900/60">
                    <span className="text-xs font-semibold text-zinc-900 dark:text-white">
                      Hasil Konversi:
                    </span>
                    <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                      Penyelesaian janji temu konsultasi dokter naik +68% dalam 30 hari pertama implementasi.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <button
                    onClick={() => setTriageStep(1)}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    <span>Mulai Ulang Alur</span>
                  </button>
                  <span className="text-xs text-zinc-500">Status: Langkah {triageStep} dari 3</span>
                </div>
              </div>
            )}

            {activeFlow === 'checkout' && (
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  Studi Kasus Nexa Market
                </span>
                <h3 className="mt-1 text-xl font-bold text-zinc-900 dark:text-white">
                  Checkout 1-Ketukan Tanpa Kejutan Biaya
                </h3>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                  Meniadakan 5 halaman form checkout yang merepotkan. Semua opsi esensial (alamat, ongkir, voucher, metode bayar) disatukan dalam satu kanvas geser responsif dengan perhitungan total transparan.
                </p>

                <div className="mt-6 space-y-3">
                  <div className="rounded-lg border border-zinc-200 bg-white p-3.5 dark:border-zinc-800 dark:bg-zinc-900/60">
                    <span className="text-xs font-semibold text-zinc-900 dark:text-white">
                      Prinsip Aksesibilitas Diterapkan:
                    </span>
                    <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                      Semua elemen harga menggunakan angka tabel monospaced, tombol aksi selebar layar, dan zero hidden fees.
                    </p>
                  </div>
                  <div className="rounded-lg border border-zinc-200 bg-white p-3.5 dark:border-zinc-800 dark:bg-zinc-900/60">
                    <span className="text-xs font-semibold text-zinc-900 dark:text-white">
                      Hasil Konversi:
                    </span>
                    <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                      Cart abandonment berkurang 54% dan waktu transaksi dipangkas dari 140 detik ke 50 detik.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <button
                    onClick={() => {
                      setCheckoutStep(1);
                      setQuantity(1);
                    }}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    <span>Mulai Ulang Alur</span>
                  </button>
                  <span className="text-xs text-zinc-500">Status: Langkah {checkoutStep} dari 2</span>
                </div>
              </div>
            )}
          </div>

          {/* Right Smartphone Simulator Device (7 cols) */}
          <div className="flex justify-center lg:col-span-7">
            <div className="relative w-full max-w-[360px] rounded-[40px] border-[10px] border-zinc-800 bg-white p-5 shadow-2xl dark:border-zinc-800 dark:bg-zinc-950">
              {/* Phone Speaker & Camera Notch */}
              <div className="absolute top-2 left-1/2 h-4 w-28 -translate-x-1/2 rounded-full bg-zinc-800 flex items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-zinc-600 mr-2" />
                <div className="h-1 w-10 rounded-full bg-zinc-700" />
              </div>

              {/* Screen Inner Container */}
              <div className="mt-4 min-h-[520px] flex flex-col justify-between">
                {/* FLOW 1: BANKING PROTOTYPE */}
                {activeFlow === 'banking' && (
                  <div className="flex flex-col justify-between h-full">
                    {bankStep === 1 && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between border-b border-zinc-100 pb-3 dark:border-zinc-800">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                              Fluent Pay
                            </span>
                            <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                              Kirim Uang Cepat
                            </h4>
                          </div>
                          <button
                            onClick={() =>
                              speakText(`Kirim uang kepada ${selectedRecipient} sebesar Rp ${transferAmount}`)
                            }
                            title="Dengarkan detail layar"
                            className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-50 text-purple-600 dark:bg-purple-950 dark:text-purple-300"
                          >
                            <Volume2 className="h-3.5 w-3.5" />
                          </button>
                        </div>

                        <div>
                          <label className="text-[11px] font-semibold text-zinc-600 dark:text-zinc-400">
                            Pilih Rekening Tujuan:
                          </label>
                          <div className="mt-1.5 space-y-1.5">
                            {[
                              { name: 'Sarah Wijaya', bank: 'BCA · 8820 1928 33', tag: 'Sering' },
                              { name: 'Ibu Ratna (Mama)', bank: 'Mandiri · 1220 0049 11', tag: 'Keluarga' },
                              { name: 'Pemilik Kos (Bpk. Joko)', bank: 'BNI · 0492 8172 00', tag: 'Tagihan' },
                            ].map((rec) => (
                              <button
                                key={rec.name}
                                onClick={() => setSelectedRecipient(rec.name)}
                                className={`w-full flex items-center justify-between p-2.5 rounded-xl border text-left transition-all ${
                                  selectedRecipient === rec.name
                                    ? 'border-purple-600 bg-purple-50/60 dark:border-purple-400 dark:bg-purple-950/40'
                                    : 'border-zinc-200 dark:border-zinc-800'
                                }`}
                              >
                                <div>
                                  <p className="text-xs font-bold text-zinc-900 dark:text-white">{rec.name}</p>
                                  <p className="text-[10px] text-zinc-500">{rec.bank}</p>
                                </div>
                                <span className="text-[10px] font-medium text-zinc-400">{rec.tag}</span>
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="text-[11px] font-semibold text-zinc-600 dark:text-zinc-400">
                            Nominal Transfer (Rp):
                          </label>
                          <div className="mt-1 rounded-xl border border-zinc-300 p-2 text-center dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900">
                            <span className="font-mono text-xl font-bold text-zinc-900 dark:text-white">
                              Rp {transferAmount}
                            </span>
                          </div>

                          <div className="mt-2 grid grid-cols-3 gap-1.5">
                            {['100.000', '250.000', '500.000'].map((amt) => (
                              <button
                                key={amt}
                                onClick={() => setTransferAmount(amt)}
                                className={`py-1 text-xs rounded border font-mono font-medium ${
                                  transferAmount === amt
                                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                                    : 'border-zinc-200 text-zinc-600 dark:border-zinc-800 dark:text-zinc-400'
                                }`}
                              >
                                {amt}
                              </button>
                            ))}
                          </div>
                        </div>

                        <button
                          onClick={() => setBankStep(2)}
                          className="w-full mt-4 rounded-xl bg-zinc-900 py-3 text-xs font-bold text-white transition-transform active:scale-95 dark:bg-zinc-100 dark:text-zinc-900"
                        >
                          Lanjut Konfirmasi
                        </button>
                      </div>
                    )}

                    {bankStep === 2 && (
                      <div className="space-y-4">
                        <div className="text-center py-2 border-b border-zinc-100 dark:border-zinc-800">
                          <span className="text-[10px] text-zinc-400">Konfirmasi Transaksi</span>
                          <h4 className="text-base font-bold text-zinc-900 dark:text-white">
                            Rp {transferAmount}
                          </h4>
                          <p className="text-xs text-purple-600 dark:text-purple-400 font-semibold mt-0.5">
                            Ke: {selectedRecipient}
                          </p>
                        </div>

                        <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-3 space-y-2 text-xs dark:border-zinc-800 dark:bg-zinc-900/60">
                          <div className="flex justify-between">
                            <span className="text-zinc-500">Biaya Admin:</span>
                            <span className="font-semibold text-emerald-600">Rp 0 (Gratis)</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-zinc-500">Waktu Proses:</span>
                            <span className="font-semibold text-zinc-800 dark:text-zinc-200">Detik ini juga</span>
                          </div>
                        </div>

                        {/* Interactive Biometric button */}
                        <div className="py-4 text-center">
                          <button
                            onClick={handleBankBiometric}
                            disabled={isBiometricAuthenticating}
                            className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 transition-all ${
                              isBiometricAuthenticating
                                ? 'border-purple-600 bg-purple-100 animate-pulse'
                                : 'border-zinc-300 bg-zinc-100 hover:border-purple-500 dark:border-zinc-700 dark:bg-zinc-800'
                            }`}
                            aria-label="Sentuh untuk otentikasi biometrik"
                          >
                            <ShieldCheck className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                          </button>
                          <p className="mt-2 text-xs font-bold text-zinc-800 dark:text-zinc-200">
                            {isBiometricAuthenticating ? 'Memverifikasi Sidik Jari...' : 'Sentuh Sensor untuk Bayar'}
                          </p>
                          <p className="text-[10px] text-zinc-400">Enkripsi aman WCAG AAA</p>
                        </div>

                        <button
                          onClick={() => setBankStep(1)}
                          className="w-full text-center text-xs text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
                        >
                          Ubah Nominal
                        </button>
                      </div>
                    )}

                    {bankStep === 3 && (
                      <div className="text-center py-6 space-y-4">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
                          <Check className="h-7 w-7" />
                        </div>

                        <div>
                          <span className="text-[10px] uppercase font-bold text-emerald-600">
                            Transfer Berhasil
                          </span>
                          <h4 className="text-lg font-bold text-zinc-900 dark:text-white">
                            Rp {transferAmount}
                          </h4>
                          <p className="text-xs text-zinc-500 mt-1">
                            Terkirim ke {selectedRecipient}
                          </p>
                        </div>

                        <div className="rounded-xl border border-dashed border-zinc-200 p-3 text-left text-[11px] text-zinc-500 dark:border-zinc-800">
                          <div className="flex justify-between">
                            <span>No. Referensi:</span>
                            <span className="font-mono text-zinc-800 dark:text-zinc-200">FL-9912048</span>
                          </div>
                          <div className="flex justify-between mt-1">
                            <span>Waktu:</span>
                            <span>Hari ini, 09:42 WIB</span>
                          </div>
                        </div>

                        <button
                          onClick={() => setBankStep(1)}
                          className="w-full rounded-xl bg-zinc-900 py-3 text-xs font-bold text-white dark:bg-zinc-100 dark:text-zinc-900"
                        >
                          Kirim Uang Lagi
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* FLOW 2: HEALTH TRIAGE PROTOTYPE */}
                {activeFlow === 'triage' && (
                  <div className="flex flex-col justify-between h-full">
                    {triageStep === 1 && (
                      <div className="space-y-4">
                        <div className="border-b border-zinc-100 pb-3 dark:border-zinc-800">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                            Mediconnect Triage
                          </span>
                          <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                            Apa yang Anda rasakan hari ini?
                          </h4>
                          <p className="text-[11px] text-zinc-500">Pilih gejala yang sesuai:</p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {[
                            'Demam Ringan',
                            'Sakit Kepala',
                            'Batuk & Pilek',
                            'Nyeri Tenggorokan',
                            'Mual / Lambung',
                            'Kelelahan Ekstrem',
                          ].map((sym) => {
                            const isSelected = selectedSymptoms.includes(sym);
                            return (
                              <button
                                key={sym}
                                onClick={() => {
                                  if (isSelected) {
                                    setSelectedSymptoms(selectedSymptoms.filter((s) => s !== sym));
                                  } else {
                                    setSelectedSymptoms([...selectedSymptoms, sym]);
                                  }
                                }}
                                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                                  isSelected
                                    ? 'bg-emerald-600 text-white shadow-xs'
                                    : 'border border-zinc-200 text-zinc-700 hover:border-zinc-300 dark:border-zinc-800 dark:text-zinc-300'
                                }`}
                              >
                                {sym}
                              </button>
                            );
                          })}
                        </div>

                        <div className="pt-2">
                          <div className="flex justify-between text-xs">
                            <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                              Tingkat Kenyamanan:
                            </span>
                            <span className="font-mono text-zinc-500">
                              {painLevel === 1 ? 'Ringan' : painLevel === 2 ? 'Sedang' : 'Berat'}
                            </span>
                          </div>
                          <input
                            type="range"
                            min="1"
                            max="3"
                            value={painLevel}
                            onChange={(e) => setPainLevel(parseInt(e.target.value))}
                            className="mt-2 w-full accent-emerald-600 cursor-pointer"
                          />
                        </div>

                        <button
                          onClick={() => setTriageStep(2)}
                          disabled={selectedSymptoms.length === 0}
                          className="w-full rounded-xl bg-emerald-600 py-3 text-xs font-bold text-white transition-all hover:bg-emerald-700 disabled:opacity-50"
                        >
                          Temukan Rekomendasi Dokter
                        </button>
                      </div>
                    )}

                    {triageStep === 2 && (
                      <div className="space-y-4">
                        <div className="border-b border-zinc-100 pb-2 dark:border-zinc-800">
                          <span className="text-[10px] text-emerald-600 font-bold uppercase">
                            Hasil Analisis Gejala
                          </span>
                          <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                            Dokter Spesialis yang Cocok
                          </h4>
                          <p className="text-[11px] text-zinc-500">Berdasarkan gejala {selectedSymptoms.join(', ')}</p>
                        </div>

                        {/* Matched Doctor Card */}
                        <div className="rounded-xl border border-emerald-300 bg-emerald-50/40 p-3.5 dark:border-emerald-800 dark:bg-emerald-950/20">
                          <div className="flex items-start gap-3">
                            <div className="h-10 w-10 rounded-full bg-emerald-200 flex items-center justify-center font-bold text-emerald-800 shrink-0">
                              DR
                            </div>
                            <div>
                              <p className="text-xs font-bold text-zinc-900 dark:text-white">
                                dr. Sarah Anindita, Sp.PD
                              </p>
                              <p className="text-[10px] text-zinc-500">Spesialis Penyakit Dalam &middot; 9 Thn Pengalaman</p>
                              <div className="mt-1 flex items-center gap-2">
                                <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 dark:text-emerald-300">
                                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                                  Online Siap Konsultasi
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="rounded-xl border border-zinc-200 p-3 text-xs space-y-1.5 dark:border-zinc-800">
                          <div className="flex justify-between">
                            <span className="text-zinc-500">Biaya Sesi 30 Menit:</span>
                            <span className="font-bold font-mono text-zinc-900 dark:text-white">Rp 85.000</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-zinc-500">Resep Digital:</span>
                            <span className="text-emerald-600 font-semibold">Tercakup Otomatis</span>
                          </div>
                        </div>

                        <button
                          onClick={() => setTriageStep(3)}
                          className="w-full rounded-xl bg-zinc-900 py-3 text-xs font-bold text-white transition-all active:scale-95 dark:bg-zinc-100 dark:text-zinc-900"
                        >
                          Mulai Konsultasi Sekarang
                        </button>

                        <button
                          onClick={() => setTriageStep(1)}
                          className="w-full text-center text-xs text-zinc-500"
                        >
                          Ubah Gejala
                        </button>
                      </div>
                    )}

                    {triageStep === 3 && (
                      <div className="text-center py-6 space-y-4">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
                          <Check className="h-7 w-7" />
                        </div>

                        <div>
                          <span className="text-[10px] uppercase font-bold text-emerald-600">
                            Ruang Konsultasi Siap
                          </span>
                          <h4 className="text-base font-bold text-zinc-900 dark:text-white">
                            Terhubung dengan dr. Sarah Anindita
                          </h4>
                          <p className="text-xs text-zinc-500 mt-1">
                            Panggilan video terenkripsi aman telah dimulai.
                          </p>
                        </div>

                        <button
                          onClick={() => setTriageStep(1)}
                          className="w-full rounded-xl bg-zinc-900 py-3 text-xs font-bold text-white dark:bg-zinc-100 dark:text-zinc-900"
                        >
                          Selesaikan Sesi
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* FLOW 3: CHECKOUT PROTOTYPE */}
                {activeFlow === 'checkout' && (
                  <div className="flex flex-col justify-between h-full">
                    {checkoutStep === 1 && (
                      <div className="space-y-3.5">
                        <div className="border-b border-zinc-100 pb-2 dark:border-zinc-800">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600">
                            Nexa Instant Checkout
                          </span>
                          <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                            Ringkasan Pesanan (1 Layar)
                          </h4>
                        </div>

                        {/* Product Card */}
                        <div className="flex items-center justify-between rounded-xl border border-zinc-200 p-2.5 dark:border-zinc-800">
                          <div className="flex items-center gap-2.5">
                            <div className="h-10 w-10 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                              <ShoppingBag className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-zinc-900 dark:text-white">
                                Ergonomic Keypad
                              </p>
                              <p className="text-[10px] text-zinc-500 font-mono">Rp 349.000</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setQuantity(Math.max(1, quantity - 1))}
                              className="h-6 w-6 rounded border border-zinc-200 text-xs font-bold dark:border-zinc-700"
                            >
                              -
                            </button>
                            <span className="text-xs font-mono font-bold">{quantity}</span>
                            <button
                              onClick={() => setQuantity(quantity + 1)}
                              className="h-6 w-6 rounded border border-zinc-200 text-xs font-bold dark:border-zinc-700"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Shipping Choice */}
                        <div>
                          <label className="text-[11px] font-semibold text-zinc-600 dark:text-zinc-400">
                            Metode Pengiriman:
                          </label>
                          <div className="mt-1 grid grid-cols-2 gap-2">
                            <button
                              onClick={() => setSelectedShipping('express')}
                              className={`p-2 rounded-lg border text-left text-xs ${
                                selectedShipping === 'express'
                                  ? 'border-purple-600 bg-purple-50/50 dark:border-purple-400 dark:bg-purple-950/30'
                                  : 'border-zinc-200 dark:border-zinc-800'
                              }`}
                            >
                              <span className="font-bold block text-zinc-900 dark:text-white">Express (1 Hari)</span>
                              <span className="text-[10px] font-mono text-zinc-500">Rp 18.000</span>
                            </button>
                            <button
                              onClick={() => setSelectedShipping('reguler')}
                              className={`p-2 rounded-lg border text-left text-xs ${
                                selectedShipping === 'reguler'
                                  ? 'border-purple-600 bg-purple-50/50 dark:border-purple-400 dark:bg-purple-950/30'
                                  : 'border-zinc-200 dark:border-zinc-800'
                              }`}
                            >
                              <span className="font-bold block text-zinc-900 dark:text-white">Reguler (2-3 Hari)</span>
                              <span className="text-[10px] font-mono text-zinc-500">Rp 10.000</span>
                            </button>
                          </div>
                        </div>

                        {/* Total calculation with zero hidden fees */}
                        <div className="rounded-xl bg-zinc-50 p-2.5 space-y-1 text-xs border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800">
                          <div className="flex justify-between text-zinc-500">
                            <span>Subtotal ({quantity} item):</span>
                            <span className="font-mono">Rp {(349000 * quantity).toLocaleString('id-ID')}</span>
                          </div>
                          <div className="flex justify-between text-zinc-500">
                            <span>Ongkos Kirim:</span>
                            <span className="font-mono">
                              Rp {selectedShipping === 'express' ? '18.000' : '10.000'}
                            </span>
                          </div>
                          <div className="flex justify-between pt-1 border-t border-zinc-200 dark:border-zinc-700 font-bold text-zinc-900 dark:text-white">
                            <span>Total Tagihan:</span>
                            <span className="font-mono text-sm text-purple-600 dark:text-purple-400">
                              Rp {(349000 * quantity + (selectedShipping === 'express' ? 18000 : 10000)).toLocaleString('id-ID')}
                            </span>
                          </div>
                        </div>

                        <button
                          onClick={handleCheckoutPay}
                          disabled={isPaying}
                          className="w-full rounded-xl bg-zinc-900 py-3 text-xs font-bold text-white transition-all active:scale-95 dark:bg-zinc-100 dark:text-zinc-900 flex items-center justify-center gap-2"
                        >
                          {isPaying ? (
                            <span>Memproses Pembayaran...</span>
                          ) : (
                            <>
                              <span>Bayar &middot; 1 Sentuhan Instan</span>
                              <ArrowRight className="h-3.5 w-3.5" />
                            </>
                          )}
                        </button>
                      </div>
                    )}

                    {checkoutStep === 2 && (
                      <div className="text-center py-6 space-y-4">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
                          <Check className="h-7 w-7" />
                        </div>

                        <div>
                          <span className="text-[10px] uppercase font-bold text-emerald-600">
                            Pesanan Berhasil Dikonfirmasi
                          </span>
                          <h4 className="text-base font-bold text-zinc-900 dark:text-white">
                            Terima Kasih atas Pembelian Anda!
                          </h4>
                          <p className="text-xs text-zinc-500 mt-1">
                            Resi pengiriman dikirim otomatis ke email Anda.
                          </p>
                        </div>

                        <button
                          onClick={() => setCheckoutStep(1)}
                          className="w-full rounded-xl bg-zinc-900 py-3 text-xs font-bold text-white dark:bg-zinc-100 dark:text-zinc-900"
                        >
                          Belanja Lagi
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Home indicator bar at bottom */}
              <div className="mt-4 flex justify-center">
                <div className="h-1 w-24 rounded-full bg-zinc-400/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
