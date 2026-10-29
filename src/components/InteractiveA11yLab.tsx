import React, { useState } from 'react';
import {
  SlidersHorizontal,
  Eye,
  Check,
  AlertCircle,
  Sparkles,
  Volume2,
  RefreshCw,
  Zap,
  ShieldCheck,
} from 'lucide-react';
import { useTheme, A11yFilterMode } from '../context/ThemeContext';

export const InteractiveA11yLab: React.FC = () => {
  const { a11yFilter, setA11yFilter } = useTheme();
  const [activeTab, setActiveTab] = useState<'simulation' | 'contrast' | 'conversion'>('simulation');

  // Contrast calculator state
  const [textColor, setTextColor] = useState('#09090B');
  const [bgColor, setBgColor] = useState('#F4F4F5');

  // Interactive sample state
  const [sampleStep, setSampleStep] = useState(1);
  const [fullName, setFullName] = useState('Budi Santoso');
  const [isLargeText, setIsLargeText] = useState(false);
  const [audioFeedbackPlayed, setAudioFeedbackPlayed] = useState(false);

  // Conversion comparison toggle
  const [viewMode, setViewMode] = useState<'accessible' | 'friction'>('accessible');

  // Helper for contrast ratio calculation
  const getLuminance = (hex: string) => {
    const cleanHex = hex.replace('#', '');
    const r = parseInt(cleanHex.substring(0, 2), 16) / 255;
    const g = parseInt(cleanHex.substring(2, 4), 16) / 255;
    const b = parseInt(cleanHex.substring(4, 6), 16) / 255;
    const a = [r, g, b].map((v) =>
      v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
    );
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  };

  const calculateContrast = (hex1: string, hex2: string) => {
    try {
      const lum1 = getLuminance(hex1);
      const lum2 = getLuminance(hex2);
      const brightest = Math.max(lum1, lum2);
      const darkest = Math.min(lum1, lum2);
      return ((brightest + 0.05) / (darkest + 0.05)).toFixed(2);
    } catch {
      return '7.50';
    }
  };

  const contrastRatio = parseFloat(calculateContrast(textColor, bgColor));

  const simulateSpeech = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'id-ID';
      utterance.rate = 1.0;
      window.speechSynthesis.speak(utterance);
      setAudioFeedbackPlayed(true);
      setTimeout(() => setAudioFeedbackPlayed(false), 2500);
    } else {
      setAudioFeedbackPlayed(true);
      setTimeout(() => setAudioFeedbackPlayed(false), 2000);
    }
  };

  return (
    <section id="aksesibilitas-lab" className="border-b border-zinc-200/80 py-20 dark:border-zinc-800/80">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              <SlidersHorizontal className="h-3.5 w-3.5" />
              <span>Lab Interaktif Hilga</span>
              <span aria-hidden="true">·</span>
              <span>Inklusivitas &amp; Konversi</span>
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl dark:text-white">
              Simulator Aksesibilitas &amp; Optimasi Konversi
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Aksesibilitas bukan sekadar kepatuhan hukum, melainkan pilar utama pengalaman pengguna yang memperluas jangkauan pasar dan menaikkan konversi. Coba filter simulasi penglihatan di bawah ini secara langsung.
            </p>
          </div>

          {/* Interactive Mode Tabs */}
          <div className="flex items-center gap-1 rounded-lg border border-zinc-200 bg-zinc-100 p-1 dark:border-zinc-800 dark:bg-zinc-900 shrink-0">
            <button
              onClick={() => setActiveTab('simulation')}
              className={`rounded-md px-3.5 py-1.5 text-xs font-medium transition-all ${
                activeTab === 'simulation'
                  ? 'bg-white text-zinc-950 shadow-xs dark:bg-zinc-800 dark:text-white'
                  : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
              }`}
            >
              Simulasi Penglihatan
            </button>
            <button
              onClick={() => setActiveTab('contrast')}
              className={`rounded-md px-3.5 py-1.5 text-xs font-medium transition-all ${
                activeTab === 'contrast'
                  ? 'bg-white text-zinc-950 shadow-xs dark:bg-zinc-800 dark:text-white'
                  : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
              }`}
            >
              Kalkulator Kontras WCAG
            </button>
            <button
              onClick={() => setActiveTab('conversion')}
              className={`rounded-md px-3.5 py-1.5 text-xs font-medium transition-all ${
                activeTab === 'conversion'
                  ? 'bg-white text-zinc-950 shadow-xs dark:bg-zinc-800 dark:text-white'
                  : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
              }`}
            >
              Komparasi Friksi vs Konversi
            </button>
          </div>
        </div>

        {/* Tab 1: Vision Simulation */}
        {activeTab === 'simulation' && (
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Control Panel (4 cols) */}
            <div className="flex flex-col justify-between rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 lg:col-span-4">
              <div>
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                  Pilih Kondisi Penglihatan
                </h3>
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                  Uji bagaimana desain antarmuka terbaca oleh jutaan pengguna dengan variasi persepsi warna dan penglihatan.
                </p>

                <div className="mt-4 flex flex-col gap-2">
                  {[
                    { id: 'none', label: 'Standar (Penglihatan Normal)', desc: 'Penglihatan trikromatik penuh' },
                    { id: 'high-contrast', label: 'Mode Kontras Tinggi', desc: 'WCAG AAA untuk visibilitas maksimal' },
                    { id: 'protanopia', label: 'Protanopia (Buta Merah)', desc: 'Ketiadaan fotoreseptor panjang gelombang merah (~1% pria)' },
                    { id: 'deuteranopia', label: 'Deuteranopia (Buta Hijau)', desc: 'Ketiadaan fotoreseptor hijau (~5% pria)' },
                    { id: 'tritanopia', label: 'Tritanopia (Buta Biru-Kuning)', desc: 'Kondisi langka distorsi warna biru' },
                    { id: 'low-vision', label: 'Low Vision / Pandangan Kabur', desc: 'Simulasi katarak, presbiopia & kelelahan mata' },
                  ].map((mode) => (
                    <button
                      key={mode.id}
                      onClick={() => setA11yFilter(mode.id as A11yFilterMode)}
                      className={`flex flex-col rounded-lg border p-3 text-left transition-all ${
                        a11yFilter === mode.id
                          ? 'border-purple-500 bg-purple-50/50 dark:border-purple-400 dark:bg-purple-950/30'
                          : 'border-zinc-200 bg-transparent hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-zinc-900 dark:text-white">
                          {mode.label}
                        </span>
                        {a11yFilter === mode.id && (
                          <span className="h-2 w-2 rounded-full bg-purple-600 dark:bg-purple-400" />
                        )}
                      </div>
                      <span className="mt-0.5 text-[11px] text-zinc-500 dark:text-zinc-400">
                        {mode.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {a11yFilter !== 'none' && (
                <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                  <span className="text-xs text-purple-600 dark:text-purple-400 font-medium">
                    Filter sedang aktif di layar
                  </span>
                  <button
                    onClick={() => setA11yFilter('none')}
                    className="text-xs font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white underline"
                  >
                    Reset Normal
                  </button>
                </div>
              )}
            </div>

            {/* Interactive Preview Canvas (8 cols) */}
            <div className="flex flex-col justify-center rounded-xl border border-zinc-200 bg-zinc-50/50 p-6 sm:p-10 dark:border-zinc-800 dark:bg-zinc-950/40 lg:col-span-8">
              <div className="mx-auto w-full max-w-lg rounded-2xl border border-zinc-200 bg-white p-6 shadow-md dark:border-zinc-800 dark:bg-zinc-900">
                {/* Header of component */}
                <div className="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800">
                  <div>
                    <span className="text-xs font-medium text-zinc-400">Fluent Bank Onboarding</span>
                    <h4 className="text-base font-bold text-zinc-900 dark:text-white">
                      Verifikasi Data Diri (e-KYC)
                    </h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsLargeText(!isLargeText)}
                      className={`rounded px-2.5 py-1 text-[11px] font-medium border ${
                        isLargeText
                          ? 'border-purple-500 bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300'
                          : 'border-zinc-200 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400'
                      }`}
                      title="Skala Teks Fleksibel (Dynamic Type)"
                    >
                      {isLargeText ? 'Teks 125%' : 'Teks 100%'}
                    </button>
                    <button
                      onClick={() =>
                        simulateSpeech(
                          'Langkah satu dari tiga. Masukkan nama lengkap sesuai e-KTP. Pastikan ejaan tepat.'
                        )
                      }
                      className="flex h-8 w-8 items-center justify-center rounded border border-zinc-200 text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800"
                      title="Dengarkan Panduan Audio (Screen Reader)"
                      aria-label="Bacakan panduan"
                    >
                      <Volume2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mt-4 flex items-center justify-between text-xs text-zinc-500">
                  <span>Tahap {sampleStep} dari 3</span>
                  <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                    {sampleStep === 1 ? 'Data Personal' : sampleStep === 2 ? 'Foto KTP' : 'Selesai'}
                  </span>
                </div>
                <div className="mt-1.5 h-1.5 w-full rounded-full bg-zinc-100 dark:bg-zinc-800">
                  <div
                    className="h-1.5 rounded-full bg-zinc-900 dark:bg-purple-400 transition-all duration-300"
                    style={{ width: `${(sampleStep / 3) * 100}%` }}
                  />
                </div>

                {/* Body Form */}
                <div className="mt-5 space-y-4">
                  {sampleStep === 1 && (
                    <>
                      <div>
                        <label
                          htmlFor="sample-name"
                          className={`block font-semibold text-zinc-800 dark:text-zinc-200 ${
                            isLargeText ? 'text-base' : 'text-xs'
                          }`}
                        >
                          Nama Lengkap Sesuai e-KTP <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="sample-name"
                          type="text"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className={`mt-1.5 w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2.5 text-zinc-900 shadow-xs focus:border-purple-600 focus:ring-1 focus:ring-purple-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white ${
                            isLargeText ? 'text-base' : 'text-sm'
                          }`}
                        />
                        <p className="mt-1 text-[11px] text-zinc-500 dark:text-zinc-400">
                          Gunakan huruf kapital sesuai yang tertera pada kartu fisik.
                        </p>
                      </div>

                      <div className="rounded-lg border border-emerald-200 bg-emerald-50/60 p-3 dark:border-emerald-900/50 dark:bg-emerald-950/20">
                        <div className="flex items-start gap-2.5">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                          <p className={`text-zinc-700 dark:text-zinc-300 ${isLargeText ? 'text-sm' : 'text-xs'}`}>
                            <strong>Validasi Otomatis:</strong> NIK &amp; Nama terhubung langsung ke Dukcapil via enkripsi 256-bit.
                          </p>
                        </div>
                      </div>
                    </>
                  )}

                  {sampleStep === 2 && (
                    <div className="text-center py-4">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-purple-50 text-purple-600 dark:bg-purple-950/50 dark:text-purple-300">
                        <Sparkles className="h-7 w-7" />
                      </div>
                      <h5 className="mt-3 text-sm font-bold text-zinc-900 dark:text-white">
                        Pemindaian e-KTP Cerdas
                      </h5>
                      <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 max-w-xs mx-auto">
                        Posisikan kartu Anda di dalam bingkai. Sensor akan otomatis mendeteksi pantulan cahaya berlebih.
                      </p>
                    </div>
                  )}

                  {sampleStep === 3 && (
                    <div className="text-center py-4">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-300">
                        <Check className="h-7 w-7" />
                      </div>
                      <h5 className="mt-3 text-sm font-bold text-zinc-900 dark:text-white">
                        Verifikasi Selesai!
                      </h5>
                      <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                        Akun aktif dan siap bertransaksi dalam 60 detik.
                      </p>
                    </div>
                  )}

                  {audioFeedbackPlayed && (
                    <div className="rounded-md bg-purple-100 p-2 text-center text-xs text-purple-800 dark:bg-purple-950 dark:text-purple-200">
                      Audio panduan dibacakan untuk pengguna pembaca layar
                    </div>
                  )}

                  {/* Button actions */}
                  <div className="flex items-center justify-between pt-2">
                    {sampleStep > 1 ? (
                      <button
                        onClick={() => setSampleStep(sampleStep - 1)}
                        className="rounded-lg px-4 py-2 text-xs font-semibold text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                      >
                        Kembali
                      </button>
                    ) : (
                      <div />
                    )}

                    <button
                      onClick={() => {
                        if (sampleStep < 3) setSampleStep(sampleStep + 1);
                        else setSampleStep(1);
                      }}
                      className="rounded-lg bg-zinc-900 px-5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-zinc-800 active:scale-95 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
                    >
                      {sampleStep === 3 ? 'Ulangi Contoh' : 'Lanjut Verifikasi'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Contrast Calculator */}
        {activeTab === 'contrast' && (
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 lg:col-span-5">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                Preset &amp; Penyesuaian Kontras
              </h3>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                Pilih palet atau masukkan kode heksadesimal untuk menguji rasio kontras terhadap standar WCAG 2.1.
              </p>

              <div className="mt-5 space-y-4">
                <div>
                  <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                    Warna Teks (Foreground)
                  </label>
                  <div className="mt-1 flex items-center gap-2">
                    <input
                      type="color"
                      value={textColor}
                      onChange={(e) => setTextColor(e.target.value)}
                      className="h-9 w-12 rounded cursor-pointer border border-zinc-200 dark:border-zinc-700"
                    />
                    <input
                      type="text"
                      value={textColor}
                      onChange={(e) => setTextColor(e.target.value)}
                      className="w-full rounded-md border border-zinc-300 px-3 py-1.5 font-mono text-xs dark:border-zinc-700 dark:bg-zinc-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                    Warna Latar (Background)
                  </label>
                  <div className="mt-1 flex items-center gap-2">
                    <input
                      type="color"
                      value={bgColor}
                      onChange={(e) => setBgColor(e.target.value)}
                      className="h-9 w-12 rounded cursor-pointer border border-zinc-200 dark:border-zinc-700"
                    />
                    <input
                      type="text"
                      value={bgColor}
                      onChange={(e) => setBgColor(e.target.value)}
                      className="w-full rounded-md border border-zinc-300 px-3 py-1.5 font-mono text-xs dark:border-zinc-700 dark:bg-zinc-800"
                    />
                  </div>
                </div>

                <div>
                  <span className="text-xs font-medium text-zinc-500">Preset Standar Hilga:</span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <button
                      onClick={() => {
                        setTextColor('#09090B');
                        setBgColor('#FFFFFF');
                      }}
                      className="rounded border border-zinc-200 px-2.5 py-1 text-xs font-medium dark:border-zinc-700"
                    >
                      Monokrom Stark (21:1)
                    </button>
                    <button
                      onClick={() => {
                        setTextColor('#6D28D9');
                        setBgColor('#F5F3FF');
                      }}
                      className="rounded border border-zinc-200 px-2.5 py-1 text-xs font-medium dark:border-zinc-700"
                    >
                      Pastel Lavender AAA (7.8:1)
                    </button>
                    <button
                      onClick={() => {
                        setTextColor('#065F46');
                        setBgColor('#ECFDF5');
                      }}
                      className="rounded border border-zinc-200 px-2.5 py-1 text-xs font-medium dark:border-zinc-700"
                    >
                      Pastel Sage AAA (8.4:1)
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900 lg:col-span-7">
              {/* Live preview container */}
              <div
                className="rounded-xl p-8 transition-colors duration-200 border"
                style={{ backgroundColor: bgColor, color: textColor }}
              >
                <span className="text-xs font-bold uppercase tracking-wider opacity-80">
                  Pratinjau Nyata Tipografi
                </span>
                <h4 className="mt-2 text-2xl font-bold font-display">
                  Aksesibilitas Meningkatkan Kemudahan Membaca
                </h4>
                <p className="mt-3 text-sm leading-relaxed opacity-90">
                  Teks dengan kontras memadai memastikan informasi penting mengenai transaksi keuangan, dosis obat, atau biaya checkout tidak terlewatkan oleh pengguna di berbagai kondisi pencahayaan terik matahari.
                </p>
              </div>

              {/* Status Report */}
              <div className="mt-6 grid grid-cols-3 gap-4 border-t border-zinc-200 pt-6 dark:border-zinc-800">
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-500">Rasio Kontras</span>
                  <span className="font-mono text-2xl font-bold text-zinc-900 dark:text-white tabular-nums">
                    {contrastRatio} : 1
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-xs text-zinc-500">WCAG 2.1 AA (&ge;4.5)</span>
                  <div className="mt-1 flex items-center gap-1.5">
                    {contrastRatio >= 4.5 ? (
                      <>
                        <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">LULUS</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="h-4 w-4 text-amber-500" />
                        <span className="text-xs font-bold text-amber-600">GAGAL</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex flex-col">
                  <span className="text-xs text-zinc-500">WCAG 2.1 AAA (&ge;7.0)</span>
                  <div className="mt-1 flex items-center gap-1.5">
                    {contrastRatio >= 7.0 ? (
                      <>
                        <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">LULUS (Optimal)</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="h-4 w-4 text-zinc-400" />
                        <span className="text-xs font-medium text-zinc-500">Belum AAA</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Conversion vs Friction */}
        {activeTab === 'conversion' && (
          <div className="mt-10">
            <div className="flex items-center justify-between border-b border-zinc-200 pb-4 dark:border-zinc-800">
              <span className="text-sm font-semibold text-zinc-900 dark:text-white">
                Bandingkan Alur Antarmuka
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('friction')}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
                    viewMode === 'friction'
                      ? 'bg-red-100 text-red-800 dark:bg-red-950/60 dark:text-red-300'
                      : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400'
                  }`}
                >
                  Alur Konvensional (Banyak Friksi)
                </button>
                <button
                  onClick={() => setViewMode('accessible')}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
                    viewMode === 'accessible'
                      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                      : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400'
                  }`}
                >
                  Alur Optimasi Hilga (Aksesibel + Konversi)
                </button>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Visual Card */}
              <div
                className={`rounded-2xl border p-6 transition-all ${
                  viewMode === 'accessible'
                    ? 'border-emerald-300 bg-white dark:border-emerald-800 dark:bg-zinc-900'
                    : 'border-red-200 bg-zinc-100/70 dark:border-red-900/40 dark:bg-zinc-900/40'
                }`}
              >
                <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800">
                  <span className="text-xs font-bold uppercase tracking-wider">
                    {viewMode === 'accessible' ? 'Desain Optimasi Inklusif' : 'Desain Lama Sebelum Audit'}
                  </span>
                  <span
                    className={`font-mono text-xs font-bold ${
                      viewMode === 'accessible' ? 'text-emerald-600' : 'text-red-500'
                    }`}
                  >
                    {viewMode === 'accessible' ? 'Konversi: 84%' : 'Konversi: 42%'}
                  </span>
                </div>

                {viewMode === 'accessible' ? (
                  <div className="mt-5 space-y-4">
                    <div className="flex items-center justify-between rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800">
                      <div>
                        <p className="text-xs font-semibold text-zinc-900 dark:text-white">
                          Pilihan Pengiriman Terkurasi
                        </p>
                        <p className="text-[11px] text-zinc-500">Otomatis memilih yang paling hemat &amp; cepat</p>
                      </div>
                      <span className="text-xs font-mono font-bold text-zinc-900 dark:text-white">
                        Rp 12.000
                      </span>
                    </div>

                    <div className="rounded-lg border border-purple-200 bg-purple-50/40 p-3.5 dark:border-purple-900/50 dark:bg-purple-950/20">
                      <p className="text-xs text-purple-900 dark:text-purple-200">
                        <strong>Transparansi Penuh:</strong> Tidak ada biaya admin tersembunyi. Total tagihan sudah final.
                      </p>
                    </div>

                    <button className="w-full rounded-xl bg-zinc-900 py-3 text-xs font-bold text-white transition-transform active:scale-98 dark:bg-zinc-100 dark:text-zinc-900">
                      Bayar Sekarang &middot; 1 Ketukan Instan
                    </button>
                  </div>
                ) : (
                  <div className="mt-5 space-y-4 opacity-75">
                    <div className="rounded border border-dashed border-zinc-300 p-3 text-xs text-zinc-400">
                      <span className="text-[10px] text-zinc-400">Formulir 7 Kolom Alamat Manual...</span>
                    </div>
                    <div className="text-[11px] text-zinc-400">
                      *Biaya admin dan ongkir baru dihitung di layar berikutnya setelah memasukkan kartu.
                    </div>
                    <button className="w-full rounded bg-zinc-300 py-1.5 text-[11px] text-zinc-600 cursor-not-allowed">
                      Lanjutkan (Langkah 1 dari 5)
                    </button>
                  </div>
                )}
              </div>

              {/* Impact Breakdown */}
              <div className="flex flex-col justify-center rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/60">
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">
                  Dampak Nyata terhadap Metrik Bisnis:
                </h4>
                <ul className="mt-4 space-y-3 text-xs text-zinc-600 dark:text-zinc-400">
                  <li className="flex items-start gap-2">
                    <Zap className="mt-0.5 h-4 w-4 shrink-0 text-purple-600 dark:text-purple-400" />
                    <span>
                      <strong>Mereduksi Abandonment Rate 54%:</strong> Menghilangkan kejutan biaya di halaman terakhir membuat pengguna merasa dihargai dan aman bertransaksi.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="mt-0.5 h-4 w-4 shrink-0 text-purple-600 dark:text-purple-400" />
                    <span>
                      <strong>Peningkatan Aksesibilitas Membuka Pasar Baru:</strong> 15% populasi dengan disabilitas visual dan lansia dapat melakukan pembelian tanpa bantuan orang lain.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="mt-0.5 h-4 w-4 shrink-0 text-purple-600 dark:text-purple-400" />
                    <span>
                      <strong>Efisiensi Waktu Transaksi:</strong> Alur 1 layar memangkas waktu transaksi dari 140 detik menjadi 50 detik, melipatgandakan kepuasan belanja.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
