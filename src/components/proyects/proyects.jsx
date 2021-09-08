import style from "./proyects.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";
import Button from "@material-ui/core/Button";
export default function Proyects() {
  return (
    <ul className={style.ul}>
      <li className={`${style.proyects} ${style.tracking}`}>
      {window.innerWidth <  600 && <p className={style.descriptionTitleMobile}>Rocket Xchange</p> }
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
              <img
                style={{ height: "100%", width: "100%" }}
                src="https://i.ibb.co/H2nbqP5/Untitled.png"
                alt=""
              />
            </SplideSlide>
            <SplideSlide>
              <img
                style={{ height: "100%", width: "100%" }}
                src="https://i.ibb.co/THzQxsQ/criptos.png"
                alt=""
              />
            </SplideSlide>
            <SplideSlide>
              <img
                style={{ height: "100%", width: "100%" }}
                src="https://i.ibb.co/qprycvg/trade.png"
                alt=""
              />
            </SplideSlide>
            <SplideSlide>
              <img
                style={{ height: "100%", width: "100%" }}
                src="https://i.ibb.co/BCtt9mw/wallet.png"
                alt=""
              />
            </SplideSlide>
          </Splide>
        </div>
        <div className={style.divDescription}>
        {window.innerWidth >  600 && <p className={style.descriptionTitle}>Rocket Xchange</p> }
          <p className={style.description}>
            Platform that allows users to connect to the Stellar blockchain
            where they can exchange their assets for any other class of
            currencies, both fiats and cryptocurrencies. (www.stellar.org).
            <br></br>
            Includes Stellar protocols 1, 2, 10, 12, 24.
            <br></br>
            <br></br>
            Technologies:<br></br> React, Redux, Material UI, Supabase,
            Express, Socket.IO PostgreSQL.
          </p>
          <div className={style.a}>
            <a
              href="https://github.com/andresf2448/Exchange-ProyectoFinal"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                className={style.button}
                style={{
                  fontWeight: "400",
                  fontSize: "12px",
                  height: "35px",
                  margin: "5px",
                  borderRadius: "0px",
                  background: "#4365d6",
                  color: "white",
                }}
                variant="contained"
              >
                REPOSITORY
              </Button>
            </a>
            <a
              href="https://rocketxchange.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                className={style.button}
                style={{
                  fontWeight: "400",
                  fontSize: "12px",
                  height: "35px",
                  margin: "5px",
                  borderRadius: "0px",
                  background: "#4365d6",
                  color: "white",
                }}
                variant="contained"
              >
                WEB
              </Button>
            </a>
          </div>
        </div>
      </li>
      <li className={`${style.proyects} ${style.tracking}`}>
      {window.innerWidth <  600 && <p className={style.descriptionTitleMobile}>Henry Videogames</p> }
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
              <img
                style={{ height: "100%", width: "100%" }}
                src="https://i.ibb.co/8Kfn4fG/henry-videogames.png"
                alt=""
              />
            </SplideSlide>
            <SplideSlide>
              <img
                style={{ height: "100%", width: "100%" }}
                src="https://i.ibb.co/SsMHs2N/initial-Page.png"
                alt=""
              />
            </SplideSlide>
            <SplideSlide>
              <img
                style={{ height: "100%", width: "100%" }}
                src="https://i.ibb.co/FzmGyq8/create-Videogame.png"
                alt=""
              />
            </SplideSlide>
            <SplideSlide>
              <img
                style={{ height: "100%", width: "100%" }}
                src="https://i.ibb.co/7WrLhsH/game-Detail.png"
                alt=""
              />
            </SplideSlide>
          </Splide>
        </div>
        <div className={style.divDescription}>
        {window.innerWidth >  600 && <p className={style.descriptionTitle}>Henry Videogames</p> }
          <p className={style.description}>
            Development of a SPA (Single Page Application) using React for
            frontend and Redux as state management.
            <br></br>
            The SPA consumes the RAWG data through a backend developed in
            Node.JS using Express, adding new functionalities to the original
            API.
            <br></br>
            <br></br>
            Technologies:<br></br> React, Redux, Express, Sequelize,
            PostgreSQL.
          </p>

          <a
            href="https://github.com/rodri-juarez/PI-Videogames-FT-13"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              className={style.button}
              style={{
                fontWeight: "400",
                fontSize: "12px",
                height: "35px",
                margin: "5px",
                borderRadius: "0px",
                background: "#4365d6",
                color: "white",
              }}
              variant="contained"
            >
              REPOSITORY
            </Button>
            <a
              href="https://videogames-henry.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                className={style.button}
                style={{
                  fontWeight: "400",
                  fontSize: "12px",
                  height: "35px",
                  margin: "5px",
                  borderRadius: "0px",
                  background: "#4365d6",
                  color: "white",
                }}
                variant="contained"
              >
                WEB
              </Button>
            </a>
          </a>
        </div>
      </li>
    </ul>
  );
}
