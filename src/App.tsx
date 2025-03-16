import { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Nav from "./components/Nav";
import produts from "./db/menu";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";

interface MenuItem {
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
}

const App = () => {
  const [selected, setSelected] = useState<string | null>(null);

  // button filtering
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelected(e.currentTarget.value);
  };

  function filterdData(products: MenuItem[], selected: string | null) {
    let filterdProducts = products;

    if (selected) {
      filterdProducts = filterdProducts.filter(
        ({ category }) => category === selected
      );
    }

    return filterdProducts.map(({ img, title, price, desc, category }) => (
      <Card
        key={Math.random()}
        img={img}
        title={title}
        price={price}
        desc={desc}
        category={category}
      />
    ));
  }

  const result = filterdData(produts, selected);

  return (
    <div className="">
      <Nav />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </div>
  );
};

export default App;
