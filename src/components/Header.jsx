import { useLocation, useNavigate } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import codeCaffeineLogo from "../assets/codec.png";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState, useEffect, useRef } from "react";
import { useAuth } from "./content/userContext";

const Header = () => {
  const { pathname } = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const { currentUser, setCurrentUser } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
    if (openNavigation) {
      enablePageScroll();
    } else {
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    navigate("/login");
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    if (showDropdown) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showDropdown]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="/">
          <img
            src={codeCaffeineLogo}
            width={190}
            height={40}
            alt="InstaCare AI"
          />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {!currentUser ? (
              <>
                <a
                  key="sign-in-mobile"
                  href="/login"
                  onClick={handleClick}
                  className="block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 lg:hidden px-6 py-4 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12"
                >
                  Sign In
                </a>
                <a
                  key="new-account-mobile"
                  href="/register"
                  onClick={handleClick}
                  className="block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 lg:hidden px-6 py-4 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12"
                >
                  New Account
                </a>
              </>
            ) : (
              <>
                <a
                  href="/profile"
                  onClick={handleClick}
                  className="block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 lg:hidden px-6 py-4 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12"
                >
                  Profile
                </a>
                <a
                  href="/create"
                  onClick={handleClick}
                  className="block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 lg:hidden px-6 py-4 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12"
                >
                  Create Post
                </a>
                <button
                  onClick={handleLogout}
                  className="block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 lg:hidden px-6 py-4 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12"
                >
                  Logout
                </button>
              </>
            )}

            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-4 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        {currentUser ? (
          <div className="relative flex items-center space-x-4">
            <Button
              className="hidden lg:block text-n-1/50 cursor-pointer hover:text-color-1"
              onClick={toggleDropdown}
            >
              Hello, {currentUser.name}
            </Button>
            {showDropdown && (
              <div
                ref={dropdownRef}
                className="absolute right-4 mt-2 w-40 bg-n-8 border border-gray-700 rounded shadow-lg"
                style={{ top: "100%" }}
              >
                <a
                  href="/profile"
                  className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
                >
                  Profile
                </a>
                <a
                  href={`/dashboard`}
                  className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
                >
                  My Posts
                </a>
                <a
                  href="/create"
                  className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
                >
                  Create Post
                </a>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <a
              href="/register"
              className="button hidden lg:inline-block mr-8 text-n-1/50 transition-colors hover:text-n-1"
            >
              New account
            </a>
            <Button className="hidden lg:flex" href="/login">
              Sign In
            </Button>
          </>
        )}

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;