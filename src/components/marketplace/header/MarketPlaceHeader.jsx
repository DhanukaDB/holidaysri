import { faGift, faBed, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./marketplaceheader.css";
import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useNavigate } from "react-router-dom";

const MarketPlaceHeader = ({ type }) => {
  const [destination, setDestination] = useState("");

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/marketPlace", { state: { destination, date, options } });
  };

  return (
    <div className="market-place-header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        {type !== "list" && (
          <>
            <h1 className="headerTitle">Discover perfect gifts & souvenirs</h1>
            <p className="headerDescription">
              All in one marketplace for your desired gift and souvenier
              items...
            </p>
            <div className="center">
              <div className="headerSearch">
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faGift} className="headerIcon" />
                  <input
                    type="text"
                    placeholder="What do you need?"
                    className="headerSearchInput"
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
                <br />
                <div className="headerSearchItem">
                  <button className="headerBtn" onClick={handleSearch}>
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div className="mobileSearch">
              <div className="mobileSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="What do you need?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="mobileSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  <FontAwesomeIcon icon={faSearch} className="headerIcon" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MarketPlaceHeader;
