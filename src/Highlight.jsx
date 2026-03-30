import Header from './Header.jsx'
import Footer from './Footer.jsx'
import mascotLogo from './assets/saber-tooth.svg'
import styles from './styles/highlight.module.css'

export default function Highlight() {
    return (
        <>
            <title>Arthur Smith's Ancient Sabertooth | ITIS3135 | Highlight</title>
            <Header />
                <main className={styles.highlight}>
                    <h2>Highlight</h2>
                    <img src={mascotLogo} alt="Sabertooth Lodge Logo" />
                    <nav className={styles.navbar}>
                        <a className={styles.navlink} href="#top">Form</a>
                        <a className={styles.navlink} href="#video">Video</a>
                        <a className={styles.navlink} href="#packages">Packages</a>
                    </nav>
                    <form className={styles.pageForm}>
                        <label for="email">Sign up to be added to the waitlist for one of our limited wilderness adventures!</label>
                        <input className={styles.email} id="email" type="email" name="email" placeholder="email@mail.com" />
                        <button id="submit" type="submit">Submit</button>
                    </form>        
                    <div className={styles.pageVideo}>
                        <p>Watch this video for more information about the adventure!</p>
                        <iframe src="https://player.vimeo.com/video/136407099?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479">
                        </iframe>
                    </div>
                    <div className={styles.packages}>
                        <div className={styles.package}><p>The Overnight</p><div className={styles.packageLogo}></div></div>
                        <div className={styles.package}><p>The Weekend Cave Dweller</p><div className={styles.packageLogo}></div></div>
                        <div className={styles.package}><p>The Nomad</p><div className={styles.packageLogo}></div></div>
                    </div>
                </main>
            <Footer />
        </>
    );
}