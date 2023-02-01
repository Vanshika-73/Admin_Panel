import React from "react";
import "./sidebar.css";
import TimelineIcon from "@mui/icons-material/Timeline";
import { AttachMoneyOutlined, Inventory2Outlined, LineStyleRounded, MailOutline, ModeCommentOutlined, Person2Outlined, QuestionAnswerOutlined, ReportRounded, SignalCellularAltOutlined, TrendingUp, WorkOutlineOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li >
              <Link className="sidebarListItem" to='/'>
              <LineStyleRounded className="sidebarListIcon"/>
              Home
              </Link>
            </li>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarListIcon"/>
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarListIcon"/>
              Sales
            </li>
          </ul>
        </div>
        {/* **********2 */}

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li>
              <Link to="/user" className="sidebarListItem">
              <Person2Outlined className="sidebarListIcon"/>
              Users
              </Link>
            </li>
            <li className="sidebarListItem">
              <Inventory2Outlined className="sidebarListIcon"/>
              Products
            </li>
            <li className="sidebarListItem">
              <AttachMoneyOutlined className="sidebarListIcon"/>
              Transactions
            </li>
            <li className="sidebarListItem">
              <SignalCellularAltOutlined className="sidebarListIcon"/>
              Reports
            </li>
          </ul>
        </div>

        {/* ***********3 */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Noticifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarListIcon"/>
              Mail
            </li>
            <li className="sidebarListItem">
              <QuestionAnswerOutlined className="sidebarListIcon"/>
              Feedback
            </li>
            <li className="sidebarListItem">
              <ModeCommentOutlined className="sidebarListIcon"/>
            Messages
            </li>
          </ul>
        </div>
      {/* *********4 */}

        <div className="sidebarMenu" id="last">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutlineOutlined className="sidebarListIcon"/>
              Manage
            </li>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarListIcon"/>
              Analytics
            </li>
            <li className="sidebarListItem">
              <ReportRounded className="sidebarListIcon"/>
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
