/* eslint-disable react/prop-types */
import "./button.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Button = () => {
  return (
    <button style={{ margin: "20px" }} className="btn btn-danger button">
      <b>Join now</b>
    </button>
  );
};

export const BlueButton = () => {
  return (
    <button style={{ margin: "20px" }} className="btn btn-primary button">
      <b>Login</b>
    </button>
  );
};

export const BuyButton = (props) => {
  return (
    <button onClick={props.onButtonClick} className="btn btn-primary  btn-buy">
      {props.name}
    </button>
  );
};

export default Button;
