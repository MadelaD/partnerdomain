export default function Footer() {
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer
            role="contentinfo"
            style={{
                backgroundColor: '#1a1a1a',
                color: 'rgba(255,255,255,0.5)',
                padding: '3rem 0',
            }}
        >
            <div
                className="container-width"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '1.5rem',
                }}
            >
                {/* Logo + tagline */}
                <div>
                    <img
                        src="/kinetic-logo.png"
                        alt="Kinetic Innovative Staffing"
                        style={{ height: '36px', width: 'auto', marginBottom: '0.5rem', filter: 'brightness(0) invert(1) opacity(0.7)' }}
                    />
                    <p style={{ fontSize: '0.8125rem', marginTop: '0.375rem', color: 'rgba(255,255,255,0.35)', marginBottom: 0 }}>
                        © {new Date().getFullYear()} Kinetic Innovative Staffing. All rights reserved.
                    </p>
                    <a
                        href="https://www.kineticstaff.com/terms-conditions-referral/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.35)', textDecoration: 'underline', marginTop: '0.25rem', display: 'inline-block' }}
                    >
                        Terms & Conditions
                    </a>
                </div>

                {/* Quick links */}
                <nav aria-label="Footer navigation">
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
                        {[
                            { label: 'How It Works', id: 'how-it-works' },
                            { label: 'Earnings', id: 'commission' },
                            { label: 'Dashboard', id: 'dashboard' },
                            { label: 'Templates', id: 'templates' },
                            { label: 'FAQ', id: 'faq' },
                        ].map(link => (
                            <button
                                key={link.id}
                                onClick={() => scrollTo(link.id)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontSize: '0.875rem',
                                    color: 'rgba(255,255,255,0.45)',
                                    padding: 0,
                                    transition: 'color 0.2s',
                                }}
                                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.9)')}
                                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                </nav>

                {/* Contact */}
                <div style={{ fontSize: '0.8125rem', textAlign: 'right' }}>
                    <div style={{ color: 'rgba(255,255,255,0.45)', marginBottom: '0.25rem' }}>Program Contact</div>
                    <a
                        href="mailto:ryan@kistaffing.com"
                        style={{
                            color: '#F06F02',
                            textDecoration: 'none',
                            fontWeight: 500,
                            fontSize: '0.875rem',
                        }}
                    >
                        ryan@kistaffing.com
                    </a>
                </div>
            </div>
        </footer>
    );
}
