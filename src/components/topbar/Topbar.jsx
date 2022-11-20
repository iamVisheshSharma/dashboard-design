import React from 'react';
import "./topbar.css";
import { NotificationsNone, Settings } from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="topbarWrapper">
        <div className="topleft">
          <span className="logo">adminPanel</span>
        </div>
        <div className="topright">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://source.unsplash.com/ILip77SbmOE" alt="Not Found" className="topAvatar" />
        </div>
      </div>
    </div>
  )
}
