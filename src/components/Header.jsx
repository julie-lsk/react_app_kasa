import { Link, NavLink } from "react-router-dom";
import logo from "../utils/assets/logo.svg";
import "../utils/style/components/header.scss";


function Header()
{
    return (
        <header>
            
            <Link to="/">
                <img src={logo} alt="Logo de Kasa"></img>
            </Link>

            <nav>
                <NavLink to="/"> {/* NavLink = ajoute automatiquement la classe "active" au lien actif */}
                    Accueil
                </NavLink>

                <NavLink to="/a-propos">
                    À propos
                </NavLink>
            </nav>

        </header>
    )
}

export default Header