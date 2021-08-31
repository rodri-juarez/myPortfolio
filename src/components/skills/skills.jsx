import style from "./skills.module.css";

export default function Skills() {
  return (
    <section className={style.sectionSkills}>
      <div className={style.div}>
        <div className={style.img1}></div>
        <hr className={style.hr}></hr>
        <p>Responsive Desing</p>
      </div>

      <div className={style.div}>
        <div className={style.img2}></div>
        <hr className={style.hr}></hr>
        <p>Logical solutions</p>
      </div>

      <div className={style.div}>
        <div className={style.img3}></div>
        <hr className={style.hr}></hr>
        <p>Clean code</p>
      </div>
    </section>
  );
}
