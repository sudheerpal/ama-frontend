import NavElement from "./components/NavElement";

const ProductSidebar = () => {
  return (
    <div className="mt-5">
      <h3 className="mb-5 text-xl font-bold text-primary">Indutry Experties</h3>
      <div>
        {"123456789".split("").map((el) => (
          <NavElement key={el} />
        ))}
      </div>
    </div>
  );
};

export default ProductSidebar;
