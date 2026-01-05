"use client";

import React, { useState } from 'react';

export default function LoansManagement() {
    const [selectedId, setSelectedId] = useState('#L260102001');

    const loans = [
        { id: '#L260102001', borrower: 'John Doe', amount: '€4,250.00', status: 'Draft' },
        { id: '#L251215042', borrower: 'Sarah Smith', amount: '€120,000.00', status: 'Not due' },
        { id: '#L251210011', borrower: 'Ababa Co.', amount: '€45,000.00', status: 'Overdue' },
    ];

    const currentLoan = loans.find(l => l.id === selectedId) || loans[0];

    return (
        <div className="loans-portal">
            <header className="page-header">
                <h1>Loans</h1>
                <div className="breadcrumb">Admin » Loans » {selectedId}</div>
            </header>

            <div className="master-detail-layout">
                {/* Master List (Left) */}
                <aside className="master-list card">
                    <div className="list-search p-4">
                        <input type="text" placeholder="Search loans..." className="compact-search" />
                    </div>
                    <div className="list-items">
                        <div className="nav-section" style={{ color: 'var(--text-main)', opacity: 1, padding: '0.5rem 1.25rem' }}>Draft</div>
                        {loans.filter(l => l.status === 'Draft').map(loan => (
                            <div
                                key={loan.id}
                                className={`list-item ${selectedId === loan.id ? 'active' : ''}`}
                                onClick={() => setSelectedId(loan.id)}
                            >
                                <div className="item-name">{loan.borrower}</div>
                                <div className="item-meta">{loan.id} • {loan.amount}</div>
                            </div>
                        ))}
                        <div className="nav-section" style={{ color: 'var(--text-main)', opacity: 1, padding: '0.5rem 1.25rem' }}>Not due</div>
                        {loans.filter(l => l.status === 'Not due').map(loan => (
                            <div
                                key={loan.id}
                                className={`list-item ${selectedId === loan.id ? 'active' : ''}`}
                                onClick={() => setSelectedId(loan.id)}
                            >
                                <div className="item-name">{loan.borrower}</div>
                                <div className="item-meta">{loan.id} • {loan.amount}</div>
                            </div>
                        ))}
                    </div>
                </aside>

                {/* Detail View (Right) */}
                <main className="detail-view">
                    <div className="detail-header">
                        <div className="loan-summary">
                            <h2>Loan {currentLoan.id}</h2>
                            <span className={`badge ${currentLoan.status === 'Draft' ? 'info' : currentLoan.status === 'Overdue' ? 'error' : 'success'}`}>
                                {currentLoan.status}
                            </span>
                        </div>
                        <div className="header-actions">
                            <button className="btn-secondary danger">Cancel loan</button>
                            <button className="btn-primary">Sign draft</button>
                            <button className="btn-secondary">Change phase</button>
                        </div>
                    </div>

                    <nav className="detail-tabs">
                        <button className="tab active">Draft</button>
                        <button className="tab">Applications</button>
                        <button className="tab">Communication</button>
                    </nav>

                    <div className="detail-content-grid" style={{ marginTop: '1.5rem' }}>
                        {/* Loan Details Card */}
                        <section className="card detail-card">
                            <div className="card-header">
                                <h3>Loan details</h3>
                                <button className="edit-btn">Edit</button>
                            </div>
                            <div className="data-grid">
                                <div className="data-item"><label>Credit limit</label><span>{currentLoan.amount}</span></div>
                                <div className="data-item"><label>Product</label><span>Personal housing finance</span></div>
                                <div className="data-item"><label>Interest rate</label><span>10.00%</span></div>
                                <div className="data-item"><label>Interest type</label><span>Flat</span></div>
                                <div className="data-item"><label>Schedule type</label><span>Instalment</span></div>
                                <div className="data-item"><label>Duration</label><span>12 months</span></div>
                            </div>
                        </section>

                        {/* Involved Parties */}
                        <section className="card detail-card">
                            <div className="card-header">
                                <h3>Parties</h3>
                                <button className="edit-btn">Add investor</button>
                            </div>
                            <div className="parties-list">
                                <div className="party-row">
                                    <span className="role-tag">Borrower</span>
                                    <span className="party-name">{currentLoan.borrower}</span>
                                </div>
                            </div>
                        </section>

                        {/* Signables */}
                        <section className="card detail-card full-width">
                            <div className="card-header">
                                <h3>Signables</h3>
                            </div>
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Type</th>
                                        <th>Required</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Loan agreement</td>
                                        <td>PDF</td>
                                        <td>Yes</td>
                                        <td><span className="badge-tiny incomplete">Pending</span></td>
                                        <td><button className="view-link">View</button></td>
                                    </tr>
                                    <tr>
                                        <td>Repayment schedule</td>
                                        <td>PDF</td>
                                        <td>Yes</td>
                                        <td><span className="badge-tiny incomplete">Pending</span></td>
                                        <td><button className="view-link">View</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>
                    </div>
                </main>
            </div>

            <style jsx global>{`
        .loans-portal { display: flex; flex-direction: column; gap: 1rem; }
        .full-width { grid-column: span 2; }
        
        .role-tag {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          background: var(--bg-main);
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          margin-right: 0.75rem;
        }

        .party-name {
          font-weight: 600;
          font-size: 0.9rem;
        }

        @media (max-width: 1100px) {
          .full-width { grid-column: auto; }
        }
      `}</style>
        </div>
    );
}
