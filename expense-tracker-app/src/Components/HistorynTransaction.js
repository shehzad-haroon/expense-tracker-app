import React, { Fragment, useContext, useState } from 'react'
import {TransactionContext} from '../Context/transContext' 
export default function HistorynTransaction({transaction}) {
    let {transactions,deleteTransaction} = useContext(TransactionContext)
    const sign = transaction.amount < 0 ? "-" : "+";
    return (
<div>
<li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.desc}
              <span className="amount">{sign}${Math.abs(transaction.amount)}</span>
            <button class="delete-btn"
             onClick={() => deleteTransaction(transaction.id)} 
             >
                 X</button>
        </li>

</div>
    )
}
