import React from "react";
import "../Styles/Result.scss";

const Result = () => {
  return (
    <div className="result-container">
      <p className="result-header">Your Result is Here!</p>
      <div className="result-image-container">
        <img src="/Images/Result.png" alt="Result" className="result-img" />

        <div className="result-box">
          <p className="result-character">Hirono</p>
          <p className="result-text">
            Hirono is a unique art toy of a young boy who embodies the aura of a
            sad human being. and various emotions at the same time This
            collection tends to appeal to collectors who like dark pieces. Earth
            tone colors that can convey emotions, classics, and take us back to
            the past Plus, they are so adorable that you have to collect them.
          </p>
          <div>
            <button className="tryagain">Try again</button>
            <button className="go-shop">Shop now</button>
          </div>
        </div>

        <button className="result-button">POP MART</button>
      </div>
    </div>
  );
};

export default Result;
