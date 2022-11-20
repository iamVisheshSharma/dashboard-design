import { Visibility } from '@material-ui/icons';
import './WidgetSm.css';

export default function WidgetSm() {
  return (
    <div className='widgetSm'>
      <span className="widgetSmTitle">New Join Member</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src="https://source.unsplash.com/ILip77SbmOE" alt="" className='widgetSmImg' />
          <div className="widgetSmUsers">
            <span className="widgetSmUsername">Anna Kelly</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility />
            Display
          </button>
        </li>
      </ul>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src="https://source.unsplash.com/ILip77SbmOE" alt="" className='widgetSmImg' />
          <div className="widgetSmUsers">
            <span className="widgetSmUsername">Anna Kelly</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility />
            Display
          </button>
        </li>
      </ul>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src="https://source.unsplash.com/ILip77SbmOE" alt="" className='widgetSmImg' />
          <div className="widgetSmUsers">
            <span className="widgetSmUsername">Anna Kelly</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility />
            Display
          </button>
        </li>
      </ul>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src="https://source.unsplash.com/ILip77SbmOE" alt="" className='widgetSmImg' />
          <div className="widgetSmUsers">
            <span className="widgetSmUsername">Anna Kelly</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility />
            Display
          </button>
        </li>
      </ul>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src="https://source.unsplash.com/ILip77SbmOE" alt="" className='widgetSmImg' />
          <div className="widgetSmUsers">
            <span className="widgetSmUsername">Anna Kelly</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
      </ul>
    </div>
  )
}
