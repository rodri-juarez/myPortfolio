import style from "../../containers/home/home.module.css";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  ul: {
    width: "40%",
    marginTop: "1vh",
    marginLeft: "27%",
    height: "10vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    listStyleType: "none",
    backgroundColor: "transparent",
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <nav className={style.border}>
      <ul className={classes.ul}>
        <li className={`${style.li}  ${style.tracking}`}>
          <Link to="/" className={style.link}>
            ABOUT ME
          </Link>
        </li>
        <li className={`${style.li}  ${style.tracking}`}>
          <a
            className={style.link}
            href="https://medium.com/@rodri-juarez"
            target="_blank"
            rel="noreferrer"
          >
            BLOG
          </a>
        </li>
        <li className={`${style.li}  ${style.tracking}`}>
          <Link to="/Contact" className={style.link}>
            CONTACT ME
          </Link>
        </li>
      </ul>
    </nav>
  );
}
