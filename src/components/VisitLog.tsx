import { ILog } from "../types";

const VisitLog: React.FC<ILog> = ({name, site, time}) => {
    return (  <>
        <p>{name}</p>
        <p><a href={site} target='_blank' rel="noreferrer" >{site}</a></p>
        <p>{time}</p>
    </>);
}
 
export default VisitLog;