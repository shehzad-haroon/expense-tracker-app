import React, { useContext } from 'react'
import  HistorynTransaction  from './HistorynTransaction';
import { TransactionContext } from '../Context/transContext';


export default function TransactionList() {
    const {transactions} = useContext(TransactionContext)
    return (
     <React.Fragment>
            <div>
            <h2>Transaction History</h2>
                <ul className="list">
            {transactions.map(transaction =>(<HistorynTransaction key={transaction.id} transaction={transaction}/>))}
            </ul>
        </div>
     </React.Fragment>
    )
}
