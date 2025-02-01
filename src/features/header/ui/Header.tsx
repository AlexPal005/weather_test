import { NavLink } from 'react-router'

export const Header = () => {
  return (
    <header className="p-4 shadow-md">
      <nav className="container mx-auto flex justify-center">
        <ul className="flex gap-6 text-base">
          <li>
            <NavLink
              to="/users"
              className={({ isActive }) =>
                `px-4 py-4 transition ${
                  isActive
                    ? 'text-black font-semibold border-b-2 border-black'
                    : 'text-gray-600 hover:text-black'
                }`
              }
            >
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/saved"
              className={({ isActive }) =>
                `px-4 py-4 transition ${
                  isActive
                    ? 'text-black font-semibold border-b-2 border-black'
                    : 'text-gray-600 hover:text-black'
                }`
              }
            >
              Saved
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
