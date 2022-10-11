import CardStyle from "./card.module.css";

const Card = ({ name, title, price, url, category }) => {
  return (
    <div className={CardStyle.container}>
      <div>
        <img src={url} alt={name} width="200px" height="200px" />
      </div>
      <div>
        <h2>
          {" "}
          <span> {name} </span>{" "}
          <span className={CardStyle.price}> {price} $ </span>{" "}
        </h2>
        <p className={CardStyle.category}>{category}</p>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Card;
