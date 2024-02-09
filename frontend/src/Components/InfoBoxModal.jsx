import { useState, useEffect } from "react";
import ModalInfoTab from "./ModalInfoTab";
import ModalFAATab from "./ModalFAATab";

export default function InfoBoxModal({ country, visibility, closeModal }) {
  let imageName = "";

  if (country.imageLink) {
    imageName = `url('${country.imageLink})`;
  }

  const [tabOne, setTabOne] = useState("clicked");
  const [tabTwo, setTabTwo] = useState("");
  const [tabThree, setTabThree] = useState("");
  const [tabFour, setTabFour] = useState("");
  const [tabFive, setTabFive] = useState("");
  const [tabSix, setTabSix] = useState("");
  const [tabSeven, setTabSeven] = useState("");
  const [bucketOne, setBucketOne] = useState();

  useEffect(() => {
    const fetchBucketOne = async () => {
      const response = await fetch(`/api/bucketone/${country.bucketOne}`);
      const json = await response.json();

      if (response.ok) {
        setBucketOne(json);
      }
    };
    fetchBucketOne();
  }, [country]);

  const handleChildElementClick = (e) => {
    e.stopPropagation();
  };

  const tabClicked = (tab) => {
    switch (tab) {
      case "one":
        setTabOne("clicked");
        setTabTwo("");
        setTabThree("");
        setTabFour("");
        setTabFive("");
        setTabSix("");
        setTabSeven("");
        break;
      case "two":
        setTabOne("");
        setTabTwo("clicked");
        setTabThree("");
        setTabFour("");
        setTabFive("");
        setTabSix("");
        setTabSeven("");
        break;
      case "three":
        setTabOne("");
        setTabTwo("");
        setTabThree("clicked");
        setTabFour("");
        setTabFive("");
        setTabSix("");
        setTabSeven("");
        break;
      case "four":
        setTabOne("");
        setTabTwo("");
        setTabThree("");
        setTabFour("clicked");
        setTabFive("");
        setTabSix("");
        setTabSeven("");
        break;
      case "five":
        setTabOne("");
        setTabTwo("");
        setTabThree("");
        setTabFour("");
        setTabFive("clicked");
        setTabSix("");
        setTabSeven("");
        break;
      case "six":
        setTabOne("");
        setTabTwo("");
        setTabThree("");
        setTabFour("");
        setTabFive("");
        setTabSix("clicked");
        setTabSeven("");
        break;
      case "seven":
        setTabOne("");
        setTabTwo("");
        setTabThree("");
        setTabFour("");
        setTabFive("");
        setTabSix("");
        setTabSeven("clicked");
        break;
      default:
        setTabOne("");
        setTabTwo("");
        setTabThree("");
        setTabFour("");
        setTabFive("");
        setTabSix("");
        setTabSeven("");
        break;
    }
  };

  return (
    <>
      {visibility && (
        <div className="infoBoxModalWrapper" onClick={closeModal}>
          <div
            className="infoBoxModalContainer"
            onClick={(e) => handleChildElementClick(e)}
          >
            <div
              className="modalHeader"
              style={{
                backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.7) 100%), 
                  ${imageName}`,
              }}
            >
              <div className="modalTitleContainer">
                <div className="modalTitleCountryRegion">
                  <p>
                    {country.country}
                    <br />
                    {country.region}
                  </p>
                </div>
                <div className="modalTitleExitContainer">
                  <button className="exitButton" onClick={closeModal}>
                    X
                  </button>
                </div>
              </div>
              <div className="modalButtonContainer">
                <button
                  className={`modalButton ${tabOne}`}
                  onClick={() => tabClicked("one")}
                >
                  Information
                </button>
                <button
                  className={`modalButton ${tabTwo}`}
                  onClick={() => tabClicked("two")}
                >
                  Food & Agriculture
                </button>
                <button
                  className={`modalButton ${tabThree}`}
                  onClick={() => tabClicked("three")}
                >
                  Water Access & Quality
                </button>
                <button
                  className={`modalButton ${tabFour}`}
                  onClick={() => tabClicked("four")}
                >
                  Energy
                </button>
                <button
                  className={`modalButton ${tabFive}`}
                  onClick={() => tabClicked("five")}
                >
                  Affordable Housing
                </button>
                <button
                  className={`modalButton ${tabSix}`}
                  onClick={() => tabClicked("six")}
                >
                  Environment
                </button>
                <button
                  className={`modalButton ${tabSeven}`}
                  onClick={() => tabClicked("seven")}
                >
                  Economic Prosperity
                </button>
              </div>
            </div>
            <div className="modalContentWrapper">
              <div className="modalContentContainer">
                {tabOne === "clicked" && (
                  <>
                    <ModalInfoTab country={country} />
                  </>
                )}
                {tabTwo === "clicked" && (
                  <>
                    <ModalFAATab country={country} bucketOne={bucketOne} />
                  </>
                )}
                {tabThree === "clicked" && <div>You're in tab three.</div>}
                {tabFour === "clicked" && <div>You're in tab four.</div>}
                {tabFive === "clicked" && <div>You're in tab five.</div>}
                {tabSix === "clicked" && <div>You're in tab six.</div>}
                {tabSeven === "clicked" && <div>You're in tab seven.</div>}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
