import { useState, useEffect } from "react";

const SearchId = ({ id, setInput }) => {
  const [searchId, setSearchId] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setSearchId([json]));
  }, [id]);

  return (
    <>
      {searchId.length > 0 &&
        searchId.map(({id, title, brand, category, thumbnail}) => (
          <div key={id}>
            <h2>Title: {title}</h2>
            <h2>Brand: {brand}</h2>
            <h2>Category: {category}</h2>
            <h2>Image:</h2>
            <img src={thumbnail} />
          </div>
        ))}
      <button onClick={() => setInput(null)}>Clear</button>
    </>
  );
};

export default SearchId;