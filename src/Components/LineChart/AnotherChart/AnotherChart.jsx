import axios from "axios";
import { useState } from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const AnotherChart = () => {

    const [users,setUsers] = useState([]);

    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(data => setUsers(data.data))

    return (
        <div>
            <h3 className="text-4xl">Users:{users.length}</h3>
            
            
                <BarChart width={600} height={400} data={users}>
                    <Tooltip></Tooltip>
                    <Bar dataKey="id" fill="#8884d8" />
                  </BarChart>
            
        </div>
    );
};

export default AnotherChart;