import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import GratitudeSection from './components/GratitudeSection';
import HowItWorks from './components/HowItWorks';
import CommissionBreakdown from './components/CommissionBreakdown';
import PriorityFastTrack from './components/PriorityFastTrack';
import DashboardTransparency from './components/DashboardTransparency';
import EmailTemplates from './components/EmailTemplates';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

/**
 * Kinetic Innovative Staffing — Exclusive Client Referral Program
 *
 * Page Sections (in order):
 *  1. Navbar        — sticky header with logo + smooth scroll links
 *  2. HeroSection   — badge, headline, CTAs, network illustration
 *  3. GratitudeSection — appreciation copy block
 *  4. HowItWorks    — 4 step cards
 *  5. CommissionBreakdown — $50 / $500 / $100 per month cards
 *  6. PriorityFastTrack  — CC your Recruiter benefits
 *  7. DashboardTransparency — pipeline + earnings mockup
 *  8. EmailTemplates — 3 accordion templates + clipboard copy
 *  9. FAQ           — 5 accordion Q&As
 * 10. FinalCTA      — blue section with CTAs
 * 11. Footer        — minimal dark footer
 */
export default function App() {
  return (
    <>
      {/* Toast notifications (copy-to-clipboard feedback) */}
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 3000,
          style: {
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontSize: '0.9375rem',
            padding: '0.75rem 1.25rem',
          },
        }}
      />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Gratitude */}
        <GratitudeSection />

        {/* 3. How It Works */}
        <HowItWorks />

        {/* 4. Commission Breakdown */}
        <CommissionBreakdown />

        {/* 5. Priority Fast-Track */}
        <PriorityFastTrack />

        {/* 6. Dashboard Transparency */}
        <DashboardTransparency />

        {/* 7. Email Templates */}
        <EmailTemplates />

        {/* 8. FAQ */}
        <FAQ />

        {/* 9. Final CTA */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
