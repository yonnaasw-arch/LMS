"use client";

export default function AdminDashboard() {
  const metrics = [
    { label: 'Total Issued Loan Value', value: '$840,250.00', trend: '+12% from last month', color: 'primary' },
    { label: 'Outstanding Principal', value: '$562,400.00', trend: 'Active Portfolio', color: 'info' },
    { label: 'Overdue Exposure', value: '$24,150.00', trend: '4.2% Risk Rate', color: 'error' },
    { label: 'Monthly Cash Inflow', value: '$48,200.00', trend: 'Jan 2026', color: 'success' },
  ];

  const recentAlerts = [
    { type: 'Overdue', message: 'Loan LN-7721 (Mercy K.) is 5 days overdue.', date: '2h ago' },
    { type: 'Application', message: 'New Mortgage application from Solomon T.', date: '4h ago' },
    { type: 'Reconciliation', message: 'Daily bank batch (15 transactions) processed.', date: '1d ago' },
  ];

  return (
    <div className="admin-container">
      <header className="page-header">
        <h1>Operations Dashboard</h1>
        <p>Real-time visibility into lending operations and financial health.</p>
      </header>

      <div className="metrics-grid">
        {metrics.map(metric => (
          <div key={metric.label} className="card stat-card">
            <span className="stat-label">{metric.label}</span>
            <span className={`stat-value color-${metric.color}`}>{metric.value}</span>
            <span className="stat-trend">{metric.trend}</span>
          </div>
        ))}
      </div>

      <div className="admin-grid">
        <section className="dashboard-section main">
          <div className="section-header">
            <h2>Portfolio Distribution</h2>
          </div>
          <div className="card distribution-card">
            <div className="chart-placeholder">
              <div className="bar-group">
                <div className="label">Active</div>
                <div className="bar" style={{ width: '70%', background: 'var(--success)' }}>70%</div>
              </div>
              <div className="bar-group">
                <div className="label">Overdue</div>
                <div className="bar" style={{ width: '15%', background: 'var(--error)' }}>15%</div>
              </div>
              <div className="bar-group">
                <div className="label">Completed</div>
                <div className="bar" style={{ width: '10%', background: 'var(--info)' }}>10%</div>
              </div>
              <div className="bar-group">
                <div className="label">Cancelled</div>
                <div className="bar" style={{ width: '5%', background: 'var(--text-muted)' }}>5%</div>
              </div>
            </div>
          </div>
        </section>

        <aside className="dashboard-section secondary">
          <div className="section-header">
            <h2>Risk Alerts</h2>
          </div>
          <div className="card alerts-card">
            <div className="alerts-list">
              {recentAlerts.map((alert, i) => (
                <div key={i} className="alert-item">
                  <span className={`alert-badge ${alert.type.toLowerCase()}`}>{alert.type}</span>
                  <div className="alert-content">
                    <p className="alert-msg">{alert.message}</p>
                    <span className="alert-date">{alert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <style jsx global>{`
        .admin-container {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
        }

        .stat-value.color-primary { color: var(--primary); }
        .stat-value.color-info { color: var(--info); }
        .stat-value.color-error { color: var(--error); }
        .stat-value.color-success { color: var(--success); }

        .admin-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 2rem;
        }

        .chart-placeholder {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .bar-group {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .bar-group .label {
          width: 80px;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .bar {
          height: 30px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          padding-left: 10px;
          color: white;
          font-size: 0.75rem;
          font-weight: 700;
        }

        .alerts-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .alert-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border);
        }

        .alert-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .alert-badge {
          font-size: 0.65rem;
          text-transform: uppercase;
          font-weight: 800;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          white-space: nowrap;
        }

        .alert-badge.overdue { background: #FEE2E2; color: #991B1B; }
        .alert-badge.application { background: #DBEAFE; color: #1E40AF; }
        .alert-badge.reconciliation { background: #D1FAE5; color: #065F46; }

        .alert-msg {
          font-size: 0.85rem;
          font-weight: 500;
          margin-bottom: 0.25rem;
        }

        .alert-date {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        @media (max-width: 1000px) {
          .admin-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
