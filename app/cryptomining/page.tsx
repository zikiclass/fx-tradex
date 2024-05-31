"use client";
import React, { useEffect, useRef } from "react";
import { Footer, NavBar } from "../HomeComponents";
import BannerEmpty from "../components/Banner2";
import "../components/style1.css";
import CookieBanner from "@/public/img/Hero3.jpg";
import { last_revised, project_name } from "@/env";

const CryptoMining = () => {
  const refHandle = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (refHandle.current) {
      refHandle.current.classList.add("fadeIn");
    }
  }, []);

  return (
    <>
      <NavBar />
      <BannerEmpty
        text="Crypto Mining"
        smallText={`Last Revised: ${last_revised}`}
      />
      <div className="__section" ref={refHandle}>
        <div className="container">
          <div className="content">
            <h1>Crypto Mining</h1>
            <p>
              Cryptocurrency networks need computational power to run securely.
              The world’s most powerful blockchains are supported by millions of
              computers around the world. Unlike paper money, Bitcoin and other
              cryptocurrencies are produced mathematically and held digitally.
              The people who voluntarily offer their computing power to secure
              these cryptocurrency networks are called miners.
            </p>
            <p>
              Cryptocurrencies don’t have a central government or other
              so-called ‘middlemen’ that decide about the future of the system.
              – They are in fact digital, borderless democracies in which miners
              vote with their computing power to reach order and consensus.{" "}
            </p>

            <div className="content__paragraph">
              <h4>HOW IS BITCOIN KEPT SECURE</h4>
              <p>
                The only way to not create money out of thin air or corrupt it,
                is to burn real energy. This is called Proof-Of-Work. Today,
                bitcoin is the most secure computer network on the planet and
                it’s practically impossible to break it! The reason for that is
                hash power, the umbrella term used for the computing power that
                miners provide to the bitcoin network and similar cryptocurrency
                networks. Due to the rapid growth of the ecosystem, mining
                operations today are mostly running with specialized
                high-performance computers that function most efficiently set up
                in large data centers.
              </p>
            </div>
            <div className="content__paragraph">
              <h4>WHAT ARE THE INCENTIVES FOR MINERS</h4>
              <p>
                It all comes down to trust: Miners keep the blockchains
                trustworthy and are rewarded for their efforts. As miners, we
                are processing and verifying the transactions of the
                cryptocurrency ecosystems and keeping their public transaction
                history (blockchains) maintained and secure. For this, the
                mining community is rewarded with the networks’ transaction fees
                and newly created coins. It’s a win-win situation! When you
                start mining with us, you are getting your share of this reward.{" "}
              </p>
            </div>
            <div className="content__paragraph">
              <h4>THE BIG VISION OF CRYPTO CURRENCY</h4>
              <p>
                To keep the integrity (and values!) of all cryptocurrency
                ecosystems intact, miners keep the networks safe and its
                authority decentralized by keeping each other constantly in
                check. This allows both a healthy growth and a fair distribution
                of currency units to all crypto-citizens!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CryptoMining;
