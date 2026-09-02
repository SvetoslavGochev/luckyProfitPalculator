import { useState } from "react";
import FAQ from "./FAQ";
import HowItWorks from "./HowItWorks";
import Services from "./Services";
import { calculateProjection, parseNonNegativeNumber } from "./lib/calculator";

type View = "home" | "how" | "faq" | "services";

const roadmap = [
  "Profit calculator for staking, vaults, or referral-based services.",
  "Token vesting and locking service ideas from the source notes.",
  "Optional smart-contract automation layer later, if the product needs it.",
];

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatPercent(value: number) {
  return `${value.toFixed(1)}%`;
}

export default function App() {
  const [principal, setPrincipal] = useState(25000);
  const [apy, setApy] = useState(18);
  const [months, setMonths] = useState(12);
  const [platformFee, setPlatformFee] = useState(2.5);
  const [activeView, setActiveView] = useState<View>("home");

  const { grossProfit, feeAmount, netProfit, finalBalance, annualizedReturn } =
    calculateProjection({
      principal,
      apy,
      months,
      platformFee,
    });

  const renderHome = () => (
    <>
      <section className="hero-card">
        <div className="hero-copy">
          <span className="eyebrow">Lucky Profit Calculator</span>
          <h1>
            Profit planning for small crypto projects, token services, and
            future automation.
          </h1>
          <p className="lede">
            A clear calculator for projecting profit, fee impact, and annualized return
            in early product or token scenarios.
          </p>

          <div className="hero-actions">
            <button type="button" onClick={() => setActiveView("home")} className="button button-primary">
              Open Calculator
            </button>
            <button type="button" onClick={() => setActiveView("how")} className="button button-ghost">
              How it works
            </button>
            <button type="button" onClick={() => setActiveView("faq")} className="button button-ghost">
              FAQ
            </button>
          </div>

          <div className="hero-highlights">
            <div>
              <strong>{formatCurrency(finalBalance)}</strong>
              <span>Projected ending balance</span>
            </div>
            <div>
              <strong>{formatCurrency(netProfit)}</strong>
              <span>Estimated net profit</span>
            </div>
            <div>
              <strong>{formatPercent(annualizedReturn)}</strong>
              <span>Annualized return</span>
            </div>
          </div>
        </div>

        <div id="calculator" className="calculator-card">
          <div className="card-topline">
            <span>Live calculator</span>
            <span>Simple compound growth model</span>
          </div>

          <label>
            Capital
            <input
              type="number"
              min="0"
              value={principal}
              onChange={(event) =>
                setPrincipal(parseNonNegativeNumber(event.target.value))
              }
            />
          </label>

          <label>
            APY (%)
            <input
              type="number"
              min="0"
              step="0.1"
              value={apy}
              onChange={(event) =>
                setApy(parseNonNegativeNumber(event.target.value))
              }
            />
          </label>

          <label>
            Duration in months
            <input
              type="number"
              min="1"
              max="60"
              value={months}
              onChange={(event) =>
                setMonths(
                  Math.min(
                    60,
                    Math.max(1, parseNonNegativeNumber(event.target.value)),
                  ),
                )
              }
            />
          </label>

          <label>
            Platform fee (%)
            <input
              type="number"
              min="0"
              step="0.1"
              value={platformFee}
              onChange={(event) =>
                setPlatformFee(
                  Math.min(
                    100,
                    Math.max(0, parseNonNegativeNumber(event.target.value)),
                  ),
                )
              }
            />
          </label>

          <div className="calculator-grid">
            <div>
              <span>Gross profit</span>
              <strong>{formatCurrency(grossProfit)}</strong>
            </div>
            <div>
              <span>Fee amount</span>
              <strong>{formatCurrency(feeAmount)}</strong>
            </div>
            <div>
              <span>Net profit</span>
              <strong>{formatCurrency(netProfit)}</strong>
            </div>
            <div>
              <span>Final balance</span>
              <strong>{formatCurrency(finalBalance)}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="content-grid">
        <article id="roadmap" className="panel">
          <span className="section-tag">Project roadmap</span>
          <h2>What this project can grow into</h2>
          <ul>
            {roadmap.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>
    </>
  );

  return (
    <main className="page-shell">
      <nav className="top-nav" aria-label="Main navigation">
        <button
          type="button"
          className={activeView === "home" ? "nav-button active" : "nav-button"}
          onClick={() => setActiveView("home")}
        >
          Home
        </button>
        <button
          type="button"
          className={activeView === "how" ? "nav-button active" : "nav-button"}
          onClick={() => setActiveView("how")}
        >
          How it works
        </button>
        <button
          type="button"
          className={activeView === "faq" ? "nav-button active" : "nav-button"}
          onClick={() => setActiveView("faq")}
        >
          FAQ
        </button>
        <button
          type="button"
          className={
            activeView === "services"
              ? "nav-button nav-button--services active"
              : "nav-button nav-button--services"
          }
          onClick={() => setActiveView("services")}
        >
          Services
        </button>
      </nav>

      {activeView === "home" && renderHome()}
      {activeView === "how" && <HowItWorks />}
      {activeView === "faq" && <FAQ />}
      {activeView === "services" && <Services />}
    </main>
  );
}
