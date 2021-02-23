import React,{useContext} from 'react'
import transactions from './HistorynTransaction'
import {TransactionContext} from '../Context/transContext' 
export default function IncomenExpenses() {
const { transactions } = useContext(TransactionContext);
const amounts = transactions.map(transaction => transaction.amount);

//getIncome

    const getIncome = amounts.filter(amount => amount > 0)
     .reduce((amount,current)=>{
        return amount += current
    },0).toFixed(2)
    
    //getExpense

    const getExpense = amounts.filter(amount => amount < 0)
     .reduce((amount,current)=>{
        return amount += current
    },0).toFixed(2)

    return (
     <React.Fragment>
        <div className="inc-exp-container">
          <p className="money plus" >Income <br/>${getIncome}</p> &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                  <p className="money minus" >Expense  <br/>${getExpense}</p>
        </div>
           </React.Fragment> 
    )
}
