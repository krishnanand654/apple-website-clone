import { BuyButton } from "../Button/Button";
import Icard from "./Icard";
import "./section.css";

const Section = () => {
  const clickOne = () => {
    console.log("hai");
  };

  return (
    <div className="sec-ctn">
      <div className="head-ctn">
        <h1 className="head">iPhone 14 Pro</h1>
        <div className="sub-btn-nav">
          <p style={{ color: "grey" }}>Overview</p>
          <p>Switch from Android to iPhone</p>
          <p>Tech Specs</p>

          <BuyButton name="Buy" onButtonClick={clickOne} />
        </div>
      </div>
      <video width="100%" autoPlay loop muted>
        <source src="https://www.apple.com/105/media/us/iphone-14-pro/2023/b094f6e4-dcdb-494f-bd72-45d659126dcd/anim/hero/large_2x.mp4" />
      </video>
      <div className="section">
        <h3>
          The latest.
          <span style={{ color: "rgb(100, 100, 100)" }}>
            {" "}
            Take a look at what’s new, right now.
          </span>
        </h3>
        <div className="Icard-ctn">
          <Icard />
        </div>
      </div>
    </div>
  );
};

export default Section;
