import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, 'change', (latest) => {
        setScrolled(latest > 20);
    });

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 0, 0.36, 1] as unknown as import('framer-motion').EasingDefinition }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                backgroundColor: scrolled ? 'rgba(255,255,255,0.96)' : 'transparent',
                backdropFilter: scrolled ? 'blur(12px)' : 'none',
                boxShadow: scrolled ? '0 1px 20px rgba(0,0,0,0.06)' : 'none',
                transition: 'background-color 0.3s, box-shadow 0.3s',
            }}
        >
            <nav className="container-width" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
                {/* Logo */}
                <img
                    src="/kinetic-logo.svg"
                    alt="Kinetic Innovative Staffing"
                    style={{ height: '40px', width: 'auto' }}
                />

                {/* Nav Links */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <button
                        onClick={() => scrollTo('how-it-works')}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '0.9375rem',
                            fontWeight: 500,
                            color: '#555',
                            padding: '0.5rem 0',
                            transition: 'color 0.2s',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.color = '#F06F02')}
                        onMouseLeave={e => (e.currentTarget.style.color = '#555')}
                    >
                        How It Works
                    </button>
                    <button
                        onClick={() => scrollTo('commission')}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '0.9375rem',
                            fontWeight: 500,
                            color: '#555',
                            padding: '0.5rem 0',
                            transition: 'color 0.2s',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.color = '#F06F02')}
                        onMouseLeave={e => (e.currentTarget.style.color = '#555')}
                    >
                        Earnings
                    </button>
                    <button
                        onClick={() => scrollTo('templates')}
                        style={{
                            backgroundColor: '#F06F02',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '0.5rem',
                            padding: '0.625rem 1.25rem',
                            fontSize: '0.9375rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'background-color 0.2s, transform 0.15s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#d95f00'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                        onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#F06F02'; e.currentTarget.style.transform = 'none'; }}
                    >
                        Get Started
                    </button>
                </div>
            </nav>
        </motion.header>
    );
}
