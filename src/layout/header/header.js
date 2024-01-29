import { Link } from "react-router-dom/cjs/react-router-dom.min";

function HeaderBar() {
    return (
      <header className="flex items-center justify-between px-10 py-4 bg-white shadow-md">
        <img className="w-12 h-12 rounded-full border-2 border-blue-500" src="https://placehold.co/50x50.png" alt="Logo"/>
        <nav className="text-gray-700">
            <Link className="mr-5 hover:text-gray-900 font-semibold" to="/">Home</Link> 
            <Link className="mr-5 hover:text-gray-900 font-semibold" to="/events">Events</Link>
            <Link className="mr-5 hover:text-gray-900 font-semibold" to="/tickets">Tickets</Link>
        </nav>
        <nav>
            <Link className="mr-4 hover:text-gray-900 font-semibold" to="/login">Sign in</Link>
            <Link className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 focus:outline-none transition duration-300" to="/signup">Sign Up</Link> 
        </nav>
      </header>
    );
  }
  
  export default HeaderBar;