import React from 'react'
import { VoteConsumer } from './useContext';

function PollDisplayComponent({selectedValue}) {

  const [jscount, setJscount] = React.useState(0);
  const [pcount, setPcount] = React.useState(0);
  const [jcount, setJcount] = React.useState(0);
  const [ccount, setCcount] = React.useState(0);

  //consuming selected value from context 
  <VoteConsumer>
    {
      (selectedValue) =>{
        console.log(selectedValue)
        return <div>Hello {selectedValue}</div>
      }
    }
  </VoteConsumer>

  // updating the votes count
  if(selectedValue === 'js'){
    setJscount(jscount + 1);
  } else if(selectedValue === 'py'){  
    setPcount(pcount + 1);
  } else if(selectedValue === 'jv'){
    setJcount(jcount + 1);
  } else if(selectedValue === 'cs'){
    setCcount(ccount + 1);
  }

return (
  <div>
      <label>What is your favorite programming language?</label>
      <div>JavaScript: {jscount} votes</div>
      <div>Python: {pcount} votes</div>
      <div>Java: {jcount} votes</div>
      <div>C#: {ccount} votes</div>
  </div>
)
}

export default PollDisplayComponent