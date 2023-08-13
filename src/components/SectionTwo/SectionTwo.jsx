/* eslint-disable react/jsx-key */
import { CardTwo } from "../Card/Card";

function SectionTwo() {
  const data = [
    {
      img: "/i14.jpeg",
      color: "/color.png",
      heading: "Iphone 14 Pro",
      sub: "The ultimate iPhone.",
      price: "$999",
    },
    {
      img: "/i14-large.jpeg",
      color: "/color.png",
      heading: "Iphone 14",
      sub: "A total powerhouse.",
      price: "$799",
    },
    {
      img: "/i13.jpeg",
      color: "/color.png",
      heading: "Iphone 13",
      sub: "As amazing as ever.",
      price: "$599",
    },
    {
      img: "/se.jpeg",
      color: "/color.png",
      heading: "Iphone se",
      sub: "Serious power. Serious value.",
      price: "$429",
    },
  ];

  const clickThree = () => {
    console.log("click");
  };

  return (
    <>
      <div className="price-card-ctn">
        <h1 style={{ fontSize: "48px" }}>Which iPhone is right for you?</h1>
        <div className="card-two-ctn">
          {data.map((element) => (
            <CardTwo
              onCardClick={clickThree}
              key={element.price}
              heading={element.heading}
              img={element.img}
              color={element.color}
              sub={element.sub}
              price={element.price}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default SectionTwo;
