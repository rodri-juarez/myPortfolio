import style from "./skills.module.css";

export default function Skills() {
  return (
    <section className={style.sectionSkills}>
      <div className={style.div}>
        <div className={style.img1}></div>
        <hr className={style.hr}></hr>
        <p className={style.p}>Responsive Desing</p>
        <p className={style.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className={style.div}>
        <div className={style.img2}></div>
        <hr className={style.hr}></hr>
        <p className={style.p}>Logical solutions</p>
        <p className={style.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className={style.div}>
        <div className={style.img3}></div>
        <hr className={style.hr}></hr>
        <p className={style.p}>Clean code</p>
        <p className={style.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </section>
  );
}
