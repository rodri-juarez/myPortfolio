import style from "./tech.module.css";
import { IconContext } from "react-icons";
import { IoLogoNodejs } from "react-icons/io";
import { SiPostgresql, SiSocketDotIo } from "react-icons/si";
import { Icon } from '@iconify/react';

export default function Backend() {
  return (
    <div className={style.divContainer}>
      <ul className={style.ul}>
        <li className={style.list}>
        <Icon icon="simple-icons:express" color="#646464" width="45" height="45" />
        <span style={{ marginTop: "5px" }}>Express.js</span> 
        </li>
        <li className={style.list}>
          <IconContext.Provider
            value={{ color: "rgb(100, 100, 100)", size: "48px" }}
          >
            <IoLogoNodejs />
          </IconContext.Provider>
          <span style={{ marginTop: "5px" }}>Node</span>
        </li>
        <li className={style.list}>
        <Icon icon="simple-icons:supabase" color="#646464" width="45" height="45" />
          <span style={{ marginTop: "5px" }}>Supabase</span>
        </li>
        <li className={style.list}>
          <IconContext.Provider
            value={{ color: "rgb(100, 100, 100)", size: "43px" }}
          >
            <SiPostgresql />
          </IconContext.Provider>
          <span style={{ marginTop: "5px" }}>PostgreSQL</span>
        </li>

        <li className={style.list}>
          <img src="https://i.ibb.co/kXbZFZG/sequelize.png" alt="" />
          <span style={{ marginTop: "5px" }}>Sequelize</span>
        </li>
        <li className={style.list}>
          <IconContext.Provider
            value={{ color: "rgb(100, 100, 100)", size: "45px" }}
          >
            <SiSocketDotIo />
          </IconContext.Provider>
          <span style={{ marginTop: "5px" }}>Socket.IO</span>
        </li>
      </ul>
    </div>
  );
}
