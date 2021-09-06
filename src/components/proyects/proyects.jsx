import style from "./proyects.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";
import Button from "@material-ui/core/Button";
export default function Proyects() {
  return (
    <ul className={style.ul}>
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
              <img style={{height:'90%', width:'90%'}} src="https://i.ibb.co/H2nbqP5/Untitled.png" alt="" />
            </SplideSlide>
            <SplideSlide>
              <img style={{height:'90%', width:'90%'}} src="https://i.ibb.co/THzQxsQ/criptos.png" alt="" />
            </SplideSlide>
            <SplideSlide>
              <img style={{height:'90%', width:'90%'}} src="https://i.ibb.co/qprycvg/trade.png" alt="" />
            </SplideSlide>
            <SplideSlide>
              <img style={{height:'90%', width:'90%'}} src="https://i.ibb.co/BCtt9mw/wallet.png" alt="" />
            </SplideSlide>
          </Splide>
        </div>
        <div className={style.divDescription}>
          <p className={style.descriptionTitle}>Rocket Xchange</p>
          <p className={style.description}>
            Exchange created on the Stellar blockchain. (www.stellar.org)
          </p>
          <div className={style.a}>
            <a
              href="https://github.com/andresf2448/Exchange-ProyectoFinal"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                style={{
                  background: "rgb(121, 121, 121)",
                  color: "white",
                  fontWeight:'400',
                  fontSize: "12px",
                  height: "35px",
                  margin: "5px",
                  borderRadius: "0px",
                }}
                variant="contained"
              >
                VIEW REPOSITORY
              </Button>
            </a>
            <a
              href="https://rocketxchange.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                style={{
                  background: "rgb(121, 121, 121)",
                  color: "white",
                  fontWeight:'400',
                  fontSize: "12px",
                  height: "35px",
                  margin: "5px",
                  borderRadius: "0px",
                }}
                variant="contained"
              >
                VIEW WEB
              </Button>
            </a>
          </div>
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
              <img style={{height:'90%', width:'90%'}} src="https://i.ibb.co/8Kfn4fG/henry-videogames.png" alt="" />
            </SplideSlide>
            <SplideSlide>
              <img style={{height:'90%', width:'90%'}} src="https://i.ibb.co/SsMHs2N/initial-Page.png" alt="" />
            </SplideSlide>
            <SplideSlide>
              <img style={{height:'90%', width:'90%'}} src="https://i.ibb.co/FzmGyq8/create-Videogame.png" alt="" />
            </SplideSlide>
            <SplideSlide>
              <img style={{height:'90%', width:'90%'}}  src="https://i.ibb.co/7WrLhsH/game-Detail.png" alt="" />
            </SplideSlide>
          </Splide>
        </div>
        <div className={style.divDescription}>
          <p className={style.descriptionTitle}>Henry Videogames</p>
          <p className={style.description}>
            Development of a SPA (Single Page Application) using React for Front
            End and Redux as state management.
          </p>
          <a
            href="https://github.com/rodri-juarez/PI-Videogames-FT-13"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              style={{
                background: "rgb(121, 121, 121)",
                fontWeight:'400',
                color: "white",
                fontSize: "12px",
                height: "35px",
                margin: "5px",
                borderRadius: "0px",
              }}
              variant="contained"
            >
              VIEW REPOSITORY
            </Button>
            <a
              href="https://videogames-henry.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                style={{
                  background: "rgb(121, 121, 121)",
                  color: "white",
                  fontWeight:'400',
                  fontSize: "12px",
                  height: "35px",
                  margin: "5px",
                  borderRadius: "0px",
                }}
                variant="contained"
              >
                VIEW WEB
              </Button>
            </a>
          </a>
        </div>
      </li>
    </ul>
  );
}
