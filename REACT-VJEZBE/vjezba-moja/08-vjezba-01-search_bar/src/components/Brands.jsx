const Brands = ({ data, activePage }) => {
  const uniqueData = Array.from(new Set(data.map((item) => item.brand)))

  return (
    <>
      {activePage.includes("brands") &&
        uniqueData.map((brand) => (
          <div key={brand}>
            <h2>{brand}</h2>
          </div>
        ))}
    </>
  );
};

export default Brands;