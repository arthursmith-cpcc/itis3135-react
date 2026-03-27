import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default function Survey() {
    return (
        <>
            <title>Arthur Smith's Ancient Sabertooth | ITIS3135 | Survey</title>
            <Header />
                <main>
                    <h2>Survey</h2>
                    <img src="./assets/saber-tooth.svg" alt="Sabertooth Lodge Logo" />
                    <p>Tell us about your stay at the Sabertooth Lodge!</p>
                    <form id="survey-form">
                        <div class="name-email-age">
                            <label for="name">Name (required)</label>
                            <input required id="name" name="name" type="text" placeholder="e.g., Jane Doe" />
                            <label for="email">E-mail (required)</label>
                            <input required id="email" type="email" name="email" placeholder="account@email.com" />
                            <label for="age">Age</label>
                            <input type="number" id="age" min="5" max="125" placeholder="5 to 125" />
                        </div>
                        <p>How Much Did You Enjoy Your Stay?</p>
                        <select id="rating" name="rating">
                            <option value="" selected>(select a rating)</option>
                            <option value="5">5</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                        </select>
                        <p>Would you recommend our facility?</p>
                        <input type="radio" name="recommend" id="recommend-yes" value="yes" checked />
                        <label for="recommend-yes">Yes</label>
                        <input type="radio" name="recommend" id="recommend-no" value="no" />
                        <label for="recommend-no">No</label>
                        <p>What amenities did you use during your stay?</p>
                        <input type="checkbox" id="spa" name="amenity" value="spa">
                        <label for="spa">Spa</label>
                        <input type="checkbox" id="pool" name="amenity" value="pool">
                        <label for="pool">Pool</label>
                        <input type="checkbox" value="bar" id="bar" name="amenity">
                        <label for="bar">Bar</label>
                        <p>Please add any additional comments you would like to share</p>
                        <textarea name="comments" id="comments" rows="7" cols="50"></textarea>
                        <button type="submit" id="submit">Submit</button>
                    </form>
                </main>
            <Footer />
        </>
    );
}