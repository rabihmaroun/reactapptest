import "./country_box.css";

interface CountryBox {
  name: string;
  isActive?: boolean;
}

const country_box = (props: CountryBox) => {
  return (
    <div className={`country ${props.isActive ? "active" : ""}`}>
      <p className="mb-0 medium-font">{props.name}</p>
    </div>
  );
};

export default country_box;
