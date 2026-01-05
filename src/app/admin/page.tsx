"use client";

import React from 'react';

export default function AdminDashboard() {
  const metrics = [
    { label: 'Pending applicants', value: '2', type: 'normal' },
    { label: 'Referred applicants', value: '1', type: 'normal' },
    { label: 'Unresolved tasks', value: '2', type: 'normal' },
    { label: 'Draft loans', value: '1', type: 'normal' },
    { label: 'Overdue loans', value: '16', type: 'danger' },
    { label: 'Total overdue sum', value: '€25,431,535.51', type: 'danger' },
    { label: 'Overdue by 90d+', value: '15 / €25,431,313.29', type: 'danger' },
    { label: 'Active loans', value: '21', type: 'info' },
    { label: 'Outstanding items', value: '23', type: 'info' },
    { label: 'Active sum', value: '€41,343,927.81', type: 'info' },
    { label: 'Total sum issued', value: '€45,618,927.81', type: 'info' },
  ];

  return (
    <div className="admin-dashboard-v2">
      <header className="page-header">
        <h1>Dashboard</h1>
        <div className="breadcrumb">Main » Dashboard</div>
      </header>

      {/* Metric Cards Grid */}
      <div className="metric-cards-container">
        {metrics.map((m, i) => (
          <div key={i} className={`metric-card ${m.type}`}>
            <div className="metric-label">{m.label}</div>
            <div className="metric-value">{m.value}</div>
          </div>
        ))}
      </div>

      <div className="dashboard-charts-grid">
        {/* Cashflow Chart Card */}
        <section className="chart-card">
          <div className="chart-header">
            <h3>Cashflow (last month)</h3>
            <button className="edit-icon">✎</button>
          </div>
          <div className="chart-content">
            <div className="mock-bar-chart">
              {/* Simplified mock bars to represent weeks */}
              {[60, 40, 80, 50, 90].map((h, i) => (
                <div key={i} className="bar-group">
                  <div className="bar inflow" style={{ height: `${h}%` }}></div>
                  <div className="bar outflow" style={{ height: `${h * 0.6}%` }}></div>
                </div>
              ))}
            </div>
            <div className="chart-legend">
              <span className="legend-item"><span className="dot inflow"></span> Inflow</span>
              <span className="legend-item"><span className="dot outflow"></span> Outflow</span>
            </div>
          </div>
        </section>

        {/* Applications Chart Card */}
        <section className="chart-card">
          <div className="chart-header">
            <h3>Applications (last month)</h3>
            <button className="edit-icon">✎</button>
          </div>
          <div className="chart-content">
            <div className="mock-stacked-chart">
              {[70, 45, 90, 65, 85].map((h, i) => (
                <div key={i} className="stacked-bar">
                  <div className="segment s1" style={{ height: '20%' }}></div>
                  <div className="segment s2" style={{ height: '30%' }}></div>
                  <div className="segment s3" style={{ height: '25%' }}></div>
                  <div className="segment s4" style={{ height: '15%' }}></div>
                  <div className="segment s5" style={{ height: '10%' }}></div>
                </div>
              ))}
            </div>
            <div className="chart-legend wrap">
              <span className="legend-item"><span className="dot s1"></span> New</span>
              <span className="legend-item"><span className="dot s2"></span> Returning</span>
              <span className="legend-item"><span className="dot s3"></span> Accepted</span>
              <span className="legend-item"><span className="dot s4"></span> Rejected</span>
              <span className="legend-item"><span className="dot s5"></span> Pending</span>
            </div>
          </div>
        </section>
      </div>

      <style jsx global>{`
        .admin-dashboard-v2 {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .breadcrumb {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: -0.25rem;
          margin-bottom: 1rem;
        }

        .metric-cards-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 1rem;
        }

        .metric-card {
          background: var(--bg-card);
          padding: 1rem;
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .metric-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: capitalize;
        }

        .metric-value {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--accent);
        }

        .metric-card.danger .metric-value {
          color: var(--error);
        }

        .dashboard-charts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 1.5rem;
          margin-top: 1rem;
        }

        .chart-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 1.5rem;
        }

        .chart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .chart-header h3 {
          font-size: 1rem;
          font-weight: 600;
        }

        .edit-icon {
          color: var(--text-muted);
          font-size: 0.9rem;
          opacity: 0.5;
        }

        .chart-content {
          height: 250px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .mock-bar-chart, .mock-stacked-chart {
          flex: 1;
          display: flex;
          align-items: flex-end;
          gap: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border);
        }

        .bar-group {
          flex: 1;
          display: flex;
          align-items: flex-end;
          gap: 4px;
          height: 100%;
        }

        .bar {
          flex: 1;
          border-radius: 2px 2px 0 0;
        }

        .bar.inflow { background: #3B82F6; }
        .bar.outflow { background: #A78BFA; }

        .stacked-bar {
          flex: 1;
          display: flex;
          flex-direction: column-reverse;
          height: 100%;
        }

        .segment { width: 100%; }
        .segment.s1 { background: #3B82F6; }
        .segment.s2 { background: #A78BFA; }
        .segment.s3 { background: #10B981; }
        .segment.s4 { background: #F87171; }
        .segment.s5 { background: #FBBF24; }

        .chart-legend {
          display: flex;
          gap: 1.5rem;
          padding-top: 1rem;
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .chart-legend.wrap { flex-wrap: wrap; gap: 1rem; }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .dot.inflow { background: #3B82F6; }
        .dot.outflow { background: #A78BFA; }
        .dot.s1 { background: #3B82F6; }
        .dot.s2 { background: #A78BFA; }
        .dot.s3 { background: #10B981; }
        .dot.s4 { background: #F87171; }
        .dot.s5 { background: #FBBF24; }

        @media (max-width: 600px) {
          .dashboard-charts-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
