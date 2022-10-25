import axios from "axios";

const logVisit = () => {
    const newDate = new Date()

    axios.post('https://visit-logger-server.onrender.com/api/log', {
        name: 'Logger',
        site: 'https://logloggunnow.com',
        time: newDate.toString()
    })
}

export default logVisit;