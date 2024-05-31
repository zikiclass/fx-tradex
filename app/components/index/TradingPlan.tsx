"use client";
import Button from "../Button";
import "./styles/tradingplan.css";
import { plans } from "./data";
import { Bounce, Fade, Flip } from "react-awesome-reveal";
const TradingPlan = () => {
  return (
    <>
      <div className="trading__container">
        <div className="container">
          <h3>A TRADING PLAN FOR EVERY ONE</h3>
          <Fade>
            <p className="text-center">
              We offer a variety of trading accounts to match every trading
              style across all levels of experience. <br />
              Whether you’re a scalper or day trader, use EAs or are a
              discretionary trader, we have you covered.
            </p>
          </Fade>
          <div className="rows_">
            {plans.map((plan) => (
              <Fade
                triggerOnce
                direction="up"
                style={{ flex: 1 }}
                key={plan.title}
              >
                <div className="card_plan">
                  <span>{plan.title}</span>

                  <span className="amount">${plan.amount}</span>

                  <span>Min Deposit: ${plan.amount}</span>
                  <span>Referral Bonus</span>
                  <span>Full IT Support</span>

                  <Button href="/" title="PURCHASE PLAN" />
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default TradingPlan;
