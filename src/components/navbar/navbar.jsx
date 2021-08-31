import style from "../../containers/home/home.module.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className={style.border}>
      <ul id="ul" className={style.ul}>
        <li className={`${style.li}  ${style.tracking}`}>
          <NavLink
            to="/Proyects"
            activeStyle={{
              backgroundColor: "rgb(194, 193, 193)",
              transition: "800ms",
            }}
            className={style.link}
            replace
          >
            PROYECTS
          </NavLink>
        </li>
        <li className={`${style.li}  ${style.tracking}`}>
          <NavLink exact to="/" replace 
          className={style.link}
          activeStyle={{
            backgroundColor: "rgb(194, 193, 193)",
            transition: "800ms",
          }}
          >
            ABOUT ME
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
            activeStyle={{
              backgroundColor: "rgb(194, 193, 193)",
              transition: "800ms",
            }}
            className={style.link}
            replace
          >
            CONTACT ME
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
