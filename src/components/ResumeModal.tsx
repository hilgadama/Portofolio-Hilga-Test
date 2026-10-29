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
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/80 p-4 backdrop-blur-md"
    >
      <div className="relative my-8 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-blue-100 bg-white p-6 sm:p-10 shadow-2xl dark:border-blue-900/60 dark:bg-[#071126]">
        {/* Header Controls */}
        <div className="flex items-center justify-between border-b border-blue-100 pb-5 dark:border-slate-800">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-sky-400">
            Curriculum Vitae &middot; Format Resmi
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 rounded-lg border border-blue-200 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-blue-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              title="Cetak atau Simpan sebagai PDF"
            >
              <Printer className="h-3.5 w-3.5 text-blue-600 dark:text-sky-400" />
              <span>Cetak / PDF</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Tutup resume"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-blue-200 text-slate-600 hover:bg-blue-50 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="mt-6 space-y-8" id="printable-resume">
          {/* Header */}
          <div>
            <h2 id="resume-title" className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              {RESUME_DATA.name}
            </h2>
            <p className="mt-1 text-sm font-semibold text-blue-600 dark:text-sky-400">
              {RESUME_DATA.title}
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1">
                <Mail className="h-3.5 w-3.5 text-blue-600 dark:text-sky-400" />
                <span>{RESUME_DATA.email}</span>
              </span>
              <span aria-hidden="true">&middot;</span>
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 text-blue-600 dark:text-sky-400" />
                <span>{RESUME_DATA.location}</span>
              </span>
            </div>

            <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {RESUME_DATA.about}
            </p>
          </div>

          {/* Experience */}
          <div className="border-t border-blue-100 pt-6 dark:border-slate-800">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              <Briefcase className="h-4 w-4 text-blue-600 dark:text-sky-400" />
              <span>Pengalaman Kerja Profesional</span>
            </div>

            <div className="mt-4 space-y-6">
              {RESUME_DATA.experience.map((exp, idx) => (
                <div key={idx} className="relative pl-4 border-l-2 border-blue-400 dark:border-blue-700">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-mono text-slate-400">{exp.period}</span>
                  </div>
                  <p className="text-xs font-semibold text-blue-600 dark:text-sky-400">
                    {exp.company}
                  </p>
                  <ul className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-300">
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
          <div className="border-t border-blue-100 pt-6 dark:border-slate-800">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              <Award className="h-4 w-4 text-blue-600 dark:text-sky-400" />
              <span>Sertifikasi &amp; Lisensi Profesional</span>
            </div>

            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {RESUME_DATA.certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="rounded-lg border border-blue-100 bg-blue-50/30 p-3 dark:border-slate-800 dark:bg-[#0a152d]"
                >
                  <p className="text-xs font-bold text-slate-900 dark:text-white">{cert.title}</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">{cert.id} &middot; {cert.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="border-t border-blue-100 pt-6 dark:border-slate-800">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              <GraduationCap className="h-4 w-4 text-blue-600 dark:text-sky-400" />
              <span>Pendidikan Formal</span>
            </div>

            <div className="mt-3">
              {RESUME_DATA.education.map((edu, idx) => (
                <div key={idx}>
                  <div className="flex justify-between">
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <span className="text-xs font-mono text-slate-400">{edu.period}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300">{edu.institution}</p>
                  <p className="text-[11px] text-slate-500 italic mt-0.5">{edu.honors}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
