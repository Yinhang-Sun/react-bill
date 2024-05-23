import { NavBar, DatePicker } from 'antd-mobile'
import './index.scss'
import { useState } from 'react'
import classNames from 'classnames'

const Month = () => {
    // Control the opening and closing of pop-up windows
    const [dateVisible, setDateVisible] = useState(false)
    return (
        <div className="monthlyBill">
            <NavBar className="nav" backArrow={false}>
                Monthly Balance
            </NavBar>
            <div className="content">
                <div className="header">
                    {/* Time switch area */}
                    <div className="date" onClick={() => setDateVisible(true)}>
                        <span className="text">
                            2023 | March Bill
                        </span>
                        <span className={classNames('arrow', dateVisible && 'expand')}></span>
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
                        visible={dateVisible}
                        onCancel={() => setDateVisible(false)}
                        onConfirm={() => setDateVisible(false)}
                        onClose={() => setDateVisible(false)}
                        max={new Date()}
                    />
                </div>
            </div>
        </div >
    )
}

export default Month