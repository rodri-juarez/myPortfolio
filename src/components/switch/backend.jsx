import style from "./tech.module.css";
import { IconContext } from "react-icons";
import { GrLinkedin } from "react-icons/gr";

export default function Backend() {
  return (
    <div className={style.divContainer}>
      <ul className={style.ul}>
        <li className={style.list}>
          <IconContext.Provider
            value={{ color: "rgb(100, 100, 100)", size: "30px" }}
          >
            <GrLinkedin />
          </IconContext.Provider>
        </li>
        <li className={style.list}>
          <IconContext.Provider
            value={{ color: "rgb(100, 100, 100)", size: "30px" }}
          >
            <GrLinkedin />
          </IconContext.Provider>
        </li>
        <li className={style.list}>
          <IconContext.Provider
            value={{ color: "rgb(100, 100, 100)", size: "30px" }}
          >
            <GrLinkedin />
          </IconContext.Provider>
        </li>
        <li className={style.list}>
          <IconContext.Provider
            value={{ color: "rgb(100, 100, 100)", size: "30px" }}
          >
            <GrLinkedin />
          </IconContext.Provider>
        </li>
      </ul>
    </div>
  );
}
