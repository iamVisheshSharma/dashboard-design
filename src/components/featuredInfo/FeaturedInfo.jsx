import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import './FeaturedInfo.css'

export default function FeaturedInfo() {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredRate"> -11.4 <ArrowDownward className='featuredIcon negative' /> </span>
        </div>
        <span className="featuredSub">compare to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredRate"> -11.4 <ArrowDownward className='featuredIcon negative' /> </span>
        </div>
        <span className="featuredSub">compare to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredRate"> 12.34 <ArrowUpward className='featuredIcon' /> </span>
        </div>
        <span className="featuredSub">compare to last month</span>
      </div>
    </div>
  )
}
