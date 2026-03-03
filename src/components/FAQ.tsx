import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        q: 'Do I need a special referral link?',
        a: "No link required at all. The only step is CC'ing ryan@kistaffing.com and your dedicated LR email when making an intro. That's all we need to attribute the referral to you and set up your dashboard automatically.",
    },
    {
        q: 'What happens if I forget to CC Ryan?',
        a: "Reach out to your LR or email ryan@kistaffing.com directly and let him know you made an introduction. He'll do his best to locate the referral and attribute it correctly, though timely CC'ing is always the fastest and surest path.",
    },
    {
        q: 'When does the recurring commission stop?',
        a: 'Your $100/month per active hire continues for as long as that hire remains an active Kinetic placement. If the placement ends, the recurring commission for that specific hire ends too — but any other active hires continue to earn.',
    },
    {
        q: 'Is there a limit to how much I can earn?',
        a: "There is no cap whatsoever. The more contacts you introduce, and the more placements they make, the more you earn — across demos, first hires, and recurring monthly commissions. It scales completely with the results.",
    },
    {
        q: 'How do I access or reset my dashboard?',
        a: "Your dashboard login is emailed to you automatically after your first referral is registered. If you haven't received it or need to reset access, simply contact your LR or email ryan@kistaffing.com and we'll get you sorted within one business day.",
    },
];

function ChevronIcon({ open }: { open: boolean }) {
    return (
        <svg
            width="18" height="18" viewBox="0 0 18 18" fill="none"
            style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }}
            aria-hidden="true"
        >
            <path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default function FAQ() {
    const [openIdx, setOpenIdx] = useState<number | null>(null);

    return (
        <section id="faq" aria-label="Frequently Asked Questions" className="section-padding" style={{ backgroundColor: '#fff' }}>
            <div className="container-width">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    style={{ textAlign: 'center', marginBottom: '3rem' }}
                >
                    <p style={{ color: '#F06F02', fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                        FAQs
                    </p>
                    <h2>Common Questions</h2>
                    <p style={{ maxWidth: '480px', margin: '1rem auto 0', color: '#666', fontSize: '1.0625rem' }}>
                        Everything you need to know about the referral program.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    style={{ maxWidth: '720px', margin: '0 auto' }}
                >
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            style={{
                                borderBottom: idx < faqs.length - 1 ? '1px solid rgba(0,0,0,0.07)' : 'none',
                            }}
                        >
                            <button
                                onClick={() => setOpenIdx(prev => prev === idx ? null : idx)}
                                aria-expanded={openIdx === idx}
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    padding: '1.375rem 0',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    gap: '1rem',
                                }}
                            >
                                <span style={{
                                    fontWeight: 600,
                                    fontSize: '1rem',
                                    color: openIdx === idx ? '#F06F02' : '#333',
                                    lineHeight: 1.4,
                                    transition: 'color 0.2s',
                                }}>
                                    {faq.q}
                                </span>
                                <span style={{ color: openIdx === idx ? '#F06F02' : '#aaa', flexShrink: 0, transition: 'color 0.2s' }}>
                                    <ChevronIcon open={openIdx === idx} />
                                </span>
                            </button>

                            <AnimatePresence initial={false}>
                                {openIdx === idx && (
                                    <motion.div
                                        key="answer"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2, ease: [0.22, 0, 0.36, 1] as unknown as import('framer-motion').EasingDefinition }}
                                        style={{ overflow: 'hidden' }}
                                    >
                                        <p style={{
                                            fontSize: '0.9375rem',
                                            lineHeight: 1.75,
                                            color: '#555',
                                            paddingBottom: '1.375rem',
                                            marginBottom: 0,
                                        }}>
                                            {faq.a}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
