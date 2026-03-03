import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

function fadeUpDelay(delay = 0) {
    return {
        initial: { opacity: 0, y: 32 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.55, ease: EASE, delay },
    } as const;
}

/** Abstract network / connection illustration in orange + blue tones */
function NetworkIllustration() {
    return (
        <svg
            viewBox="0 0 480 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            style={{ width: '100%', maxWidth: '480px', height: 'auto' }}
        >
            {/* Soft background circles */}
            <circle cx="240" cy="200" r="180" fill="rgba(240,111,2,0.04)" />
            <circle cx="240" cy="200" r="130" fill="rgba(62,128,173,0.04)" />

            {/* Connection lines */}
            <line x1="240" y1="200" x2="100" y2="100" stroke="#F06F02" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="6 4" />
            <line x1="240" y1="200" x2="380" y2="90" stroke="#3E80AD" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="6 4" />
            <line x1="240" y1="200" x2="420" y2="260" stroke="#F06F02" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="6 4" />
            <line x1="240" y1="200" x2="60" y2="300" stroke="#3E80AD" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="6 4" />
            <line x1="240" y1="200" x2="200" y2="340" stroke="#F06F02" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="6 4" />
            <line x1="100" y1="100" x2="380" y2="90" stroke="#3E80AD" strokeWidth="1" strokeOpacity="0.15" />
            <line x1="380" y1="90" x2="420" y2="260" stroke="#F06F02" strokeWidth="1" strokeOpacity="0.15" />
            <line x1="60" y1="300" x2="200" y2="340" stroke="#3E80AD" strokeWidth="1" strokeOpacity="0.15" />

            {/* Secondary nodes */}
            <circle cx="100" cy="100" r="24" fill="rgba(240,111,2,0.08)" stroke="#F06F02" strokeWidth="1.5" />
            <circle cx="100" cy="100" r="8" fill="#F06F02" />
            <circle cx="380" cy="90" r="20" fill="rgba(62,128,173,0.08)" stroke="#3E80AD" strokeWidth="1.5" />
            <circle cx="380" cy="90" r="7" fill="#3E80AD" />
            <circle cx="420" cy="260" r="18" fill="rgba(240,111,2,0.08)" stroke="#F06F02" strokeWidth="1.5" />
            <circle cx="420" cy="260" r="7" fill="#F06F02" />
            <circle cx="60" cy="300" r="20" fill="rgba(62,128,173,0.08)" stroke="#3E80AD" strokeWidth="1.5" />
            <circle cx="60" cy="300" r="7" fill="#3E80AD" />
            <circle cx="200" cy="340" r="16" fill="rgba(240,111,2,0.08)" stroke="#F06F02" strokeWidth="1.5" />
            <circle cx="200" cy="340" r="6" fill="#F06F02" />

            {/* Additional mini nodes */}
            <circle cx="310" cy="170" r="10" fill="rgba(62,128,173,0.1)" stroke="#3E80AD" strokeWidth="1" />
            <circle cx="310" cy="170" r="4" fill="#3E80AD" opacity="0.6" />
            <line x1="240" y1="200" x2="310" y2="170" stroke="#3E80AD" strokeWidth="1" strokeOpacity="0.2" />
            <circle cx="150" cy="260" r="10" fill="rgba(240,111,2,0.1)" stroke="#F06F02" strokeWidth="1" />
            <circle cx="150" cy="260" r="4" fill="#F06F02" opacity="0.6" />
            <line x1="240" y1="200" x2="150" y2="260" stroke="#F06F02" strokeWidth="1" strokeOpacity="0.2" />

            {/* Central hub */}
            <circle cx="240" cy="200" r="40" fill="rgba(240,111,2,0.08)" stroke="#F06F02" strokeWidth="2" />
            <circle cx="240" cy="200" r="22" fill="#fff" stroke="#F06F02" strokeWidth="2" />
            <text x="240" y="207" textAnchor="middle" fontFamily="system-ui,sans-serif" fontWeight="700" fontSize="18" fill="#F06F02">K</text>

            {/* Growth curve */}
            <path d="M60 350 Q160 280 240 200 Q320 120 420 60" stroke="#3E80AD" strokeWidth="1.5" strokeOpacity="0.12" fill="none" strokeDasharray="4 4" />
        </svg>
    );
}

export default function HeroSection() {
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="hero"
            aria-label="Hero"
            style={{
                minHeight: '90vh',
                display: 'flex',
                alignItems: 'center',
                paddingTop: '120px',
                paddingBottom: '80px',
                background: 'linear-gradient(150deg, #ffffff 60%, #fdf3e8 100%)',
            }}
        >
            <div
                className="container-width"
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '4rem',
                    alignItems: 'center',
                }}
            >
                {/* Left: Text content */}
                <div>
                    {/* Exclusivity badge */}
                    <motion.div
                        {...fadeUpDelay(0)}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            border: '1.5px solid #F06F02',
                            borderRadius: '999px',
                            padding: '0.35rem 0.875rem',
                            marginBottom: '1.75rem',
                            backgroundColor: 'rgba(240,111,2,0.06)',
                        }}
                    >
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#F06F02', display: 'inline-block' }} />
                        <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#F06F02', letterSpacing: '0.03em', textTransform: 'uppercase' }}>
                            Exclusive for Existing Kinetic Clients
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1 {...fadeUpDelay(0.1)} style={{ marginBottom: '1.5rem' }}>
                        Earn Rewards for Introducing Kinetic to{' '}
                        <span style={{ color: '#F06F02' }}>Your Network</span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        {...fadeUpDelay(0.2)}
                        style={{ fontSize: '1.1875rem', lineHeight: 1.7, color: '#555', maxWidth: '520px', marginBottom: '2.5rem' }}
                    >
                        You already trust us to power your team with exceptional offshore talent.
                        Help fellow business owners experience the same results — we handle everything,
                        and reward you generously at every step.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div {...fadeUpDelay(0.3)} style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                        <button
                            onClick={() => scrollTo('how-it-works')}
                            style={{
                                backgroundColor: '#F06F02', color: '#fff', border: 'none', borderRadius: '0.75rem',
                                padding: '0.875rem 2rem', fontSize: '1rem', fontWeight: 600, cursor: 'pointer',
                                transition: 'background-color 0.2s, transform 0.15s, box-shadow 0.2s',
                                boxShadow: '0 4px 16px rgba(240,111,2,0.28)',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#d95f00'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(240,111,2,0.38)'; }}
                            onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#F06F02'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(240,111,2,0.28)'; }}
                        >
                            How It Works
                        </button>

                        <button
                            onClick={() => scrollTo('templates')}
                            style={{
                                backgroundColor: 'transparent', color: '#3E80AD', border: '1.5px solid #3E80AD',
                                borderRadius: '0.75rem', padding: '0.875rem 2rem', fontSize: '1rem', fontWeight: 600,
                                cursor: 'pointer', transition: 'background-color 0.2s, transform 0.15s',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(62,128,173,0.07)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.transform = 'none'; }}
                        >
                            Copy Intro Email Template
                        </button>
                    </motion.div>

                    {/* Trust signal */}
                    <motion.p
                        {...fadeUpDelay(0.4)}
                        style={{ marginTop: '1.5rem', fontSize: '0.875rem', color: '#888' }}
                    >
                        ✦ No referral link required &nbsp;·&nbsp; ✦ Fully tracked dashboard &nbsp;·&nbsp; ✦ No earnings cap
                    </motion.p>
                </div>

                {/* Right: Illustration */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    className="hero-illustration"
                >
                    <NetworkIllustration />
                </motion.div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          #hero .container-width { grid-template-columns: 1fr !important; }
          .hero-illustration { margin-top: 2rem; }
        }
      `}</style>
        </section>
    );
}
