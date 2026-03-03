import { motion } from 'framer-motion';

const tracked = [
    { stage: 'Contacted', color: '#aaa', desc: 'Lead received and acknowledged' },
    { stage: 'Demo', color: '#3E80AD', desc: '+$50 when completed' },
    { stage: 'Proposal', color: '#F06F02', desc: 'Candidate matching in progress' },
    { stage: 'Hired', color: '#22c55e', desc: '+$500 + $100/mo recurring' },
];

/** Simple dashboard UI mockup as SVG */
function DashboardMockup() {
    return (
        <svg viewBox="0 0 360 280" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
            style={{ width: '100%', maxWidth: '400px', height: 'auto', borderRadius: '1rem', boxShadow: '0 8px 40px rgba(0,0,0,0.1)' }}>
            {/* Window chrome */}
            <rect width="360" height="280" rx="12" fill="#fff" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
            {/* Top bar */}
            <rect width="360" height="40" rx="12" fill="#F8F9FB" />
            <rect y="28" width="360" height="12" fill="#F8F9FB" />
            <circle cx="18" cy="20" r="5" fill="#FF5F57" />
            <circle cx="34" cy="20" r="5" fill="#FEBC2E" />
            <circle cx="50" cy="20" r="5" fill="#28C840" />
            <text x="160" y="25" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="10" fill="#999" fontWeight="600">
                Kinetic Referral Dashboard
            </text>

            {/* Earnings summary row */}
            <rect x="16" y="52" width="100" height="52" rx="8" fill="rgba(240,111,2,0.06)" stroke="rgba(240,111,2,0.2)" strokeWidth="1" />
            <text x="26" y="72" fontFamily="system-ui,sans-serif" fontSize="9" fill="#999">Total Earned</text>
            <text x="26" y="92" fontFamily="system-ui,sans-serif" fontSize="18" fontWeight="700" fill="#F06F02">$750</text>

            <rect x="128" y="52" width="100" height="52" rx="8" fill="rgba(62,128,173,0.06)" stroke="rgba(62,128,173,0.2)" strokeWidth="1" />
            <text x="138" y="72" fontFamily="system-ui,sans-serif" fontSize="9" fill="#999">Active Hires</text>
            <text x="138" y="92" fontFamily="system-ui,sans-serif" fontSize="18" fontWeight="700" fill="#3E80AD">3</text>

            <rect x="240" y="52" width="104" height="52" rx="8" fill="rgba(34,197,94,0.06)" stroke="rgba(34,197,94,0.25)" strokeWidth="1" />
            <text x="250" y="72" fontFamily="system-ui,sans-serif" fontSize="9" fill="#999">MRR</text>
            <text x="250" y="92" fontFamily="system-ui,sans-serif" fontSize="18" fontWeight="700" fill="#22c55e">$300</text>

            {/* Pipeline stages */}
            <text x="16" y="126" fontFamily="system-ui,sans-serif" fontSize="10" fill="#999" fontWeight="600" letterSpacing="0.5">
                REFERRAL PIPELINE
            </text>
            {/* Stage bars */}
            {[
                { label: 'Contacted', width: 260, fill: '#e5e7eb', y: 134 },
                { label: 'Demo', width: 190, fill: '#3E80AD', y: 152 },
                { label: 'Proposal', width: 130, fill: '#F06F02', y: 170 },
                { label: 'Hired', width: 80, fill: '#22c55e', y: 188 },
            ].map(b => (
                <g key={b.label}>
                    <rect x="16" y={b.y} width={280} height="12" rx="6" fill="#F1F3F5" />
                    <rect x="16" y={b.y} width={b.width} height="12" rx="6" fill={b.fill} opacity="0.85" />
                    <text x="304" y={b.y + 10} fontFamily="system-ui,sans-serif" fontSize="9" fill="#999">{b.label}</text>
                </g>
            ))}

            {/* Earnings chart */}
            <text x="16" y="222" fontFamily="system-ui,sans-serif" fontSize="10" fill="#999" fontWeight="600" letterSpacing="0.5">
                COMMISSION HISTORY
            </text>
            {/* Simple bar chart */}
            {[
                { x: 16, h: 20, fill: '#F06F02' },
                { x: 52, h: 30, fill: '#F06F02' },
                { x: 88, h: 16, fill: '#3E80AD' },
                { x: 124, h: 38, fill: '#F06F02' },
                { x: 160, h: 24, fill: '#3E80AD' },
                { x: 196, h: 42, fill: '#F06F02' },
                { x: 232, h: 30, fill: '#22c55e' },
                { x: 268, h: 48, fill: '#22c55e' },
            ].map((b, i) => (
                <rect key={i} x={b.x} y={262 - b.h} width="28" height={b.h} rx="4" fill={b.fill} opacity="0.75" />
            ))}
        </svg>
    );
}

export default function DashboardTransparency() {
    return (
        <section id="dashboard" aria-label="Dashboard Transparency" className="section-padding" style={{ backgroundColor: '#fff' }}>
            <div className="container-width">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    style={{ textAlign: 'center', marginBottom: '3.5rem' }}
                >
                    <p style={{ color: '#F06F02', fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                        Full Transparency
                    </p>
                    <h2>Full Visibility in Your Referral Dashboard</h2>
                    <p style={{ maxWidth: '500px', margin: '1rem auto 0', color: '#666', fontSize: '1.0625rem' }}>
                        You always know exactly where your referrals stand and what you've earned.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '4rem',
                    alignItems: 'center',
                }}
                    className="dashboard-grid"
                >
                    {/* Left: tracked items */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.55 }}
                    >
                        <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>What's Tracked</h3>

                        {/* Pipeline stages */}
                        <div style={{ marginBottom: '2rem' }}>
                            <p style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#999', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.875rem' }}>
                                Lead Status Pipeline
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                                {tracked.map((t, i) => (
                                    <div key={t.stage} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                                        <span style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            backgroundColor: `${t.color}18`,
                                            color: t.color,
                                            border: `1px solid ${t.color}40`,
                                            borderRadius: '999px',
                                            padding: '0.3rem 0.75rem',
                                            fontSize: '0.8125rem',
                                            fontWeight: 600,
                                        }}>
                                            {t.stage}
                                        </span>
                                        {i < tracked.length - 1 && (
                                            <span style={{ color: '#ccc', fontSize: '0.75rem' }}>→</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tracked items list */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                            {[
                                { icon: '📧', label: 'Email opens & engagement tracking' },
                                { icon: '💰', label: 'Commissions earned to date' },
                                { icon: '📊', label: 'Recurring MRR visibility' },
                                { icon: '🔔', label: 'Real-time status update notifications' },
                                { icon: '📁', label: 'Complete referral history log' },
                            ].map(item => (
                                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                                    <span style={{
                                        width: '34px', height: '34px',
                                        borderRadius: '8px',
                                        backgroundColor: 'rgba(240,111,2,0.07)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '0.9rem', flexShrink: 0,
                                    }}>
                                        {item.icon}
                                    </span>
                                    <span style={{ fontSize: '0.9375rem', color: '#555' }}>{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: dashboard mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.55, delay: 0.1 }}
                        style={{ display: 'flex', justifyContent: 'center' }}
                    >
                        <DashboardMockup />
                    </motion.div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .dashboard-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
        </section>
    );
}
