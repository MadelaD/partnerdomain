import { motion } from 'framer-motion';

const steps = [
    {
        number: '01',
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <rect width="32" height="32" rx="10" fill="rgba(240,111,2,0.08)" />
                <path d="M8 10h16M8 16h10M8 22h12" stroke="#F06F02" strokeWidth="2" strokeLinecap="round" />
                <circle cx="24" cy="22" r="4" fill="rgba(240,111,2,0.15)" stroke="#F06F02" strokeWidth="1.5" />
                <path d="M22.5 22l1 1 2-2" stroke="#F06F02" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: 'Send a Warm Introduction',
        description:
            'Email your contact and CC ryan@kistaffing.com + your dedicated LR (Login Representative) email.',
        micro: "CC'ing Ryan ensures proper attribution and fast-tracking.",
    },
    {
        number: '02',
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <rect width="32" height="32" rx="10" fill="rgba(62,128,173,0.08)" />
                <rect x="8" y="12" width="16" height="12" rx="2" stroke="#3E80AD" strokeWidth="1.5" />
                <path d="M8 16h16" stroke="#3E80AD" strokeWidth="1.5" />
                <circle cx="16" cy="8" r="3" stroke="#3E80AD" strokeWidth="1.5" />
                <path d="M16 11v1" stroke="#3E80AD" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
        title: 'Get Instant Dashboard Access',
        description:
            'We automatically create your personal referral dashboard and email login details right to your inbox.',
        micro: 'No setup required — it just appears.',
    },
    {
        number: '03',
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <rect width="32" height="32" rx="10" fill="rgba(240,111,2,0.08)" />
                <circle cx="16" cy="16" r="7" stroke="#F06F02" strokeWidth="1.5" />
                <path d="M13 16l2 2 4-4" stroke="#F06F02" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: 'We Take Care of Everything',
        description:
            'Demos, candidate sourcing, interviews, onboarding — every detail is fully managed by our expert team.',
        micro: 'Your referral is in great hands.',
    },
    {
        number: '04',
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <rect width="32" height="32" rx="10" fill="rgba(62,128,173,0.08)" />
                <path d="M10 22 L14 16 L18 19 L22 11" stroke="#3E80AD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="22" cy="11" r="2" fill="#3E80AD" />
                <circle cx="14" cy="16" r="2" fill="#3E80AD" opacity="0.5" />
            </svg>
        ),
        title: 'Earn at Every Milestone',
        description:
            'Receive bonuses for completed demos, first hires, and recurring monthly revenue for every active placement.',
        micro: 'Multiple hires = multiple recurring income streams.',
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 0, 0.36, 1] as unknown as import('framer-motion').EasingDefinition } },
};

export default function HowItWorks() {
    return (
        <section id="how-it-works" aria-label="How the Referral Program Works" className="section-padding" style={{ backgroundColor: '#fff' }}>
            <div className="container-width">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <p style={{ color: '#F06F02', fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                        Simple by Design
                    </p>
                    <h2>How the Referral Program Works</h2>
                    <p style={{ maxWidth: '540px', margin: '1rem auto 0', color: '#666', fontSize: '1.125rem' }}>
                        Four effortless steps — and we manage every detail after your first email.
                    </p>
                </motion.div>

                {/* Cards grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                        gap: '1.5rem',
                    }}
                >
                    {steps.map((step) => (
                        <motion.div
                            key={step.number}
                            variants={cardVariants}
                            style={{
                                backgroundColor: '#fff',
                                border: '1px solid rgba(0,0,0,0.07)',
                                borderRadius: '1.25rem',
                                padding: '2rem',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                transition: 'box-shadow 0.2s, transform 0.2s',
                                cursor: 'default',
                            }}
                            whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(0,0,0,0.09)' }}
                        >
                            <div style={{ marginBottom: '1.25rem', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                                {step.icon}
                                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#ddd', letterSpacing: '0.04em' }}>
                                    {step.number}
                                </span>
                            </div>
                            <h3 style={{ marginBottom: '0.625rem', fontSize: '1.0625rem' }}>{step.title}</h3>
                            <p style={{ fontSize: '0.9375rem', lineHeight: 1.65, color: '#666', marginBottom: '1rem' }}>
                                {step.description}
                            </p>
                            {step.micro && (
                                <p style={{
                                    fontSize: '0.8125rem',
                                    color: '#F06F02',
                                    fontWeight: 500,
                                    borderTop: '1px solid rgba(240,111,2,0.15)',
                                    paddingTop: '0.75rem',
                                    marginBottom: 0,
                                }}>
                                    ↳ {step.micro}
                                </p>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
