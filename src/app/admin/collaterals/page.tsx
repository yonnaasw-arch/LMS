"use client";

import React from 'react';

export default function CollateralsPlaceholder() {
    const colls = [
        { id: 'COL-501', owner: 'Sarah Smith', type: 'Residential Property', value: '€250,000.00', status: 'Registered' },
    ];

    return (
        <div className="placeholder-page">
            <header className="page-header">
                <h1>Collaterals</h1>
                <div className="breadcrumb">Admin » Collaterals</div>
            </header>

            <section className="card table-card" style={{ marginTop: '1.5rem' }}>
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Owner</th>
                            <th>Type</th>
                            <th>Valuation</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {colls.map(c => (
                            <tr key={c.id}>
                                <td><span className="bold">{c.id}</span></td>
                                <td>{c.owner}</td>
                                <td>{c.type}</td>
                                <td><span className="bold">{c.value}</span></td>
                                <td><span className="badge success">{c.status}</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}
