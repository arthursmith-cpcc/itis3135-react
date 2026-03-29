import Header from './Header.jsx'
import Footer from './Footer.jsx'
import lodgeExterior from './assets/exterior.jpg'
import lodgeGate from './assets/gate-by-Luke-Shaw.jpg'
import lodgeBackLot from './assets/backlot-by-Marathon.jpg'
import stoneArt from './assets/stone_art.jpg'
import greenHotel from './assets/green-hotel.jpg'
import mascotLogo from './assets/saber-tooth.svg'
import styles from './styles/gallery.module.css'

export default function Gallery() {
    return (
        <>
            <title>Arthur Smith's Ancient Sabertooth | ITIS3135 | Gallery</title>
            <Header />
                <main className={styles.gallery}>
                    <h2>Gallery</h2>
                    <img src={mascotLogo} alt="Sabertooth Lodge Logo" />
                    <p>See our lodge for yourself!</p>
                    <div className={styles.photoGallery}>
                        <figure className={styles.photo}>
                            <img src={lodgeExterior} alt="Sabertooth Lodge Exterior" />
                        </figure>
                        <figure className={styles.photo}>
                            <img src={lodgeGate} alt="Sabertooth Lodge Entrance Gate" />
                            <figcaption><a href="https://www.geograph.org.uk/photo/7516302" target="_blank">Photo</a> &copy; Copyright <a href="https://www.geograph.org.uk/profile/129268" target="_blank">Luke Shaw</a> | <a href="http://creativecommons.org/licenses/by-sa/2.0/" target="_blank">(cc-by-sa/2.0)</a> Creative Commons License.</figcaption>
                        </figure>
                        <figure className={styles.photo}>
                            <img src={lodgeBackLot} alt="Sabertooth Lodge Back Lot" />
                            <figcaption><a href="https://www.geograph.org.uk/photo/7594554" target="_blank">Photo</a> &copy; Copyright <a href="https://www.geograph.org.uk/profile/43806" target="_blank">Marathon</a> | <a href="http://creativecommons.org/licenses/by-sa/2.0/" target="_blank">(cc-by-sa/2.0)</a> Creative Commons License.</figcaption>
                        </figure>
                        <figure class={styles.photo}>
                            <img src={stoneArt} alt="Sabertooth Lodge Stone Art Installation" />
                            <figcaption><a href="https://www.flickr.com/photos/slrjester/289603054/" target="_blank">Photo</a> &copy; Copyright <a href="https://www.flickr.com/photos/slrjester/" target="_blank">SLR Jester</a> | <a href="https://creativecommons.org/licenses/by/2.0/deed.en" target="_blank">Creative Commons License 2.0 Generic Deed</a></figcaption>
                        </figure>
                        <figure class={styles.photo}>
                            <img src={greenHotel} alt="Sabertooth Lodge Second Exterior Shot" />
                            <figcaption></figcaption>
                        </figure>
                    </div>
                </main>
            <Footer />
        </>
    );
}