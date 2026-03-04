import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const CASUAL_TEMPLATE = `To: [Your Contact's Name] <[contact@email.com]>
CC: ryan@kistaffing.com, [Your Recruiter's email]
Subject: Quick intro – someone I think you should meet

Hey [Name],

I wanted to introduce you to Ryan at Kinetic Innovative Staffing. They've helped us build out some really solid offshore roles, and honestly the quality has been impressive.

If you're thinking about scaling your team or reducing overhead, it's worth a quick conversation. I've CC'd Ryan directly — he'll take it from here.

[Your Name]`;

export default function FinalCTA() {
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const copyTemplate = async () => {
        try {
            await navigator.clipboard.writeText(CASUAL_TEMPLATE);
            toast.success('Intro email template copied!', {
                icon: '📋',
                style: { fontFamily: 'system-ui, sans-serif', borderRadius: '10px' },
            });
        } catch {
            toast.error('Could not copy. Please try manually.');
        }
    };

    return (
        <section
            id="final-cta"
            aria-label="Final Call to Action"
            style={{
                backgroundColor: '#3E80AD',
                padding: '6rem 0',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Background decorative circles */}
            <div aria-hidden="true" style={{
                position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none',
            }}>
                <div style={{
                    position: 'absolute', top: '-80px', right: '-80px',
                    width: '360px', height: '360px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                }} />
                <div style={{
                    position: 'absolute', bottom: '-100px', left: '-60px',
                    width: '300px', height: '300px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.04)',
                }} />
                <div style={{
                    position: 'absolute', top: '50%', left: '50%',
                    width: '600px', height: '600px',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(240,111,2,0.06)',
                }} />
            </div>

            <div className="container-width" style={{ position: 'relative', textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.55 }}
                >
                    {/* Badge */}
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        border: '1.5px solid rgba(255,255,255,0.25)',
                        borderRadius: '999px',
                        padding: '0.35rem 0.875rem',
                        marginBottom: '1.75rem',
                        backgroundColor: 'rgba(255,255,255,0.08)',
                    }}>
                        <span style={{
                            fontSize: '0.8125rem',
                            fontWeight: 600,
                            color: 'rgba(255,255,255,0.9)',
                            letterSpacing: '0.04em',
                        }}>
                            ✦ Exclusively for Kinetic Clients
                        </span>
                    </div>

                    <h2 style={{ color: '#fff', marginBottom: '1.25rem', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                        Ready to Make an Introduction?
                    </h2>

                    <p style={{
                        fontSize: '1.125rem',
                        lineHeight: 1.7,
                        color: 'rgba(255,255,255,0.82)',
                        maxWidth: '560px',
                        margin: '0 auto 2.5rem',
                    }}>
                        Just send one thoughtful email — CC Ryan and your Recruiter — and we'll handle
                        the rest while rewarding your partnership at every milestone.
                    </p>

                    {/* CTAs */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                        <button
                            onClick={copyTemplate}
                            style={{
                                backgroundColor: '#fff',
                                color: '#3E80AD',
                                border: 'none',
                                borderRadius: '0.75rem',
                                padding: '0.9375rem 2rem',
                                fontSize: '1rem',
                                fontWeight: 700,
                                cursor: 'pointer',
                                transition: 'transform 0.15s, box-shadow 0.2s',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.2)'; }}
                            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)'; }}
                        >
                            📋 Copy Intro Email Template
                        </button>

                        <button
                            onClick={() => scrollTo('commission')}
                            style={{
                                backgroundColor: 'transparent',
                                color: 'rgba(255,255,255,0.9)',
                                border: '1.5px solid rgba(255,255,255,0.4)',
                                borderRadius: '0.75rem',
                                padding: '0.9375rem 2rem',
                                fontSize: '1rem',
                                fontWeight: 600,
                                cursor: 'pointer',
                                transition: 'background-color 0.2s, transform 0.15s',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.transform = 'none'; }}
                        >
                            View Full Commission Details
                        </button>
                    </div>

                    {/* Contact note */}
                    <p style={{
                        marginTop: '2.5rem',
                        fontSize: '0.875rem',
                        color: 'rgba(255,255,255,0.55)',
                    }}>
                        Questions? Email{' '}
                        <a
                            href="mailto:ryan@kistaffing.com"
                            style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'underline' }}
                        >
                            ryan@kistaffing.com
                        </a>
                        {' '}or reach out to your Recruiter directly.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
