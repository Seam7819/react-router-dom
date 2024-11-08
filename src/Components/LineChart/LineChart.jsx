import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const subjectsMark = [{ "id": 1, "name": "Alice", "Physics": 85, "Math": 92, "Chemistry": 88, "Dis": "A" },
         { "id": 2, "name": "Bob", "Physics": 78, "Math": 88, "Chemistry": 81, "Dis": "B" },
         { "id": 3, "name": "Charlie", "Physics": 90, "Math": 95, "Chemistry": 92, "Dis": "C" }, 
         { "id": 4, "name": "Dave", "Physics": 72, "Math": 85, "Chemistry": 79, "Dis": "D" },
          { "id": 5, "name": "Eve", "Physics": 88, "Math": 90, "Chemistry": 84, "Dis": "E" },
           { "id": 6, "name": "Frank", "Physics": 80, "Math": 87, "Chemistry": 82, "Dis": "F" }]

    return (
        <div>

            <h1 className='text-4xl'>Line Chart</h1>
            <LChart width={600} height={400}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Line dataKey={"Physics" } stroke="#8884d8" data={subjectsMark}></Line>
                <Line dataKey={"Math" } stroke="blue" data={subjectsMark}></Line>
                <Line dataKey={"Chemistry" } stroke="green" data={subjectsMark}></Line>
            </LChart>
        </div>
    );
};

export default LineChart;