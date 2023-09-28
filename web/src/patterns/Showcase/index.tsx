import TypeView from "@/components/TypeView";
import CardProduct from "../CardProduct";
import "./styles.scss";
import Pagination from "@/components/Pagination";

const Showcase = ({
  pgInfo,
}: {
  pgInfo: "camisetas" | "calcas" | "calcados";
}) => {
  const clothing = {
    camisetas: "Camisetas",
    calcas: "Calças",
    calcados: "Calçados",
  };

  return (
    <section>
      <h1>{clothing[pgInfo]}</h1>
      <TypeView />
      <CardProduct typeClothing={pgInfo} />
      <Pagination />
    </section>
  );
};

export default Showcase;
