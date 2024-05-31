"use client";
import React from "react";
import logo from "@/public/img/logo.png";
import Image from "next/image";
import Link from "next/link";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import "./styles/footer.css";
import { Fade } from "react-awesome-reveal";
import { project_name, project_email } from "@/env";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer__box__1">
            <Link href="/">
              <Image src={logo} alt="Logo" className="logo" />
            </Link>
            <span>{project_name}</span>
            <span id="email">
              <EnvelopeClosedIcon />
              {project_email}
            </span>
          </div>
          <div className="footer__box__2">
            <h4>Quick Links</h4>

            <ul>
              <li>
                <Link href="contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/">My Account</Link>
              </li>
              <li>
                <Link href="signup">Create Account</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
