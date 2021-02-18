
import React from 'react'
import Header from './Components/Header'
import HistorynTransaction from './Components/HistorynTransaction'
import IncomenExpenses from './Components/IncomenExpenses'
function App() {
  return (
    <div className="App">
    <Header/>
    <IncomenExpenses/>
    <HistorynTransaction/>
    </div>
  );
}

export default App;
