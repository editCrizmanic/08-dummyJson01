import React from 'react';
import PropTypes from 'prop-types';

class Brands extends React.Component {
  render() {
    const { data, activePage } = this.props;
    const uniqueData = Array.from(new Set(data.map((item) => item.brand)));

    return (
      <>
        {activePage.includes('brands') &&
          uniqueData.map((brand) => (
            <div key={brand}>
              <h2>{brand}</h2>
            </div>
          ))}
      </>
    );
  }
}

Brands.propTypes = {
  brand: PropTypes.string
}

export default Brands;