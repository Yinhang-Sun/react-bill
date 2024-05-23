import { Button } from "antd-mobile"
import { Outlet } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getBillList } from "@/store/modules/billStore"

const Layout = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBillList())
    }, [dispatch])
    return (
        <div>
            <Outlet />
            I am Layout
            {/* Test global effective styles */}
            <Button color="primary">Test global</Button>
            <div className="purple">
                {/* Test local effective styles */}
                <Button color="primary">Test local</Button>
            </div>
        </div>
    )
}

export default Layout