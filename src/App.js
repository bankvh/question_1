import {useState, useEffect} from 'react'
import './App.css';

const isPrime = num => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false
  return num > 1
}

function isSquare(n) {
    return n > 0 && Math.sqrt(n) % 1 === 0;
}

function isFibonacci(numberToCheck){
    return isSquare(5*numberToCheck*numberToCheck + 4) || isSquare(5*numberToCheck*numberToCheck - 4);
}

const calculatResult = (value, method) => {
  switch(method){
    case 'isPrime':
      return isPrime(value)
    case 'isFibonacci':
      return isFibonacci(value)
    default:
      return false
  }
}

function App() {

  const [result, setResult] = useState(false)
  const [value, setValue] = useState('')
  const [selectMedthod, setSelectMethod] = useState('isPrime')

  useEffect(()=>{
    setResult(calculatResult(value, selectMedthod))
  }, [value, selectMedthod])

  const onInputChange = (e) => {
    const {value} = e.target
    let formatValue = value

    if (value < 0){
      formatValue = 1
    } else if (value % 1 !== 0){
      formatValue = Math.round(value)
    }

    setValue(formatValue)
  }

  const onSelectChange = (e) => {
    setSelectMethod(e.target.value)
  }

  return (
    <div className='container'>
      <div className='column1'>
        <input value={value} onChange={onInputChange} type='number' step='1'/>
      </div>
      <div className='column2'>
        <select onChange={onSelectChange}>
          <option value="isPrime">isPrime</option>
          <option value="isFibonacci">isFibonacci</option>
        </select>
      </div>
      <div className='column3'>
        {String(result)}
      </div>
    </div>
  )
}

export default App
