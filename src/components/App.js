import React from "react";
import { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [appClass, setAppClass] = useState("App light");
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  //const appClass = false ? "App dark" : "App light"


  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button 
          onClick={ toggleDarkMode }
        >
          Dark Mode

        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );

  function toggleDarkMode() {
    appClass === "App light" ? setAppClass("App dark") : setAppClass("App light");
  }
}

export default App;
