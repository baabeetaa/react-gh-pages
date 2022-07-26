import React, { useState } from 'react';
import './App.css';

function App()
{
    const [resjson, setResjson] = useState(0);

    const handleClickRPC = async () => {
        const status_res = await fetch("https://rpc-evmos-ia.notional.ventures/status", {compress: false});
        const res_json = await status_res.json();
        setResjson(res_json)
    }
    const handleClickAPI = async () => {
        const status_res = await fetch("https://api-evmos-ia.notional.ventures/cosmos/gov/v1beta1/proposals?pagination.limit=50&pagination.reverse=true", {compress: false});
        const res_json = await status_res.json();
        setResjson(res_json)
    }
    const handleClickJSONRPC = async () => {
        const status_res = await fetch("https://jsonrpc-evmos-ia.notional.ventures/", {
            compress: false,
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({jsonrpc: "2.0", method: "net_version", params: [], id: 0})
        });
        const res_json = await status_res.json();
        setResjson(res_json)
    }

    return (
        <div className="App">
            <br/><br/><br/><br/>

            <button onClick={handleClickRPC}>Test RPC CORS</button><br/>
            <button onClick={handleClickAPI}>Test API CORS</button><br/>
            <button onClick={handleClickJSONRPC}>Test JSONRPC CORS</button>

            <pre style={{whiteSpace: 'pre-wrap'}}>{JSON.stringify(resjson)}</pre>

        </div>
    );
}

export default App;
