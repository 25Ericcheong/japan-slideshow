import "../App.scss";
import "./Footer.scss";

import IMAGE_DATA from "../Data.json";
import { STYLE } from "../Constants";
import { useState } from "react";

interface Props {
  imageIndex: number;
}

export const Footer = ({ imageIndex }: Props) => {
  const [hideFooter, setHideFooter] = useState(false);
  const [showButton, setShowButton] = useState(false);

  function renderCards() {
    return IMAGE_DATA.map((img, index) => {
      const isSelected = index === imageIndex;
      const selectedStyle = !isSelected ? STYLE.notSelected : STYLE.selected;
      const footerStyle = `card-footer ${selectedStyle}`;

      return (
        <div className={footerStyle} key={index}>
          <div className="card-image-part-footer">
            <img src={img.path} alt={img.alt} />
          </div>
          <div className="card-caption-part-footer">
            <h3>{img.cardHeader}</h3>
            <p>{img.cardCaption}</p>
          </div>
        </div>
      );
    });
  }

  function popupButtonLater() {
    setTimeout(() => {
      setShowButton(true);
    }, 1500);
  }

  function handleFooterClick() {
    setHideFooter((prevState) => !prevState);

    if (!hideFooter) {
      setShowButton(false);
      popupButtonLater();
      return;
    }
  }

  function renderButton() {
    const buttonText = hideFooter ? "SHOW" : "HIDE";

    return (
      <button id="button-footer" onClick={handleFooterClick}>
        <div id="button-text">
          <p>{buttonText}</p>
        </div>
      </button>
    );
  }

  function _style() {
    let footerStyle = "order-body-part-footer";

    if (hideFooter) {
      footerStyle += " hide";
    }

    if (showButton && hideFooter) {
      footerStyle += " only-button-footer-show";
    }

    footerStyle += " medium-spacing";
    return footerStyle;
  }

  return (
    <footer className={_style()}>
      {renderButton()}
      {renderCards()}
    </footer>
  );
};
