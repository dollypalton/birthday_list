import data from "./data";
import { useState } from "react";
import List from "./Components/List";


const App = () => {
  
  const [people, setPeople] = useState(data);
const handleClick = () => {
  setPeople([])
};

  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays on the List</h3>
        <List people={people} />
        <button type="button" onClick={handleClick} className="btn btn-block">
          Clear List of Birthdays
        </button>
      </section>
    </main>
  );
};
export default App;
