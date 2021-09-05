import React from "react";
import style from "./switch.module.css";

const Switch = ({ isOn, handleToggle }) => {
  

  

  return (
    <div className={style.divContainer}>
    <p className={style.p}>Tech Stack</p>
      <input
        checked={isOn}
        onChange={handleToggle}
        className={style.reactSwitchCheckbox}
        id={`react-switch-new`}
        type="checkbox"
      />
      <label className={style.reactSwitchLabel} htmlFor={`react-switch-new`}>
        <span  className={style.reactSwitchButton}>{isOn ? 'Backend' : 'Frontend'} </span>
      </label>
    </div>
  );
};

export default Switch;
