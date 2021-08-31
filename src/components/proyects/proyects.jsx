import style from "./proyects.module.css";

export default function Proyects() {
  return (
    <ul className={style.ul}>
      <li className={`${style.proyects} ${style.tracking}`}>
        <div className={`${style.divImg1} ${style.imag}`}></div>
        <div className={style.divDescription}>
          <p className={style.descriptionTitle}>Rocket Xchange</p>
          <p>
            {" "}
            <a
              href="https://rocketxchange.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              rocketxchange.vercel.app{" "}
            </a>
          </p>
          <p className={style.description}>
            Plataforma creada en la blockchain Stellar. (www.stellar.org)
          </p>
          <a
            href="https://github.com/andresf2448/Exchange-ProyectoFinal"
            target="_blank"
            rel="noreferrer"
          >
            <button className={style.button}>Go to repository</button>
          </a>
        </div>
      </li>
      <li className={`${style.proyects} ${style.tracking}`}>
        <div className={`${style.divImg2} ${style.imag}`}></div>
        <div className={style.divDescription}>
          <p className={style.descriptionTitle}>Henry Videogames</p>
          <p>
            {" "}
            <a
              href="https://github.com/rodri-juarez/PI-Videogames-FT-13"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              videogames-henry.vercel.app{" "}
            </a>
          </p>
          <p className={style.description}>
            Desarrollo de una SPA (Single Page Application) utilizando React
            para el Front End y Redux como state management.
          </p>
          <a
            href="https://github.com/rodri-juarez/PI-Videogames-FT-13"
            target="_blank"
            rel="noreferrer"
          >
            <button className={style.button}>Go to repository</button>
          </a>
        </div>
      </li>
    </ul>
  );
}
