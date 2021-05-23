import React from 'react';
import Navbar from "./components/Navigation";
import Container from "./components/Container";
//import Filter from "./components/Filter";
import Table from "./components/Table";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
      {/* <Filter /> */}
      <Table />
      </Container>
    </div>
  );
}

export default App;
