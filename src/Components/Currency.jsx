import react, { useState } from 'react';
import axios from 'axios';

let BASE_URL ="https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_ivxb3RWnNpotrzdPUDnRMHdAFj9BQlVSWR3mB8tQ";
function Currency(){

    const [amount,setAmount]=useState();
    const [baseCurrency,setBaseCurrency]=useState('USD');
    const [toCurrency,setToCurrency] = useState('TRY');
    const [result,setResult] = useState();

    const exchange=  async()=>{
        // console.log(amount);
        // console.log(fromCurrency);
        // console.log(toCurrency);
        // console.log(result);

      const res = await  axios.get(BASE_URL+"?apikey="+API_KEY+"&base_currency="+baseCurrency);
        const result= ( res.data.data[toCurrency] * amount).toFixed(2);
        setResult(result);
        
    }
    return(
    <div className='background'>
        <div className='currency-div'>
            <input 
            value={amount}
            onChange={(e)=>setAmount(e.target.value)}
            
            type='number' className='amount'/>
                <select onChange={(e)=>setBaseCurrency(e.target.value)}   className='from-currency-option'>

                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>

                </select>

                <select onChange={(e)=>setToCurrency(e.target.value)} className='from-currency-option'>

                    <option>TRY</option>    
                    <option>USD</option>
                    <option>EUR</option>
                
                </select>    
                <input value={result} type='number' className='amount'/>

         </div>
         <div className='button'>
            <button 
            onClick={exchange}
            >Cevir</button>
         </div>
    </div>
    );
}

export default Currency;