import style from "../../containers/home/home.module.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className={style.border}>
      <ul id="ul" className={style.ul}>
        <li className={`${style.li}  ${style.tracking}`}>
          <NavLink
            to="/Proyects"
            activeClassName={style.linkActive}
            className={style.link}
          >
            PROYECTS
            <hr></hr>
          </NavLink>
        </li>
        <li className={`${style.li}  ${style.tracking}`}>
          <NavLink
            exact
            to="/"
            replace
            activeClassName={style.linkActive}
            className={style.link}
          >
            ABOUT ME
            <hr></hr>
          </NavLink>
        </li>
        <li className={`${style.li}  ${style.tracking}`}>
          <a
            className={style.link}
            href="https://medium.com/@rodri-juarez"
            target="_blank"
            rel="noreferrer"
          >
            BLOG
          </a>
        </li>
        <li className={`${style.li}  ${style.tracking}`}>
          <NavLink
            to="/Contact"
            activeClassName={style.linkActive}
            className={style.link}
          >
            CONTACT ME
            <hr></hr>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
