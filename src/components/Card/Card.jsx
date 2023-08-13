/* eslint-disable react/prop-types */
import { BuyButton } from "../Button/Button";
import "../Section/Icard.css";
const Card = ({ heading, sub, desc, img = "/one.jpeg", onCardClick }) => {
  return (
    <div className="card" onClick={onCardClick}>
      <div className="content">
        <p className="text">{heading}</p>
        <h2 className="heading-card">{sub}</h2>
        <div className="desc-ctn">
          <p>{desc}</p>
        </div>
      </div>
      <img className=" one" src={img} />
    </div>
  );
};

export const CardTwo = ({
  heading,
  img = "/one.jpeg",
  color,
  sub = "no sub",
  price = "$0",
  onCardClick,
}) => {
  const clickTwo = () => {
    console.log("hello");
  };
  return (
    <div className="card-two-ctn" onClick={onCardClick}>
      <div className="card-two-flex">
        <img className="compare-img" src={img} />

        <img className="compare-color" src={color} />
        <h2 className="compare-head">{heading}</h2>
        <p>{sub}</p>
        <p className="price">{price}</p>
        <BuyButton name="Buy" onButtonClick={clickTwo} />
        <p className="cart">
          <a href="#">Add to cart</a>
        </p>
      </div>
    </div>
  );
};

export default Card;

// const Card = (props) => {
//   return (
//     <div className="card">
//       <div className="content">
//         <p className="text">{props.heading}</p>
//         <h2 className="heading-card">{props.sub}</h2>
//         <p className="text">{props.desc}</p>
//       </div>
//       <img className=" one" src={props.img} />
//     </div>
//   );
// };
