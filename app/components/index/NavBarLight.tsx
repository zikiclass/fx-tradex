"use client";
import { project_name } from "@/env";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FlagIcon } from "react-flag-kit";
import { countryList, sidebarLinks } from "./data";
import "./styles/navbar.css";
import Image from "next/image";
import logo from "@/public/img/logo.png";

const NavBarLight = () => {
  const [countryShow, setCountryShow] = useState(false);
  const [fadeOut, setFadeOut] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Function to handle scroll event
  const handleScroll = (event: any) => {
    setScrollPosition(event.target.scrollTop);
    if (fadeOut) {
      // Scroll to the top if sidebar is faded out
      event.target.scrollTop = 0;
    }
  };

  useEffect(() => {
    setFadeOut(true);
  }, []);

  return (
    <div className="scrolled">
      <div className="navbar__logo__harmburger">
        <HamburgerMenuIcon
          style={{ cursor: "pointer" }}
          onClick={() => setFadeOut(!fadeOut)}
        />
        <Link href="/">
          <span>{project_name}</span>
        </Link>
      </div>
      <div className="navbar__links">
        <Link href="contact" className="md-links">
          Contact Us
        </Link>
        <Link href="signin" className="md-links">
          Log In
        </Link>
        <Link href="signup" className="md-links">
          Sign Up
        </Link>
        <BedtimeIcon className="icon__bed" />
        <div
          className="icon__"
          onClick={() => {
            setCountryShow(!countryShow);
          }}
        >
          <FlagIcon code="US" className="icon__country" /> <span>EN</span>
        </div>
        <div className="country__list">
          <div className="country__wrap">
            {countryList.map((country) => (
              <div className="icon__country__list" key={country.id}>
                <FlagIcon code={country.code} className="icon__country__" />{" "}
                <span>{country.code}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`sidebar__container ${fadeOut ? "fadeOut" : ""}`}
        onClick={() => {
          setFadeOut(!fadeOut);
        }}
      >
        <div
          className={`sidebar ${fadeOut ? "fadeOut" : ""}`}
          onScroll={handleScroll}
        >
          <div className="logo__wrap">
            <Image src={logo} alt="Logo" className="logo__sidebar" />
          </div>
          <ul className="sidebar__links">
            {sidebarLinks.map((link) => (
              <li key={link.id}>
                <Link href="/" className="sidebar__link">
                  <link.icon className="sidebar__links__icon" />
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default NavBarLight;
