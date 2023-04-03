const Photos = ({ data, activePage }) => {
  return (
    <>
      {activePage.includes("photos") &&
        data.map(({ id, title, thumbnail }) => (
            <div key={id}>
              <h2>{title}</h2>
              <img src={thumbnail} alt={title} />
            </div>
        ))
      }
    </>
  );
};

export default Photos;