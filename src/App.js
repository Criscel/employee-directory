import React from 'react';
import Navbar from "./components/Navigation";
import Filter from "./components/Filter";
import Table from "./components/Table";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Filter />
      <Table />
    </div>
  );
}

export default App;
