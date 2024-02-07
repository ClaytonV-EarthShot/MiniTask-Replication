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
  const [bucketOne, setBucketOne] = useState();

  useEffect(() => {
    const fetchBucketOne = async () => {
      console.log("This is country.bucketOne");
      console.log(country.bucketOne);
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
        break;
      case "two":
        setTabOne("");
        setTabTwo("clicked");
        setTabThree("");
        setTabFour("");
        setTabFive("");
        break;
      case "three":
        setTabOne("");
        setTabTwo("");
        setTabThree("clicked");
        setTabFour("");
        setTabFive("");
        break;
      case "four":
        setTabOne("");
        setTabTwo("");
        setTabThree("");
        setTabFour("clicked");
        setTabFive("");
        break;
      case "five":
        setTabOne("");
        setTabTwo("");
        setTabThree("");
        setTabFour("");
        setTabFive("clicked");
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
                  Healthcare
                </button>
                <button
                  className={`modalButton ${tabFour}`}
                  onClick={() => tabClicked("four")}
                >
                  Category
                </button>
                <button
                  className={`modalButton ${tabFive}`}
                  onClick={() => tabClicked("five")}
                >
                  Category
                </button>
              </div>
            </div>
            <div className="modalContentWrapper">
              <div className="modalContentContainer">
                <div className="modalContent">
                  {tabOne === "clicked" && (
                    <>
                      <ModalInfoTab country={country} />
                    </>
                  )}
                  {tabTwo === "clicked" && (
                    <>
                      <ModalFAATab country={country} />
                    </>
                  )}
                  {tabThree === "clicked" && <div>You're in tab three.</div>}
                  {tabFour === "clicked" && <div>You're in tab four.</div>}
                  {tabFive === "clicked" && <div>You're in tab five.</div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
