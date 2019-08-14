import React from 'react';
import NavBar from "./components/NavBar";
import BookList from "./components/BookList";
import {ThemeContext} from "./contexts/ThemeContext";

const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeContext.Consumer>
        {
          (value) => {
              return <>
                <NavBar/>
                <BookList  {...value}/>
              </>
          }
        }
      </ThemeContext.Consumer>
    </div>
  );
}

export default App;
