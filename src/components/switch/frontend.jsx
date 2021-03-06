import style from "./tech.module.css";
import { IconContext } from "react-icons";
import { FaReact } from "react-icons/fa";
import { SiRedux, SiMaterialUi, SiCss3, SiJavascript } from "react-icons/si";
export default function Frontend() {
  return (
    <div className={style.divContainer}>
      <ul className={style.ul}>
        <li className={style.list}>
          <IconContext.Provider
            value={{ color: "#4365d6", size: window.innerWidth > 1800 ? "60px" : "45px" }}
          >
            <SiJavascript />
          </IconContext.Provider>
          <span style={{ marginTop: "5px" }}>JavaScript</span>
        </li>
        <li className={style.list}>
          <IconContext.Provider
            value={{ color: "#4365d6", size: window.innerWidth > 1800 ? "60px" : "45px" }}
          >
            <FaReact />
          </IconContext.Provider>
          <span style={{ marginTop: "5px" }}>React</span>
        </li>
        <li className={style.list}>
          <IconContext.Provider
            value={{ color: "#4365d6", size: window.innerWidth > 1800 ? "60px" : "45px" }}
          >
            <SiRedux />
          </IconContext.Provider>
          <span style={{ marginTop: "5px" }}>Redux</span>
        </li>
        <li className={style.list}>
          <IconContext.Provider
            value={{ color: "#4365d6", size: window.innerWidth > 1800 ? "60px" : "45px" }}
          >
            <SiMaterialUi />
          </IconContext.Provider>
          <span style={{ marginTop: "5px" }}>Material UI</span>
        </li>
        <li className={style.list}>
          <IconContext.Provider
            value={{ color: "#4365d6", size: window.innerWidth > 1800 ? "60px" : "45px" }}
          >
            <SiCss3 />
          </IconContext.Provider>
          <span style={{ marginTop: "5px" }}>CSS</span>
        </li>
      </ul>
    </div>
  );
}
