"use client";

import React, { useState } from 'react';

export default function UnderwritingPortal() {
    const [selectedId, setSelectedId] = useState('#202601025');

    const applications = [
        { id: '#202601025', type: 'Personal housing finance', date: 'Jan 02, 2026', name: 'John Doe', status: 'Incomplete' },
        { id: '#202512151', type: 'Mortgage loan', date: 'Dec 15, 2025', name: 'Sarah Smith', status: 'Approved' },
        { id: '#202512101', type: 'Business expansion', date: 'Dec 10, 2025', name: 'Ababa Co.', status: 'Review' },
    ];

    const currentApp = applications.find(a => a.id === selectedId) || applications[0];

    return (
        <div className="underwriting-portal-v2">
            <header className="page-header">
                <h1>Applications</h1>
                <div className="breadcrumb">Admin » Applications » {selectedId}</div>
            </header>

            <div className="master-detail-layout">
                {/* Master List (Left) */}
                <aside className="master-list card">
                    <div className="list-header">
                        <h3>Recent Applications</h3>
                    </div>
                    <div className="list-items">
                        {applications.map(app => (
                            <div
                                key={app.id}
                                className={`list-item ${selectedId === app.id ? 'active' : ''}`}
                                onClick={() => setSelectedId(app.id)}
                            >
                                <div className="item-main">
                                    <span className="item-id">{app.id}</span>
                                    <span className={`badge-tiny ${app.status.toLowerCase()}`}>{app.status}</span>
                                </div>
                                <div className="item-sub">{app.type}</div>
                                <div className="item-meta">{app.date} • {app.name}</div>
                            </div>
                        ))}
                    </div>
                </aside>

                {/* Detail View (Right) */}
                <main className="detail-view">
                    <div className="detail-header">
                        <div className="app-summary">
                            <h2>Application {currentApp.id}</h2>
                            <span className={`badge ${currentApp.status === 'Incomplete' ? 'warning' : 'success'}`}>
                                {currentApp.status}
                            </span>
                        </div>
                        <div className="header-actions">
                            <button className="btn-secondary danger">Cancel</button>
                            <button className="btn-primary">Approve</button>
                        </div>
                    </div>

                    <nav className="detail-tabs">
                        <button className="tab active">Overview</button>
                        <button className="tab">Communication</button>
                        <button className="tab">Documents</button>
                        <button className="tab">History</button>
                    </nav>

                    <div className="detail-content-grid">
                        {/* Finance Details */}
                        <section className="card detail-card">
                            <div className="card-header">
                                <h3>Finance details</h3>
                                <button className="edit-btn">Edit</button>
                            </div>
                            <div className="data-grid">
                                <div className="data-item"><label>Loan Amount</label><span>€4,250.00</span></div>
                                <div className="data-item"><label>Product Type</label><span>{currentApp.type}</span></div>
                                <div className="data-item"><label>Interest Rate</label><span>2.00%</span></div>
                                <div className="data-item"><label>Frequency</label><span>Monthly</span></div>
                            </div>
                        </section>

                        {/* Personal Details */}
                        <section className="card detail-card">
                            <div className="card-header">
                                <h3>Personal details</h3>
                                <button className="edit-btn">Edit</button>
                            </div>
                            <div className="data-grid">
                                <div className="data-item"><label>Full Name</label><span>{currentApp.name}</span></div>
                                <div className="data-item"><label>Birth Date</label><span>May 12, 1988</span></div>
                                <div className="data-item"><label>Email</label><span>john.doe@example.com</span></div>
                                <div className="data-item"><label>Phone</label><span>+251 911 223344</span></div>
                            </div>
                        </section>

                        {/* Address Details */}
                        <section className="card detail-card">
                            <div className="card-header">
                                <h3>Address details</h3>
                                <button className="edit-btn">Edit</button>
                            </div>
                            <div className="data-grid full">
                                <div className="data-item flex-col">
                                    <label>Residential Address</label>
                                    <span>Bole Subcity, Kebele 03, House #1234, Addis Ababa, Ethiopia</span>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>

            <style jsx global>{`
        .underwriting-portal-v2 { display: flex; flex-direction: column; height: 100%; gap: 1rem; }
        
        .master-detail-layout {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 1.5rem;
          height: calc(100vh - 200px);
        }

        .master-list { padding: 0; overflow-y: auto; display: flex; flex-direction: column; }
        .list-header { padding: 1.25rem; border-bottom: 1px solid var(--border); }
        .list-items { flex: 1; }
        
        .list-item {
          padding: 1.25rem;
          border-bottom: 1px solid var(--border);
          cursor: pointer;
          transition: background 0.2s;
        }
        .list-item:hover { background: var(--bg-main); }
        .list-item.active { background: #EBF4FF; border-left: 4px solid var(--accent); }

        .item-main { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem; }
        .item-id { font-weight: 700; font-size: 0.9rem; color: var(--accent); }
        .badge-tiny { font-size: 0.65rem; padding: 0.1rem 0.4rem; border-radius: 4px; text-transform: uppercase; font-weight: 800; }
        .badge-tiny.incomplete { background: #FEF3C7; color: #92400E; }
        .badge-tiny.approved { background: #D1FAE5; color: #065F46; }

        .item-sub { font-size: 0.8rem; font-weight: 600; margin-bottom: 0.25rem; }
        .item-meta { font-size: 0.75rem; color: var(--text-muted); }

        .detail-view { display: flex; flex-direction: column; gap: 1.5rem; overflow-y: auto; padding-right: 0.5rem; }
        
        .detail-header { display: flex; justify-content: space-between; align-items: flex-end; }
        .app-summary { display: flex; align-items: center; gap: 1rem; }
        
        .btn-secondary.danger { color: var(--error); border-color: var(--error); }
        .btn-secondary.danger:hover { background: #FEE2E2; }

        .detail-tabs { display: flex; gap: 2rem; border-bottom: 2px solid var(--border); margin-top: 1rem; }
        .tab { padding: 0.75rem 0.5rem; font-size: 0.9rem; font-weight: 600; color: var(--text-muted); position: relative; }
        .tab.active { color: var(--accent); }
        .tab.active::after { content: ''; position: absolute; bottom: -2px; left: 0; width: 100%; height: 2px; background: var(--accent); }

        .detail-content-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
        .detail-card { margin-bottom: 0px; }
        .card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem; }
        .card-header h3 { font-size: 0.95rem; font-weight: 700; color: var(--text-main); }
        .edit-btn { font-size: 0.75rem; font-weight: 700; color: var(--accent); text-transform: uppercase; }

        .data-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem 1.5rem; }
        .data-grid.full { grid-template-columns: 1fr; }
        .data-item label { display: block; font-size: 0.75rem; color: var(--text-muted); font-weight: 500; margin-bottom: 0.25rem; }
        .data-item span { font-size: 0.9rem; font-weight: 600; color: var(--text-main); }

        @media (max-width: 1100px) {
          .master-detail-layout { grid-template-columns: 1fr; height: auto; }
          .master-list { display: none; } /* Hide list on mobile for simplicity in demo */
        }
      `}</style>
        </div>
    );
}
