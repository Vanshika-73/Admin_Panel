import './user.css';
import React from 'react'
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid } from '@mui/icons-material';

function User() {
  return (
    <div className='user'>
        <div className="userTitleContainer">
            <h1 className='UserTilte'>Edit User</h1>
            <button className='userAddButton'>
                Create
            </button>
        </div>

        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="/main_avatar.jpg" alt="" className='userShowImage'/>
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Anna Becker</span>
                        <span className="userShowtitle">
                            Software Engineer
                        </span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userBottomTitle">Account Details</span>
                    <div className="userShowInfo">
                    <PermIdentity className='userShowIcon'/>
                    <div className="userShowInfoTitle">Annabeck99</div>
                    </div>
                    <div className="userShowInfo">
                    <CalendarToday className='userShowIcon'/>
                    <div className="userShowInfoTitle">28.11.02</div>
                    </div>
                    <span className="userBottomTitle">Contact Details</span>
                    <div className="userShowInfo">
                    <PhoneAndroid className='userShowIcon'/>
                    
                    <div className="userShowInfoTitle">99144353121</div>
                    </div>
                    <div className="userShowInfo">
                    <MailOutline className='userShowIcon'/>
                    <div className="userShowInfoTitle">Annabeck99@mail.com</div>
                    </div> 
                    <div className="userShowInfo">
                    <LocationSearching
                    className='userShowIcon'/>
                    <div className="userShowInfoTitle">India</div>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUppdateTitle">
                    Edit
                </span>
                <form className="userUpdateForm"></form>
            </div>
        </div>
    </div>
  )
}

export default User