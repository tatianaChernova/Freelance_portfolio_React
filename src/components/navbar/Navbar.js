
import { NavLink } from "react-router-dom";
import BtnDarkMode from "../btnDarkMode/btnDarkMode";
import BtnLang from "../btnLang/btnLang";
import { useTranslation } from "react-i18next";
import "./styles.css";


const Navbar = () => {
    const { t } = useTranslation();
    const activeLink = "nav-list__link nav-list__link--active";
    const normalLink = "nav-list__link";

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to="/" className="logo">
                        {/* <strong>Personal</strong> portfolio */}
                        {t("logo")}
                    </NavLink>
                    <BtnDarkMode />
                    {/* <BtnLang /> */}
                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink to="/" className={({ isActive }) => isActive ? activeLink : normalLink}>Home</NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/projects" className={({ isActive }) => isActive ? activeLink : normalLink}>Projects</NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/contacts" className={({ isActive }) => isActive ? activeLink : normalLink}>Contacts</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;