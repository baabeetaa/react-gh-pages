import React, { useState } from 'react';
import './App.css';

function App()
{
    const [resjson, setResjson] = useState(0);

    const handleClick = async () => {
        const status_res = await fetch("https://api-evmos-ia.notional.ventures/cosmos/gov/v1beta1/proposals?pagination.limit=50&pagination.reverse=true", {compress: false});
        const res_json = await status_res.json();

        // this.setState({res_json: res_json});
        setResjson(res_json)
    }

    return (
        <div className="App">
            <br/><br/><br/><br/>

            <button onClick={handleClick}>Click to test CORS</button>

            <pre style={{whiteSpace: 'pre-wrap'}}>{JSON.stringify(resjson)}</pre>

        </div>
    );
}

export default App;
