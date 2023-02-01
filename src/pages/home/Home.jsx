import React from 'react';
import Chart from '../../components/Charts/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import WidgetLg from '../../components/widgetlg/WidgetLg';
import Widgetsm from '../../components/widgetssm/Widgetsm';
import './home.css';
function Home() {
  const data = [
    {
      name: 'Jan',
      "active users": 4000,
    },
    {
      name: 'Feb',
      "active users": 3000,
    },
    {
      name: 'Mar',
      "active users": 2000,
    },
    {
      name: 'April',
      "active users": 2780,
    },
    {
      name: 'May',
      "active users": 1890,
    },
    {
      name: 'Jun',
      "active users": 2390,
    },
    {
      name: 'Jul',
      "active users": 3490,
    },
    {
      name: 'Aug',
      "active users": 3490,
    },
    {
      name: 'Sept',
      "active users": 3490,
    },
    {
      name: 'Oct',
      "active users": 3490,
    },
    {
      name: 'Nov',
      "active users": 3490,
    },
    {
      name: 'Dec',
      "active users": 3490,
    },
  ];
  return (
    <div className='home'>
      <FeaturedInfo/>
      <Chart data={data} 
      datakey="active users"
      title="User Analytics"
      />
      <div className="homewidgets">
        <Widgetsm/>
        <WidgetLg/>
      </div>
    </div>
  )
}

export default Home;
