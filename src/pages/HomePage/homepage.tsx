import "./homepage.css";
import Card from "../../components/ui/card";
import AlfaImage from "../../assets/alfa.png";
import TouchImage from "../../assets/touch.png";
import SodetelImage from "../../assets/sodetel.png";
import TerranetImage from "../../assets/terranet-logo.png";
import GiftCard from "../../assets/gift_card.png";
import Gaming from "../../assets/gaming.png";
import Streaming from "../../assets/streaming.png";

function Homepage() {
  return (
    <div className="homepage-container">
      <h4 className="medium-font">What are bills you want to pay, Romy?</h4>
      <div className="cards">
        <Card title="Alfa" to="/details" imageSrc={AlfaImage} description="Bills & Pre-paid Cards"/>
        <Card title="Touch" to="/details" imageSrc={TouchImage} description="Bills & Pre-paid Cards"/>
        <Card title="Sodetel" to="/details" imageSrc={SodetelImage} description="Internet Bills"/>
        <Card title="Terranet" to="/details" imageSrc={TerranetImage} description="Internet Bills"/>
      </div>
      <h4>E-Store</h4>
      <div className="cards">
        <Card title="Gaming" to="/details" imageSrc={Gaming} description="PSN & more"/>
        <Card title="Streaming" to="/details" imageSrc={Streaming} description="Netflix & more"/>
        <Card title="Gift Cards" to="/details" imageSrc={GiftCard} description="Amazon & more"/>
      </div>
    </div>
  );
}

export default Homepage;
