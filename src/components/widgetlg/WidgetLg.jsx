import React from 'react';
import './widgetlg.css';
function WidgetLg() {
  const Button = ({type})=>{
    return <button className={"widgetlgButton" + type}>{type}</button>
  }
  return (
    <div className='widgetlg'>
      <h3 className="widgetlgTitle">Latest Transactions</h3>
      <table className="widgetlgTable">
        <tr className="widgetlgtr">
          <th className="widgetlgTh">Customer</th>
          <th className="widgetlgTh">Date</th>
          <th className="widgetlgTh">Amount</th>
          <th className="widgetlgTh">Status</th>
        </tr>
        <tr className='widgetlgTr'>
          <td className="widgetlgUser">
            <img src="/main_avatar.jpg" alt="" className="widgetlgImg" />
            <span className="widgetlgName">Susan Carol </span>
          </td>
          <td className="widgetlgDate">2 June 2k22</td>
          <td className="widgetlgAmount">$122.00</td>
          <td className="widgetlgStatus">
            <Button type='Approved'/>
          </td>
        </tr>

        <tr className='widgetlgTr'>
          <td className="widgetlgUser">
            <img src="/main_avatar.jpg" alt="" className="widgetlgImg" />
            <span className="widgetlgName">Susan Carol </span>
          </td>
          <td className="widgetlgDate">2 June 2k22</td>
          <td className="widgetlgAmount">$122.00</td>
          <td className="widgetlgStatus">
            <Button type='Declined'/>
          </td>
        </tr>


        <tr className='widgetlgTr'>
          <td className="widgetlgUser">
            <img src="/main_avatar.jpg" alt="" className="widgetlgImg" />
            <span className="widgetlgName">Susan Carol </span>
          </td>
          <td className="widgetlgDate">2 June 2k22</td>
          <td className="widgetlgAmount">$122.00</td>
          <td className="widgetlgStatus">
            <Button type='Pending'/>
          </td>
        </tr>


        <tr className='widgetlgTr'>
          <td className="widgetlgUser">
            <img src="/main_avatar.jpg" alt="" className="widgetlgImg" />
            <span className="widgetlgName">Susan Carol </span>
          </td>
          <td className="widgetlgDate">2 June 2k22</td>
          <td className="widgetlgAmount">$122.00</td>
          <td className="widgetlgStatus">
            <Button type='Approved'/>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default WidgetLg;
