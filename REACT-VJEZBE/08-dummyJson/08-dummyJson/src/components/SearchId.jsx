const SearchId = ({ id, setInput }) => {


  return (
    <>
      {id.length > 0 &&
        id.map(({id, title, brand, category, thumbnail}) => (
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