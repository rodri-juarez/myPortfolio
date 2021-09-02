import style from "./proyects.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";

export default function Proyects() {
  return (
    <ul className={style.ul}>
      <li className={`${style.proyects} ${style.tracking}`}>
        <div className={style.divCarousel}>
        <Splide
          options={{
            rewind: true,
            width: '100%',
            gap: "3rem",
            autoplay: true,
            interval: 5000,
          }}>
          <SplideSlide>
            <img src="https://i.ibb.co/H2nbqP5/Untitled.png" alt="" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://i.ibb.co/THzQxsQ/criptos.png" alt="" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://i.ibb.co/qprycvg/trade.png" alt="" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://i.ibb.co/BCtt9mw/wallet.png" alt="" />
          </SplideSlide>
        </Splide>
        </div>
        <div className={style.divDescription}>
          <p className={style.descriptionTitle}>Rocket Xchange</p>
          <p>
            {" "}
            <a
              href="https://rocketxchange.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className={style.urlDeploy}
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
      <div className={style.divCarousel}>
        <Splide
          options={{
            rewind: true,
            width: "100%",
            gap: "3rem",
            autoplay: true,
            interval: 5000,
          }}
        >
          <SplideSlide>
            <img src="https://i.ibb.co/8Kfn4fG/henry-videogames.png" alt="" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://i.ibb.co/SsMHs2N/initial-Page.png" alt="" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://i.ibb.co/FzmGyq8/create-Videogame.png" alt="" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://i.ibb.co/7WrLhsH/game-Detail.png" alt="" />
          </SplideSlide>
        </Splide>
        </div>
        <div className={style.divDescription}>
          <p className={style.descriptionTitle}>Henry Videogames</p>
          <p>
            {" "}
            <a
              href="https://github.com/rodri-juarez/PI-Videogames-FT-13"
              target="_blank"
              rel="noreferrer"
              className={style.urlDeploy}
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
