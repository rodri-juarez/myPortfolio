import style from "./skills.module.css";

export default function Skills() {
  return (
    <div className={`${style.divContainer} ${style.tracking}`}>
      <div className={style.title}>I’M SPECIALISED IN</div>
      <div className={style.divCards}>
        <div className={style.div}>
          <div className={style.img1}></div>
          <hr className={style.hr}></hr>
          <p className={style.p}>RESPONSIVE DESING</p>
          <p className={style.text}>
            I have developed a personal approach to testing different solutions
            on browsers / mobile devices.
          </p>
        </div>
        <div className={style.div}>
          <div className={style.img2}></div>
          <hr className={style.hr}></hr>
          <p className={style.p}>LOGICAL SOLUTIONS</p>
          <p className={style.text}>
            My interests in many different fields has helped me to stay curious,
            open and flexible, this have been essential in the concepting of
            solutions.
          </p>
        </div>
        <div className={style.div}>
          <div className={style.img3}></div>
          <hr className={style.hr}></hr>
          <p className={style.p}>CLEAN CODE</p>
          <p className={style.text}>
          I use simple techniques that make it easy to write and read the code.
          </p>
        </div>
      </div>
    </div>
  );
}
