import React, { useState } from "react";
import style from "./home.module.css";
import { Link } from "react-router-dom";
import Skills from "../../components/skills/skills";
import Switch from "../../components/switch/switch";
import Frontend from '../../components/switch/frontend';
import Backend from "../../components/switch/backend";
export default function Home() {
  const [isOn, setIsOn] = useState(true);

  return (
    <>
      <section className={style.sectionWelcome}>
        <p className={`${style.hello}  ${style.tracking}`}>Hi, i'm </p>{" "}
      </section>
      <section className={style.sectionName}>
        <p className={`${style.rodrigo}  ${style.tracking}`}>RODRIGO</p>{" "}
        <p className={`${style.juarez}  ${style.tracking}`}>Juarez.</p>
      </section>
      <section className={style.sectionJob}>
        <p className={`${style.full}  ${style.tracking}`}>Full</p>
        <p className={`${style.stack}  ${style.tracking}`}>Stack</p>
        <p className={`${style.developer}  ${style.tracking}`}>DEVELOPER</p>
      </section>
      <Skills />
      <section className={style.sectionTech}>
        <Switch isOn={isOn}
        handleToggle={() => setIsOn(!isOn)}
         />
         {!isOn ? <Frontend />: <Backend />}
      </section>
      <section className={style.contact}>
        <button className={style.excentrico}>
          <Link to="/Contact" className={style.link}>
            CONTACT ME
          </Link>
        </button>
      </section>
    </>
  );
}
