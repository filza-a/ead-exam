import React from 'react'
import { VoteProvider } from './useContext';

function UserParticipationComponent() {
    const [selectedValue, setSelectedValue] = React.useState('');  

    const handleSelection = (event) => {
        setSelectedValue(event.target.value);
        // console.log(event.target.value)
      };

      const handleVote = (event) => {
        event.preventDefault();
       console.log('Selected option:', selectedValue);
      }

      <VoteProvider>
        value = {selectedValue}
      </VoteProvider>

  return (
    <div>
        <form onSubmit={handleVote}>
            <div><input type='radio' value="js" checked={selectedValue ==='js'} onChange={handleSelection}/>JavaScript</div>
            <div><input type='radio' value="py" checked={selectedValue ==='py'} onChange={handleSelection}/>Python</div>
            <div><input type='radio' value="jv" checked={selectedValue ==='jv'} onChange={handleSelection}/>Java</div>
            <div><input type='radio' value="cs" checked={selectedValue ==='cs'} onChange={handleSelection}/>C#</div>
            <div><input type='submit' value="Vote"/></div>
        </form>
    </div>
  )
}
 

export default UserParticipationComponent;
