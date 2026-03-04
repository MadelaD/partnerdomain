import { motion } from 'framer-motion';

const benefits = [
    {
        icon: '⚡',
        title: 'Faster Response & Follow-Up',
        description: 'Your referral moves to the top of the queue from the moment you CC your Recruiter.',
    },
    {
        icon: '📅',
        title: 'Priority Demo Scheduling',
        description: 'Pre-allocated demo slots ensure your contact gets a meeting within 24–48 hours.',
    },
    {
        icon: '🔄',
        title: 'Smoother Onboarding Coordination',
        description: 'Your Recruiter liaises directly with the account team, reducing handoff friction.',
    },
    {
        icon: '⭐',
        title: 'Superior Experience for Your Contact',
        description: 'Fast, professional, and personal service — reflecting positively on your recommendation.',
    },
];

/** Abstract priority/speed illustration */
function PriorityIllustration() {
    return (
        <svg viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
            style={{ width: '100%', maxWidth: '300px', height: 'auto' }}>
            {/* Background glow */}
            <circle cx="160" cy="140" r="110" fill="rgba(240,111,2,0.05)" />
            {/* Priority lanes */}
            <rect x="40" y="60" width="240" height="12" rx="6" fill="rgba(240,111,2,0.12)" />
            <rect x="40" y="60" width="200" height="12" rx="6" fill="rgba(240,111,2,0.2)" />
            <rect x="40" y="88" width="240" height="12" rx="6" fill="rgba(62,128,173,0.1)" />
            <rect x="40" y="88" width="140" height="12" rx="6" fill="rgba(62,128,173,0.18)" />
            <rect x="40" y="116" width="240" height="12" rx="6" fill="rgba(62,128,173,0.1)" />
            <rect x="40" y="116" width="80" height="12" rx="6" fill="rgba(62,128,173,0.18)" />
            {/* Labels */}
            <text x="40" y="54" fontFamily="system-ui,sans-serif" fontSize="10" fill="#F06F02" fontWeight="600">Priority (with Recruiter CC)</text>
            <text x="40" y="82" fontFamily="system-ui,sans-serif" fontSize="10" fill="#3E80AD" fontWeight="600">Standard</text>
            <text x="40" y="110" fontFamily="system-ui,sans-serif" fontSize="10" fill="#aaa" fontWeight="600">Without CC</text>
            {/* Rocket / speed icon */}
            <circle cx="160" cy="190" r="54" fill="rgba(240,111,2,0.06)" stroke="rgba(240,111,2,0.2)" strokeWidth="1.5" />
            <path d="M160 165 C160 165 175 170 180 185 C185 200 178 215 160 215 C142 215 135 200 140 185 C145 170 160 165 160 165Z"
                fill="rgba(240,111,2,0.12)" stroke="#F06F02" strokeWidth="1.5" />
            <circle cx="160" cy="192" r="7" fill="#F06F02" />
            <path d="M151 210 L153 220 L160 215 L167 220 L169 210" stroke="#F06F02" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            {/* Stars */}
            <circle cx="120" cy="175" r="3" fill="#F06F02" opacity="0.4" />
            <circle cx="200" cy="165" r="2.5" fill="#3E80AD" opacity="0.4" />
            <circle cx="115" cy="205" r="2" fill="#F06F02" opacity="0.3" />
            <circle cx="205" cy="200" r="2" fill="#3E80AD" opacity="0.3" />
        </svg>
    );
}

export default function PriorityFastTrack() {
    return (
        <section id="priority" aria-label="Priority Fast-Track" className="section-padding"
            style={{
                backgroundColor: '#fff',
                borderTop: '1px solid rgba(0,0,0,0.05)',
                borderBottom: '1px solid rgba(0,0,0,0.05)',
            }}
        >
            <div className="container-width">
                <div style={{
                    backgroundColor: 'rgba(240,111,2,0.04)',
                    border: '1.5px solid rgba(240,111,2,0.2)',
                    borderRadius: '1.5rem',
                    padding: 'clamp(2rem, 5vw, 3.5rem)',
                    display: 'grid',
                    gridTemplateColumns: '1fr auto',
                    gap: '3rem',
                    alignItems: 'center',
                }}>
                    {/* Left content */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.55 }}
                    >
                        <p style={{ color: '#F06F02', fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                            Pro Tip
                        </p>
                        <h2 style={{ marginBottom: '1.75rem' }}>
                            CC Your Recruiter to Give Your Referral Priority
                        </h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            {benefits.map((b) => (
                                <div key={b.title} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                    <div style={{
                                        width: '36px',
                                        height: '36px',
                                        borderRadius: '10px',
                                        backgroundColor: 'rgba(240,111,2,0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '1rem',
                                        flexShrink: 0,
                                    }}>
                                        {b.icon}
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 600, color: '#333', fontSize: '0.9375rem', marginBottom: '0.2rem' }}>
                                            {b.title}
                                        </div>
                                        <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6, marginBottom: 0 }}>
                                            {b.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.55, delay: 0.1 }}
                        className="priority-illustration"
                    >
                        <PriorityIllustration />
                    </motion.div>
                </div>
            </div>
            <style>{`
        @media (max-width: 768px) {
          #priority .container-width > div {
            grid-template-columns: 1fr !important;
          }
          .priority-illustration {
            justify-self: center;
          }
        }
      `}</style>
        </section>
    );
}
