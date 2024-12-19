import { useCallback, useState } from 'react'
import './App.css'

import ResultInput from './Input';
import KeypadInput from './KeypadInput';
import { KEYPAD_ENUM } from './enums/Keypad.enum';

function App() {
  const [input, setInput] = useState('');

  const handleButtonClick = useCallback((value: string) => {
    if(value === KEYPAD_ENUM.CLEAR) {
      return setInput('');
    }

    setInput(prev => prev + value);
  }, []);

  return (
    <>
      <ResultInput inputValue={input} />
      <KeypadInput handleButtonClick={handleButtonClick} />
    </>
  )
}

export default App
