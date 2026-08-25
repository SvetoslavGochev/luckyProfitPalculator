const faqs = [
  {
    question: "What is Lucky Profit Calculator used for?",
    answer:
      "It is a lightweight profit and ROI calculator designed for early-stage crypto, token, staking, and investment ideas. It helps estimate projected value, fee impact, and net return before a product is launched.",
  },
  {
    question: "Who should use it?",
    answer:
      "It is useful for founders, operators, community builders, and product teams who want to model the economics of a new offering without building a full financial dashboard from scratch.",
  },
  {
    question: "How does the calculator work?",
    answer:
      "You enter the initial capital, expected APY, time horizon, and fee percentage. The calculator then estimates gross profit, platform fee, net profit, and the projected balance at the end of the period.",
  },
  {
    question: "Is it useful for crypto and investment planning?",
    answer:
      "Yes. The model is intentionally simple and transparent, which makes it helpful for planning product economics, launch assumptions, and earnings scenarios in crypto, DeFi, and investment-related projects.",
  },
  {
    question: "Can this be expanded later?",
    answer:
      "Yes. This is a strong foundation for future growth, including token vesting, multi-tier rewards, smart-contract logic, portfolio comparisons, and richer analytics dashboards.",
  },
];

export default function FAQ() {
  return (
    <section className="info-page">
      <div className="info-header">
        <span className="section-tag">FAQ</span>
        <h2>Frequently asked questions</h2>
      </div>

      <div className="faq-list">
        {faqs.map((item) => (
          <article key={item.question} className="faq-item">
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
