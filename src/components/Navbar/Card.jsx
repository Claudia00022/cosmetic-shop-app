import BrandCare from "../../images/BrandCare.png";
import Card from "react-bootstrap/Card";

function CosmeticCard() {
  return (
    <Card className="mt-5"
      style={{
        width: "18rem",
      }}
    >
      <Card.Img variant="top" src={BrandCare} />{" "}
      <Card.Body>
        <Card.Title> Brand care collection </Card.Title>{" "}
        <Card.Text> £12 </Card.Text>{" "}
        <button className="logIn-btn"> Add to Basket </button>{" "}
      </Card.Body>{" "}
    </Card>
  );
}

export default CosmeticCard;
