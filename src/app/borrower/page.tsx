"use client";

import React from 'react';

export default function BorrowerDashboard() {
    const accountStats = [
        { label: 'Available Credit', value: '€2,500.00', trend: 'Limit: €5,000.00' },
        { label: 'Total Outstanding', value: '€4,250.00', trend: '1 active loan' },
        { label: 'Next Payment Due', value: '€320.00', trend: 'Due: Jan 15, 2026' },
    ];

    const recentApps = [
        { id: '#202601025', type: 'Personal housing finance', date: 'Jan 02, 2026', applicant: 'John Doe', status: 'Incomplete' },
        { id: '#202512151', type: 'Mortgage loan', date: 'Dec 15, 2025', applicant: 'John Doe', status: 'Approved' },
    ];

    return (
        <div className="borrower-dashboard-v2">
            <header className="page-header">
                <h1>My Dashboard</h1>
                <div className="breadcrumb">Borrower » Home</div>
            </header>

            <div className="stats-cards-grid">
                {accountStats.map((stat, i) => (
                    <div key={i} className="card stat-card-compact">
                        <div className="stat-label">{stat.label}</div>
                        <div className="stat-value">{stat.value}</div>
                        <div className="stat-subtext">{stat.trend}</div>
                    </div>
                ))}
            </div>

            <section className="dashboard-section" style={{ marginTop: '2rem' }}>
                <div className="section-header">
                    <h2>Recent Applications</h2>
                    <a href="/borrower/apply" className="btn-primary small">New Application</a>
                </div>
                <div className="card table-card">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>App ID</th>
                                <th>Product Type</th>
                                <th>Date Applied</th>
                                <th>Applicant</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentApps.map(app => (
                                <tr key={app.id}>
                                    <td><span className="bold">{app.id}</span></td>
                                    <td>{app.type}</td>
                                    <td>{app.date}</td>
                                    <td>{app.applicant}</td>
                                    <td>
                                        <span className={`badge ${app.status === 'Incomplete' ? 'warning' : 'success'}`}>
                                            {app.status}
                                        </span>
                                    </td>
                                    <td>
                                        <a href="#" className="view-link">View Details</a>
                                    </td>
                                </tr>
              </tbody>
                    </table>
                </div>
            </section>

            <style jsx global>{`
        .borrower-dashboard-v2 {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .stats-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.25rem;
        }

        .stat-card-compact {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding: 1.25rem;
        }

        .stat-card-compact .stat-label {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .stat-card-compact .stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--accent);
        }

        .stat-card-compact .stat-subtext {
          font-size: 0.75rem;
          color: var(--text-muted);
          opacity: 0.8;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }

        .view-link {
          font-size: 0.8rem;
          color: var(--accent);
          font-weight: 600;
          text-decoration: none;
        }

        .view-link:hover {
          text-decoration: underline;
        }
      `}</style>
        </div>
    );
}
