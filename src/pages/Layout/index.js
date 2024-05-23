import { Button } from "antd-mobile"
import { Outlet } from "react-router-dom"

const Layout = () => {
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