import { NavBar, DatePicker } from 'antd-mobile'
import './index.scss'

const Month = () => {
  return (
    <div className="monthlyBill">
      <NavBar className="nav" backArrow={false}>
        Monthly Balance
      </NavBar>
      <div className="content">
        <div className="header">
          {/* Time switch area */}
          <div className="date">
            <span className="text">
                2023 | March Bill
            </span>
            <span className='arrow expand'></span>
          </div>
          {/* Statistical area */}
          <div className='twoLineOverview'>
            <div className="item">
              <span className="money">{100}</span>
              <span className="type">Expense</span>
            </div>
            <div className="item">
              <span className="money">{200}</span>
              <span className="type">Income</span>
            </div>
            <div className="item">
              <span className="money">{200}</span>
              <span className="type">Balance</span>
            </div>
          </div>
          {/* Time selector */}
          <DatePicker
            className="kaDate"
            title="Bill date"
            precision="month"
            visible={false}
            max={new Date()}
          />
        </div>
      </div>
    </div >
  )
}

export default Month