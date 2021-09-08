import style from "./about.module.css";
/* "https://i.ibb.co/4SBRZnC/img.png" */

export default function About() {
  return (
    <div className={style.divContainer}>
      <div className={style.div}>
        <img
          className={style.img}
          src="https://i.ibb.co/C62hZFD/Whats-App-Image-2021-09-07-at-22-44-55.jpg"
          alt="Rodrigo Juarez"
        ></img>
      </div>
      <div className={style.activity}>
        <div className={style.p}>
          Soy desarrollador full stack viviendo actualmente en
          Misiones/Argentina. Me encantan los desafios, la adrenalina de tener
          que lograrlo si o si y la satisfaccion de conseguirlo.
          <br></br>
          <br></br>
          Cuando no estoy
          codeando hago cosas como...
          <br></br>
          <br></br>
          <strong>Caminatas!</strong> Me encanta caminar al aire libre y poder
          pensar en mis cosas, me ayuda a enfocarme y volver al ruedo al 100%
          <br></br>
          <br></br>
          <strong>Escuchar musica!</strong> Rock, pop etc... mis playlists son
          una ensalada rusa, y no tengo problemas con eso :)
        </div>
      </div>
    </div>
  );
}
