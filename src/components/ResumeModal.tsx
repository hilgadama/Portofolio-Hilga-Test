import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, MapPin, Award, Briefcase, GraduationCap } from 'lucide-react';
import { RESUME_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-zinc-950/80 p-4 backdrop-blur-md"
    >
      <div className="relative my-8 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-zinc-200 bg-white p-6 sm:p-10 shadow-2xl dark:border-zinc-800 dark:bg-[#0E0E12]">
        {/* Header Controls */}
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5 dark:border-zinc-800">
          <span className="text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
            Curriculum Vitae &middot; Format Resmi
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
              title="Cetak atau Simpan sebagai PDF"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>Cetak / PDF</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Tutup resume"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="mt-6 space-y-8" id="printable-resume">
          {/* Header */}
          <div>
            <h2 id="resume-title" className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">
              {RESUME_DATA.name}
            </h2>
            <p className="mt-1 text-sm font-semibold text-purple-600 dark:text-purple-400">
              {RESUME_DATA.title}
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-500 dark:text-zinc-400">
              <span className="flex items-center gap-1">
                <Mail className="h-3.5 w-3.5" />
                <span>{RESUME_DATA.email}</span>
              </span>
              <span aria-hidden="true">&middot;</span>
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                <span>{RESUME_DATA.location}</span>
              </span>
            </div>

            <p className="mt-4 text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              {RESUME_DATA.about}
            </p>
          </div>

          {/* Experience */}
          <div className="border-t border-zinc-200 pt-6 dark:border-zinc-800">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-500">
              <Briefcase className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              <span>Pengalaman Kerja Profesional</span>
            </div>

            <div className="mt-4 space-y-6">
              {RESUME_DATA.experience.map((exp, idx) => (
                <div key={idx} className="relative pl-4 border-l-2 border-zinc-200 dark:border-zinc-800">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-sm font-bold text-zinc-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-mono text-zinc-400">{exp.period}</span>
                  </div>
                  <p className="text-xs font-semibold text-purple-600 dark:text-purple-400">
                    {exp.company}
                  </p>
                  <ul className="mt-2 space-y-1 text-xs text-zinc-600 dark:text-zinc-300">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="list-disc list-inside">
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="border-t border-zinc-200 pt-6 dark:border-zinc-800">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-500">
              <Award className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              <span>Sertifikasi &amp; Lisensi Profesional</span>
            </div>

            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {RESUME_DATA.certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-800"
                >
                  <p className="text-xs font-bold text-zinc-900 dark:text-white">{cert.title}</p>
                  <p className="text-[11px] text-zinc-500">{cert.id} &middot; {cert.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="border-t border-zinc-200 pt-6 dark:border-zinc-800">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-500">
              <GraduationCap className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              <span>Pendidikan Formal</span>
            </div>

            <div className="mt-3">
              {RESUME_DATA.education.map((edu, idx) => (
                <div key={idx}>
                  <div className="flex justify-between">
                    <h3 className="text-xs font-bold text-zinc-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <span className="text-xs font-mono text-zinc-400">{edu.period}</span>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-300">{edu.institution}</p>
                  <p className="text-[11px] text-zinc-500 italic mt-0.5">{edu.honors}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
