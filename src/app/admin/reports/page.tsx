"use client";

import React from 'react';

export default function ReportsPlaceholder() {
    const reports = [
        { title: 'Portfolio Health Summary', lastRun: 'Jan 05, 2026', format: 'PDF' },
        { title: 'Delinquency Report', lastRun: 'Jan 04, 2026', format: 'Excel' },
        { title: 'Monthly Issuance TX', lastRun: 'Jan 01, 2026', format: 'CSV' },
    ];

    return (
        <div className="placeholder-page">
            <header className="page-header">
                <h1>Reports</h1>
                <div className="breadcrumb">Admin » Reports</div>
            </header>

            <section className="dashboard-grid" style={{ marginTop: '1.5rem' }}>
                <div className="metric-cards-container" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
                    {reports.map((r, i) => (
                        <div key={i} className="card report-card flex justify-between items-center">
                            <div>
                                <h3 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>{r.title}</h3>
                                <p style={{ fontSize: '0.8rem' }}>Last Run: {r.lastRun}</p>
                            </div>
                            <button className="btn-secondary small">Download {r.format}</button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
