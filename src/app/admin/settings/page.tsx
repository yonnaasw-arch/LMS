"use client";

import React from 'react';

export default function SettingsPortal() {
    const templates = [
        { title: 'Application document', type: 'docx_pdf', group: 'Application', context: 'Application' },
        { title: 'Day -1 notice email', type: 'email', group: 'Loan', context: 'Loan person' },
        { title: 'Day 1 notice email', type: 'email', group: 'Loan', context: 'Loan person' },
        { title: 'Day 3 overdue notice email', type: 'email', group: 'Loan', context: 'Loan person' },
        { title: 'Day 7 overdue notice email', type: 'email', group: 'Loan', context: 'Loan person' },
        { title: 'Loan agreement', type: 'docx_pdf', group: 'Loan', context: 'Loan person' },
        { title: 'OTP sms', type: 'sms', group: 'General', context: 'User' },
        { title: 'Repayment schedule', type: 'pdf', group: 'Loan', context: 'Loan person' },
    ];

    return (
        <div className="settings-portal">
            <header className="page-header">
                <div className="flex justify-between items-center">
                    <div>
                        <h1>Settings</h1>
                        <div className="breadcrumb">Admin » Settings » Templates</div>
                    </div>
                    <button className="btn-primary">+ Add new template</button>
                </div>
            </header>

            <nav className="detail-tabs" style={{ marginBottom: '1.5rem' }}>
                <button className="tab active">Templates</button>
                <button className="tab">Loan products</button>
                <button className="tab">Users</button>
                <button className="tab">Roles</button>
                <button className="tab">Configurations</button>
            </nav>

            <div className="card filter-bar flex gap-4 items-center" style={{ marginBottom: '1.5rem', padding: '1rem 1.5rem' }}>
                <div className="filter-group">
                    <label>Title</label>
                    <input type="text" placeholder="Filter by title..." />
                </div>
                <div className="filter-group">
                    <label>Type</label>
                    <select>
                        <option>All Types</option>
                        <option>docx_pdf</option>
                        <option>email</option>
                        <option>sms</option>
                    </select>
                </div>
                <div className="filter-group">
                    <label>Group</label>
                    <select>
                        <option>All Groups</option>
                        <option>Loan</option>
                        <option>Application</option>
                    </select>
                </div>
            </div>

            <section className="card table-card">
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Type</th>
                            <th>Group</th>
                            <th>Context</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {templates.map((t, i) => (
                            <tr key={i}>
                                <td><span className="bold">{t.title}</span></td>
                                <td><span className="badge-type">{t.type}</span></td>
                                <td>{t.group}</td>
                                <td>{t.context}</td>
                                <td>
                                    <button className="edit-icon">✎</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            <style jsx global>{`
        .settings-portal { display: flex; flex-direction: column; }
        
        .filter-group { display: flex; flex-direction: column; gap: 0.25rem; flex: 1; }
        .filter-group label { font-size: 0.7rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; }
        .filter-group input, .filter-group select { padding: 0.5rem; font-size: 0.85rem; }

        .badge-type {
          font-family: monospace;
          background: #EDF2F7;
          padding: 0.2rem 0.4rem;
          border-radius: 4px;
          font-size: 0.75rem;
          color: #4A5568;
        }

        @media (max-width: 800px) {
          .filter-bar { flex-direction: column; align-items: stretch; }
        }
      `}</style>
        </div>
    );
}
