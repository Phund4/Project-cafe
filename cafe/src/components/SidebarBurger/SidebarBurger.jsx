import './sidebar-burger.sass';
import { HashLink as Link } from "react-router-hash-link";
function SidebarBurger() {
    return (
        <div className="sidebar-burger">
            <Link to="/" className="sidebar-burger__hamburger" />
        </div>
    );
}

export default SidebarBurger