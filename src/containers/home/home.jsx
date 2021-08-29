import { makeStyles } from "@material-ui/core/styles";
import style from "./home.module.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({

  ul: {
    width: '40%',
    marginTop: '0',
    marginLeft:'30%',
    height: "10vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    listStyleType: "none",
    backgroundColor: 'white',
    
  },
  
}));

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <nav className={ style.border}>
        <ul className={classes.ul}>
          <li className={style.li}>
            <Link to="/" className={style.link}>
              ABOUT
            </Link>
          </li>
          <li className={style.li}>
            <Link to="/" className={style.link}>
              BLOG
            </Link>
          </li>
          <li className={style.li}><div className={style.logo}></div></li>
          <li className={style.li}>
            <Link to="/" className={style.link}>
              CONTACT
            </Link>
          </li>
          <li className={style.li}>
            <Link to="/" className={style.link}>
              PROYECTS
            </Link>
          </li>
        </ul>
      </nav>
      <section className={style.sectionWelcome}>
        <p className={style.hello}>Hi, i'am </p>{" "}
        
      </section>
      <section className={style.sectionName}>
        <p className={style.rodrigo}>RODRIGO</p>{" "}
        <p className={style.juarez}>Juarez</p> 
      </section>
      <section className={style.sectionJob}>
        <p className={style.full}>Full</p>
        <p className={style.stack}>Stack</p>
        <p className={style.developer}>DEVELOPER</p>
      </section>
    </>
  );
}
