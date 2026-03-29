import Header from './Header.jsx'
import Footer from './Footer.jsx'
import mascotLogo from './assets/saber-tooth.svg'
import styles from './styles/instructions.module.css'

export default function Instructions() {
    return (
        <>
            <title>Arthur Smith&apos;s Ancient Sabertooth | ITIS3135 | Instructions</title>
            <Header />
                <main className={styles.instructions}>
                    <h2>Instructions</h2>
                    <img src={mascotLogo} alt="Sabertooth Lodge Logo" />
                    <nav className={styles.navbar}>
                    <h3>About the Sabertooth Lodge</h3>
                    <a className={styles.navlink} href="#top">Overview</a>
                    <a className={styles.navlink} href="#pre-history">Pre-History</a>
                    <a className={styles.navlink} href="#oneness">Oneness with Nature</a>
                    <a className={styles.navlink} href="#peace">Peaceful Coexistence</a>
                    <a className={styles.navlink} href="#self">Self-Sufficiency</a>
                    <a className={styles.navlink} href="#restoration">Restoration</a>
                    </nav>
                    <section className={styles.mainSection}>
                        <div id="overview">
                            <h3>Overview</h3>
                            <p>Founded in 1924, the Sabertooth Lodge is the realization of a decades long dream originally conceived by our founder, Dr. H. Elmer Tate, when he was only 12 years old. Our goal is to provide all of our guests with a return to their pre-historic roots, with a few modern amenities added, no matter how short or lengthy their stay with us happens to be.
                            <br /><br />
                            Like our founder, we strive to abide by the 4 tenets of harmonious living established in the lodge&apos;s charter:</p>
                            <ul>
                            <li>Oneness with Nature</li>
                            <li>Peaceful Coexistence</li>
                            <li>Self-Sufficiency</li>
                            <li>Restoration</li>
                            </ul>
                            <p>We hope that you leave our establishment with a renewed sense of connection to the pre-historic land that birthed us.</p>
                        </div>
                        <div id="pre-history">
                            <h3>Pre-History</h3>
                            <p>In 1895, when he was only 10 years old, H. Elmer Tate began what was to be a life-long association with the Dino Scouts of the Eastern Midwest. Over the next two summers, Dr. Tate found himself swept away with what he learned about life in various pre-historic periods. As he looked around at the world as it existed during his time, he wondered if a return to pre-historic values would salve many of the ills faced by mankind. This became the thesis for his dream of a place outside of time wherein, even if only for a day or two, guests could return to a simpler way of living.
                            <br /><br />
                            Dr. Tate&apos;s resolve to bring this dream to reality was solidified during his tour of duty in the Great War. He returned home with renewed zeal and vigor and opened the first Sabertooth Lodge a few years later. It was in the lead up to this opening that Dr. Tate wrote the lodge&apos;s charter. This charter served as a guide for Dr. Tate and all who have followed in his footsteps in guiding the lodge&apos;s mission over the past century. The vision detailed within the charter can be summed up in its 4 Tenets for Harmonious Living &mdash; Oneness with Nature; Peaceful Coexistence; Self-Sufficiency; and Restoration.</p>
                        </div>
                        <div id="oneness">
                            <h3>Oneness with Nature</h3>
                            <blockquote>"To be at one with nature is to be in harmony with oneself. To be at harmony with oneself is to embrace the universe." &mdash; <cite>Dr. H. Elmer Tate</cite>, Sabertooth Lodge Charter</blockquote>
                            <p>The concept of oneness with nature encompasses how we perceive our relationship with the natural world. Rather than viewing nature as a resource to be extracted or a backdrop to human civilization, this tenet embraces the understanding that humans are integral parts of ecological systems. Oneness suggests recognizing our interdependence &mdash; that harming ecosystems ultimately harms ourselves &mdash; and, therefore, encourages decision-making that considers the wellbeing of all living systems, not just immediate human profit or convenience.</p>
                        </div>
                        <div id="peace">
                            <h3>Peaceful Coexistence</h3>
                            <blockquote>"Think of the vastness of the universe, then reflect on our miniscule place within it. Do you now understand the absurdity of being given the choice to either harm or help another person and choosing the former?" &mdash; <cite>Dr. H. Elmer Tate</cite>, Sabertooth Lodge Charter</blockquote>
                            <p>Peaceful coexistence extends beyond the absence of conflict to embrace active cooperation and mutual respect. This tenet acknowledges that our world contains competing interests and limited resources, yet recognizes that violence, domination, and exploitation ultimately fail as long-term strategies. Instead, peaceful coexistence calls for dialogue, compromise, and systems designed so that one group&apos;s gain doesn&apos;t require another&apos;s loss. It means addressing inequality and injustice, because lasting peace requires fairness. It&apos;s about building trust through transparency and accountability, recognizing that sustainable success comes from relationships where all parties feel respected and heard.</p>
                        </div>
                        <div id="self">
                            <h3>Self-Sufficiency</h3>
                            <blockquote>"When we live in harmonious entanglement with nature and with one another, then we unlock all the glorious bounty the universe has to offer." &mdash; <cite>Dr. H. Elmer Tate</cite>, Sabertooth Lodge Charter</blockquote>
                            <p>Self-sufficiency emphasizes resilience, independence, and the capacity to meet one&apos;s own needs without creating unhealthy dependencies. This tenet values local capacity-building and empowerment and recognizes that communities and organizations are strongest when they can sustain themselves through their own resources, knowledge, and capabilities.
                            <br /><br />
                            Self-sufficiency doesn&apos;t mean complete isolation or rejecting collaboration &mdash; rather, it means building systems and capabilities that reduce vulnerability and promote autonomy. This may involve local food production, renewable energy systems, and skill-sharing networks.
                            <br /><br />
                            This tenet also speaks to resilience in the face of disruption. Self-sufficient systems are more adaptable because they&apos;re not entirely reliant on fragile global supply chains or external support. They can weather many crises because they have redundancy and local capacity. Additionally, self-sufficiency promotes dignity and agency; people who can meet their own needs have greater autonomy and self-determination than those dependent on others&apos; goodwill.</p>
                        </div>
                        <div id="restoration">
                            <h3>Restoration</h3>
                            <blockquote>"When you have sown and reaped and seen good for all your hard work, stop. Take time to reflect and to reinvigorate yourself for the work to come." &mdash; <cite>Dr. H. Elmer Tate</cite>, Sabertooth Lodge Charter</blockquote>
                            <p>The restoration tenet is fundamentally hopeful. It is found within the liminal space between the work that has been accomplished and the work that is yet to have begun. The time of restoration is a time of rest, of rejoicing, and of expressing appreciation. It may also be a time of recovery of things sacrificed &mdash; physical, emotional, spiritual &mdash; in pursuit of accomplished goals.</p>
                        </div>
                    </section>
                </main>
            <Footer />
        </>
    );
}