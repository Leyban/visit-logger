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
      <a href="https://www.cia.gov/the-world-factbook/static/31913c20666d022fa1315bd444553f8d/world_time.pdf" target='_blank' rel='noreferrer'>GMT Map</a>
      <div className="container">
        <h3 id='nameHeader'>Site</h3>
        <h3 id='siteHeader'>Time</h3>
        <h3 id='dateHeader'>Locally</h3>
        {logs.map((log => <VisitLog key={log.id} id={log.id} name={log.name} site={log.site} time={log.time} />))}
      </div>
    </div>
  );
}

export default App;