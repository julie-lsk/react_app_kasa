import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../utils/style/components/header.scss";


function Header()
{
    /* Rech. les infos de l'URL actuelle */
    const location = useLocation();

    return (
        <header>
            <Link to="/">
                <img src={logo} alt="Logo de Kasa"></img>
            </Link>

            <nav>
                <NavLink to="/" className={location.pathname === "/" ? "active" : ""}> {/* Gère soulignement */}
                    Accueil
                </NavLink>

                <NavLink to="/a-propos" className={location.pathname === "/a-propos" ? "active" : ""}>
                    À propos
                </NavLink>
            </nav>
        </header>
    )
}

export default Header