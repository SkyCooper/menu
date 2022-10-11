import Card from "../cards/Card";
import data from "../data/data";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";

const Main = ({ name, title, price, url, category }) => {
  let yeni = data.map((item) => item.category);
  yeni = ["all", ...new Set(yeni)];
  return (
    <>
      <Header />
      <ul>
        {yeni.map((item, index) => {
          return <Navbar key={index} name={item} />;
        })}
      </ul>

      <div className="adana">
        {data.map((item, index) => {
          return (
            <Card
              key={index}
              category={item.category}
              name={item.name}
              price={item.price}
              url={item.url}
              title={item.title}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default Main;
