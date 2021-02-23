import React,{createContext, useReducer} from 'react';
import TransactionReducer from './transReducer'
const intialTransaction ={
  transactions: []
}
export const TransactionContext = createContext(intialTransaction)
export const TransactionProvider= ({children})=>{
let [state,dispatch] = useReducer(TransactionReducer,intialTransaction)
function deleteTransaction(id) {
  dispatch({
    type: 'DELETE_TRANSACTION',
    payload: id
  });
}
 function addTransaction(transaction){
     dispatch({
         type: "ADD_TRANSACTION",
         payload:  transaction
     })
 }
 return(
    <TransactionContext.Provider value={{
        transactions:state.transactions,
        addTransaction,deleteTransaction}}
    >
{children}
    </TransactionContext.Provider>
 )
}