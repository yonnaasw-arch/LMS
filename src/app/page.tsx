"use client";

export default function Home() {
  return (
    <div className="home-dashboard-premium">
      <section className="welcome-hero card">
        <div className="hero-content">
          <h1>Welcome to Lendfusion LMS</h1>
          <p>The enterprise-grade platform for end-to-end digital lending operations.</p>
          <div className="hero-actions">
            <a href="/login" className="btn-primary lg">Enter Portal Demo</a>
            <a href="https://github.com/yonnaasw-arch/LMS" target="_blank" className="btn-secondary lg">Documentation</a>
          </div>
        </div>
      </section>

      <div className="product-highlights">
        <div className="card highlight-card">
          <div className="icon">🏠</div>
          <h3>Mortgage</h3>
          <p>Automated origination and lifecycle management for secured real estate loans.</p>
        </div>
        <div className="card highlight-card">
          <div className="icon">👤</div>
          <h3>Personal Loans</h3>
          <p>Swift unsecured lending with integrated KYC/KYB and automated decisioning.</p>
        </div>
        <div className="card highlight-card">
          <div className="icon">🚀</div>
          <h3>Business SME</h3>
          <p>Scalable financing solutions with revenue-based tracking and flexible repayment.</p>
        </div>
      </div>

      <style jsx global>{`
        .home-dashboard-premium {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .welcome-hero {
          background: linear-gradient(135deg, white 0%, var(--bg-main) 100%);
          padding: 4rem 3rem;
          border-left: 6px solid var(--accent);
          display: flex;
          align-items: center;
        }

        .hero-content h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: var(--primary);
        }

        .hero-content p {
          font-size: 1.1rem;
          max-width: 600px;
          margin-bottom: 2rem;
        }

        .hero-actions {
          display: flex;
          gap: 1.25rem;
        }

        .btn-primary.lg, .btn-secondary.lg {
          padding: 1rem 2rem;
          font-size: 1rem;
        }

        .product-highlights {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .highlight-card {
          text-align: center;
          padding: 3rem 2rem;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: default;
        }

        .highlight-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-md);
        }

        .highlight-card .icon {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
        }

        .highlight-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--accent);
        }

        .highlight-card p {
          font-size: 0.95rem;
          color: var(--text-muted);
        }
      `}</style>
    </div>
  );
}
