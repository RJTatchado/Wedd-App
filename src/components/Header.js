import nav_logo from "../assets/img/logo/nav-logo.png"
import "../assets/scss/header.scss"

const Header = () => {
    return (
        <header class="header">
            <div class="container">
                <nav class="header_nav">
                    <div class="logo"> 
                        <img class="nav_logo" src={nav_logo} alt="nav_logo"></img>
                    </div>
                    <ul class="header_menu">
                        <li class="header_menu_item">Home</li>
                        <li class="header_menu_item">Love Story</li>
                        <li class="header_menu_item">Photos</li>
                        <li class="header_menu_item">Venue</li>
                        <li class="header_menu_item">RSVP</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;