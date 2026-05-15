
import { NavLink } from "react-router-dom"
import { useLocation } from "react-router-dom"



const ReviewNavBar = () => {

    const { pathname } = useLocation();
    console.log(pathname);

    const base = pathname.split("/").slice(0, 2).join("/");




    const tabs = [

        { path: `${base}/newsletter`, icon: "mail", label: "Newsletter" },
        { path: `${base}/linkedin`, icon: "work", label: "Linkedin" },
        { path: `${base}/xtwitter`, icon: "chat", label: "Twitter" },
        { path: `${base}/structured`, icon: "code", label: "Structured Export" },

    ]


    const activeClass = "text-primary font-body-md text-body-md font-bold border-b-2 border-primary pb-3 px-1 flex items-center gap-2"
    const inactiveClass = "text-on-surface-variant hover:text-on-background font-body-md text-body-md pb-3 px-1 flex items-center gap-2 transition-colors"

    const tabClass = ({ isActive }: { isActive: boolean }) => isActive ? activeClass : inactiveClass

    return (

        <div className="border-b border-surface-container-highest">
            <nav aria-label="Tabs" className="flex gap-8">

                {tabs.map( tab => (
                    <NavLink key={tab.path} to={tab.path} className={tabClass}>
                        {tab.label}
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>
                            {tab.icon}
                        </span>
                    </NavLink>
                ))}
            </nav>
        </div>

    )


}

export default ReviewNavBar