import PropTypes from 'prop-types'

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

Brands.propTypes = {
  brand: PropTypes.string
}

export default Brands;