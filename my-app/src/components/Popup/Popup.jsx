import React from "react";
import "./Popup.css";

export function Popup({ message, popup, setPopup }) {
  function handleClose() {
    setPopup(false);
  }

  return (
    <div className={`popup ${popup && "popup_visible"}`}>
      <div className="popup__form">
        <h2 className="popup__title">{message}</h2>
        <button onClick={handleClose} className="popup__submit" type="submit">
          Okay, boy
        </button>
        <button onClick={handleClose} type="button" className="popup__close" />
      </div>
    </div>
  );
}
