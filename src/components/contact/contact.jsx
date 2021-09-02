import style from "./contact.module.css";
import { IconContext } from "react-icons";
import { GrLinkedin } from "react-icons/gr";
import { SiGmail } from "react-icons/si";

export default function Contact() {
  return (
    <div className={`${style.main} ${style.tracking}`}>
      <h1 className={style.border}>Get in touch!</h1>
      <a
        className={style.a}
        href="https://drive.google.com/file/d/11jEEsPSd-KgkNZgkdVCsUv9_eVUWYmP5/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        MY CV
      </a>
      <ul className={style.ul}>
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
