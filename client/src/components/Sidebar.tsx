
import { NavLink } from "react-router-dom";

const Sidebar = () => {

  const menuItems = [
    { icon: 'database', label: 'Data Collection', path: "/datacollection" },
    { icon: 'drafts', label: 'Review Panel', path: "/reviewpanel" },
    { icon: 'publish', label: 'Publications', path: "/publications" },
    { icon: 'settings', label: 'Configuration', path: "/configuration" },
  ];

  const activeClass = `bg-primary-container text-on-primary-container scale-[0.98]`
  const inactiveClass = `text-on-surface-variant hover:bg-surface-variant hover:text-on-surface`


  return (
    <nav className="bg-surface-container-low text-primary h-full w-64 fixed left-0
      top-0 flex flex-col border-r border-outline-variant z-50">
      <div className="flex flex-col h-full py-8 justify-between">
        <div>
          {/* Logo Section */}
          <div className="px-6 mb-8 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-3xl
      icon-filled">
              generating_tokens
            </span>
            <h1 className="text-xl font-bold text-on-surface tracking-tight
      font-headline-md">
              TalentCircle
            </h1>
          </div>

          {/* Navigation Items */}
          <div className="flex flex-col gap-1 px-2">
            {menuItems.map((item) => (


              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg
     transition-all duration-200
     ${isActive ? activeClass : inactiveClass}`
                }
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={`material-symbols-outlined ${isActive ? "icon-filled" : ""
                        }`}
                    >
                      {item.icon}
                    </span>

                    <span className="font-medium">{item.label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </div>

        {/* User Profile Section */}
        <div className="px-2">
          <a href="#" className="flex items-center gap-3 px-4 py-3
      text-on-surface-variant hover:bg-surface-variant hover:text-on-surface rounded-lg
      transition-colors">
            <div className="w-8 h-8 rounded-full bg-primary-container flex
      items-center justify-center text-on-primary-container font-bold text-sm">
              AD
            </div>
            <span className="font-medium">Admin</span>
            <span className="material-symbols-outlined ml-auto">unfold_more</span>
          </a>
        </div>
      </div>
    </nav >
  );
};

export default Sidebar;