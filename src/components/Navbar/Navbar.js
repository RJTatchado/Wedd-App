import './Navbar.module.scss';

export const Navbar=() => {
  return (
    <div className="nav_bar">
        <nav className="nav_menu_div">
            <ul class="nav_menu">
                <li class="nav_menu_item">Home</li>
                <li class="nav_menu_item">Love Story</li>
                <li class="nav_menu_item">Photos</li>
                <li class="nav_menu_item">Venue</li>
                <li class="nav_menu_item">RSVP</li>
            </ul>
        </nav>
    </div>
  )
}