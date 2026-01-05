"use client";

import React, { useState } from 'react';

export default function PartyManagement() {
    const [selectedId, setSelectedId] = useState('PID-001');

    const parties = [
        { id: 'PID-001', name: 'John Doe', role: 'Borrower', email: 'john.doe@example.com', status: 'Active' },
        { id: 'PID-002', name: 'Sarah Smith', role: 'Guarantor', email: 'sarah.s@example.com', status: 'Verified' },
        { id: 'PID-003', name: 'InvestCorp Alpha', role: 'Investor', email: 'ops@investcorp.com', status: 'Active' },
        { id: 'PID-004', name: 'Mercy Kapoo', role: 'Borrower', email: 'mercy.k@example.com', status: 'Delinquent' },
    ];

    const currentParty = parties.find(p => p.id === selectedId) || parties[0];

    return (
        <div className="parties-portal-v2">
            <header className="page-header">
                <h1>Parties</h1>
                <div className="breadcrumb">Admin » Parties » {currentParty.name}</div>
            </header>

            <div className="master-detail-layout">
                {/* Master List (Left) */}
                <aside className="master-list card">
                    <div className="list-search p-4">
                        <input type="text" placeholder="Search parties..." className="compact-search" />
                    </div>
                    <div className="list-items">
                        {parties.map(party => (
                            <div
                                key={party.id}
                                className={`list-item ${selectedId === party.id ? 'active' : ''}`}
                                onClick={() => setSelectedId(party.id)}
                            >
                                <div className="item-name">{party.name}</div>
                                <div className="item-meta">{party.id} • {party.email}</div>
                            </div>
                        ))}
                    </div>
                </aside>

                {/* Detail View (Right) */}
                <main className="detail-view">
                    <div className="detail-header">
                        <div className="party-summary">
                            <h2>{currentParty.name}</h2>
                            <span className={`badge ${currentParty.status === 'Active' || currentParty.status === 'Verified' ? 'success' : 'error'}`}>
                                {currentParty.status}
                            </span>
                        </div>
                        <div className="header-actions">
                            <button className="btn-primary">Add Application</button>
                        </div>
                    </div>

                    <nav className="detail-tabs">
                        <button className="tab active">Overview</button>
                        <button className="tab">Details</button>
                        <button className="tab">Applications</button>
                        <button className="tab">Loans</button>
                        <button className="tab">Communication</button>
                    </nav>

                    <div className="detail-content-area">
                        {/* Financial Summary Cards */}
                        <div className="financial-cards-grid">
                            <div className="card financial-card">
                                <label>Total balance</label>
                                <div className="amount">€4,250.00</div>
                            </div>
                            <div className="card financial-card danger">
                                <label>Total due</label>
                                <div className="amount">€320.00</div>
                            </div>
                        </div>

                        <div className="detail-content-grid" style={{ marginTop: '1.5rem' }}>
                            {/* Profile Details */}
                            <section className="card detail-card">
                                <div className="card-header">
                                    <h3>{currentParty.role === 'Investor' ? 'Organisation details' : 'Personal details'}</h3>
                                    <button className="edit-btn">Edit</button>
                                </div>
                                <div className="data-grid">
                                    <div className="data-item"><label>Party ID</label><span>{currentParty.id}</span></div>
                                    <div className="data-item"><label>Role</label><span>{currentParty.role}</span></div>
                                    <div className="data-item"><label>Email</label><span>{currentParty.email}</span></div>
                                    <div className="data-item"><label>Phone</label><span>+251 911 223344</span></div>
                                </div>
                            </section>

                            {/* Latest Actions */}
                            <section className="card detail-card">
                                <div className="card-header">
                                    <h3>Latest actions</h3>
                                </div>
                                <div className="empty-state">
                                    <p>No actions yet for this party.</p>
                                </div>
                            </section>
                        </div>
                    </div>
                </main>
            </div>

            <style jsx global>{`
        .parties-portal-v2 { display: flex; flex-direction: column; gap: 1rem; }
        
        .compact-search {
          padding: 0.5rem 0.75rem;
          font-size: 0.8rem;
          background: var(--bg-main);
          border-radius: var(--radius-sm);
        }

        .item-name { font-weight: 700; font-size: 0.9rem; color: var(--text-main); margin-bottom: 0.1rem; }
        
        .financial-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .financial-card {
          padding: 1.5rem;
        }

        .financial-card label {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.05rem;
        }

        .financial-card .amount {
          font-size: 2rem;
          font-weight: 800;
          color: var(--accent);
          margin-top: 0.5rem;
        }

        .financial-card.danger .amount {
          color: var(--error);
        }

        .empty-state {
          padding: 2rem;
          text-align: center;
          color: var(--text-muted);
          font-size: 0.9rem;
          border: 1px dashed var(--border);
          border-radius: var(--radius-sm);
        }

        @media (max-width: 1100px) {
          .financial-cards-grid { grid-template-columns: 1fr; }
        }
      `}</style>
        </div>
    );
}
