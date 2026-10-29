/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { CaseStudyModal } from './components/CaseStudyModal';
import { InteractivePrototypeSimulator } from './components/InteractivePrototypeSimulator';
import { InteractiveA11yLab } from './components/InteractiveA11yLab';
import { MethodologySection } from './components/MethodologySection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';
import { CASE_STUDIES, CaseStudy } from './data/portfolioData';

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#F8FAFC] text-slate-900 transition-colors duration-300 dark:bg-[#030712] dark:text-slate-100 flex flex-col">
        {/* Navigation Bar */}
        <Navbar onOpenContact={() => handleScrollTo('kontak')} />

        <main className="flex-1">
          {/* Hero Section */}
          <HeroSection
            onOpenResume={() => setIsResumeOpen(true)}
            onExploreCaseStudies={() => handleScrollTo('studi-kasus')}
            onOpenA11yLab={() => handleScrollTo('aksesibilitas-lab')}
          />

          {/* Curated UX Case Studies */}
          <CaseStudiesSection onSelectCaseStudy={(study) => setSelectedCaseStudy(study)} />

          {/* Interactive Smartphone/Tablet Prototype Simulator */}
          <InteractivePrototypeSimulator />

          {/* Interactive Accessibility & Conversion Lab */}
          <InteractiveA11yLab />

          {/* UX Methodology & Toolstack */}
          <MethodologySection />

          {/* About Hilga & UX Philosophy */}
          <AboutSection
            onOpenResume={() => setIsResumeOpen(true)}
            onOpenContact={() => handleScrollTo('kontak')}
          />

          {/* Testimonials from Leaders */}
          <TestimonialsSection />

          {/* Contact & Partnership Inquiry */}
          <ContactSection onOpenResume={() => setIsResumeOpen(true)} />
        </main>

        {/* Minimalist Footer */}
        <Footer onOpenResume={() => setIsResumeOpen(true)} />

        {/* Case Study Deep-Dive Fullscreen Modal */}
        <CaseStudyModal
          caseStudy={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
          onSelectAnother={(study) => setSelectedCaseStudy(study)}
          allCaseStudies={CASE_STUDIES}
        />

        {/* Official Printable Resume/CV Modal */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}
