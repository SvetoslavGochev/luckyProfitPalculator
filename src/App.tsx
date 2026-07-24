import { useState } from "react";
import { calculateProjection, parseNonNegativeNumber } from "./lib/calculator";

const helperTools = [
  {
    name: "Playwright",
    description:
      "Browser automation and end-to-end checks for calculator flows and future UI tests.",
  },
  {
    name: "Hardhat",
    description:
      "Smart-contract work, deploy scripts, and local chain validation when the project grows into on-chain tooling.",
  },
  {
    name: "dotenv",
    description:
      "Local secret handling for API keys, RPC URLs, and deployment values.",
  },
  {
    name: "ESLint",
    description: "Keeps the codebase consistent and catches mistakes early.",
  },
  {
    name: "Prettier",
    description:
      "Formatting so the project stays readable with less manual cleanup.",
  },
  {
    name: "GitHub Pages",
    description:
      "A simple deployment path for a static marketing site or a calculator landing page.",
  },
];

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

  const { grossProfit, feeAmount, netProfit, finalBalance, annualizedReturn } =
    calculateProjection({
      principal,
      apy,
      months,
      platformFee,
    });

  return (
    <main className="page-shell">
      <section className="hero-card">
        <div className="hero-copy">
          <span className="eyebrow">Lucky Profit Calculator</span>
          <h1>
            Profit planning for small crypto projects, token services, and
            future automation.
          </h1>
          <p className="lede">
            A clean starting point for the calculator idea from the notes, with
            room for token vesting, locking, and smart-contract workflows later.
          </p>

          <div className="hero-actions">
            <a href="#calculator" className="button button-primary">
              Open Calculator
            </a>
            <a href="#roadmap" className="button button-ghost">
              View Roadmap
            </a>
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

        <article className="panel">
          <span className="section-tag">Helper tools</span>
          <h2>Tools that help both of us move faster</h2>
          <div className="tool-list">
            {helperTools.map((tool) => (
              <div key={tool.name} className="tool-item">
                <strong>{tool.name}</strong>
                <p>{tool.description}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="footer-note">
        <p>
          Next improvement: connect this calculator to real scenarios, such as
          vesting, locking, or vault earnings, and wire in Playwright checks
          once the UX settles.
        </p>
      </section>
    </main>
  );
}
