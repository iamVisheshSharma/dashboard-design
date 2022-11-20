import './WidgetLg.css';

export default function WidgetLg() {
  const Button = ({type}) => {
    return <button className={"widgetButton " + type}>{type}</button>;
  }
  return (
    <div className='widgetLg'>
      <h3 className="widgetTitle">Latest Transactions</h3>
      <table className="widgetTable">
        <tr className="widgetTr">
          <th className="widgetTh">Customer</th>
          <th className="widgetTh">Date</th>
          <th className="widgetTh">Amount</th>
          <th className="widgetTh">Status</th>
        </tr>
        <tr className="widgetTr">
          <td className="widgetUser">
            <img src="https://source.unsplash.com/ILip77SbmOE" alt="" className="widgetImg" />
            <span className="widgetUsername">Susan Carol</span>
          </td>
          <td className="widgetDate">15 Aug, 2022</td>
          <td className="widgetAmount">$122.00</td>
          <td className="widgetStatus">
            <Button type={"Approved"} />
          </td>
        </tr>
        <tr className="widgetTr">
          <td className="widgetUser">
            <img src="https://source.unsplash.com/ILip77SbmOE" alt="" className="widgetImg" />
            <span className="widgetUsername">Susan Carol</span>
          </td>
          <td className="widgetDate">15 Aug, 2022</td>
          <td className="widgetAmount">$122.00</td>
          <td className="widgetStatus">
            <Button type={"Declined"} />
          </td>
        </tr>
        <tr className="widgetTr">
          <td className="widgetUser">
            <img src="https://source.unsplash.com/ILip77SbmOE" alt="" className="widgetImg" />
            <span className="widgetUsername">Susan Carol</span>
          </td>
          <td className="widgetDate">15 Aug, 2022</td>
          <td className="widgetAmount">$122.00</td>
          <td className="widgetStatus">
            <Button type={"Pending"} />
          </td>
        </tr>
      </table>
    </div>
  )
}
