import "./App.scss";

import { useState } from "react";

interface ImagePositionDetails {
  index: number;
  currentPositionClass?: string;
}

function App() {
  const imageFullSizeClass = "image-fullsize";
  const showImageClass = "image-show";
  const showImageClassFromUp = "image-show-from-up";
  const showImageClassFromDown = "image-show-from-down";
  const hideImageUpClass = "image-hide-up";
  const hideImageDownClass = "image-hide-down";

  const initialImagePositions = [
    {
      index: 0,
      currentPositionClass: showImageClass,
    },
    {
      index: 1,
      currentPositionClass: undefined,
    },
    {
      index: 2,
      currentPositionClass: undefined,
    },
    {
      index: 3,
      currentPositionClass: undefined,
    },
  ];

  const imageData = [
    {
      path: "/assets/image/1-mount-fuji.jpg",
      alt: "Mount Fuji is missing here",
      cardHeader: "Mount Fuji",
      cardCaption:
        "An active sacred stratovolcano which is why it is a popular tourist destination",
      buttonText: "MT. FUJI",
    },
    {
      path: "/assets/image/2-beach-tori-izu.jpg",
      alt: "Warm beach Tori has to be here",
      cardHeader: "Tori Beach",
      cardCaption:
        "In addition to being a beach with multiple water sports available, it also comes with a beautiful coastline",
      buttonText: "TORI",
    },
    {
      path: "/assets/image/3-fukuoka-river.jpg",
      alt: "Perhaps a misplaced Fukuoka river scenery here",
      cardHeader: "Fukuoka River",
      cardCaption:
        "A multi-funcitonal practical river - used for recreational activities that comes with parks and greenspaces",
      buttonText: "MT. FUJI",
    },
    {
      path: "/assets/image/4-kyoto-torii-gate.jpg",
      alt: "Possible missing Kyoto Torii gate here",
      cardHeader: "FUKUOKA",
      cardCaption:
        "Usually found at the entrace to a Shinto shrine, the Torri Gate carries significant spiritual meaning",
      buttonText: "KYOTO",
    },
  ];

  // const [menuClicked, setMenuClicked] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [imagePositions, setImagePositions] = useState<ImagePositionDetails[]>(
    initialImagePositions
  );

  function renderHeader() {
    return (
      <header className="medium-spacing order-header mark">
        <section>
          <p>ERIC CHEONG KAI KIT</p>
        </section>
        <section className="quarter-width order-row-between">
          <p>PLACES</p>
          <p>MAP</p>
          <a
            href="https://github.com/25Ericcheong/japan-slideshow"
            target="_blank"
            rel="noreferrer"
          >
            SOURCE CODE
          </a>
        </section>
      </header>
    );
  }

  function renderBody() {
    function renderSidebar() {
      const sideButtons = imageData.map((img, index) => {
        const isSelected = index === imageIndex;
        const style = !isSelected ? "not-selected" : "selected";

        return (
          <p
            className={style ?? undefined}
            onClick={() => setImageIndex(index)}
          >
            {img.buttonText}
          </p>
        );
      });

      return <aside>{sideButtons}</aside>;
    }

    function renderContent() {
      return (
        <body className="order-body-part-content">
          <h1>Not just known for its Technological Advancement</h1>
        </body>
      );
    }

    function renderFooter() {
      return (
        <footer className="order-body-part-footer mark medium-spacing">
          {renderCardFooters()}
        </footer>
      );
    }

    return (
      <body className="order-body">
        <section className="order-body-main">
          <div className="order-sidebar mark medium-spacing">
            {renderSidebar()}
          </div>
          <div className="order-body-part mark">
            {renderContent()}
            {renderFooter()}
          </div>
        </section>
      </body>
    );
  }

  function renderCardFooters() {
    return imageData.map((img, index) => {
      const isSelected = index === imageIndex;
      const selectedStyle = !isSelected ? "not-selected" : "selected";
      const footerStyle = `card-footer ${selectedStyle}`;

      return (
        <div className={footerStyle}>
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

  function determineImgVisbility(imageDataIndex: number): string {
    if (imageIndex === imageDataIndex) {
      return showImageClass;
    }
    return imageIndex > imageDataIndex ? hideImageDownClass : hideImageUpClass;
  }

  function renderBackgroundImages() {
    return imageData.map((img, imageDataIndex) => {
      const imageVisbility = determineImgVisbility(imageDataIndex);
      const style = `${imageFullSizeClass} ${imageVisbility}`;

      return <img className={style} src={img.path} alt={img.alt} />;
    });
  }

  return (
    <div id="app">
      {renderBackgroundImages()}
      <div id="content">
        {renderHeader()}
        {renderBody()}
      </div>
    </div>
  );
}

export default App;
