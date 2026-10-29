import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Sparkles, MessageSquare, Clock, MapPin } from 'lucide-react';
import { RESUME_DATA } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('Audit Aksesibilitas WCAG');
  const [timeline, setTimeline] = useState('1 - 2 Bulan');
  const [message, setMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(RESUME_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="kontak" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Column: Friendly Outreach (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              <MessageSquare className="h-3.5 w-3.5" />
              <span>Mulai Diskusi</span>
              <span aria-hidden="true">·</span>
              <span>Kolaborasi Proyek</span>
            </div>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl dark:text-white [text-wrap:balance]">
              Punya Masalah UX atau Ingin Meningkatkan Konversi Produk?
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              Apakah Anda sedang merancang produk dari awal, mempersiapkan audit aksesibilitas untuk kepatuhan regulasi, atau ingin memangkas drop-off rate pada alur checkout?
            </p>

            <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              Saya selalu senang mendiskusikan tantangan baru dan bertukar pikiran santai seputar riset pengguna. Kirim pesan kapan saja!
            </p>

            {/* Quick Email Card */}
            <div className="mt-8 rounded-xl border border-zinc-200 bg-white p-5 shadow-xs dark:border-zinc-800 dark:bg-zinc-900/60">
              <span className="text-xs font-semibold text-zinc-500">Alamat Email Langsung:</span>
              <div className="mt-2 flex items-center justify-between gap-3">
                <a
                  href={`mailto:${RESUME_DATA.email}`}
                  className="font-mono text-sm font-bold text-zinc-900 hover:text-purple-600 dark:text-white dark:hover:text-purple-400 truncate"
                >
                  {RESUME_DATA.email}
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700 shrink-0"
                  title="Salin email ke clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-700 dark:text-emerald-400">Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Salin</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Response Time Guarantee */}
            <div className="mt-6 space-y-3 text-xs text-zinc-500 dark:text-zinc-400">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                <span>Rata-rata respon: &lt; 24 jam (Senin — Jumat)</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                <span>Berdomisili di Jakarta (WIB / GMT+7) &middot; Tersedia untuk Remote Global</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form (7 cols) */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 lg:col-span-7">
            {formSubmitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
                  <Check className="h-7 w-7" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-zinc-900 dark:text-white">
                  Pesan Anda Telah Diterima!
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 max-w-md mx-auto">
                  Terima kasih banyak, <strong>{name}</strong>. Saya akan meninjau kebutuhan proyek Anda dan membalas melalui email <strong>{email}</strong> dalam waktu kurang dari 24 jam.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setMessage('');
                  }}
                  className="mt-6 rounded-lg border border-zinc-200 px-4 py-2 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                  Formulir Konsultasi &amp; Kemitraan
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Ceritakan ringkasan kebutuhan atau tantangan produk yang ingin Anda selesaikan.
                </p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-2">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                      Nama Lengkap <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Contoh: Raditya Pratama"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2 text-xs text-zinc-900 shadow-xs focus:border-purple-600 focus:ring-1 focus:ring-purple-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                      Email Bisnis / Pribadi <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="nama@perusahaan.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2 text-xs text-zinc-900 shadow-xs focus:border-purple-600 focus:ring-1 focus:ring-purple-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-type" className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                      Fokus Kebutuhan
                    </label>
                    <select
                      id="contact-type"
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-xs text-zinc-900 shadow-xs dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
                    >
                      <option>Audit Aksesibilitas WCAG</option>
                      <option>Redesign UI/UX &amp; Optimasi Konversi</option>
                      <option>Riset Pengguna &amp; Usability Testing</option>
                      <option>Sistem Desain &amp; Arsitektur Token</option>
                      <option>Mentoring &amp; Workshop Tim UX</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-timeline" className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                      Estimasi Timeline
                    </label>
                    <select
                      id="contact-timeline"
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-xs text-zinc-900 shadow-xs dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
                    >
                      <option>Segera (&lt; 1 Bulan)</option>
                      <option>1 - 2 Bulan</option>
                      <option>3 - 6 Bulan</option>
                      <option>Diskusi Awal / Konsultasi Fleksibel</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-msg" className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                    Pesan / Gambaran Masalah <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-msg"
                    rows={4}
                    required
                    placeholder="Ceritakan latar belakang produk Anda, pengguna yang ditargetkan, dan sasaran yang ingin dicapai..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2 text-xs text-zinc-900 shadow-xs focus:border-purple-600 focus:ring-1 focus:ring-purple-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-zinc-900 py-3 text-xs font-bold text-white shadow-sm transition-all hover:bg-zinc-800 active:scale-98 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>Kirim Pesan ke Hilga Damayanti</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
