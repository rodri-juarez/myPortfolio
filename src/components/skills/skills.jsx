import style from "./skills.module.css";

export default function Skills() {
  return (
    <section className={style.sectionSkills}>
      <div className={style.div}>
        <div className={style.img1}></div>
        <hr className={style.hr}></hr>
        <p className={style.p}>Responsive Desing</p>
        <p className={style.text}>
        I have developed a personal approach to testing different solutions that has brought me to design mostly in the browser.
        </p>
      </div>
      <div className={style.div}>
        <div className={style.img2}></div>
        <hr className={style.hr}></hr>
        <p className={style.p}>Logical solutions</p>
        <p className={style.text}>
        My interests in many different fields has helped me to stay curious, open and flexible this have been essential in the concepting of solutions.
        </p>
      </div>
      <div className={style.div}>
        <div className={style.img3}></div>
        <hr className={style.hr}></hr>
        <p className={style.p}>Clean code</p>
        <p className={style.text}>
        I apply simple techniques that facilitate the writing and reading of a code, making it easier to understand..
        </p>
      </div>
    </section>
  );
}
