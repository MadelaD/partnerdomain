import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';

const templates = [
    {
        id: 'casual',
        label: 'Short & Casual',
        subject: 'Quick intro – someone I think you should meet',
        body: `To: [Your Contact's Name] <[contact@email.com]>
CC: ryan@kistaffing.com, [Your LR's email]
Subject: Quick intro – someone I think you should meet

Hey [Name],

I wanted to introduce you to Ryan at Kinetic Innovative Staffing. They've helped us build out some really solid offshore roles, and honestly the quality has been impressive.

If you're thinking about scaling your team or reducing overhead, it's worth a quick conversation. I've CC'd Ryan directly — he'll take it from here.

[Your Name]`,
    },
    {
        id: 'professional',
        label: 'Professional / Sales-Driven',
        subject: 'Introduction: Kinetic Innovative Staffing — Offshore Talent Solution',
        body: `To: [Your Contact's Name] <[contact@email.com]>
CC: ryan@kistaffing.com, [Your LR's email]
Subject: Introduction: Kinetic Innovative Staffing — Offshore Talent Solution

Hi [Name],

I hope this message finds you well. I wanted to connect you with Ryan Moore at Kinetic Innovative Staffing, a firm I've had the pleasure of partnering with for our offshore staffing needs.

Kinetic specializes in sourcing, vetting, and placing highly skilled offshore professionals across a wide range of business functions. What sets them apart is their fully managed process — from candidate sourcing through onboarding — resulting in a seamless experience with measurable ROI.

Given your current growth trajectory, I believe a conversation would be well worth your time. I've CC'd Ryan here, and I'll let him take the lead on scheduling a discovery session.

Warm regards,
[Your Name]
[Your Title] | [Company]`,
    },
    {
        id: 'results',
        label: 'Value & Results-Focused',
        subject: `The staffing solution that's made a real difference for us`,
        body: `To: [Your Contact's Name] <[contact@email.com]>
CC: ryan@kistaffing.com, [Your LR's email]
Subject: The staffing solution that's made a real difference for us

Hi [Name],

We started working with Kinetic Innovative Staffing a while back and it's genuinely changed how we think about hiring. We've been able to scale our team, reduce costs, and maintain great output — all with people who are reliable and highly capable.

I thought of you because [reason you thought of them — e.g., "you mentioned you were scaling your ops team" / "you've been looking for cost-effective growth options"].

Ryan from Kinetic is CC'd here. Happy to share more about our experience if helpful, but I'll let Ryan walk you through the specifics.

Best,
[Your Name]`,
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

function TemplateItem({ template, isOpen, onToggle }: {
    template: typeof templates[0];
    isOpen: boolean;
    onToggle: () => void;
}) {
    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(template.body);
            toast.success('Email template copied to clipboard!', {
                icon: '📋',
                style: { fontFamily: 'system-ui, sans-serif', borderRadius: '10px', border: '1px solid rgba(240,111,2,0.2)' },
            });
        } catch {
            toast.error('Could not copy. Please select and copy manually.');
        }
    };

    return (
        <div style={{
            border: '1px solid rgba(0,0,0,0.08)',
            borderRadius: '1rem',
            overflow: 'hidden',
            backgroundColor: '#fff',
            boxShadow: isOpen ? '0 4px 20px rgba(0,0,0,0.07)' : 'none',
            transition: 'box-shadow 0.2s',
        }}>
            {/* Trigger */}
            <button
                onClick={onToggle}
                aria-expanded={isOpen}
                style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1.25rem 1.5rem',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    color: '#333',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{
                        width: '28px', height: '28px',
                        borderRadius: '8px',
                        backgroundColor: isOpen ? 'rgba(240,111,2,0.1)' : 'rgba(0,0,0,0.05)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '0.875rem',
                        flexShrink: 0,
                    }}>
                        ✉️
                    </span>
                    <div>
                        <div style={{ fontWeight: 600, fontSize: '1rem', color: '#333' }}>{template.label}</div>
                        <div style={{ fontSize: '0.8125rem', color: '#888', marginTop: '0.15rem' }}>
                            Subject: {template.subject}
                        </div>
                    </div>
                </div>
                <span style={{ color: isOpen ? '#F06F02' : '#999', flexShrink: 0, marginLeft: '1rem' }}>
                    <ChevronIcon open={isOpen} />
                </span>
            </button>

            {/* Content */}
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: [0.22, 0, 0.36, 1] as unknown as import('framer-motion').EasingDefinition }}
                        style={{ overflow: 'hidden' }}
                    >
                        <div style={{ padding: '0 1.5rem 1.5rem' }}>
                            {/* Email preview box */}
                            <div style={{
                                backgroundColor: '#F8F9FB',
                                border: '1px solid rgba(0,0,0,0.08)',
                                borderRadius: '0.75rem',
                                padding: '1.25rem',
                                marginBottom: '1rem',
                            }}>
                                <pre className="email-preview" style={{ margin: 0, color: '#444' }}>
                                    {template.body}
                                </pre>
                            </div>

                            {/* Copy button */}
                            <button
                                onClick={copyToClipboard}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    backgroundColor: '#F06F02',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '0.625rem',
                                    padding: '0.625rem 1.25rem',
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    transition: 'background-color 0.2s, transform 0.15s',
                                }}
                                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#d95f00'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                                onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#F06F02'; e.currentTarget.style.transform = 'none'; }}
                            >
                                📋 Copy to Clipboard
                            </button>

                            <p style={{ fontSize: '0.8125rem', color: '#999', marginTop: '0.75rem', marginBottom: 0 }}>
                                Remember to replace all <strong style={{ color: '#555' }}>[bracketed placeholders]</strong> with your contact's real details before sending.
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function EmailTemplates() {
    const [openId, setOpenId] = useState<string | null>(null);

    const toggle = (id: string) => {
        setOpenId(prev => (prev === id ? null : id));
    };

    return (
        <section id="templates" aria-label="Email Templates" className="section-padding" style={{ backgroundColor: '#F8F9FB' }}>
            <div className="container-width">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    style={{ textAlign: 'center', marginBottom: '3rem' }}
                >
                    <p style={{ color: '#F06F02', fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                        Start in Minutes
                    </p>
                    <h2>Ready-to-Use Intro Email Templates</h2>
                    <p style={{ maxWidth: '540px', margin: '1rem auto 0', color: '#666', fontSize: '1.0625rem' }}>
                        Just pick a style that matches your relationship, fill in the blanks, and hit send. We'll handle everything after.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', maxWidth: '800px', margin: '0 auto' }}
                >
                    {templates.map(t => (
                        <TemplateItem
                            key={t.id}
                            template={t}
                            isOpen={openId === t.id}
                            onToggle={() => toggle(t.id)}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
