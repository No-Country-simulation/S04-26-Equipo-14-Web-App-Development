
import { NavLink } from "react-router-dom"

const ReviewNavBar = () => {


    const activeClass = "text-primary font-body-md text-body-md font-bold border-b-2 border-primary pb-3 px-1 flex items-center gap-2"
    const inactiveClass = "text-on-surface-variant hover:text-on-background font-body-md text-body-md pb-3 px-1 flex items-center gap-2 transition-colors"

    const tabClass = ({ isActive }: { isActive: boolean }) => isActive ? activeClass : inactiveClass

    return (

        <div className="border-b border-surface-container-highest">
            <nav aria-label="Tabs" className="flex gap-8">
                <NavLink
                    to="/newsletter"
                    className={tabClass}>

                    <span
                        className="material-symbols-outlined"
                        style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>

                        mail

                    </span>

                    Newsletter

                </NavLink>

                <NavLink
                    to="/linkedin"
                    className={tabClass}>
                    <span className="material-symbols-outlined">work</span>
                    LinkedIn
                </NavLink>

                <NavLink
                    to="/xtwitter"
                    className={tabClass}>
                    <span className="material-symbols-outlined">chat</span>
                    Twitter
                </NavLink>

                <NavLink
                    to="/structured"
                    className={tabClass}>
                    <span className="material-symbols-outlined">code</span>
                    Structured Export
                </NavLink>
            </nav>
        </div>

    )


}

export default ReviewNavBar