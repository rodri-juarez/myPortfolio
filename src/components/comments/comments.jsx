import { useState} from 'react';
import style from "./comments.module.css";
import Avatar from "@material-ui/core/Avatar";
import { Splide, SplideSlide } from "@splidejs/react-splide";


export default function Comments() {
 const [isMobile, setIsMobile] = useState()

 window.onload = function() {
  window.innerWidth < 600 ? setIsMobile(true) : setIsMobile(false)
};
  return (
    <>
      {isMobile && (
        
          <Splide
            options={{
              rewind: true,
              width: "80%",
              gap: "3rem",
              autoplay: true,
              interval: 5000,
            }}
          >
            <SplideSlide>
              <div className={style.divMobile}>
                <p className={style.p}>
                  "Rodrigo is a great developer. His desire to always learn
                  something new is contagious and pushes you to improve your
                  skills. He really loves what he does and it shows when you
                  talk to him."
                </p>
                <div className={style.infoDevContainer}>
                  <a
                    href="https://www.linkedin.com/in/andresvelasqueztrujillo/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Avatar
                      style={{ width: "50px", height: "50px" }}
                      alt="Andres Trujillo"
                      src="https://i.ibb.co/DYSnPt2/andres.jpg"
                      className={style.avatar}
                    />
                  </a>
                  <div className={style.infoDev}>
                    <h4 className={style.pTitle}>Andres Trujillo</h4>
                    <p className={style.pDescription}>
                      Full Stack Developer in Vita Wallet
                    </p>
                  </div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className={style.divMobile}>
                <p className={style.p}>
                  "One of the things that i highlight the most about Rodrigo is
                  that he is an excellent teammate, always ready to help you
                  with whatever you need. Programming with him i learned a lot off soft skills.
                </p>
                <div className={style.infoDevContainer}>
                  <a
                    href="https://www.linkedin.com/in/facundo-bettella-iunnissi-dev/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Avatar
                      style={{ width: "50px", height: "50px" }}
                      alt="Facundo Bettella"
                      src="https://i.ibb.co/3CBmTQP/facundo.jpg"
                      className={style.avatar}
                    />
                  </a>
                  <div className={style.infoDev}>
                    <h4 className={style.pTitle}>Facundo Bettella</h4>
                    <p className={style.pDescription}>
                      Backend Developer in VU Security
                    </p>
                  </div>
                </div>
              </div>
            </SplideSlide>
          </Splide>
        
      )}
      {!isMobile &&  <div className={style.divContainer}>
        <div className={style.div}>
          <p className={style.p}>
            "Rodrigo is a great developer. His desire to always learn something
            new is contagious and pushes you to improve your skills. He really
            loves what he does and it shows when you talk to him."
          </p>
          <div className={style.infoDevContainer}>
            <a
              href="https://www.linkedin.com/in/andresvelasqueztrujillo/"
              target="_blank"
              rel="noreferrer"
            >
              <Avatar
                style={{ width: "50px", height: "50px" }}
                alt="Andres Trujillo"
                src="https://i.ibb.co/DYSnPt2/andres.jpg"
                className={style.avatar}
              />
            </a>
            <div className={style.infoDev}>
              <h4 className={style.pTitle}>Andres Trujillo</h4>
              <p className={style.pDescription}>
                Full Stack Developer in Vita Wallet
              </p>
            </div>
          </div>
        </div>
        <div className={style.div}>
          <p className={style.p}>
            "One of the things that I highlight the most about Rodrigo is that
            he is an excellent teammate, always ready to help you with whatever
            you need. Programming with him helped me have better soft skills
            because you constantly learn from their way of being."
          </p>
          <div className={style.infoDevContainer}>
            <a
              href="https://www.linkedin.com/in/facundo-bettella-iunnissi-dev/"
              target="_blank"
              rel="noreferrer"
            >
              <Avatar
                style={{ width: "50px", height: "50px" }}
                alt="Facundo Bettella"
                src="https://i.ibb.co/3CBmTQP/facundo.jpg"
                className={style.avatar}
              />
            </a>
            <div className={style.infoDev}>
              <h4 className={style.pTitle}>Facundo Bettella</h4>
              <p className={style.pDescription}>
                Backend Developer in VU Security
              </p>
            </div>
          </div>
        </div>
      </div>}
    </>
  );
}
