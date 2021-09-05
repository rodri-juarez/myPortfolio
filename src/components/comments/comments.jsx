import style from "./comments.module.css";

export default function Comments() {
  return (
    <div className={style.divContainer}>
      <div className={style.div}>
        <p className={style.p}>
          My interests in many different fields has helped me to stay curious,
          open and flexible this have been essential in the concepting of
          solutions. My interests in many different fields has helped me to stay curious.
        </p >
        <p>Software Engineer in Vita Wallet</p>
        <div></div>
      </div>
      <div className={style.div}>
        <p className={style.p}>
          My interests in many different fields has helped me to stay curious,
          open and flexible this have been essential in the concepting of
          solutions. My interests in many different fields has helped me to stay curious.
        </p>
        <p>Software Engineer in VU Security</p>
        <div></div>
      </div>
    </div>
  );
}
