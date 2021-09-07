import React, { useState } from "react";
import style from "./home.module.css";
import { Link } from "react-router-dom";
import Skills from "../../components/skills/skills";
import Switch from "../../components/switch/switch";
import Frontend from '../../components/switch/frontend';
import Backend from "../../components/switch/backend";
import Comments from "../../components/comments/comments";
export default function Home() {
  const [isOn, setIsOn] = useState(true);

  return (
    <>
      <section className={style.sectionWelcome}>
        <p className={`${style.hello}  ${style.tracking}`}>Hi, i'm </p>{" "}
      </section>
      <section className={style.sectionName}>
        <p className={`${style.rodrigo}  ${style.tracking}`}>RODRIGO JUAREZ</p>{" "}
        {/* <p className={`${style.rodrigo}  ${style.tracking}`}>JUAREZ</p> */}
      </section>
      <section className={style.sectionJob}>
        <p className={`${style.full}  ${style.tracking}`}>Full Stack DEVELOPER</p>
        {/* <p className={`${style.stack}  ${style.tracking}`}>Stack</p>
        <p className={`${style.developer}  ${style.tracking}`}>DEVELOPER</p> */}
      </section>
      <section className={style.sectionSkills}>
      <Skills />
      </section>
      <section className={style.sectionTech}>
        <Switch isOn={isOn}
        handleToggle={() => setIsOn(!isOn)}
         />
         {!isOn ? <Frontend />: <Backend />}
      </section>
      <section className={style.sectionComments}>
        <Comments />
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
