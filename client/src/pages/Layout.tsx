
import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"

const Layout = () => {
    return (
        <div className="flex h-screen bg-background">
            <Sidebar />
            <main className="flex-1 overflow-auto p-8 ml-64">
                <Outlet /> 
            </main>
        </div>
    )
}

export default Layout