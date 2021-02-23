import React,{useContext,useState} from 'react'
import {TransactionContext} from '../Context/transContext' 
export default function AddTransaction() {
    let {addTransaction} = useContext(TransactionContext)
    let [desc,setDesc] = useState();
    let [amount ,setAmount]= useState(0);
    let handleSubmit = (event) =>{
event.preventDefault()
const newTransaction = {
  id: Math.floor(Math.random() * 100000000),
  desc,
  amount: +amount
}

addTransaction(newTransaction);
    }
    return (
       <React.Fragment>
           <div>
            <h2>Add New Transaction </h2><hr/>
            <form onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="text"  className="addtrans">Enter Text</label> 
                <input type="text"
                value={desc} 
                onChange={(event) => setDesc(event.target.value)}  
                placeholder="Enter text..."
                required />
            </div>
            <div className="form-control">
                <label htmlFor="amount" className="addtrans">Enter Amount<br />
                (Use - For Expense And + For Income)</label>
                <input type="number" 
                value={amount} 
                onChange={(event) => setAmount(event.target.value)}    
                placeholder="Enter amount..."
                required />
            </div>
            <input type="submit" className="btn" 
            value="Add Transaction"/>
            </form>
        </div>
       </React.Fragment>
    )
}
