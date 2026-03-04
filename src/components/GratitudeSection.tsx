import { motion } from 'framer-motion';

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function GratitudeSection() {
    return (
        <section
            id="gratitude"
            aria-label="Thank You"
            style={{ backgroundColor: '#F8F9FB' }}
            className="section-padding"
        >
            <div className="container-width" style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto' }}>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.12 } },
                    }}
                >
                    {/* Decorative line */}
                    <motion.div variants={fadeUp} style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div style={{ height: '2px', width: '40px', backgroundColor: '#F06F02', borderRadius: '1px' }} />
                            <span style={{ color: '#F06F02', fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                                A Note from Our Team
                            </span>
                            <div style={{ height: '2px', width: '40px', backgroundColor: '#F06F02', borderRadius: '1px' }} />
                        </div>
                    </motion.div>

                    <motion.h2 variants={fadeUp} style={{ marginBottom: '1.5rem' }}>
                        Thank You for Choosing Kinetic
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        style={{ fontSize: '1.125rem', lineHeight: 1.75, color: '#555', marginBottom: '1rem' }}
                    >
                        We truly value the trust you've placed in us to build and support your team
                        with skilled offshore talent. Your partnership means everything to us — it's
                        the foundation on which Kinetic grows and evolves.
                    </motion.p>

                    <motion.p
                        variants={fadeUp}
                        style={{ fontSize: '1.125rem', lineHeight: 1.75, color: '#555', marginBottom: '1rem' }}
                    >
                        This referral program is our heartfelt thank-you. As a valued partner who
                        understands what we do firsthand, you're uniquely positioned to introduce
                        other founders to the same reliable, high-quality support you rely on today.
                    </motion.p>

                    <motion.p
                        variants={fadeUp}
                        style={{ fontSize: '1.125rem', lineHeight: 1.75, color: '#555' }}
                    >
                        When you help expand the Kinetic family, we make sure you're rewarded at
                        every milestone — transparently and consistently.
                    </motion.p>

                </motion.div>
            </div>
        </section>
    );
}
