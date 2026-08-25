export default function HowItWorks() {
  return (
    <section className="info-page">
      <div className="info-header">
        <span className="section-tag">How it works</span>
        <h2>Simple, transparent profit forecasting</h2>
      </div>

      <div className="info-copy">
        <p>
          Lucky Profit Calculator helps you estimate how capital grows over time when you
          combine expected return, fee impact, and overall investment duration. It is designed
          to be easy to understand and easy to reuse for early product planning.
        </p>

        <ol>
          <li>Enter the initial capital you want to model.</li>
          <li>Set the expected annual percentage yield (APY).</li>
          <li>Choose the time period in months.</li>
          <li>Add the platform fee percentage.</li>
          <li>Review the projected net profit and final balance.</li>
        </ol>

        <p>
          The formula is intentionally straightforward so users can quickly understand the
          economics behind the idea without a complicated finance dashboard. It works well for
          crypto, reward programs, speculative product concepts, and early-stage business planning.
        </p>
      </div>
    </section>
  );
}
