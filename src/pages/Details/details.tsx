import "./details.css";
import Input from "../../components/ui/input";
import Game from "../../components/ui/game";
import Country from "../../components/ui/country_box";
import CardPackage from "../../components/ui/cardpackage";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import FreefireImg from "../../assets/freefire.png";
import XboxImg from "../../assets/xbox.png";
import ForniteImg from "../../assets/fortnite.png";
import NintendoImg from "../../assets/nintendo.png";
import PubgIMG from "../../assets/pubg.png";
import XboxCardIMG from "../../assets/package_xbox.png";


function details() {
  return (
    <>
      <Input placeholder="Search in gaming e-store" icon={faMagnifyingGlass} />
      <div className="games">
        <Game logo={FreefireImg} name="Freefire" />
        <Game logo={XboxImg} name="XBOX" isActive={true} />
        <Game logo={ForniteImg} name="Fortnite" />
        <Game logo={NintendoImg} name="Nintendo" />
        <Game logo={PubgIMG} name="PUBG" />
      </div>
      <div className="countries">
        <Country name="US" isActive={true} />
        <Country name="KSA" />
        <Country name="EU" />
        <Country name="UK" />
      </div>
      <div className="card__packages">
        <CardPackage logo={XboxCardIMG} to="/package_details" price={4.525} description="Xbox Live US $5" />
        <CardPackage logo={XboxCardIMG} to="/package_details" price={8.991} description="Xbox Game Pass CORE 1 Month" />
        <CardPackage logo={XboxCardIMG} to="/package_details" price={9.05} description="Xbox Live US $10" />
        <CardPackage logo={XboxCardIMG} to="/package_details" price={11.24} description="Xbox Game Pass Ultimate 1 Month" />
        <CardPackage logo={XboxCardIMG} to="/package_details" price={13.57} description="Xbox Live US $15" />
        <CardPackage logo={XboxCardIMG} to="/package_details" price={4.525} description="Xbox Live US $5" />
        <CardPackage logo={XboxCardIMG} to="/package_details" price={8.991} description="Xbox Game Pass CORE 1 Month" />
        <CardPackage logo={XboxCardIMG} to="/package_details" price={9.05} description="Xbox Live US $10" />
        <CardPackage logo={XboxCardIMG} to="/package_details" price={11.24} description="Xbox Game Pass Ultimate 1 Month" />
        <CardPackage logo={XboxCardIMG} to="/package_details" price={11.24} description="Xbox Live US $15" />
        <CardPackage logo={XboxCardIMG} to="/package_details" price={11.24} description="Xbox Live US $5" />
        <CardPackage logo={XboxCardIMG} to="/package_details" price={11.24} description="Xbox Game Pass CORE 1 Month" />
        <CardPackage logo={XboxCardIMG} to="/package_details" price={11.24} description="Xbox Live US $10" />
        <CardPackage logo={XboxCardIMG} to="/package_details" price={11.24} description="Xbox Game Pass Ultimate 1 Month" />
      </div>
    </>
  );
}

export default details;
