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

      <div className="product-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        marginTop: '2rem'
      }}>
        <div className="product-card card">
          <h3>Mortgage Loans</h3>
          <p>Long-term financing secured by real estate assets.</p>
          <ul style={{ marginTop: '1rem', listStyle: 'none', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            <li>✓ Secured by real estate</li>
            <li>✓ Long-term repayment</li>
            <li>✓ Competitive rates</li>
          </ul>
        </div>

        <div className="product-card card">
          <h3>Personal Loans</h3>
          <p>Unsecured short-to-medium term loans for individuals.</p>
          <ul style={{ marginTop: '1rem', listStyle: 'none', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            <li>✓ No collateral required</li>
            <li>✓ Guaranteed by third-party</li>
            <li>✓ Fast approval process</li>
          </ul>
        </div>

        <div className="product-card card">
          <h3>Business Loans</h3>
          <p>Revenue-based lending for merchants and SMEs.</p>
          <ul style={{ marginTop: '1rem', listStyle: 'none', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            <li>✓ Cash-flow analysis</li>
            <li>✓ Flexible repayment</li>
            <li>✓ SME focused</li>
          </ul>
        </div>
      </div>

    </div>
  );
}
