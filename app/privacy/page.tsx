"use client";
import React, { useEffect, useRef } from "react";
import { Footer, NavBar } from "../HomeComponents";
import Banner from "../components/Banner";
import "../components/style1.css";
import CookieBanner from "@/public/img/Hero3.jpg";
import { last_revised, project_name } from "@/env";

const Privacy = () => {
  const refHandle = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (refHandle.current) {
      refHandle.current.classList.add("fadeIn");
    }
  }, []);

  return (
    <>
      <NavBar />
      <Banner
        text="Privacy Policy"
        smallText={`Last Revised: ${last_revised}`}
        image={CookieBanner}
      />
      <div className="__section" ref={refHandle}>
        <div className="container">
          <div className="content">
            <h1>Privacy Policy</h1>
            <p>
              {project_name} Limited (in incorporation) (“us“, “we” or
              “Company“) respect the privacy of our users (each, “you” or
              “User“) and are committed to protect the privacy of Users who
              access, download, install or register to our mobile application
              (the “Application“), our website or any other online services we
              provide (collectively: the “Services“). The Company has papered
              this Privacy Policy to outline our practices with respect to
              collecting, using and disclosing your information when you use the
              Services. We encourage you to read the Privacy Policy carefully
              and use it to make informed decisions. By using the Services, you
              agree to the terms of this Privacy Policy and your continued use
              of the Services constitutes your ongoing agreement to the Privacy
              Policy. The Privacy Policy is a part of the Terms of Service and
              is incorporated there in by reference. In this Privacy Policy you
              will read about, among other things:
            </p>
            <p>* With whom we share the information and for what purpose</p>
            <p>* For how long we retain the information</p>
            <p>* How we protect your information</p>
            <p>* Advertisements</p>
            <p>* Advertising ID and Advertising Identifier</p>
            <p>* Cookies and Google Analytics</p>

            <div className="content__paragraph">
              <h4>WITH WHOM WE SHARE THE INFORMATION AND FOR WHAT PURPOSE</h4>
              <p>
                We do not rent, sell, or share your Personal Information with
                third-parties except as described in this Privacy Policy. We may
                share Personal Information with the following recipients: (i)
                our subsidiaries; (ii) affiliated companies; (iii)
                subcontractors and other third-party service providers; (iv)
                auditors or advisers of our business processes; and (v) any
                potential purchasers or investors in the company. In addition to
                the purposes listed in this Privacy Policy, we may share
                Personal Information with our recipients for any of the
                following purposes: (i) storing or processing Personal
                Information on our behalf (e.g., cloud computing service
                providers); (ii) processing such information to assist us with
                our business operations; (iii) performing research, technical
                diagnostics, personalization and analytics. We may also disclose
                Personal Information or any information you submitted via the
                Services if we have a good faith belief that disclosure of such
                information is helpful or reasonably necessary to: (i) comply
                with any applicable law, regulation, legal process or
                governmental request; (ii) enforce our policies, including
                investigations of potential violations thereof; (iii)
                investigate, detect, prevent, or take action regarding illegal
                activities or other wrongdoing, suspected fraud or security
                issues; (iv) to establish or exercise our rights to defend
                against legal claims; (v) prevent harm to the rights, property
                or safety of us, our affiliates, our Users, yourself or any
                third-party; (vi) for the purpose of collaborating with law
                enforcement agencies; and (vii) in case we find it necessary in
                order to enforce intellectual property or other legal rights.
              </p>
            </div>
            <div className="content__paragraph">
              <h4>FOR HOW LONG WE RETAIN THE INFORMATION</h4>
              <p>
                We respect your privacy rights and therefore you may contact us
                at any time and request: (i) to access, delete, change or update
                any Personal Information relating to you (for example, if you
                believe that your Personal Information is incorrect, you may ask
                to have it corrected or deleted); or (ii) that we will cease any
                further use of your Personal Information (for example, you may
                ask that we will stop using or sharing your Personal Information
                with third-parties) or that we shall remove your Personal
                Information (subject to any other legal obligation that may
                require us to keep the information). Please note that unless you
                instruct us otherwise we retain the information we collect for
                as long as needed to provide the Services and to comply with our
                legal obligations, resolve disputes and enforce our agreements.
                We may rectify, replenish or remove incomplete or inaccurate
                information, at any time and at our own discretion. If you wish
                to raise a complaint on how we have handled your Personal
                Information, please contact us directly at . If you are not
                satisfied with our response or believe we are collecting or
                processing your Personal Information not in accordance with the
                laws, you can complain to the applicable data protection
                authority.
              </p>
            </div>
            <div className="content__paragraph">
              <h4>HOW WE PROTECT YOUR INFORMATION</h4>
              <p>
                We take great care in implementing and maintaining the security
                of the Services and your information. We employ industry
                standard procedures and policies to ensure the safety of your
                information and prevent unauthorized use of any such
                information. Although we take reasonable steps to safeguard
                information, we cannot be responsible for the acts of those who
                gain unauthorized access or abuse the Services, and we make no
                warranty, express, implied or otherwise, that we will prevent
                such access. If you feel that your privacy was treated not in
                accordance with our policy, or if any person attempted to abuse
                the Services or acted in an inappropriate manner, please contact
                us directly at .
              </p>
            </div>
            <div className="content__paragraph">
              <h4>ADVERTISEMENTS</h4>
              <p>
                We may use a third-party advertising technology to serve
                advertisements when you use the Services. This technology uses
                your information with regards to your use of the Services to
                serve advertisements to you (e.g., by placing third-party
                cookies on your web browser). We may also use our third-parties
                and share with them Users’ information to assist us in
                evaluating the success of our advertising campaigns and help us
                retargeting our Users. You may opt-out of many third-party ad
                networks, including those operated by members of the Network
                Advertising Initiative (“NAI”) and the Digital Advertising
                Alliance (“DAA”). For more information about this practice by
                NAI and DAA members, and your choices regarding having this
                information used by these companies, including how to opt-out of
                third-party ad networks operated by NAI and DAA members, please
                visit their respective websites:
                http://optout.networkadvertising.org/#!/ and
                http://optout.aboutads.info/#!/.
              </p>
            </div>
            <div className="content__paragraph">
              <h4>ADVERTISING ID AND ADVERTISING IDENTIFIER</h4>
              <p>
                The Google Advertising ID is an anonymous identifier, provided
                by Google Play services. If your device has an Advertising ID,
                we may collect and use it for advertising and user analytics
                purposes. We may also use Apple’s Advertising Identifier (IDFA),
                which is a non-permanent device identifier provided by Apple,
                and any information obtained through the use of the Advertising
                Identifier, for the purpose of advertising. By downloading the
                Application or using the Services you explicitly agree that we
                may associate your Advertising ID and your Advertising
                Identifier with your applicable persistent device identifier.
                This will facilitate our ability to improve your personalized
                experience. Further, we may use other persistent identifiers for
                non-advertising purposes. If your device does not have
                Advertising ID or Advertising Identifier respectively, we will
                use other identifiers.
              </p>
            </div>
            <div className="content__paragraph">
              <h4>UPDATE OR AMMENDMENTS TO THE PRIVACY POLICY</h4>
              <p>
                We may revise this Privacy Policy from time to time, in our sole
                discretion, and the most current version will always be posted
                on our website or Application (as reflected in the “Last
                Revised” heading). In the event of a material change to the
                Privacy Policy, we will notify you through the Services or via
                email, or you may be notified within the Application. We
                encourage you to review this Privacy Policy regularly for any
                changes. Your continued use of the Services, following the
                notification of such amendments, constitutes your
                acknowledgement and consent of such amendments to the Privacy
                Policy and your agreement to be bound by the terms of such
                amendments.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
