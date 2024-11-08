import logo from "../../assets/logo/logo.png";
import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const {user, logOut} = useContext(AuthContext);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setActive(location.pathname); // Set active link based on current route
  }, [location]);

  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
        toast.success("Logged Out Successfully!");
      })
      .catch((error) => {
        console.error("Logout Error:", error);
        toast.error("Error logging out. Please try again later.");
      });
    };


  const navLinks = [
    // { title: 'Home', path: '/' },
    // { title: 'Updates', path: '/updates' },
    { title: 'Projects', path: '/projects' },
    { title: 'CarbonCal', path: '/carbonFootprintCalculator' },
    { title: 'Articles', path: '/articles' },
    { title: 'Blogs', path: '/blogs' },
    { title: 'Volunteers', path: '/volunteers' },
    { title: 'Donation', path: '/donations' },
    { title: 'Contact', path: '/contact' },
    
  ];

  return (
    <div className="">
      <div className={`flex justify-center ${scrolled ? 'hidden' : 'flex'}`}>
        <p className="poppins font-thin tracking-[3px] pt-2 fixed top-0 text-gray">
          Stay Informed. Take Action. Protect the Earth
        </p>
      </div>
      <header className={`w-full py-5 fixed z-50 ${scrolled ? 'shadow-2xl bg-white top-0' : 'bg-white'}`}>
        <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Climate Watch" className="sm:w-15 sm:h-15 w-12 h-12" />
            <p className="hidden font-bold sm:text-2xl px-5 uppercase sm:block inter text-[#214d5b] lg:flex">
              climate <span className="text-[#c9e265]">watch</span>
            </p>
          </Link>

          <div className="hidden md:block">
            <ul className="list-none flex flex-row gap-10">
              {navLinks.map((link, index) => (
                <li 
                  key={index}
                  className={`${active === link.path ? 'text-[#c9e265]' : 'text-[#214D5B]'} poppins font-medium cursor-pointer text-[18px]`}
                  onClick={() => setActive(link.path)}
                >
                  <Link to={link.path}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4">
          {
            user ? 
            (
              <div className="flex flex-row justify-around items-center">
                <div className="text-center flex flex-col justify-center lg:items-center items-end">
                        <div className="w-16 lg:w-20 rounded-full">
                          <img src={user?.photoURL} />
                        </div>
                        <p className="font-semibold hidden md:block">{user?.displayName
          }</p>
          
                      </div>
                     <div>
                     <button onClick={handleSignOut} className="text-xs  font-bold rounded-lg bg-[#214D5B] p-1 text-[#C8E264] border-1 border-[#C8E264]">Log Out</button>
                     </div>
              </div>):
            (  <div className="sm:flex sm:gap-4">
              <Link
                className="rounded-md bg-[#C8E264] px-5 py-2.5 text-sm font-medium text-[#214D5B]"
                to="/login"
              >
                Login
              </Link>

              <div className="hidden sm:flex">
                <Link
                  className="rounded-md bg-[#214D5B] px-5 py-2.5 text-sm font-medium text-[#C8E264]"
                  to="/register"
                >
                  Register
                </Link>
              </div>
            </div>
)
          }
            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75" onClick={() => setToggle(!toggle)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {toggle && (
          <div className="md:hidden">
            <ul className="list-none flex flex-col items-center gap-4 mt-4">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className={`${active === link.path ? 'text-[#c9e265]' : 'text-[#214D5B]'} poppins font-medium cursor-pointer text-[18px]`}
                  onClick={() => {
                    setActive(link.path);
                    setToggle(false);
                  }}
                >
                  <Link to={link.path}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
