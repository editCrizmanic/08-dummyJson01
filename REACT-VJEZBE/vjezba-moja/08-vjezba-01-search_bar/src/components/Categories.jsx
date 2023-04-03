const Categories = ({ data, activePage }) => {
  const uniqueData = Array.from(new Set(data.map((item) => item.category)))

  return (
    <>
      {activePage.includes('categories') &&
        uniqueData.map((category) => (
          <div key={category}>
            <h2>{category}</h2>
          </div>
      ))}
  </>
  )
}

export default Categories