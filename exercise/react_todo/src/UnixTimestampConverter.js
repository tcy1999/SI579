import { useState } from "react";

function UnixTimestampConverter(props) {
    const [timestamp, setTimestamp] = useState(Date.now());
    const onSetTimestamp = (e) => {
        const value = e.target.value;
        setTimestamp(parseInt(value));
    }

    return <><label htmlFor="timestamp">Timestamp: </label>
    <input id="timestamp" onChange={onSetTimestamp} value={timestamp} type="text"></input>
    {new Date(timestamp).toLocaleString()}
    </>
}