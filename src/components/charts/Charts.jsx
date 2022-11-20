import './Charts.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Charts({title, data, grid, dataKey}) {
  return (
    <div className='chart'>
      <h3 className="chartTitle">
        {title}
      </h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke='#5550bd'/>
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
