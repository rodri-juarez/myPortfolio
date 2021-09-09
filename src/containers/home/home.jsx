import React, { useState } from "react";
import style from "./home.module.css";
import { Link } from "react-router-dom";
import Skills from "../../components/skills/skills";
import Switch from "../../components/switch/switch";
import Frontend from "../../components/switch/frontend";
import Backend from "../../components/switch/backend";
import Comments from "../../components/comments/comments";
import About from "../../components/about/about";

export default function Home() {
  const [isOn, setIsOn] = useState(true);

  return (
    <>
      <section className={style.sectionWelcome}>
        <p className={`${style.hello}  ${style.tracking}`}>HI, I'M </p>{" "}
        <p className={`${style.name}  ${style.tracking}`}>RODRIGO JUAREZ</p>{" "}
        <p className={`${style.job}  ${style.tracking}`}>
          FULL STACK DEVELOPER
        </p>
      </section>
      <Skills />
      <section className={style.sectionTech}>
        <Switch isOn={isOn} handleToggle={() => setIsOn(!isOn)} />
        {!isOn ? <Frontend /> : <Backend />}
      </section>
      <section className={style.sectionAbout}>
        <About />
      </section>
      <section className={style.sectionComments}>
        <Comments />
      </section>

      <section className={style.contact}>
        <button className={style.btn}>
          <Link to="/Contact" className={style.link}>
            CONTACT ME
          </Link>
        </button>
      </section>
    </>
  );
}
