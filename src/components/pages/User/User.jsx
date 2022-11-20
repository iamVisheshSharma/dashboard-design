import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import './User.css'

export default function User() {
  return (
    <div className='user'>
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to={"/newUser"}>
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src="https://source.unsplash.com/ILip77SbmOE" alt="" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Tom Halloh</span>
              <span className="userShowUserTitle">Software Title</span>
            </div>
          </div>
          <div className="userTopBottom">
            <span className="userShowTitle">Contact Detail</span>
            <div className="userShowInfo">
              <PermIdentity className='userShowIcon' />
              <span className="userShowInfoTitle">tomhall</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className='userShowIcon' />
              <span className="userShowInfoTitle">10-12-2022</span>
            </div>
            <div className="userShowInfo">
              <PhoneAndroid className='userShowIcon' />
              <span className="userShowInfoTitle">+91 8449882853</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className='userShowIcon' />
              <span className="userShowInfoTitle">tom@rocketmail.hot</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className='userShowIcon' />
              <span className="userShowInfoTitle">Partapur Meerut</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  className='userUpdateInput'
                  placeholder='tomhall'
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  className='userUpdateInput'
                  placeholder='+91 8449882853'
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="email"
                  className='userUpdateInput'
                  placeholder='tom@rocketmail.hot'
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  className='userUpdateInput'
                  placeholder='Partapur Meerut'
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img className='userUpdateImg' src="https://source.unsplash.com/ILip77SbmOE" alt="" />
                <label htmlFor="file"><Publish className='userUpdateIcon' /></label>
                <input type="file" name="" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
