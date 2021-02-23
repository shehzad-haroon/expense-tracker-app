
import React from 'react'
import { TransactionProvider } from './Context/transContext';
import AddTransaction from './Components/AddTransaction';
import Balance from './Components/Balance';
import Header from './Components/Header'
import HistorynTransaction from './Components/HistorynTransaction'
import IncomenExpenses from './Components/IncomenExpenses'
import TransactionList from './Components/TransactionList';
function App() {
  return (
    <div className="App">
      <TransactionProvider>
    <Header/>
    <div className="container"> 
    <Balance/>
    <IncomenExpenses/>
    {/* <HistorynTransaction/> */}
    <TransactionList/>
    <AddTransaction/>
    </div>
    </TransactionProvider>
    </div>
  );
}

export default App;
