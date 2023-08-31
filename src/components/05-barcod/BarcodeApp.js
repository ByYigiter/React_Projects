const { useState } = require("react");
const { default: Scanner } = require("./Scanner");

const App = () => {

    const [scanning, setScanning] = useState(false);
    const [results, setResults] = useState([]);
  
    const scan = () => {
      setScanning(!scanning);
      console.log('scanning', scanning);
    }
  
    const onDetected = (result) => {
      console.log(parseInt(result.codeResult.code, 10));
      setResults(results.concat([result]));
      setScanning(false);
    }
    
    return <div>
          <button onClick={scan}>{scanning ? 'Stop' : 'Start'}</button>
          <ul className="results">
            {results.map(result => {
              return <li key={result.codeResult}>
                  {result.codeResult.code} [{result.codeResult.format}]
              </li>
            })}
          </ul>
          {scanning ? <Scanner onDetected={onDetected} /> : null}
        </div>;
  }

  export default App;