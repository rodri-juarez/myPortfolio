import style from "./home.module.css";

export default function Home() {
  
  return (
    <>
      <section className={style.sectionWelcome}>
        <p className={`${style.hello}  ${style.tracking}`}>Hi, i'm </p>{" "}
        
      </section>
      <section className={style.sectionName}>
        <p className={`${style.rodrigo}  ${style.tracking}`}>RODRIGO</p>{" "}
        <p className={`${style.juarez}  ${style.tracking}`}>Juarez.</p> 
      </section>
      <section className={style.sectionJob}>
        <p className={`${style.full}  ${style.tracking}`}>Full</p>
        <p className={`${style.stack}  ${style.tracking}`}>Stack</p>
        <p className={`${style.developer}  ${style.tracking}`}>DEVELOPER</p>
      </section>
    </>
  );
}
