import './App.css';
import { ILog } from './types';
import axios from 'axios'
import { useEffect, useState } from 'react'
import VisitLog from './components/VisitLog';

function App() {
  const [logs, setLogs] = useState<ILog[]>([])
  
  useEffect(()=>{
    axios
      .get('https://visit-logger-server.onrender.com/api/logs')
      .then((response)=>{setLogs(response.data.reverse())})
      .catch((error)=>console.error('Unable to fetch logs ' + error))
  }, [])


  return (
    <div className="App">
      <div className="container">
        <h3 id='nameHeader'>Name</h3>
        <h3 id='siteHeader'>Site</h3>
        <h3 id='dateHeader'>Date Visited</h3>
        {logs.map((log => <VisitLog key={log.id} id={log.id} name={log.name} site={log.site} time={log.time} />))}
      </div>
    </div>
  );
}

export default App;