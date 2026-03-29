import Header from './Header.jsx'
import Footer from './Footer.jsx'
import mascotLogo from './assets/saber-tooth.svg'
import styles from './styles/inventory.module.css'

export default function Inventory() {
    return (
        <>
            <title>Arthur Smith's Ancient Sabertooth | ITIS3135 | Inventory</title>
            <Header />
                <main className={styles.inventory}>
                    <h2>Inventory</h2>
                    <img src={mascotLogo} alt="Sabertooth Lodge Logo" />
                    <p>Come Sample Our Favorite Wines!</p>
                    <table>
                        <thead>
                            <tr>
                                <th>Wine</th>
                                <th>Country</th>
                                <th>Vinyard</th>
                                <th>Vintage</th>
                                <th>Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className={styles.redWine}>
                                <td>Pinot Noir</td>
                                <td>United States</td>
                                <td>Classic Napa</td>
                                <td>2016</td>
                                <td><span className={styles.rateThree}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                </span></td>
                            </tr>
                            <tr className={styles.whiteWine}>
                                <td>Pinot Grigio</td>
                                <td>United States</td>
                                <td>Silvertree</td>
                                <td>2019</td>
                                <td><span className={styles.rateFour}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                </span></td>
                            </tr>
                            <tr className={styles.redWine}>
                                <td>Malbec</td>
                                <td>Argentina</td>
                                <td>Manos Negras</td>
                                <td>2023</td>
                                <td><span className={styles.rateFour}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                </span></td>
                            </tr>
                            <tr className={styles.redWine}>
                                <td>Bordeaux</td>
                                <td>France</td>
                                <td>Merci Noir</td>
                                <td>2017</td>
                                <td><span className={styles.rateThree}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                </span></td>
                            </tr>
                            <tr className={styles.whiteWine}>
                                <td>Chardonnay</td>
                                <td>Chile</td>
                                <td>El Tres</td>
                                <td>2020</td>
                                <td><span className={styles.rateThree}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                </span></td>
                            </tr>
                            <tr className={styles.redWine}>
                                <td>Shiraz</td>
                                <td>Australia</td>
                                <td>Queensland Premier</td>
                                <td>2015</td>
                                <td><span className={styles.rateFour}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                </span></td>
                            </tr>
                        </tbody>
                    </table>
                </main>
            <Footer />
        </>
    );
}