export default function Services() {
  return (
    <section className="services-container">
      <div className="info-header">
        <span className="section-tag">Services</span>
        <h2>Professional services</h2>
      </div>

      <div className="info-copy">
        <h3>Smart Contract Audit</h3>
        <p>
          Analysis, testing, and vulnerability detection for Solidity / EVM-based
          smart contracts. Security review, logical error detection, optimization,
          and best practice recommendations.
        </p>

        <h3>Application Development</h3>
        <p>
          Development of web applications, API services, automation tools, and
          crypto utilities. Experience with JavaScript / TypeScript, C#, Python,
          SQL, and cloud technologies.
        </p>

        <h3>Contact</h3>
        <a
          href="https://www.linkedin.com/in/svet-svet-3715a9230/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-icon"
          aria-label="Visit Svetoslav on LinkedIn"
        >
          <img src="/linkedin.svg" alt="LinkedIn" width="40" height="40" />
        </a>
      </div>
    </section>
  );
}
