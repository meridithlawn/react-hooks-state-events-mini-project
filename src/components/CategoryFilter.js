

function CategoryFilter({categories, handleCategoryClick, clicked}) {

  
    
 

  const mappedCategories = categories.map(category => <button onClick={handleCategoryClick}key={category} className={ clicked === category ? "selected" : ""}>{category}</button>)

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {mappedCategories}
    </div>
  );
}

export default CategoryFilter;
