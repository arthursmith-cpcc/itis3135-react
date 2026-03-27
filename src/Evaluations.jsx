import Header from './Header.jsx'
import Footer from './Footer.jsx'
import './index.css'

export default function Evaluations() {
    return (
        <>
            <title>Arthur Smith's Ancient Sabertooth | ITIS3135 | Site Evals</title>
            <Header />
                <main>
                    <h2>Website Evaluations</h2>
                    <section>
                        <h3><a href="https://www.wtatennis.com" target="_blank">WTA Tennis</a></h3>
                            <ul>
                                <li><strong>Contrast:</strong> The site alternates the use of three main colors &mdash; lime green, purple, and white &mdash; in a way that allows clear yet eye-pleasing contrast between backgrounds, main headings, subheadings, and navigation menu items.</li>                
                                <li><strong>Repetition:</strong> Consistent use of sans-serif font styles for heading elements and other text on the page, along with repeated design elements like rounded corners, give the page a unified feeling.</li>
                                <li><strong>Alignment:</strong> Although there are variations in alignment across different sections of the page, alignment and margin size are consistently employed within each individual section.</li>
                                <li><strong>Proximity:</strong> Borders and margins are used along with headings to delineate different sections of the page. Although there aren't large blank sections in the page, the margin is sufficient to alert the eye to a break in one section and the beginning of another.</li>
                            </ul>
                    </section>
                    <section>
                        <h3><a href="https://arngren.net/" target="_blank">ARNGREN.net</a></h3>
                        <ul>
                            <li><strong>Contrast:</strong> Most of the page has a plain white background. This combined with the chaotic layout and seemingly random choices of font color make it nearly impossible to focus the eye on any one point in the page. Nothing stands out.</li>
                            <li><strong>Repetition:</strong> Several font sizes and colors, and border colors and weights, are used. There doesn't appear to be a unifying theme for the page.</li>
                            <li><strong>Alignment:</strong> This site's design stands in staunch opposition to the very concept of alignment with its overlapping borders and a static page width that refuses to scale to the browser window's size.</li>
                            <li><strong>Proximity:</strong> Again here, nothing stands out on the page because everything is closely bunched together. Any distance between elements on the page is purely coincidental.</li>
                        </ul>
                    </section>
                </main>
            <Footer />
        </>
    );
}