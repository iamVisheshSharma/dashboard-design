import './Home.css';
import Charts from '../../charts/Charts'
import FeaturedInfo from '../../featuredInfo/FeaturedInfo'
import { userData } from "../../dummy.js";
import WidgetSm from '../../Widgets/WidgetSm';
import WidgetLg from '../../Widgets/WidgetLg';

export default function Home() {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Charts data={userData} title={"User Analytics"} grid dataKey={"Active Users"} />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}
