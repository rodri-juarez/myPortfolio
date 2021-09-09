import style from "./tech.module.css";
import { IconContext } from "react-icons";
import { IoLogoNodejs } from "react-icons/io";
import { SiPostgresql, SiSocketDotIo } from "react-icons/si";
import { Icon } from "@iconify/react";

export default function Backend() {
  return (
    <div className={style.divContainer}>
      <ul className={style.ul}>
        <li className={style.list}>
          <Icon
            icon="simple-icons:express"
            color="#4365d6"
            width={window.innerWidth > 1800 ? "60px" : "45px"}
            height={window.innerWidth > 1800 ? "60px" : "45px"}
          />
          <span style={{ marginTop: "5px" }}>Express.js</span>
        </li>
        <li className={style.list}>
          <IconContext.Provider value={{ color: "#4365d6", size: window.innerWidth > 1800 ? "62px" : "45px" }}>
            <IoLogoNodejs />
          </IconContext.Provider>
          <span style={{ marginTop: "5px" }}>Node</span>
        </li>
        <li className={style.list}>
          <Icon
            icon="simple-icons:supabase"
            color="#4365d6"
            width={window.innerWidth > 1800 ? "60px" : "45px"}
            height={window.innerWidth > 1800 ? "60px" : "45px"}
          />
          <span style={{ marginTop: "5px" }}>Supabase</span>
        </li>
        <li className={style.list}>
          <IconContext.Provider
            value={{
              color: "#4365d6",
              size: window.innerWidth > 1800 ? "60px" : "45px",
            }}
          >
            <SiPostgresql />
          </IconContext.Provider>
          <span style={{ marginTop: "5px" }}>PostgreSQL</span>
        </li>

        <li className={style.list}>
          <Icon
            icon="simple-icons:sequelize"
            color="#4365d6"
            width={window.innerWidth > 1800 ? "60px" : "45px"}
            height={window.innerWidth > 1800 ? "60px" : "45px"}
          />
          <span style={{ marginTop: "5px" }}>Sequelize</span>
        </li>
        <li className={style.list}>
          <IconContext.Provider
            value={{
              color: "#4365d6",
              size: window.innerWidth > 1800 ? "60px" : "45px",
            }}
          >
            <SiSocketDotIo />
          </IconContext.Provider>
          <span style={{ marginTop: "5px" }}>Socket.IO</span>
        </li>
      </ul>
    </div>
  );
}
