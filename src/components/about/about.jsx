import style from "./about.module.css";

export default function About() {
  return (
    <div className={style.divContainer}>
      <div className={style.div}></div>
      <div className={style.activity}>
        <div className={style.p}>
          <strong>ABOUT ME</strong>
          <br></br>
          <br></br>I am a full stack developer currently living in
          Misiones/Argentina. <br></br>
          <strong>I love challenges</strong> , learn and i always try to do a
          quality job.
          <br></br>
          <br></br>
          When i'm not coding I do things like ...
          <br></br>
          <br></br>
          <strong>Walking!</strong> I love walking outdoors and being able to
          think about my things, it helps me focus and get back on track 100%
          <br></br>
          <br></br>
          <strong>Listening music!</strong> Rock, pop etc... I am open-minded
          and I like to listen to styles from other cultures that I do not know.
        </div>
      </div>
    </div>
  );
}
