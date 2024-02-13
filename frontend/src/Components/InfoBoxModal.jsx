import { useState, useEffect } from "react";
import ModalInfoTab from "./ModalInfoTab";
import ModalFAATab from "./ModalFAATab";

export default function InfoBoxModal({ country, visibility, closeModal }) {
  let imageName = "";

  if (country.imageLink) {
    imageName = `url('${country.imageLink})`;
  }

  const [activeTab, setActiveTab] = useState("one");
  const [bucketOne, setBucketOne] = useState();

  useEffect(() => {
    const fetchBucketOne = async () => {
      if (country !== undefined) {
        const response = await fetch(`/api/bucketone/${country.bucketOne}`);
        const json = await response.json();

        if (response.ok) {
          setBucketOne(json);
        }
      }
    };
    fetchBucketOne();
  }, [country]);

  const handleChildElementClick = (e) => {
    e.stopPropagation();
  };

  const tabClicked = (tab) => {
    setActiveTab(tab);
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
                  <button
                    type="button"
                    className="exitButton"
                    onClick={closeModal}
                  >
                    X
                  </button>
                </div>
              </div>
              <div className="modalButtonContainer">
                <button
                  type="button"
                  className={`modalButton ${activeTab === "one" && "clicked"}`}
                  onClick={() => tabClicked("one")}
                >
                  Information
                </button>
                <button
                  type="button"
                  className={`modalButton ${activeTab === "two" && "clicked"}`}
                  onClick={() => tabClicked("two")}
                >
                  Food & Agriculture
                </button>
                <button
                  type="button"
                  className={`modalButton ${
                    activeTab === "three" && "clicked"
                  }`}
                  onClick={() => tabClicked("three")}
                >
                  Water Access & Quality
                </button>
                <button
                  type="button"
                  className={`modalButton ${activeTab === "four" && "clicked"}`}
                  onClick={() => tabClicked("four")}
                >
                  Energy
                </button>
                <button
                  type="button"
                  className={`modalButton ${activeTab === "five" && "clicked"}`}
                  onClick={() => tabClicked("five")}
                >
                  Affordable Housing
                </button>
                <button
                  type="button"
                  className={`modalButton ${activeTab === "six" && "clicked"}`}
                  onClick={() => tabClicked("six")}
                >
                  Environment
                </button>
                <button
                  type="button"
                  className={`modalButton ${
                    activeTab === "seven" && "clicked"
                  }`}
                  onClick={() => tabClicked("seven")}
                >
                  Economic Prosperity
                </button>
              </div>
            </div>
            <div className="modalContentWrapper">
              <div className="modalContentContainer">
                {activeTab === "one" && (
                  <>
                    <ModalInfoTab country={country} />
                  </>
                )}
                {activeTab === "two" && (
                  <>
                    <ModalFAATab country={country} bucketOne={bucketOne} />
                  </>
                )}
                {activeTab === "three" && <div>You're in tab three.</div>}
                {activeTab === "four" && <div>You're in tab four.</div>}
                {activeTab === "five" && <div>You're in tab five.</div>}
                {activeTab === "six" && <div>You're in tab six.</div>}
                {activeTab === "seven" && <div>You're in tab seven.</div>}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
