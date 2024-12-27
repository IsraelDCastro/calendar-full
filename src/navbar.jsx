import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <ul className="flex justify-around">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `rounded-md px-4 py-2 text-sm font-semibold md:text-lg ${
                isActive ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dnd-fc"
            end
            className={({ isActive }) =>
              `rounded-md px-4 py-2 text-sm font-semibold md:text-lg ${
                isActive ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`
            }
          >
            DnDFC
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dnd-calendar"
            className={({ isActive }) =>
              `rounded-md px-4 py-2 text-sm font-semibold md:text-lg ${
                isActive ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`
            }
          >
            DnDCalendar
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/client-itinerary"
            className={({ isActive }) =>
              `rounded-md px-4 py-2 text-sm font-semibold md:text-lg ${
                isActive ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`
            }
          >
            Client itinerary
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tiptap-editor"
            className={({ isActive }) =>
              `rounded-md px-4 py-2 text-sm font-semibold md:text-lg ${
                isActive ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`
            }
          >
            Tiptap Editor
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `rounded-md px-4 py-2 text-sm font-semibold md:text-lg ${
                isActive ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`
            }
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/show-tour"
            className={({ isActive }) =>
              `rounded-md px-4 py-2 text-sm font-semibold md:text-lg ${
                isActive ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`
            }
          >
          Show tour
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
