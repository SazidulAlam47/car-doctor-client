import PropTypes from "prop-types";
import { useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SlHandbag } from "react-icons/sl";
import { AuthContext } from "../../providers/AuthProvider";

const SingleNav = ({ pageTitle, path, setIsMobileMenuOpen }) => {
    return (
        <NavLink
            className={({ isActive }) =>
                isActive
                    ? "font-medium lg:font-semibold text-lg text-primary dark:text-primary"
                    : "font-medium lg:font-semibold text-lg text-[#444444] dark:text-gray-200"
            }
            to={path}
            onClick={() => setIsMobileMenuOpen(false)}
        >
            {pageTitle}
        </NavLink>
    );
};

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dropdownRef = useRef();
    const { user, logOut } = useContext(AuthContext);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsMobileMenuOpen(false);
            }
        };
        if (isMobileMenuOpen) {
            document.addEventListener("click", handleClickOutside);
        }
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    const navLinks = (
        <>
            <SingleNav
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                pageTitle="Home"
                path="/"
            />
            <SingleNav
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                pageTitle="About"
                path="/about"
            />
            <SingleNav
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                pageTitle="Services"
                path="/services"
            />
            <SingleNav
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                pageTitle="Contact"
                path="/contact"
            />
        </>
    );

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("SignOut successful");
            })
            .catch((err) => console.error(err));
    };

    return (
        <div className="container mx-auto px-3 md:px-6 py-2">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <Link to="/">
                        <img
                            className="w-20 sm:w-24"
                            src="/logo.svg"
                            alt="logo"
                        />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <nav className="flex gap-7">{navLinks}</nav>
                </div>
                <div className="navbar-end gap-1">
                    <div className="hidden sm:flex mr-4">
                        <button className="btn btn-ghost btn-circle">
                            <SlHandbag size={20} />
                        </button>
                    </div>
                    {user ? (
                        <button
                            onClick={handleLogOut}
                            className="btn bg-transparent border border-primary text-primary hover:bg-primary hover:text-white transition-all md:px-5"
                        >
                            Logout
                        </button>
                    ) : (
                        <Link
                            to="/login"
                            className="btn bg-transparent border border-primary text-primary hover:bg-primary hover:text-white transition-all md:px-5"
                        >
                            Login
                        </Link>
                    )}

                    <div className="dropdown" ref={dropdownRef}>
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        {isMobileMenuOpen && (
                            <nav
                                tabIndex={0}
                                className="flex flex-col absolute right-0 mt-3 z-[1] p-4 gap-2 shadow bg-base-100 rounded-box w-52"
                            >
                                {navLinks}
                            </nav>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

SingleNav.propTypes = {
    pageTitle: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    setIsMobileMenuOpen: PropTypes.func.isRequired,
};

export default Header;
