"use client";

export default function UnderwritingPortal() {
    const pendingApps = [
        { id: 'APP-1035', borrower: 'Samuel Bekele', type: 'Mortgage', amount: '$120,000.00', date: 'Jan 04, 2026', risk: 'Low' },
        { id: 'APP-1032', borrower: 'Ababa Co.', type: 'Business', amount: '$45,000.00', date: 'Jan 03, 2026', risk: 'Medium' },
        { id: 'APP-1029', borrower: 'John Doe', type: 'Personal', amount: '$5,000.00', date: 'Jan 02, 2026', risk: 'Low' },
    ];

    return (
        <div className="underwriting-container">
            <header className="page-header">
                <h1>Underwriting & Applications</h1>
                <p>Review and process pending loan applications.</p>
            </header>

            <section className="dashboard-section">
                <div className="section-header">
                    <h2>Pending Review</h2>
                    <span className="badge info">{pendingApps.length} Applications</span>
                </div>
                <div className="card table-card">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>App ID</th>
                                <th>Borrower</th>
                                <th>Type</th>
                                <th>Desired Amount</th>
                                <th>Risk Insight</th>
                                <th>Applied Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pendingApps.map(app => (
                                <tr key={app.id}>
                                    <td><span className="bold">{app.id}</span></td>
                                    <td>{app.borrower}</td>
                                    <td>{app.type}</td>
                                    <td><span className="bold">{app.amount}</span></td>
                                    <td>
                                        <span className={`badge ${app.risk === 'Low' ? 'success' : 'warning'}`}>
                                            {app.risk} Risk
                                        </span>
                                    </td>
                                    <td>{app.date}</td>
                                    <td className="flex gap-2">
                                        <button className="btn-action approve">✓ Approve</button>
                                        <button className="btn-action reject">✕ Reject</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="dashboard-section" style={{ marginTop: '2rem' }}>
                <h2>Underwriting Guidelines</h2>
                <div className="card" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                    <div className="guideline-item">
                        <h4>KYC/KYB Verification</h4>
                        <p className="small">Ensure Government ID and Business Registry match exactly.</p>
                    </div>
                    <div className="guideline-item">
                        <h4>Bank Statements</h4>
                        <p className="small">Analyze last 6 months revenue for business loans.</p>
                    </div>
                    <div className="guideline-item">
                        <h4>Collateral Valuation</h4>
                        <p className="small">Mortgage collateral must be verified by registered valuers.</p>
                    </div>
                </div>
            </section>

            <style jsx global>{`
        .underwriting-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .btn-action {
          padding: 0.4rem 0.8rem;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 700;
          transition: all 0.2s;
        }

        .btn-action.approve {
          background-color: var(--primary-light);
          color: var(--primary);
        }

        .btn-action.approve:hover {
          background-color: var(--primary);
          color: white;
        }

        .btn-action.reject {
          background-color: #FEE2E2;
          color: #991B1B;
        }

        .btn-action.reject:hover {
          background-color: #EF4444;
          color: white;
        }

        .guideline-item h4 {
          font-size: 0.9rem;
          margin-bottom: 0.4rem;
          color: var(--text-main);
        }

        .small {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
      `}</style>
        </div>
    );
}
