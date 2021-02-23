import React,{useContext} from 'react'
import {TransactionContext} from '../Context/transContext' 
export default function Balance() {
    const { transactions } = useContext(TransactionContext);
    const currentbalance = transactions.map(transaction => transaction.amount);

   let Total = currentbalance.reduce((amount,current)=>{
       return amount + current
   },0)
   
    return (
        <div>
            <h2 >Current Balance &nbsp; &nbsp; <br/> ${Total}</h2 >
        </div>
    )
}
