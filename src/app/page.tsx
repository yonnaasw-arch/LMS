"use client";

export default function Home() {
  return (
    <div className="home-dashboard">
      <section className="welcome-banner card">
        <h1>Welcome to LMS Portal</h1>
        <p>Enterprise-grade modular platform for Mortgage, Personal, and Business loans.</p>
        <div className="flex gap-4" style={{ marginTop: '1.5rem' }}>
          <button className="btn-primary">View Applications</button>
          <button className="btn-secondary">New Loan Application</button>
        </div>
      </section>

      <div className="flex gap-4" style={{ marginTop: '2rem' }}>
        <div className="card product-card" style={{ flex: 1 }}>
          <span className="badge info">Product</span>
          <h3>Mortgage</h3>
          <p>Long-term secured lending for real estate acquisition.</p>
        </div>
        <div className="card product-card" style={{ flex: 1 }}>
          <span className="badge info">Product</span>
          <h3>Personal Loan</h3>
          <p>Unsecured credit for individuals based on credit profile.</p>
        </div>
        <div className="card product-card" style={{ flex: 1 }}>
          <span className="badge info">Product</span>
          <h3>Business Loan</h3>
          <p>Revenue-based financing for SME growth and operations.</p>
        </div>
      </div>

      <style jsx>{`
        .welcome-banner {
          background: linear-gradient(135deg, white 0%, var(--primary-light) 100%);
          padding: 3rem 2rem;
          border-left: 5px solid var(--primary);
        }
        .product-card {
          transition: transform 0.2s, box-shadow 0.2s;
          cursor: pointer;
        }
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
        }
        .product-card h3 {
          margin-top: 1rem;
        }
      `}</style>
    </div>
  );
}
