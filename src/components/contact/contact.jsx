import style from "./contact.module.css";

export default function Contact() {
  return (
    <>
      <main className={style.main}>
        <h1 className={style.border}>Get in touch</h1>
        <ul className={style.ul}>
          <li className={style.li}>
            <a 
              href="https://www.linkedin.com/in/rodrigojuarez-dev/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="mailto:juarezr100@gmail.com@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Gmail
            </a>
          </li>
        </ul>
      </main>
    </>
  );
}
