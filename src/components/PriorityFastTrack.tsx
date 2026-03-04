import { motion } from 'framer-motion';

const benefits = [
    {
        icon: '⚡',
        title: 'Faster Initial Response',
        description: 'Your Recruiter is immediately aware of the introduction and can help ensure timely follow-up.',
    },
    {
        icon: '📅',
        title: 'Coordinated Demo Scheduling',
        description: 'Having your Recruiter looped in helps align availability and move the scheduling process forward more smoothly.',
    },
    {
        icon: '🔄',
        title: 'Better Internal Coordination',
        description: 'Your Recruiter can liaise with the account and sourcing teams early, helping reduce back-and-forth later on.',
    },
    {
        icon: '⭐',
        title: 'A Stronger Overall Experience',
        description: 'Clear communication and proper coordination help create a professional and seamless experience for your contact — reflecting well on your recommendation.',
    },
];

/** Updated coordination / flow illustration */
function PriorityIllustration() {
    return (
        <svg viewBox="0 0 320 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
            style={{ width: '100%', maxWidth: '300px', height: 'auto' }}>

            {/* Soft background glow */}
            <circle cx="160" cy="150" r="120" fill="rgba(240,111,2,0.04)" />
            <circle cx="160" cy="150" r="80" fill="rgba(240,111,2,0.04)" />

            {/* --- Flow diagram: three connected nodes --- */}
            {/* Node connectors */}
            <line x1="160" y1="65" x2="160" y2="105" stroke="rgba(240,111,2,0.25)" strokeWidth="1.5" strokeDasharray="4 3" />
            <line x1="160" y1="145" x2="160" y2="185" stroke="rgba(62,128,173,0.25)" strokeWidth="1.5" strokeDasharray="4 3" />

            {/* Top node: You (client) */}
            <circle cx="160" cy="48" r="22" fill="rgba(240,111,2,0.08)" stroke="#F06F02" strokeWidth="1.5" />
            <text x="160" y="52" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="13" fill="#F06F02" fontWeight="700">You</text>

            {/* Middle node: Recruiter */}
            <rect x="105" y="108" width="110" height="36" rx="10" fill="rgba(240,111,2,0.1)" stroke="#F06F02" strokeWidth="1.5" />
            <text x="160" y="131" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="11" fill="#F06F02" fontWeight="600">Your Recruiter</text>

            {/* Branch lines from Recruiter to Prospect & Team */}
            <line x1="115" y1="144" x2="80" y2="188" stroke="rgba(62,128,173,0.3)" strokeWidth="1.5" strokeDasharray="4 3" />
            <line x1="205" y1="144" x2="240" y2="188" stroke="rgba(62,128,173,0.3)" strokeWidth="1.5" strokeDasharray="4 3" />

            {/* Bottom-left node: Prospect */}
            <circle cx="72" cy="205" r="26" fill="rgba(62,128,173,0.08)" stroke="#3E80AD" strokeWidth="1.5" />
            <text x="72" y="203" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="9" fill="#3E80AD" fontWeight="600">Your</text>
            <text x="72" y="215" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="9" fill="#3E80AD" fontWeight="600">Contact</text>

            {/* Bottom-right node: Internal Team */}
            <circle cx="248" cy="205" r="26" fill="rgba(62,128,173,0.08)" stroke="#3E80AD" strokeWidth="1.5" />
            <text x="248" y="203" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="9" fill="#3E80AD" fontWeight="600">Kinetic</text>
            <text x="248" y="215" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="9" fill="#3E80AD" fontWeight="600">Team</text>

            {/* Checkmark badge on Recruiter node */}
            <circle cx="215" cy="108" r="10" fill="#F06F02" />
            <path d="M211 108.5l2.5 2.5 5-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

            {/* Speed / pulse rings around center */}
            <circle cx="160" cy="126" r="60" stroke="rgba(240,111,2,0.07)" strokeWidth="8" />
            <circle cx="160" cy="126" r="90" stroke="rgba(240,111,2,0.04)" strokeWidth="6" />

            {/* Small decorative dots */}
            <circle cx="130" cy="245" r="3" fill="#F06F02" opacity="0.25" />
            <circle cx="190" cy="255" r="2.5" fill="#3E80AD" opacity="0.25" />
            <circle cx="100" cy="260" r="2" fill="#F06F02" opacity="0.2" />
        </svg>
    );
}

export default function PriorityFastTrack() {
    return (
        <section id="priority" aria-label="CC Your Recruiter" className="section-padding"
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
                        <h2 style={{ marginBottom: '0.75rem' }}>
                            CC Your Recruiter for a Smoother Referral Experience
                        </h2>
                        <p style={{ fontSize: '1rem', color: '#666', lineHeight: 1.7, marginBottom: '1.75rem', maxWidth: '500px' }}>
                            Looping in your Recruiter helps us manage your referral more efficiently and ensure nothing slips through.
                        </p>

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
                                        <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.65, marginBottom: 0 }}>
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
