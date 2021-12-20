import { useState } from "react";

function UnixTimtestampConverter() {
    const [timestamp, setTimestamp] = useState(Date.now());

    return <><label htmlFor="timestamp">Timestamp: </label>
    <input id="timestamp" type="text" value={timestamp} onChange={(e) => setTimestamp(parseInt(e.target.value))}></input>
    </>
}

export default UnixTimtestampConverter;