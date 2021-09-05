import style from "./comments.module.css";
import Avatar from "@material-ui/core/Avatar";

export default function Comments() {
  return (
    <div className={style.divContainer}>
      <div className={style.div}>
        <p className={style.p}>
          "My interests in many different fields has helped me to stay curious,
          open and flexible this have been essential in the concepting of
          solutions. My interests in many different fields has helped me to stay
          curious."
        </p>
        <div className={style.infoDevContainer}>
          <a
            href="https://www.linkedin.com/in/andresvelasqueztrujillo/"
            target="_blank"
            rel="noreferrer"
          >
            <Avatar
              alt="Andres Trujillo"
              src="https://i.ibb.co/DYSnPt2/andres.jpg"
              className={style.avatar}
            />
          </a>
          <div className={style.infoDev}>
            <h4 className={style.pTitle}>Andres Trujillo</h4>
            <p className={style.pDescription}>Full Stack Developer in Vita Wallet</p>
          </div>
        </div>
      </div>
      <div className={style.div}>
        <p className={style.p}>
          "My interests in many different fields has helped me to stay curious,
          open and flexible this have been essential in the concepting of
          solutions. My interests in many different fields has helped me to stay
          curious."
        </p>
        <div className={style.infoDevContainer}>
          <a
            href="https://www.linkedin.com/in/facundo-bettella-iunnissi-dev/"
            target="_blank"
            rel="noreferrer"
          >
            <Avatar
              alt="Facundo Bettella"
              src="https://i.ibb.co/3CBmTQP/facundo.jpg"
              className={style.avatar}
            />
          </a>
          <div className={style.infoDev}>
            <h4 className={style.pTitle}>Facundo Bettella</h4>
            <p className={style.pDescription}>Backend Developer in VU Security</p>
          </div>
        </div>
      </div>
    </div>
  );
}
