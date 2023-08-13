import Card from "../Card/Card";
import "./Icard.css";
function Icard() {
  return (
    <>
      <div className="card-ctn">
        <div
          className="card"
          style={{ boxShadow: "none", background: "#f5f5f7", width: "200px" }}
        ></div>
        <Card
          heading="IPHONE 14 PRO"
          sub="Pro.Beyond."
          desc={
            <>
              <p>
                From $999 or $41.62/mo.per month for 24 mo
                <br />
                before trade*
              </p>
            </>
          }
          img="/one.jpeg"
        />

        <div className="card">
          <div className="content cn-2">
            <p className="text">MACBOOK AIR 15</p>
            <h2>
              Impressively big. <br />
              Impossibly thin.
            </h2>
            <div className="desc-ctn">
              <p>From $1299 or $108.25/mo.per month for 12 mo.*</p>
            </div>
          </div>
          <img className=" one" src="two.jpeg" />
        </div>
        <div className="card">
          <div className="content">
            <p className="text">APPLE WATCH SERIES 8</p>
            <h2>A healthy leap ahead.</h2>
            <p>From $399 or $16.62/mo.per month for 24 mo*</p>
          </div>
          <img className=" one" src="/third.jpeg" />
        </div>

        <div className="card">
          <div className="content" style={{ color: "black" }}>
            <p className="text">APPLE WATCH ULTRA</p>
            <h2>Adventure awaits. </h2>
            <p>From $799 or $33.29/mo.per 24 months</p>
          </div>
          <img
            className=" one"
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-watch-ultra-202209?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1660686053448"
          />
        </div>
        <div className="card">
          <div className="content">
            <p className="text">IPAD PRO</p>
            <h2>Supercharged by M2.</h2>
            <p>From $799 or $66.58/mo.per month for 12 mo*</p>
          </div>
          <img
            className=" one"
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-ipad-pro-202210?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1667423474414"
          />
        </div>
      </div>
    </>
  );
}

export default Icard;
