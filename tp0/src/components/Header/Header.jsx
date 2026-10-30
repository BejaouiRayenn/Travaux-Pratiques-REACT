

import Style from "./Header.module.css";

function Header() {
    return (
        <header className={Style.header}>
            <h1>Travel Agency</h1>

            <nav className={Style.nav}>
                <a href="#">Accueil</a>
                <a href="#">Destination</a>
                <a href="#">Contacts</a>
            </nav>
        </header>
    );
}

export default Header;