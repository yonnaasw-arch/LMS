"use client";

export default function BorrowerDashboard() {
    const activeLoans = [
        { id: 'LN-8821', type: 'Personal Loan', balance: '$4,250.00', status: 'Active', nextPayment: 'Jan 15, 2026' }
    ];

    const recentApps = [
        { id: 'APP-1029', type: 'Personal', amount: '$5,000.00', date: 'Jan 02, 2026', status: 'In Review' },
        { id: 'APP-0982', type: 'Mortgage', amount: '$120,000.00', date: 'Dec 15, 2025', status: 'Approved' },
    ];

    return (
        <div className="dashboard-container">
            <header className="page-header">
                <h1>My Dashboard</h1>
                <p>Track your active loans and pending applications.</p>
            </header>

            <div className="stats-grid">
                <div className="card stat-card">
                    <span className="stat-label">Total Outstanding</span>
                    <span className="stat-value">$4,250.00</span>
                    <span className="stat-trend negative">Next payment in 10 days</span>
                </div>
                <div className="card stat-card">
                    <span className="stat-label">Available Credit</span>
                    <span className="stat-value">$750.00</span>
                    <span className="stat-trend positive">Credit Limit: $5,000.00</span>
                </div>
                <div className="card stat-card">
                    <span className="stat-label">Next Payment Due</span>
                    <span className="stat-value">$320.00</span>
                    <span className="stat-trend">Due Date: Jan 15</span>
                </div>
            </div>

            <div className="dashboard-grid">
                <section className="dashboard-section">
                    <div className="section-header">
                        <h2>Active Loans</h2>
                    </div>
                    <div className="card table-card">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Loan ID</th>
                                    <th>Loan Type</th>
                                    <th>Balance</th>
                                    <th>Status</th>
                                    <th>Next Payment</th>
                                </tr>
                            </thead>
                            <tbody>
                                {activeLoans.map(loan => (
                                    <tr key={loan.id}>
                                        <td><span className="bold">{loan.id}</span></td>
                                        <td>{loan.type}</td>
                                        <td><span className="bold">{loan.balance}</span></td>
                                        <td><span className="badge success">{loan.status}</span></td>
                                        <td>{loan.nextPayment}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="dashboard-section">
                    <div className="section-header">
                        <h2>Recent Applications</h2>
                        <button className="btn-primary small">New Application</button>
                    </div>
                    <div className="card table-card">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>App ID</th>
                                    <th>Type</th>
                                    <th>Amount</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentApps.map(app => (
                                    <tr key={app.id}>
                                        <td><span className="bold">{app.id}</span></td>
                                        <td>{app.type}</td>
                                        <td><span className="bold">{app.amount}</span></td>
                                        <td>{app.date}</td>
                                        <td>
                                            <span className={`badge ${app.status === 'In Review' ? 'warning' : 'success'}`}>
                                                {app.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="p-4 text-center">
                            <a href="#" className="view-all">View All Applications</a>
                        </div>
                    </div>
                </section>
            </div>

            <style jsx global>{`
                .dashboard-container {
                    display: flex;
                    flex-direction: column;
                    gap: 2.5rem;
                }

                .page-header h1 {
                    margin-bottom: 0.5rem;
                }

                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 1.5rem;
                }

                .stat-card {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .stat-label {
                    font-size: 0.85rem;
                    color: var(--text-muted);
                    font-weight: 500;
                }

                .stat-value {
                    font-size: 1.75rem;
                    font-weight: 700;
                    color: var(--primary);
                }

                .stat-trend {
                    font-size: 0.8rem;
                    font-weight: 500;
                }

                .stat-trend.positive { color: var(--success); }
                .stat-trend.negative { color: var(--error); }

                .dashboard-grid {
                    display: flex;
                    flex-direction: column;
                    gap: 3rem;
                }

                .section-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1.5rem;
                }

                .btn-primary.small {
                    padding: 0.5rem 1rem;
                    font-size: 0.8rem;
                }

                .view-all {
                    font-size: 0.85rem;
                    color: var(--primary);
                    font-weight: 600;
                    text-decoration: underline;
                }

                .text-center { text-align: center; }
            `}</style>
        </div>
    );
}
