import style from "./contact.module.css";
import { IconContext } from "react-icons";
import { GrLinkedin } from "react-icons/gr";
import { SiGmail } from "react-icons/si";

export default function Contact() {
  return (
    <div className={style.main}>
      <h1 className={`${style.border} ${style.tracking}`}>Get in touch!</h1>
      {/* <a href="./rodrigo.pdf" download="CV-Rodrigo.pdf">
        Descargar Archivo
      </a> */}
      <ul className={`${style.ul} ${style.tracking}`}>
        <a
          href="https://www.linkedin.com/in/rodrigojuarez-dev/"
          target="_blank"
          rel="noreferrer"
        >
          <li className={style.list}>
            <IconContext.Provider
              value={{ color: "rgb(100, 100, 100)", size: "30px" }}
            >
              <GrLinkedin />
            </IconContext.Provider>
          </li>
        </a>
        <a
          href="mailto:juarezr100@gmail.com@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <li className={style.list}>
            <IconContext.Provider
              value={{ color: "rgb(100, 100, 100)", size: "30px" }}
            >
              <SiGmail />
            </IconContext.Provider>
          </li>
        </a>
      </ul>
    </div>
  );
}
