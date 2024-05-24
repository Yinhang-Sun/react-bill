import { NavBar, DatePicker } from 'antd-mobile'
import './index.scss'
import { useMemo, useState } from 'react'
import classNames from 'classnames'
import dayjs from 'dayjs'
import { useSelector } from 'react-redux'
import _ from 'lodash'

const Month = () => {
    // Group data by month 
    const billList = useSelector(state => state.bill.billList)
    const monthGroup = useMemo(() => {
        // return the calculated value 
        return _.groupBy(billList, (item) => dayjs(item.date).format('YYYY-MM'))
    }, [billList])
    console.log(monthGroup) 
    // Control the opening and closing of pop-up windows
    const [dateVisible, setDateVisible] = useState(false)
    
    // Control time display
    const [currentDate, setCurrentDate] = useState(() => {
        return dayjs(new Date()).format('YYYY-MM')
    })

    const [currentMonthList, setMonthList] = useState([])

    const monthResult = useMemo(() => {
        // pay, income, balance 
        const pay = currentMonthList.filter(item => item.type === 'pay').reduce((a, c) => a + c.money, 0)
        const income = currentMonthList.filter(item => item.type === 'income').reduce((a, c) => a + c.money, 0)
        return {
            pay, 
            income, 
            total: pay + income
        }
    }, [currentMonthList])

    // Confirm callback 
    const onConfirm = (date) => {
        setDateVisible(false)
        // Other logic 
        console.log(date);
        const formatDate = dayjs(date).format('YYYY-MM')
        console.log(formatDate)
        setMonthList(monthGroup[formatDate])
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
                            <span className="money">{monthResult.pay.toFixed(2)}</span>
                            <span className="type">Expense</span>
                        </div>
                        <div className="item">
                            <span className="money">{monthResult.income.toFixed(2)}</span>
                            <span className="type">Income</span>
                        </div>
                        <div className="item">
                            <span className="money">{monthResult.total.toFixed(2)}</span>
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