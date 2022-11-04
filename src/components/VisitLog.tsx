import { ILog } from "../types";

const VisitLog: React.FC<ILog> = ({name, site, time}) => {
    const localTime = new Date(Date.parse(time)).toLocaleString()
    return (  <>
        <p><a href={site} target='_blank' rel="noreferrer" >{name}</a></p>
        <p>{time}</p>
        <p>{localTime}</p>
    </>);
}
 
export default VisitLog;