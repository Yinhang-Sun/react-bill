import { NavBar, DatePicker } from 'antd-mobile'
import './index.scss'
import { useState } from 'react'
import classNames from 'classnames'
import dayjs from 'dayjs'

const Month = () => {
    // Control the opening and closing of pop-up windows
    const [dateVisible, setDateVisible] = useState(false)
    
    // Control time display
    const [currentDate, setCurrentDate] = useState(() => {
        return dayjs(new Date()).format('YYYY-MM')
    })

    const onConfirm = (date) => {
        setDateVisible(false)
        // Other logic 
        console.log(date);
        const formatDate = dayjs(date).format('YYYY-MM')
        setCurrentDate(formatDate)
    }
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
                            {currentDate + ''} Bill
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
                        onConfirm={onConfirm}
                        onClose={() => setDateVisible(false)}
                        max={new Date()}
                    />
                </div>
            </div>
        </div >
    )
}

export default Month