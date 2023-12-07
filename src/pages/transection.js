import { useState, useEffect, useReducer } from 'react';
import '../App.css';

const reducer = (balance, action) => {
  switch (action.type) {
    case 'WITHDRAW':
      return balance - action.value;
      case 'DEPOSIT':
      return balance + action.value;
   
    default:
      return balance;
  }
};

function App() {
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [depositAmount, setDepositAmount] = useState('');
  const [balance, dispatch] = useReducer(reducer, 5000);

  const withdraw = () => {
    if (withdrawAmount) {
      dispatch({ type: 'WITHDRAW', value: parseInt(withdrawAmount) });
      setWithdrawAmount('');
    }
  };

  const deposit = () => {
    if (depositAmount) {
      dispatch({ type: 'DEPOSIT', value: parseInt(depositAmount)});
      setDepositAmount('');
    }
  };

 
  

  return (
    <>
      <div className='transection'>
        
      <h4>CURRENT BALANCE:{balance}</h4> 
       
        <div>
          <label>Withdraw Amount:</label><br/>
          <input 
            type='number'
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(e.target.value)}
          />
          <button onClick={withdraw}>Withdraw</button><br/>
        </div>  
        
        <div>
          <label>Deposit Amount:</label><br/>
          <input
            type='number'
            value={depositAmount}
            onChange={(e) => setDepositAmount(e.target.value)}
          />
          <button onClick={deposit}>Deposit</button>
        </div>
        
      </div>
    </>
  );
}

export default App;