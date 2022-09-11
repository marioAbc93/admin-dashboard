{/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/}

import React, 
{ useState, 
  useContext } from 'react';
import ReactDOM from 'react-dom';

const languages = ['JavaScript', 'Python'];

const LanguageContext = React.createContext(); 

const DataProvider =({ children }) => {
  //Using context here
  const { data, setData } = useState(languages);
  const handleClick = () => {
    var clicked = false;
      if(!clicked){
        clicked = true;
        document.getElementById("favoriteLanguage").innerHTML = "Your favorite programing language: javascript";
        document.getElementById("changeFavorite").innerHTML = "Change language";
      }else{
        clicked = true;
        document.getElementById("favoriteLanguage").innerHTML = "Your favorite programing language:python";
        document.getElementById("changeFavorite").innerHTML = "Change language";
      }
  }
  return (
    <LanguageContext.Provider value={{ 
      data,
      setData,
      handleClick
    }}>
        {children}
    </LanguageContext.Provider>
    
  );
}

function App() {   
  return (
    <DataProvider>
        <MainSection/>
    </DataProvider>
    
  );
}

function MainSection() {
  const { data, handleClick } = useContext(LanguageContext)
  return (
      <div style={{
        'color':'#000',
        'fontWeight' : '500',
        'background' : 'linear-gradient(#a6d8ff, #fff)'
      }}>
        <div style={{ 'padding' : '10px 40px' }}>
          <div style={{ 
              'border': '1px dashed #18293c', 
              'alignItems' : 'center', 
              'textAlign' : 'center', 
              'borderRadius' : '10px',
              'padding': '100px 100px' }}>
            <h1>Hello 😎</h1>
            <p id="favoriteLanguage">
              Your favorite programing language: {data}
            </p>
            <button 
              id="changeFavorite" 
              style={{ 
              'color':'white',
              'fontWeight' : 'bold', 
              'background' : '#18293c',
              'padding': '10px', 
              'borderRadius': '5px',
              'border':'none',
              'marginBottom': '10px'
              }}
              onClick={handleClick}
              >
              Select language
            </button>
          </div>
        </div>
      </div>
  )
}
