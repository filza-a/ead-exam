import React from 'react'

function PollDisplayComponent() {

    const [jscount, setJscount] = React.useState(0);
    const [pcount, setPcount] = React.useState(0);
    const [jcount, setJcount] = React.useState(0);
    const   [ccount, setCcount] = React.useState(0);

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