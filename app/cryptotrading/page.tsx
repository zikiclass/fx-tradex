"use client";
import React, { useEffect, useRef } from "react";
import { Footer, NavBar } from "../HomeComponents";
import BannerEmpty from "../components/Banner2";
import "../components/style1.css";
import CookieBanner from "@/public/img/Hero3.jpg";
import { last_revised, project_name } from "@/env";

const CryptoTrading = () => {
  const refHandle = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (refHandle.current) {
      refHandle.current.classList.add("fadeIn");
    }
  }, []);

  return (
    <>
      <NavBar />
      <BannerEmpty text="Crypto Trading" smallText="" />
      <div className="__section" ref={refHandle}>
        <div className="container">
          <div className="content">
            <h1>Crypto Trading</h1>
            <p>
              {project_name} is excited to announce the launch of our new
              cryptocurrency trading platform. Now you can start trading
              Bitcoin, Ethereum and many more cryptocurrencies quickly, easily
              and safely from wherever you are — in just seconds. You get great
              margin trading leverage and short sell options with fast deposits
              and withdrawals. Our support team is available 24/7/365 to help
              get you trading on our CySEC-regulated platform with a trading
              volume of US $11 billion monthly.
            </p>

            <p>
              <b>What is a crypto currency</b>
              <br />A cryptocurrency like bitcoin is a virtual currency traded
              peer-to-peer on a blockchain, independent of centralized
              authorities like banks and governments. Cryptocurrencies are
              entirely virtual, so they are not backed by physical commodities
              and have no intrinsic value.
            </p>

            <p>
              <b>How Do Cryptocurrencies Work?</b>
              <br />
              Primarily, cryptocurrencies rely on blockchain technology to
              complete a transaction via an intricate P2P network. Once a
              transfer request is entered into the network, it is validated by
              the network and added to a pool of other transactions to create a
              block of data for the ledger, which is then entered into the
              existing blockchain. Once the block is successfully added to the
              chain, the transaction is approved and completed.
            </p>

            <p>
              <b>Are There Investment Opportunities with Cryptocurrencies?</b>
              <br />
              Absolutely. Cryptocurrencies have become established investment
              commodities among major financial institutions and have even been
              adopted by countries such as Australia and Japan. As with any
              investment though, there are risks linked to market movements,
              high volatility and economics.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CryptoTrading;
