import './App.css';
import React from 'react'
import Category from './components/Category';
import { DataProvider } from './DataContext';
function App() {
 
  return (
      <div className="App">
        <DataProvider>
          <Category />  
        </DataProvider>
      </div>
  );
}

export default App;
