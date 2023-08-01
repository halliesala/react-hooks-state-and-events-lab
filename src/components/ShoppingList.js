import React from "react";
import Item from "./Item";
import { useState } from 'react';

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All"); 
  const filteredItems = selectedCategory === "All" ? items : items.filter(item => item["category"] === selectedCategory);

  function handleSelectCategory(e) {
    setSelectedCategory(e.target.value);
    // console.log(selectedCategory);

  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={ handleSelectCategory } name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
