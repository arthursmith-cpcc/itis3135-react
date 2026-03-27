import { Link } from "react-router"; 
export default function Header() {
    return (
        <>
            <header>
                <h1>Arthur Smith's Ancient Sabertooth | ITIS3135</h1>
                <nav><Link to="/">Home</Link> | <Link to="/Contract">Contract</Link> | <Link to="/Evaluations">Site Evals</Link> | <Link to="/Survey">Survey</Link> | <Link to="/Gallery">Gallery</Link> | <Link to="/Inventory">Inventory</Link> | <Link to="/Instructions">Instructions</Link> | <Link to="/Highlight">Highlight</Link> | <Link to="/IntroForm">Intro Form</Link></nav>
            </header>
        </>
    );
}