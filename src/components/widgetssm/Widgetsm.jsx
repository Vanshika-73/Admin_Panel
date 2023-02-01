import { Visibility } from '@mui/icons-material';
import React from 'react';
import './widgetsm.css';
function Widgetsm() {
  return (
    <div className='widgetsm'>
      <span className="widgetSmTitle">New Join Members</span>
      <ul className='widgetSmList'>
        <li className="widgetSmListItem">
            <img src="/main_avatar.jpg" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUserName">Anna</span>
                <span className="widgetSmJobTitle">Software Engineer</span>
            </div>
            <button className='widgetSmButton'>
                <Visibility className='widgetsmIcon'/>
                Display
            </button>
        </li>

        <li className="widgetSmListItem">
            <img src="/main_avatar.jpg" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUserName">Anna</span>
                <span className="widgetSmJobTitle">Software Engineer</span>
            </div>
            <button className='widgetSmButton'>
                <Visibility className='widgetsmIcon'/>
                Display
            </button>
        </li>

        <li className="widgetSmListItem">
            <img src="/main_avatar.jpg" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUserName">Anna</span>
                <span className="widgetSmJobTitle">Software Engineer</span>
            </div>
            <button className='widgetSmButton'>
                <Visibility className='widgetsmIcon'/>
                Display
            </button>
        </li>

        <li className="widgetSmListItem">
            <img src="/main_avatar.jpg" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUserName">Anna</span>
                <span className="widgetSmJobTitle">Software Engineer</span>
            </div>
            <button className='widgetSmButton'>
                <Visibility className='widgetsmIcon'/>
                Display
            </button>
        </li>

        <li className="widgetSmListItem">
            <img src="/main_avatar.jpg" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUserName">Anna</span>
                <span className="widgetSmJobTitle">Software Engineer</span>
            </div>
            <button className='widgetSmButton'>
                <Visibility className='widgetsmIcon'/>
                Display
            </button>
        </li>
      </ul>
    </div>
  )
}

export default Widgetsm;
