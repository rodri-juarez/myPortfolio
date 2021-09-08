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
        <strong>ABOUT ME</strong> 
        <br></br>
          <br></br>
          I am a full stack developer currently living in Misiones/Argentina. 
          <strong>I love challenges</strong> , learning new things and deliver
          quality work.
          <br></br>
          <br></br>
          When i'm not coding I do things like ...
          <br></br>
          <br></br>
          <strong>Walking!</strong> I love walking outdoors and being able to
          think about my things, it helps me focus and get back on track 100%
          <br></br>
          <br></br>
          <strong>Listening music!</strong> Rock, pop etc... I'm open minded. 
        </div>
      </div>
    </div>
  );
}
