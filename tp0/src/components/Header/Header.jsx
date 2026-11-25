

import { NavLink } from "react-router-dom";
import Style from "./Header.module.css";

function Header() {
    return (
        <header className={Style.header}>
            <h1>Travel Agency</h1>

            <nav className={Style.nav}>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? Style.active : ""
                    }
                >
                    Accueil
                </NavLink>

                <NavLink
                    to="/destinations"
                    className={({ isActive }) =>
                        isActive ? Style.active : ""
                    }
                >
                    Destinations
                </NavLink>

                <NavLink
                    to="/reservation"
                    className={({ isActive }) =>
                        isActive ? Style.active : ""
                    }
                >
                    Réservation
                </NavLink>

                <NavLink
                    to="/login"
                    className={({ isActive }) =>
                        isActive ? Style.active : ""
                    }
                >
                    Login
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;
