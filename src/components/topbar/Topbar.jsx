import React from 'react';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import './topbar.css';
function Topbar() {
  return (
    <div className='topbar'>
        <div className='topwrapper'>
            <div className="topleft"><span className="logo">IamAdmin</span></div>
            <div className='topright'>
                <div className="topIconsContainer">
                     <NotificationsNoneOutlinedIcon/>
                     <span className='topIconBag'>2</span>
                </div>
                <div className="topIconsContainer">
                      <LanguageOutlinedIcon/>
                     <span className='topIconBag'>2</span>
                </div>
                <div className="topIconsContainer">
                      <SettingsOutlinedIcon/>
                </div>
                <div className="avatar">
                  <img src="/main_avatar.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar;