import React from 'react';
import NavBar from "./components/NavBar";
import BookList from "./components/BookList";

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <BookList />
    </div>
  );
}

export default App;
