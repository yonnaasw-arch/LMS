"use client";

export default function RepaymentHistory() {
  const transactions = [
    { id: 'TX-5501', date: 'Jan 02, 2026', amount: '$320.00', method: 'Virtual Account Transfer', status: 'Reconciled' },
    { id: 'TX-5482', date: 'Dec 15, 2025', amount: '$320.00', method: 'Virtual Account Transfer', status: 'Reconciled' },
    { id: 'TX-5421', date: 'Dec 01, 2025', amount: '$500.00', method: 'Manual Deposit', status: 'Pending Review' },
  ];

  return (
    <div className="payments-container">
      <header className="page-header">
        <h1>My Repayments</h1>
        <p>View your payment history and find your Virtual Account details below.</p>
      </header>

      <div className="va-info card">
        <div className="va-header">
          <div className="va-icon">🏦</div>
          <div>
            <h3>Your Unique Virtual Account</h3>
            <p>Use this account for all repayments to ensure automated reconciliation.</p>
          </div>
        </div>
        <div className="va-details">
          <div className="va-field">
            <span className="label">Bank Name</span>
            <span className="value">Commercial Bank of Ethiopia</span>
          </div>
          <div className="va-field">
            <span className="label">Account Number</span>
            <span className="value highlight">VA-990-221-778</span>
          </div>
          <div className="va-field">
            <span className="label">Account Name</span>
            <span className="value">LMS - John Doe</span>
          </div>
        </div>
      </div>

      <section className="transactions-section">
        <h2>Transaction History</h2>
        <div className="card table-card">
          <table className="data-table">
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Payment Method</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(tx => (
                <tr key={tx.id}>
                  <td><span className="bold">{tx.id}</span></td>
                  <td>{tx.date}</td>
                  <td><span className="bold">{tx.amount}</span></td>
                  <td>{tx.method}</td>
                  <td>
                    <span className={`badge ${tx.status === 'Reconciled' ? 'success' : 'info'}`}>
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <style jsx global>{`
        .payments-container {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .va-info {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
          color: white;
          padding: 2.5rem;
          border: none;
        }

        .va-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding-bottom: 1.5rem;
        }

        .va-icon {
          font-size: 2rem;
          background: rgba(255, 255, 255, 0.2);
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-md);
        }

        .va-info h3 {
          color: white;
          margin-bottom: 0.25rem;
        }

        .va-info p {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
        }

        .va-details {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }

        .va-field {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .va-field .label {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1rem;
          opacity: 0.7;
        }

        .va-field .value {
          font-size: 1.1rem;
          font-weight: 700;
        }

        .va-field .value.highlight {
          font-size: 1.5rem;
          font-family: 'Courier New', monospace;
          letter-spacing: 1px;
        }

        .transactions-section h2 {
          margin-bottom: 1rem;
        }

        @media (max-width: 600px) {
          .va-details {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
