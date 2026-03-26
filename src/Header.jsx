import { Link } from "react-router"; 
export default function Header() {
    return (
        <>
            <header>
                <h1>Arthur Smith's Ancient Sabertooth | ITIS3135</h1>
                <nav><Link to="/">Home</Link> | <Link to="/Introduction">Introduction</Link></nav>
            </header>
        </>
    );
}