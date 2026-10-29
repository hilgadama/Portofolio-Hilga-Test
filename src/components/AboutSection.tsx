import React from 'react';
import { Award, BookOpen, HeartHandshake, FileText, CheckCircle2 } from 'lucide-react';
import { RESUME_DATA } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenResume,
  onOpenContact,
}) => {
  return (
    <section id="tentang-saya" className="border-b border-zinc-200/80 py-20 dark:border-zinc-800/80">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Column: Portrait & Highlights (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
                <img
                  src="/src/assets/images/hilga_portrait_1793178791201.jpg"
                  alt="Hilga Damayanti sedang merancang wireframe di ruang kerjanya"
                  referrerPolicy="no-referrer"
                  className="aspect-square w-full object-cover"
                />
              </div>

              {/* Stat card */}
              <div className="mt-4 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50 text-purple-600 dark:bg-purple-950/60 dark:text-purple-300">
                    <HeartHandshake className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-900 dark:text-white">
                      Filosofi Desain Empatik
                    </h4>
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                      "Aksesibilitas bukan opsi tambahan, melainkan hak mendasar setiap pengguna digital."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Beliefs (7 cols) */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              <BookOpen className="h-3.5 w-3.5" />
              <span>Tentang Hilga</span>
              <span aria-hidden="true">·</span>
              <span>Dedikasi &amp; Pengalaman</span>
            </div>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl dark:text-white [text-wrap:balance]">
              Menemukan Harmoni Antara Kebutuhan Manusia dan Pertumbuhan Produk
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              <p>
                Halo lagi! Perjalanan saya di dunia UX berawal dari rasa penasaran sederhana: <em>mengapa banyak teknologi canggih justru membuat orang tua dan teman-teman dengan disabilitas merasa terasing dan kewalahan?</em>
              </p>
              <p>
                Dengan latar belakang formal di bidang Human-Computer Interaction (HCI) dari Universitas Indonesia serta sertifikasi <strong>Nielsen Norman Group (NN/g)</strong> dan <strong>CPACC</strong>, saya mendedikasikan 6+ tahun terakhir untuk membuktikan bahwa produk yang aksesibel adalah produk dengan tingkat konversi tertinggi.
              </p>
              <p>
                Saya tidak mendesain antarmuka berdasarkan tebakan atau tren sesaat. Saya terjun langsung ke lapangan, mewawancarai puluhan pengguna, menganalisis drop-off funnel, dan bekerja erat dengan software engineer untuk memastikan setiap piksel dan kode semantik HTML dapat dibaca oleh teknologi pembaca layar (screen reader) tanpa cela.
              </p>
            </div>

            {/* Certifications row */}
            <div className="mt-8 border-t border-zinc-200/80 pt-6 dark:border-zinc-800/80">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                Sertifikasi &amp; Standar Profesional:
              </span>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {RESUME_DATA.certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className="flex items-start gap-2.5 rounded-lg border border-zinc-200 bg-zinc-50/50 p-3 dark:border-zinc-800 dark:bg-zinc-900/40"
                  >
                    <Award className="mt-0.5 h-4 w-4 shrink-0 text-purple-600 dark:text-purple-400" />
                    <div>
                      <p className="text-xs font-bold text-zinc-900 dark:text-white">{cert.title}</p>
                      <p className="text-[11px] text-zinc-500">{cert.id} &middot; {cert.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-zinc-800 active:scale-95 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
              >
                <FileText className="h-4 w-4" />
                <span>Lihat Dokumen Resume Lengkap</span>
              </button>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 px-5 py-2.5 text-xs font-semibold text-zinc-800 transition-all hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-200 dark:hover:border-zinc-700"
              >
                <span>Ajak Kolaborasi Proyek</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
