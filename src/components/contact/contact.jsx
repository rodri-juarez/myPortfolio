import style from "./contact.module.css";
import { IconContext } from "react-icons";
import { GrLinkedin } from "react-icons/gr";
import { SiGmail } from "react-icons/si";

export default function Contact() {
  return (
    <div className={style.main}>
      <h1 className={style.border}>Get in touch</h1>
      <ul className={style.ul}>
        <a
          href="https://www.linkedin.com/in/rodrigojuarez-dev/"
          target="_blank"
          rel="noreferrer"
        >
          <li className={style.list}>
            <IconContext.Provider
              value={{ color: "blue", size: "30px" }}
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
              value={{ color: "red", size: "30px" }}
            >
              <SiGmail />
            </IconContext.Provider>
          </li>
        </a>
      </ul>
    </div>
  );
}
