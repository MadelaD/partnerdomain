import { motion } from 'framer-motion';

const tiers = [
    {
        amount: '$50',
        label: 'Per Completed Demo',
        description: 'Earned when your referred contact, a decision-maker looking to hire in the near term, completes a demo with our team.',
        icon: '🎯',
        featured: false,
        color: '#3E80AD',
    },
    {
        amount: '$500',
        label: 'Per New Paying Client',
        description: 'A one-time bonus paid when your referred company becomes a paying client and hires their first full-time team member through Kinetic.',
        icon: '🤝',
        featured: false,
        color: '#3E80AD',
    },
    {
        amount: '$100',
        label: '/ Month per Active Hire',
        description: "Recurring monthly commission for every full-time hire that remains active, starting in the hire's second month.",
        icon: '♾️',
        featured: true,
        color: '#F06F02',
    },
];

export default function CommissionBreakdown() {
    return (
        <section id="commission" aria-label="Commission Breakdown" className="section-padding" style={{ backgroundColor: '#F8F9FB' }}>
            <div className="container-width">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    style={{ textAlign: 'center', marginBottom: '3.5rem' }}
                >
                    <p style={{ color: '#F06F02', fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                        Your Earnings
                    </p>
                    <h2>Transparent Earnings at Every Stage</h2>
                    <p style={{ maxWidth: '500px', margin: '1rem auto 0', color: '#666', fontSize: '1.0625rem' }}>
                        Every milestone tracked. Every commission paid. No surprises.
                    </p>
                </motion.div>

                {/* Cards */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                        gap: '1.5rem',
                        marginBottom: '2.5rem',
                    }}
                >
                    {tiers.map((tier) => (
                        <motion.div
                            key={tier.label}
                            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                            style={{
                                backgroundColor: '#fff',
                                borderRadius: '1.25rem',
                                padding: '2.25rem 2rem',
                                border: tier.featured ? '2px solid #F06F02' : '1px solid rgba(0,0,0,0.07)',
                                boxShadow: tier.featured
                                    ? '0 0 0 4px rgba(240,111,2,0.08), 0 6px 24px rgba(240,111,2,0.12)'
                                    : '0 4px 16px rgba(0,0,0,0.05)',
                                position: 'relative',
                                transition: 'transform 0.2s, box-shadow 0.2s',
                            }}
                            whileHover={{ y: -4 }}
                        >
                            {/* Featured badge */}
                            {tier.featured && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-1px',
                                    left: '50%',
                                    transform: 'translateX(-50%) translateY(-50%)',
                                    backgroundColor: '#F06F02',
                                    color: '#fff',
                                    fontSize: '0.6875rem',
                                    fontWeight: 700,
                                    letterSpacing: '0.06em',
                                    textTransform: 'uppercase',
                                    padding: '0.25rem 0.875rem',
                                    borderRadius: '999px',
                                    whiteSpace: 'nowrap',
                                }}>
                                    Most Valuable
                                </div>
                            )}

                            <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{tier.icon}</div>

                            <div style={{
                                fontSize: 'clamp(2.25rem, 4vw, 3rem)',
                                fontWeight: 700,
                                color: tier.color,
                                lineHeight: 1,
                                marginBottom: '0.375rem',
                            }}>
                                {tier.amount}
                            </div>

                            <div style={{ fontWeight: 600, color: '#333', fontSize: '1rem', marginBottom: '0.875rem', lineHeight: 1.3 }}>
                                {tier.label}
                            </div>

                            <p style={{ fontSize: '0.9375rem', color: '#666', lineHeight: 1.65, marginBottom: 0 }}>
                                {tier.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Subtext */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{ textAlign: 'center' }}
                >
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        backgroundColor: 'rgba(240,111,2,0.06)',
                        border: '1px solid rgba(240,111,2,0.2)',
                        borderRadius: '0.875rem',
                        padding: '0.875rem 1.5rem',
                        fontSize: '0.9375rem',
                        color: '#555',
                    }}>
                        <span style={{ color: '#F06F02', fontSize: '1.125rem' }}>∞</span>
                        <span>
                            <strong style={{ color: '#333' }}>No cap.</strong> Multiple hires = multiple recurring streams. Everything tracked automatically in your dashboard.
                        </span>
                    </div>
                </motion.div>

                {/* T&C link */}
                <p style={{ textAlign: 'center', marginTop: '1.25rem', fontSize: '0.8125rem', color: '#999' }}>
                    Subject to program terms.{' '}
                    <a
                        href="https://www.kineticstaff.com/terms-conditions-referral/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#3E80AD', textDecoration: 'underline' }}
                    >
                        View full Terms & Conditions
                    </a>
                </p>
            </div>
        </section>
    );
}
